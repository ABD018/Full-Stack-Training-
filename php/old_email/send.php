<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "aman@2002";
$dbname = "demo";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) 
{
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    $receiver = mysqli_real_escape_string($conn, $_POST['receiver']);
    $subject = mysqli_real_escape_string($conn, $_POST['subject']);
    $message = mysqli_real_escape_string($conn, $_POST['message']);
    $sender = $_SESSION['name'];

    $sql = "INSERT INTO mail (receiver, sender, subject, message) VALUES ('$receiver', '$sender', '$subject', '$message')";

    if (mysqli_query($conn, $sql)) {
        header('Location: inbox.php?message=sent_successfully');
        exit();
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}

mysqli_close($conn);
?>
