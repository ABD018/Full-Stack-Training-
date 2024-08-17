<?php
session_start();

require '../php/func/function.php';


header('Content-Type: application/json');

// Get the IDs from the POST request
$ids = $_POST['ids'] ?? [];

// Check if IDs are provided
if (empty($ids) || !is_array($ids)) {
    echo json_encode(['error' => 'No valid IDs provided.']);
    exit();
}

// Call the function to delete emails with the provided IDs
$success = deletemail($ids);

if ($success) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['error' => 'Failed to delete emails.']);
}
?>
