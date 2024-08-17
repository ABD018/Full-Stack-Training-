<?php
session_start();
header('Content-Type: application/json');

$response = array('userid' => isset($_SESSION['userid']) ? $_SESSION['userid'] : 'no user');
echo json_encode($response);
?>
