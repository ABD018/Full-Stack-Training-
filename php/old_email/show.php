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

if (isset($_GET['val'])) {
    $id = intval($_GET['val']);
    
    $sql = "SELECT subject, sender, receiver, message FROM mail WHERE id = $id";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $subject = $row['subject'];
        $sender = $row['sender'];
        $receiver = $row['receiver'];
        $message = nl2br($row['message']); // Convert newlines to <br>
    } else {
        echo "No message found with ID: $id";
        exit();
    }
} else {
    echo "No ID provided.";
    exit();
}

mysqli_close($conn);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show Message</title>
</head>
<body>
    <h1>Message Details</h1>
    <p><strong>Subject:</strong> <?php echo htmlspecialchars($subject); ?></p>
    <p><strong>Sender:</strong> <?php echo htmlspecialchars($sender); ?></p>
    <p><strong>Receiver:</strong> <?php echo htmlspecialchars($receiver); ?></p>
    <p><strong>Message:</strong></p>
    <p><?php echo $message; ?></p>
</body>
</html>
