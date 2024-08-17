<?php	
	print("<h2 align='center'><font face='comic sans ms' color='red'><u>Using Server Side Validation</u></h2><br>");
	$errors=array();
	if(empty($_GET['t1']))
	{
	$errors[]="You did not enter your name";
	}
	else
	{
	print("Your name is : ".$_GET['t1']."<br>");
	}
	if(is_array($_GET['cb']))
	{
	//$hobbies=join(",",$_GET['cb']);
	$ncount=count($_GET['cb']);
	print("Your Hobbies are <br>");
	for($i=0;$i<$ncount;$i++)
	{
	print($_GET['cb'][$i]."<br>");
	}
	}
	else
	{
	$errors[]="Plz select your hobby";
	}
	if(!isset($_GET['sex']))
	{
	$errors[]="Plz select your gender";
	}
	else
	{
	print("You are : ".$_GET['sex']."<br>");
	}
	if(!isset($_GET['s1']))
	{
	$errors[]="Plz select your country";
	}
	else
	{
	print("Your country name is : ".$_GET['s1']."<br>");
	}
	print("Following errors occured plz correct them <br>");
	for($i=0;$i<count($errors);$i++)
	{
	print($errors[$i]."<br>");
	}
	?>