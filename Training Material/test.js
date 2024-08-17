	var a=prompt("Enter a number")
	var b=prompt("Enter 2nd number")
	if(isNaN(a) && isNaN(b))
	alert("Plz only enter numbers")
	else
	document.write("The sum of "+a+" and "+b+" is "+(eval(a)+eval(b)))