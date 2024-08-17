<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
	require("math.php");
	//include("math1.php");
	//include_once("math.php");
	echo("<h2 align='center'><font face='comic sans ms' color='red'><u>Using Library</u></h2>");
	$a=10;$b=34;
	echo "The Sum of 6 & 5 is ",add(6,5),"<br>";
	print("The Sub of 6 & 5 is ".sub(6,5)."<br>");
	print("The Multi of 6 & 5 is ".multi(6,5)."<br>");
	print("The Div of 6 & 5 is ".div(6,5)."<br>");
	echo("$a");
	?>
</body>
</html>