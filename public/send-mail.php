<?php

declare(strict_types=1);

const MAX_NAME_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 5000;

$config = require __DIR__ . '/mail-config.php';

sendCorsHeaders($config['allowedOrigins']);
header('Content-Type: application/json; charset=utf-8');

match ($_SERVER['REQUEST_METHOD']) {
    'OPTIONS' => respond(204),
    'POST' => handlePost($config['recipient']),
    default => respond(405, ['success' => false, 'error' => 'Method not allowed']),
};

function sendCorsHeaders(array $allowedOrigins): void
{
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

    if (!in_array($origin, $allowedOrigins, true)) {
        return;
    }

    header("Access-Control-Allow-Origin: $origin");
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Vary: Origin');
}

function handlePost(string $recipient): void
{
    $params = json_decode((string) file_get_contents('php://input'));

    if (!is_object($params)) {
        respond(400, ['success' => false, 'error' => 'Invalid JSON']);
    }

    if (getField($params, 'website') !== '') {
        respond(200, ['success' => true]);
    }

    $contact = [
        'name' => getField($params, 'name'),
        'email' => getField($params, 'email'),
        'message' => getField($params, 'message'),
    ];

    if (!isValid($contact)) {
        respond(400, ['success' => false, 'error' => 'Invalid input data']);
    }

    if (!sendMail($recipient, $contact)) {
        respond(500, ['success' => false, 'error' => 'Mail delivery failed']);
    }

    respond(200, ['success' => true]);
}

function getField(object $params, string $key): string
{
    $value = $params->$key ?? '';

    return is_string($value) ? trim($value) : '';
}

function isValid(array $contact): bool
{
    return filter_var($contact['email'], FILTER_VALIDATE_EMAIL) !== false
        && $contact['name'] !== ''
        && $contact['message'] !== ''
        && mb_strlen($contact['name']) <= MAX_NAME_LENGTH
        && mb_strlen($contact['message']) <= MAX_MESSAGE_LENGTH;
}

function sendMail(string $recipient, array $contact): bool
{
    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=utf-8',
        "From: Portfolio Contact <$recipient>",
        "Reply-To: {$contact['email']}",
    ];

    return mail(
        $recipient,
        'New message from your portfolio',
        buildMailBody($contact),
        implode("\r\n", $headers),
        "-f $recipient",
    );
}

function buildMailBody(array $contact): string
{
    $name = htmlspecialchars($contact['name'], ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars($contact['email'], ENT_QUOTES, 'UTF-8');
    $message = nl2br(htmlspecialchars($contact['message'], ENT_QUOTES, 'UTF-8'));

    return "<strong>Name:</strong> $name<br>"
        . "<strong>Email:</strong> $email<br><br>"
        . "<strong>Message:</strong><br>$message";
}

function respond(int $status, array $body = []): void
{
    http_response_code($status);

    if ($body !== []) {
        echo json_encode($body);
    }

    exit;
}
