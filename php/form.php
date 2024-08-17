<html>
<head>
<title>Sending Information</title>
<script language="javascript">
	function check()
	{
	if(document.f.t1.value=="")
	{
	alert("Plz enter your Fname");
	}
	else if(document.f.t2.value=="")
	{
	alert("Plz enter your Lname");
	}
	else
	{
	document.f.submit()
	}
	}
 
	</script>
</head>
<body>
<h2 align="center"><font face="comic sans ms" color="red"><u>Sending Information through HTML Form</u></h2>
<form name="f" method="get" action="getting.php">
	Enter your first name
<input type="text" name="t1">
<br>
	Enter your last name
<input type="text" name="t2">
<br>
<input type="button" value="submit form" onClick="check()">
</form>
</body>
</html>