<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "aman@2002";
$db = "demo";

$conn = mysqli_connect($servername, $username, $password, $db);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if (!empty($_POST['select'])) {
    $delete_ids = $_POST['select'];
   
    
    $ids_to_delete = implode(',', array_map('intval', $delete_ids));
   

    $q = "DELETE FROM mail WHERE id IN ($ids_to_delete)";
    
    
    if (mysqli_query($conn, $q)) {
        header('Location: inbox.php?message=deleted_successfully');
        exit();
    } else {
        echo "Error deleting records: " . mysqli_error($conn);
    }
} else {
    echo "No records selected for deletion.";
}

mysqli_close($conn);
?>
