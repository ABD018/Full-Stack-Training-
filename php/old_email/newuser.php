<?php
$servername = "localhost";
$username = "root";
$password = "aman@2002";
$dbname = "demo"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['t1'];
    $password = $_POST['p1'];
    $hint = $_POST['s1'];
    $hint_answer = $_POST['p2'];
    if (!empty($id) && !empty($password) && !empty($hint) && !empty($hint_answer)) {
        $sql = "INSERT INTO users (id, password, hint, hint_answer) VALUES ('$id', '$password', '$hint', '$hint_answer')";

        if ($conn->query($sql) === TRUE) {
            header("Location: valid.html");
            exit();
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        header("Location: invalid.html");
        exit();
    }
}

$conn->close();
?>
