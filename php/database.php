<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    print("<h2 align = 'center'><font face = 'comic sans ms' color = 'red'><u>Connecting with database</u></h2><br>");
    $servername = "localhost";
    $username = "root";
    $password = "aman@2002";
    $dbname = "demo";
    $conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error)
    {
        die("Connection failed". $conn->connect_error);
    }
echo "connection successfully";
    $query = "select * from customer";
    $result = $conn->query($query);
    print("<table border = 1 cellspacing = 5>");
    print("<th><font face = 'comic sans ms' color = 'red'>Id</th>");
    print("<th><font face = 'comic sans ms' color = 'red'>Name</th>");
    print("<th><font face = 'comic sans ms' color = 'red'>Age</th>");
    if($result->num_rows > 0)
    {
        while($row = $result->fetch_assoc())
        {
            echo "<td>" . $row["id"]. "</td><td>". $row["name"]. "</td><td> " . $row["age"] . "</td><tr>";
        }
        echo "</table>";
    }
     else
     {
        echo "0 result";
     }
     $conn->close();
    ?>
</body>
</html>