<?php
session_start();

require '../php/func/function.php';

header('Content-Type: application/json');

// Get the current user's email from the session
$user = $_SESSION['userid'];

// Call the sentdata() function from function.php
$emails = sentdata($user);

// Return the results as a JSON object
echo json_encode($emails);
?>
