<?php

require '../php/func/function.php';

header('Content-Type: application/json');

$response = array();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'] ?? '';
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';
    $securityQuestion = $_POST['ques'] ?? '';
    $securityAnswer = $_POST['ans'] ?? '';

    if (!empty($username) && !empty($email) && !empty($password) && !empty($securityQuestion) && !empty($securityAnswer)) {
        // Call the function to create the user
        if (createUser($username, $email, $password, $securityQuestion, $securityAnswer)) {
            $response['success'] = true;
            $response['message'] = 'Account created successfully.';
        } else {
            $response['success'] = false;
            $response['message'] = 'Email already exists.';
        }
    } else {
        $response['success'] = false;
        $response['message'] = 'All fields are required.';
    }
} else {
    $response['success'] = false;
    $response['message'] = 'Invalid request method.';
}

echo json_encode($response);

function emailExists($email) {
    global $conn;
    $stmt = $conn->prepare('SELECT id FROM users WHERE email = ?');
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $stmt->store_result();
    $result = $stmt->num_rows > 0;
    $stmt->close();
    return $result;
}
?>
