<?php

// Copy this file to mail-config.php and enter your own data.
// mail-config.php is listed in .gitignore and never lands on GitHub.
// sender: an address on your own domain (set up at your hoster), never Gmail & co.
// recipient: where you want to read the messages, e.g. your Gmail address.

return [
    'sender' => 'contact@your-domain.de',
    'recipient' => 'your.name@gmail.com',
    'allowedOrigins' => [
        'https://your-domain.de',
        'https://www.your-domain.de',
        'http://localhost:4200',
    ],
];
