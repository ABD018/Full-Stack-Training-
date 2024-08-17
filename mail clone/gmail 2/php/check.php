<?php
session_start();
header('Content-Type: application/json');

$response = array('loggedIn' => false);

if (isset($_SESSION['userid'])) {
    $response['loggedIn'] = true;
}

echo json_encode($response);
?>
