<?php
	error_reporting(0);
	print("<h2 align='center'><font face='comic sans ms' color='red'><u>File Handling</u></h2><br>");
	$filename="aha.txt";
	$content="";
	$fp=fopen($filename,"r");
	if(!$fp)
	{
	echo "File not exist";
	}
	else
	{
	$content=fread($fp,filesize($filename));
	//$content=fread($fp,128);
	}
	echo($content);
	fclose($fp);
	$filename="aha.txt";
	$data=" This is my text ";
	$fp=fopen($filename,"a");
	fwrite($fp,$data);
	fclose($fp);
	?>