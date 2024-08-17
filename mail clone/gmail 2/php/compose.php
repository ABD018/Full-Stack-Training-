<?php
session_start(); // Make sure session is started
// require 'database.php';
require '../php/func/function.php';
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$response = array();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $to = $_POST['to'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message = $_POST['message'] ?? '';
    $sender = $_SESSION['userid'] ?? ''; // Assuming user session is active

    if (!empty($to) && !empty($subject) && !empty($message)) {
        // Debugging output
        error_log("POST data: " . print_r($_POST, true));
        error_log("Session data: " . print_r($_SESSION, true));
        
        if (composeMail($to, $sender, $subject, $message)) {
            $response['success'] = true;
            $response['message'] = 'Message sent successfully.';
        } else {
            $response['success'] = false;
            $response['message'] = 'Failed to send message.';
        }
    } else {
        $response['success'] = false;
        $response['message'] = 'All fields are required.';
    }
} else {
    $response['success'] = false;
    $response['message'] = 'Invalid request method.';
}

header('Content-Type: application/json');
echo json_encode($response);
?>
