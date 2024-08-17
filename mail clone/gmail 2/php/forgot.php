<?php
session_start();

require '../php/func/function.php';
header('Content-Type: application/json');

$response = array();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'] ?? '';
    $answer = $_POST['answer'] ?? '';

    if (!empty($email)) {
        // Check if email exists and get hint question
        $stmt = $conn->prepare('SELECT id, ques FROM users WHERE email = ?');
        $stmt->bind_param('s', $email);
        $stmt->execute();
        $stmt->bind_result($userId, $hintQuestion);
        $stmt->fetch();
        $stmt->close();

        if ($userId) {
            $_SESSION['userid'] = $userId;

            if (!empty($answer)) {
                // Verify answer and get password
                $result = forgotPassword($userId, $answer);
                if ($result['success']) {
                    $response['success'] = true;
                    $response['password'] = $result['password'];
                } else {
                    $response['success'] = false;
                    $response['message'] = $result['message'];
                }
            } else {
                // Return hint question if answer is not yet provided
                $response['success'] = true;
                $response['hintQuestion'] = $hintQuestion;
            }
        } else {
            $response['success'] = false;
            $response['message'] = 'Email does not exist.';
        }
    } else {
        $response['success'] = false;
        $response['message'] = 'Email is required.';
    }
} else {
    $response['success'] = false;
    $response['message'] = 'Invalid request method.';
}

echo json_encode($response);
?>
