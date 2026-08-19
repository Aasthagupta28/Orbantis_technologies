<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$configPath = __DIR__ . '/mail-config.php';
if (!is_file($configPath)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail is not configured on the server yet.']);
    exit;
}

$config = require $configPath;
if (
    empty($config['smtp_pass']) ||
    $config['smtp_pass'] === 'REPLACE_WITH_SUPPORT_MAILBOX_PASSWORD'
) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail is not configured on the server yet.']);
    exit;
}

$raw = file_get_contents('php://input') ?: '';
$payload = json_decode($raw, true);
if (!is_array($payload)) {
    $payload = $_POST;
}

$name = trim((string) ($payload['name'] ?? ''));
$email = trim((string) ($payload['email'] ?? ''));
$message = trim((string) ($payload['message'] ?? ''));
$honeypot = trim((string) ($payload['website'] ?? ''));

if ($honeypot !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Please fill in your name, email, and message.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Please enter a valid email address.']);
    exit;
}

if (preg_match('/[\r\n]/', $name . $email)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid input.']);
    exit;
}

if (strlen($name) > 120 || strlen($email) > 180 || strlen($message) > 5000) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Your message is too long.']);
    exit;
}

$ip = $_SERVER['HTTP_CF_CONNECTING_IP']
    ?? $_SERVER['HTTP_X_FORWARDED_FOR']
    ?? $_SERVER['REMOTE_ADDR']
    ?? 'unknown';
$ip = trim(explode(',', (string) $ip)[0]);
$rateFile = sys_get_temp_dir() . '/orbantis-contact-' . hash('sha256', $ip);
$hits = 0;
if (is_file($rateFile) && (time() - filemtime($rateFile)) < 3600) {
    $hits = (int) file_get_contents($rateFile);
    if ($hits >= 8) {
        http_response_code(429);
        echo json_encode(['ok' => false, 'error' => 'Too many messages. Please try again later.']);
        exit;
    }
}
file_put_contents($rateFile, (string) ($hits + 1));

require __DIR__ . '/smtp.php';

$safeName = htmlspecialchars($name, ENT_QUOTES | ENT_HTML5, 'UTF-8');
$safeEmail = htmlspecialchars($email, ENT_QUOTES | ENT_HTML5, 'UTF-8');
$safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES | ENT_HTML5, 'UTF-8'));
$plainMessage = $message;

function email_layout(string $title, string $body): string
{
    return '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>' . $title . '</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;">
          <tr>
            <td style="background:#0066cc;padding:28px 32px;">
              <p style="margin:0;color:#ffffff;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Orbantis Technologies</p>
              <h1 style="margin:8px 0 0;color:#ffffff;font-size:24px;line-height:1.3;">' . $title . '</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">' . $body . '</td>
          </tr>
          <tr>
            <td style="padding:20px 32px 28px;border-top:1px solid #e2e8f0;background:#f8fafc;">
              <p style="margin:0 0 6px;color:#0c4a6e;font-size:14px;font-weight:bold;">Orbantis Technologies</p>
              <p style="margin:0;color:#64748b;font-size:13px;line-height:1.6;">
                Web, Mobile &amp; AI Development<br />
                <a href="mailto:support@orbantistechnologies.com" style="color:#0066cc;text-decoration:none;">support@orbantistechnologies.com</a>
                &nbsp;·&nbsp;
                <a href="https://orbantistechnologies.com" style="color:#0066cc;text-decoration:none;">orbantistechnologies.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>';
}

$cc = [
    'arun@orbantistechnologies.com',
];
$toTeam = $config['to_email'] ?? 'support@orbantistechnologies.com';

$teamSubject = "New contact form message from {$name}";
$teamText = "New enquiry from the Orbantis website.\n\n"
    . "Name: {$name}\n"
    . "Email: {$email}\n\n"
    . "Message:\n{$plainMessage}\n";
$teamHtml = email_layout('New website enquiry', '
      <p style="margin:0 0 20px;color:#334155;font-size:16px;line-height:1.6;">
        A new message was submitted from the Orbantis contact form.
      </p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;">
        <tr>
          <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;">
            <p style="margin:0 0 4px;color:#64748b;font-size:12px;text-transform:uppercase;">Name</p>
            <p style="margin:0;color:#0c4a6e;font-size:16px;font-weight:bold;">' . $safeName . '</p>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;">
            <p style="margin:0 0 4px;color:#64748b;font-size:12px;text-transform:uppercase;">Email</p>
            <p style="margin:0;"><a href="mailto:' . $safeEmail . '" style="color:#0066cc;font-size:16px;text-decoration:none;">' . $safeEmail . '</a></p>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 20px;">
            <p style="margin:0 0 8px;color:#64748b;font-size:12px;text-transform:uppercase;">Message</p>
            <p style="margin:0;color:#334155;font-size:15px;line-height:1.7;">' . $safeMessage . '</p>
          </td>
        </tr>
      </table>
      <p style="margin:24px 0 0;color:#64748b;font-size:13px;">Reply to this email to respond directly to the sender.</p>
    ');

$visitorSubject = 'We received your message | Orbantis Technologies';
$visitorText = "Hi {$name},\n\n"
    . "Thank you for contacting Orbantis Technologies. We have received your message and will reply within 24 hours.\n\n"
    . "Your message:\n{$plainMessage}\n\n"
    . "— Orbantis Technologies\n"
    . "support@orbantistechnologies.com\n";
$visitorHtml = email_layout('We received your message', '
      <p style="margin:0 0 16px;color:#334155;font-size:16px;line-height:1.6;">Hi ' . $safeName . ',</p>
      <p style="margin:0 0 24px;color:#334155;font-size:16px;line-height:1.6;">
        Thank you for contacting <strong>Orbantis Technologies</strong>. We have received your message and will get back to you within 24 hours.
      </p>
      <p style="margin:0 0 8px;color:#64748b;font-size:12px;text-transform:uppercase;">Your message</p>
      <div style="background:#f8fafc;border-left:4px solid #0066cc;border-radius:8px;padding:16px 18px;color:#334155;font-size:15px;line-height:1.7;">
        ' . $safeMessage . '
      </div>
      <p style="margin:28px 0 0;">
        <a href="https://orbantistechnologies.com" style="display:inline-block;background:#0066cc;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:999px;font-size:14px;font-weight:bold;">Visit our website</a>
      </p>
    ');

try {
    smtp_send($config, [
        'to' => $toTeam,
        'cc' => $cc,
        'data' => build_message($config, $toTeam, $cc, $teamSubject, $teamHtml, $teamText, $email),
    ]);

    smtp_send($config, [
        'to' => $email,
        'cc' => $cc,
        'data' => build_message($config, $email, $cc, $visitorSubject, $visitorHtml, $visitorText),
    ]);
} catch (Throwable $e) {
    error_log('Contact form mail failed: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Could not send your message. Please try again or email us directly.']);
    exit;
}

echo json_encode(['ok' => true]);
