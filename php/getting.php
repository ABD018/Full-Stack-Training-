<?php
	//For  get 
	$fname=$_GET["t1"];
	$lname=$_GET["t2"];
	//For  post 
	//$fname=$_POST["t1"];
	//$lname=$_POST["t2"];
	//Common for both get and post

	//$fname=$_REQUEST["t1"];
	//$lname=$_REQUEST["t2"];
	print("<font face='comic sans ms' color='red'>Your first name is : ".$fname."<br>");
	print("<font face='comic sans ms' color='red'>Your last name is : ".$lname."<br>");
	?>