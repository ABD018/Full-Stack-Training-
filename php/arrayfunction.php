<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>

<script>
    document.write(`<center><h1><font face="comic sans ms" color='red'><u>Using Builtin Array Functions</u></center>`);
</script>
<body>
<?php
	print("Using array chunk------------<br><br>");
	$input_array = array('a', 'b', 'c', 'd', 'e');
	print_r(array_chunk($input_array, 2));
	print("<br>");
	print_r(array_chunk($input_array, 2, true));
	print("<br><br>");
	print("Using combine------------<br><br>");
	$a = array('green', 'red', 'yellow');
	$b = array('avocado', 'apple', 'banana');
	$c = array_combine($a, $b);
	print_r($c);
	print("<br><br>");
 
	print("Using count values-----------<br><br>");
	$array = array(1, "hello", 1, "world", "hello");
	print_r(array_count_values($array));
	print("<br><br>");
	print("Using diff-----------------<br><br>");
	$array1 = array("green", "red", "blue", "red");
	$array2 = array("green", "yellow", "red");
	$result = array_diff($array1, $array2);
	print_r($result);
	print("<br><br>");
 
	print("Using Array fill function-------<br><br>");
	$a = array_fill(5, 6, 'banana');
	print_r($a);
	print("<br><br>");
 
	print("Using Filter-----------------<br><br>");
	function odd($var) 
	{
    	return($var % 2 == 1);
	}
 
	function even($var) 
	{
    	return($var % 2 == 0);
	}
 
	$array1 = array("a"=>1, "b"=>2, "c"=>3, "d"=>4, "e"=>5);
	$array2 = array(6, 7, 8, 9, 10, 11, 12);
 
	echo "Odd :<br>";
	print_r(array_filter($array1, "odd"));
	echo "<br>Even:<br>";
	print_r(array_filter($array2, "even"));
	print("<br><br>");
 
	print("Array flip function----------------<br><br>");
	$trans = array("a" => 1, "c" => 2);
	$trans = array_flip($trans);
	print_r($trans);
	print("<br><br>");
 
	print("Using intersect function-------------<br><br>");
	$array1 = array("green", "red", "blue");
	$array2 = array("green", "yellow", "red");
	$result = array_intersect($array1, $array2);
	print_r($result);
	print("<br><br>");
	print("Using merge function-----<br><br>");
	$array1 = array("color" ,"red","Blue", "white");
	$array2 = array("pink","orange","cream","magenta");
	$result = array_merge($array1, $array2);
	print_r($result);
	print("<br><br>");
	print("Using Pop------------------<br><br>");
	$stack = array("orange", "banana", "apple", "raspberry");
	$fruit = array_pop($stack);
	print_r($stack);
	print("<br><br>");
 
	print("Using push-----------------------<br><br>");
	$stack = array("orange", "banana");
	array_push($stack, "apple", "raspberry");
	print_r($stack);
	print("<br><br>");
 
	print("Using Reverse-------------------<br><br>");
	$input  = array("Red","Green","Blue","White","Orange");
	$result = array_reverse($input);
	$result_keyed = array_reverse($input, true);
	print_r($result);
	print("<br>");	
	print_r($result_keyed);
	print("<br><br>");
	print("Using search-------------------<br><br>");
	$array = array(0 => 'blue', 1 => 'red', 2 => 'green', 3 => 'red');
	$key = array_search('green', $array); // $key = 2;
	print($key."<br><br>");
 
	print("Using shift------------------------<br><br>");
	$stack = array("orange", "banana", "apple", "raspberry");
	$fruit = array_shift($stack);
	print_r($stack);
	print("<br><br>");
 
	print("Using slice------------<br><br>");
	$input = array("a", "b", "c", "d", "e");
	$output = array_slice($input, 2);     
	print_r($output);
	print("<br>");
	$output = array_slice($input, 2, 1);  
	print_r($output);
	print("<br>");
	$output = array_slice($input, 0, 3);  
	print_r($output);
	print("<br><br>"); 

 
	print("Using Sum------------------------<br><br>");
	$a = array(2, 4, 6, 8);
	$result=array_sum($a);
	print($result);
 
	
	?>
</body>
</html>