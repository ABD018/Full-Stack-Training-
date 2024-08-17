<?php
session_start();

header('Content-Type: application/json');

if (!isset($_SESSION['userid'])) {
    echo json_encode(['error' => 'User not logged in']);
    exit();
}

require '../php/func/function.php';

$user = $_SESSION['userid'];
$emails = inbox($user);

echo json_encode($emails);
?>
