<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    print("<h2 align = 'center'><font color='red' face='comic sans ms'><u>Using arrays....</u></h2><br>");
    $arr = array();
    print("<h2>Length is ".count($arr)."<br>");
    $arr[0] = "jam";
    $arr[] = "jam";
    print("Length is ".count($arr)."<br>");
    $arr1 = array();
    print("Length is ".count($arr1)."<br>");
    $arr1[0]="Sam";
	print("Length is ".count($arr1)."<br>");
	$arr1[1]="Bob";
	print("Length is ".count($arr1)."<br>");
	$arr1[2]="Sofia";
	print("Length is ".count($arr1)."<br>");
	$arr1[3]="Sonu";
	print("Length is ".count($arr1)."<br>");
    for($i = 0; $i<4; $i++)
    {
        print("the value of ".$i." index is ".$arr1[$i]."<br>");
    }
    for($i=0;$i<count($arr1);$i++)
	{
	print("The value of ".$i." index is ".$arr1[$i]."<br>");
	}
    print("Second array ....... <br>");
    $arr2 = array("sam","bob","richard");
    for($i=0;$i<count($arr2);$i++)
	{
	print("The value of ".$i." index is ".$arr2[$i]."<br>");
	}
    print("Length is ".count($arr2)."<br>");
    print("third array ..... <br>");
    $arr3 = array();
    print("Length is ".count($arr3)."<br>");
    $arr3[0][0] = "Mohna";
    $arr3[0][1] = "Sohna";
    $arr3[0][2] = "sonu";
    $arr3[0][3]="Babli";
	$arr3[1][0]="Chuhan";
	$arr3[1][1]="Gautam";
	$arr3[1][2]="Ganesh";
	$arr3[1][3]="Kapoor";
    print("Length is ".count($arr3)."<br>");
	for($i=0;$i<count($arr3);$i++)
	{
	for($j=0;$j<4;$j++)
	{
	print("The value of ".$i." row and ".$j." column is ".$arr3[$i][$j]."<br>");
	}
	}
	//$arr=array(("mohan","sohan"),("monu","sono")); Wrong....
	$arr=array();
	$arr[0]=array("mohan","sohan");
	$arr[1]=array("sonu","monu");
	print("Length is ".count($arr)."<br>");
	for($i=0;$i<count($arr);$i++)
	{	
	for($j=0;$j<2;$j++)
	{
	print("The value of ".$i." row and ".$j." column is ".$arr[$i][$j]."<br>");
	}
	}
	print("Jagged Array--------------<br>");
	$arr4=array();
	print("Length is ".count($arr4)."<br>");
	$arr4[0][0]="Mohna";
	$arr4[0][1]="Sohna";
	$arr4[1][0]="Sonu";
	$arr4[2][0]="Babli";
	$arr4[2][1]="Chuhan";
	$arr4[2][2]="Gautam";
	$arr4[2][3]="Ganesh";
	$arr4[2][4]="Kapoor";
	print("Length is ".count($arr4)."<br>");
	for($i=0;$i<count($arr4);$i++)
	{
	for($j=0;$j<count($arr4[$i]);$j++)
	{
	print("The value of ".$i." row and ".$j." column is ".$arr4[$i][$j]."<br>");
	}
	}
	$arr=array();
	$arr[0]=array("mohan");
	$arr[1]=array(true,23);
    ?>
</body>
</html>