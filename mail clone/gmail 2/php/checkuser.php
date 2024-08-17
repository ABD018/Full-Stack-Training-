<?php
session_start();
require './include/database.php';

header('Content-Type: application/json');

$response = array();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'] ?? '';

    if (!empty($email)) {
        $stmt = $conn->prepare('SELECT id, ques FROM users WHERE email = ?');
        $stmt->bind_param('s', $email);
        $stmt->execute();
        $stmt->bind_result($userId, $hintQuestion);
        $stmt->fetch();
        $stmt->close();

        if ($hintQuestion) {
            $_SESSION['userid'] = $userId; // Store user ID in session
            $response['success'] = true;
            $response['hintQuestion'] = $hintQuestion;
        } else {
            $response['success'] = false;
            $response['message'] = 'Username does not exist.';
        }
    } else {
        $response['success'] = false;
        $response['message'] = 'Username is required.';
    }
} else {
    $response['success'] = false;
    $response['message'] = 'Invalid request method.';
}

echo json_encode($response);
?>
