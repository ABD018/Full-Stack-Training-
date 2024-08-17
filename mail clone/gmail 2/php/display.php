<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['userid'])) {
    echo json_encode(['error' => 'User not logged in']);
    exit();
}

require '../php/func/function.php';

$emailId = $_POST['id'] ?? '';

if (empty($emailId)) {
    echo json_encode(['error' => 'No email ID provided.']);
    exit();
}

$data = fetchEmailDataById($emailId);

if ($data === false) {
    echo json_encode(['error' => 'Failed to fetch data.']);
    exit();
}

echo json_encode($data);
?>
