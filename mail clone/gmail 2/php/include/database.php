<?php
$servername="localhost";
$username="root";
$password="aman@2002";
$db="gmail";



$conn = mysqli_connect($servername, $username, $password,$db);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

?>
