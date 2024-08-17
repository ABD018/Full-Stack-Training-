<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "aman@2002";
$dbname = "demo";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $current_password = mysqli_real_escape_string($conn, $_POST['current_password']);
    $new_password = mysqli_real_escape_string($conn, $_POST['new_password']);
    $confirm_password = mysqli_real_escape_string($conn, $_POST['confirm_password']);
    $user_id = $_SESSION['user_id'];

    if ($new_password !== $confirm_password) {
        echo "New passwords do not match.";
        exit();
    }

    $sql = "SELECT * FROM users WHERE id='$user_id' AND password='$current_password'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) == 1) {
        $update_sql = "UPDATE users SET password='$new_password' WHERE id='$user_id'";
        if (mysqli_query($conn, $update_sql)) {
            header('Location: inbox.php?message=password_changed');
            exit();
        } else {
            echo "Error updating password: " . mysqli_error($conn);
        }
    } else {
        echo "Current password is incorrect.";
    }
}

mysqli_close($conn);
?>
