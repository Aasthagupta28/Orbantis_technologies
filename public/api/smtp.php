<?php

function smtp_read($socket): string
{
    $data = '';
    while ($line = fgets($socket, 515)) {
        $data .= $line;
        if (isset($line[3]) && $line[3] === ' ') {
            break;
        }
    }
    return $data;
}

function smtp_cmd($socket, string $command, string $expect): void
{
    fwrite($socket, $command . "\r\n");
    $response = smtp_read($socket);
    if (strpos($response, $expect) !== 0) {
        throw new RuntimeException('SMTP error: ' . trim($response));
    }
}

function smtp_send(array $config, array $mail): void
{
    $host = $config['smtp_host'];
    $port = (int) $config['smtp_port'];
    $socket = @stream_socket_client(
        "ssl://{$host}:{$port}",
        $errno,
        $errstr,
        20,
        STREAM_CLIENT_CONNECT
    );

    if (!$socket) {
        throw new RuntimeException("Could not connect to mail server ({$errno}): {$errstr}");
    }

    stream_set_timeout($socket, 20);
    smtp_read($socket);

    $ehlo = preg_replace('/^www\./', '', $_SERVER['SERVER_NAME'] ?? 'orbantistechnologies.com');
    smtp_cmd($socket, 'EHLO ' . $ehlo, '250');
    smtp_cmd($socket, 'AUTH LOGIN', '334');
    smtp_cmd($socket, base64_encode($config['smtp_user']), '334');
    smtp_cmd($socket, base64_encode($config['smtp_pass']), '235');
    smtp_cmd($socket, 'MAIL FROM:<' . $config['from_email'] . '>', '250');

    $recipients = array_unique(array_filter(array_merge(
        [$mail['to']],
        $mail['cc'] ?? []
    )));

    foreach ($recipients as $recipient) {
        smtp_cmd($socket, 'RCPT TO:<' . $recipient . '>', '250');
    }

    smtp_cmd($socket, 'DATA', '354');
    fwrite($socket, $mail['data'] . "\r\n.\r\n");
    $dataResponse = smtp_read($socket);
    if (strpos($dataResponse, '250') !== 0) {
        throw new RuntimeException('SMTP DATA error: ' . trim($dataResponse));
    }

    fwrite($socket, "QUIT\r\n");
    fclose($socket);
}

function build_message(array $config, string $to, array $cc, string $subject, string $html, string $text, ?string $replyTo = null): string
{
    $boundary = 'bnd_' . bin2hex(random_bytes(8));
    $from = $config['from_name'] . ' <' . $config['from_email'] . '>';
    $date = date('r');
    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

    $headers = [
        'Date: ' . $date,
        'From: ' . $from,
        'To: ' . $to,
        'Subject: ' . $encodedSubject,
        'MIME-Version: 1.0',
        'Content-Type: multipart/alternative; boundary="' . $boundary . '"',
        'X-Mailer: Orbantis Contact Form',
    ];

    if ($cc) {
        $headers[] = 'Cc: ' . implode(', ', $cc);
    }
    if ($replyTo) {
        $headers[] = 'Reply-To: ' . $replyTo;
    }

    $body = '--' . $boundary . "\r\n"
        . "Content-Type: text/plain; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($text))
        . '--' . $boundary . "\r\n"
        . "Content-Type: text/html; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($html))
        . '--' . $boundary . "--\r\n";

    return implode("\r\n", $headers) . "\r\n\r\n" . $body;
}
