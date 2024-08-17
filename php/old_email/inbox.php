<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php 
    session_start();
    $db_connect = mysqli_connect("localhost", "root", "aman@2002");
    mysqli_select_db($db_connect, "demo");
    $query = "SELECT * FROM mail WHERE receiver = '".$_SESSION['name']."'";
    $result = mysqli_query($db_connect, $query);
    ?>
</head>
<body bgColor="black" topmargin=0 leftmargin=0 link="cyan" vlink="yellow">
    <center><img src="banner.jpg" alt=""></center>
    <?php
    print("<center><table width='50%' border='1'>");
    print("<form method='POST' action='delete.php'>");
    print("<td><input type='submit' value='Delete'></td>");
    print("<td><font face='comic sans ms' color='white'>Receiver</td>");
    print("<td><font face='comic sans ms' color='white'>Sender</td>");
    print("<td><font face='comic sans ms' color='white'>Subject</td>");
    $idd = 0;
    $i = 0;
    while($row = mysqli_fetch_object($result)) {
        $idd = $row->id;
        $i = $i + 1;
        print("<tr><td><input type='checkbox' name='select[]' value=" . $idd . "></td>");
        print("<td><font face='comic sans ms' color='lime'>");
        print($row->receiver);
        print("</td>");
        print("<td><font face='comic sans ms' color='lime'>");
        print($row->sender);
        print("</td>");
        print("<td><font face='comic sans ms' color='lime'>");
        print("<a href='show.php?val=" . $idd . "'>" . $row->subject . "</a>");
        print("</td></tr>");
    }
    print("<td><input type='hidden' name='h1' value=" . $i . "></td>");
    print("</form>");
    print("</table></center>");
    ?>
</body>
</html>
