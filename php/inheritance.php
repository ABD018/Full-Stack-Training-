<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h2> <font face="comic sans ms" color="red">
<?php
	class Employee
	{
	var $name;
	var $sex;
	function __construct($n,$s)
	{
	$this->name=$n;
	$this->sex=$s;
	}
	function GetName()
	{
	return $this->name;
	}
	function GetSex()
	{
	return $this->sex;
	}
	}
	class Worker extends Employee
	{
	var $category;
	var $dressallowance;
	function __construct($n,$s,$c,$d)
	{
	parent::__construct($n,$s);
	$this->category=$c;
	$this->dressallowance=$d;
	}
	function GetCategory()
	{
	return $this->category;
	}
	function GetAll()
	{
	return $this->dressallowance;
	}
	}

 
	class Officer extends Employee
	{
	var $empclass;
	var $vehicle;
	function Officer($n,$s,$e,$v)
	{
	parent::__construct($n,$s);
	$this->empclass=$e;
	$this->vehicle=$v;
	}
	function GetEmpclass()
	{
	return $this->empclass;
	}
	function GetAll()
	{
	return $this->vehicle;
	}
	}
	print("Worker's property ----------------- : <br>");
	$w=new Worker("Deepak","male","Lower",false);
	print("Name : ".$w->GetName()."<br>");
	print("Sex : ".$w->GetSex()."<br>");
	print("Category : ".$w->GetCategory()."<br>");
	if($w->GetAll())
	{
	print("Dressallowance is paid<br>");
	}
	else
	{
	print("Dressallowance is not paid<br>");
	}
 
	print("Officer's property ----------------- : <br>");
	$o=new Officer("Rakesh","male","A class",true);
	print("Name : ".$o->GetName()."<br>");
	print("Sex : ".$o->GetSex()."<br>");
	print("Class : ".$o->GetEmpclass()."<br>");
	if($o->GetAll())
	{
	print("Vehicle is provided<br>");
	}
	else
	{
	print("Vehicle is not provided<br>");
	}
 
	?>
</body>
</html>