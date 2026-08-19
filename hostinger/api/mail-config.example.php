<?php
/**
 * Copy this file to mail-config.php on the Hostinger server and fill in the
 * mailbox password. mail-config.php is gitignored so the password is not committed.
 *
 * Create these mailboxes (or aliases) in Hostinger Emails:
 * - support@orbantistechnologies.com  (SMTP login / From address)
 * - arun@orbantistechnologies.com     (receives CC)
 */
return [
    'smtp_host' => 'smtp.hostinger.com',
    'smtp_port' => 465,
    'smtp_user' => 'support@orbantistechnologies.com',
    'smtp_pass' => 'REPLACE_WITH_SUPPORT_MAILBOX_PASSWORD',

    'from_email' => 'support@orbantistechnologies.com',
    'from_name'  => 'Orbantis Technologies',

    'to_email' => 'support@orbantistechnologies.com',
    'cc' => [
        'arun@orbantistechnologies.com',
    ],
];
