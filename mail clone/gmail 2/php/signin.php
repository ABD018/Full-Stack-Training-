<?php
session_start();

require '../php/func/function.php';

header('Content-Type: application/json');

$response = array();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $password = $_POST['password'] ?? '';

    if (!empty($email) && !empty($password)) {
        $validationResult = validateUser($email, $password);
        if ($validationResult === true) {
            // Regenerate session ID to prevent session fixation attacks
            session_regenerate_id(true);
            $_SESSION['userid'] = $email;  // Set the session variable after validation

            $response['success'] = true;
            $response['message'] = 'Sign-in successful.';
            $response['redirect'] = 'main.html'; // Redirect to main.html
        } else {
            $response['success'] = false;
            $response['message'] = $validationResult; // Error message from validation
        }
    } else {
        $response['success'] = false;
        $response['message'] = 'Both email and password are required.';
    }
} else {
    $response['success'] = false;
    $response['message'] = 'Invalid request method.';
}

echo json_encode($response);
?>
