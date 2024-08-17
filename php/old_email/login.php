<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "aman@2002";
$dbname = "demo";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = mysqli_real_escape_string($conn, $_POST['t1']);
    $password = mysqli_real_escape_string($conn, $_POST['p1']);
    $_SESSION['name'] = $id;

    if (!empty($id) && !empty($password)) {
        $sql = "SELECT * FROM users WHERE id='$id' AND password='$password'";
        $result = $conn->query($sql);

        if ($result->num_rows == 1) {
            header("Location: valid.html");
            exit();
        } else {
            header("Location: invalid.html");
            exit();
        }
    } else {
        header("Location: invalid.html");
        exit();
    }
}

$conn->close();
?>
