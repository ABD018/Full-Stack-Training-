<?php
session_start();

require '../php/func/function.php';

header('Content-Type: application/json');

// Get the email ID from the POST request
$emailId = $_POST['id'] ?? '';

// Ensure the email ID is provided
if (empty($emailId)) {
    echo json_encode(['error' => 'No email ID provided.']);
    exit();
}

// Call the function to fetch the specific email data
$data = sentdisplayemail($emailId);

// Ensure the data is fetched correctly
if ($data === false) {
    echo json_encode(['error' => 'Failed to fetch data.']);
    exit();
}

// Check if any data was returned
if (empty($data)) {
    echo json_encode(['error' => 'No data found for the given email ID.']);
    exit();
}

// Output the data as JSON
echo json_encode($data);
?>
