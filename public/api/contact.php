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

$cc = [
    'arun@orbantistechnologies.com',
    'arunkumarbhardwaj1999@gmail.com',
];
$toTeam = $config['to_email'] ?? 'support@orbantistechnologies.com';

$teamSubject = "New contact form message from {$name}";
$teamText = "New enquiry from the Orbantis website.\n\n"
    . "Name: {$name}\n"
    . "Email: {$email}\n\n"
    . "Message:\n{$plainMessage}\n";
$teamHtml = "<p>New enquiry from the Orbantis website.</p>"
    . "<p><strong>Name:</strong> {$safeName}<br>"
    . "<strong>Email:</strong> {$safeEmail}</p>"
    . "<p><strong>Message:</strong><br>{$safeMessage}</p>";

$visitorSubject = 'We received your message | Orbantis Technologies';
$visitorText = "Hi {$name},\n\n"
    . "Thank you for contacting Orbantis Technologies. We have received your message and will reply within 24 hours.\n\n"
    . "Your message:\n{$plainMessage}\n\n"
    . "— Orbantis Technologies\n"
    . "support@orbantistechnologies.com\n";
$visitorHtml = "<p>Hi {$safeName},</p>"
    . "<p>Thank you for contacting Orbantis Technologies. We have received your message and will reply within 24 hours.</p>"
    . "<p><strong>Your message:</strong><br>{$safeMessage}</p>"
    . "<p>— Orbantis Technologies<br>support@orbantistechnologies.com</p>";

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
