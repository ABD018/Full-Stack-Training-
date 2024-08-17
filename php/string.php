<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    print("<center><h2><font face='comic sans ms' color='red'><u>String Handling.........</u></center>");
	$name="JASMEET";
	print(strtolower($name)."<br>");
	$name="jasmeet";
	print(strtoupper($name)."<br>");
	$name="my name is jasmeet singh";
	print(ucfirst($name)."<br>");
	print(ucwords($name)."<br>");
	$name="                         Jasmeet";
	print("<pre>".$name."<br>");
	print(ltrim($name)."<br>");
	$name="            Jasmeet                      ";
	$name2="Singh";
	print($name.$name2."<br>");
	print(rtrim($name).$name2."<br>");
	print(trim($name).$name2."<br>");
	print(chop($name).$name2."</pre><br>");
	$arr=array("My","Name","Is","Jasmeet","Singh");
	$val=join("-",$arr);
	print($val."<br>");
 
$arr=array("My","Name","Is","Jasmeet","Singh");
	$val=implode(" ",$arr);
	print($val."<br>");
	$val="My name is Jasmeet singh";
	$arr=explode(" ",$val);
	for($i=0;$i<count($arr);$i++)
	{
	print($arr[$i]."<br>");
	}
	$val="My name is Jasmeet singh";
	$arr=explode("e",$val);
	for($i=0;$i<count($arr);$i++)
	{
	print($arr[$i]."<br>");
	}
 
	$val="SundayMonday";
	print(strlen($val)."<br>");
	print($val[0]."<br>");
	for($i=0;$i<strlen($val);$i++)
	{
	print($val[$i]);
	}
	print("<br>");
	print(strstr($val,"n")."<br>");
	print(strrchr($val,"n")."<br>");
	print(strpos($val,"n")."<br>");
	print(strpos($val,"n",4)."<br>");
	print(strrpos($val,"n")."<br>");
	print(strpos($val,"k")."<br>");
	print(strpos($val,"day")."<br>");
	if(!strpos($val,"k"))
	{
	print("Not found<br>");
	}
	else
	{
	print("found<br>");
	}
	$val="An apple a day keeps doctor away";
	print(substr($val,15)."<br>");
	print(substr($val,3,5)."<br>");
	$val="Jasmeet";
	$val2="jasmeet";
	print(strcmp($val,$val2)."<br>");
	print(strcmp($val2,$val)."<br>");
	$val="jasmeet";
	$val2="jasmeet";
	print(strcmp($val,$val2)."<br>");
	$val="Jasmeet";
	$val2="jasmeet";
	print(strcasecmp($val,$val2)."<br>");
    ?>
</body>
</html>