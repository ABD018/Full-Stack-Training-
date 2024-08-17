<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
	class fruitdemo
	{
	var $seasonal;
	var $seedless;
	var $price;
 
	/*function setProperties($season,$seed,$p)
	{
	$this->seasonal=$season;
	$this->seedless=$seed;
	$this->price=$p;
	}*/
 
	function __construct($season,$seed,$p)
	{
	$this->seasonal=$season;
	$this->seedless=$seed;
	$this->price=$p;
	}
 
	function printseasonal()
	{
	if($this->seasonal)
	{
	print("<h1>fruit is seasonal<br>");
	}
	else 
	{
	print("<h1>fruit is not seasonal<br>");
	}
	}
	function printseedless()
	{
	if($this->seedless)
	{
	print("<h1>food is seedless<br>");
	}
	else 
	{
	print("<h1>food is not seedless<br>");
	}
	}
	function printprice()
	{
	print("<h1>price is ".$this->price." Rs/kg<br>");
	}
	}
	//$f=new fruitdemo();
	$f=new fruitdemo(false,true,56.67);
	//$f->setProperties(true,true,96.67);
	$f->printseasonal();
	$f->printseedless();
	$f->printprice();
	?>
</body>
</html>