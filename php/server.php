<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
	print("<center><h2><font face='comic sans ms' color='red'><u>Using Server Variables</u></center>");
	print("All Values : <br>");
	print_r($_SERVER);
	print("<br>");
	print("Gateway Interface ".$_SERVER['GATEWAY_INTERFACE']."<br>");
	print("Server Software ".$_SERVER['SERVER_SOFTWARE']."<br>");
	print("Server Protocol ".$_SERVER['SERVER_PROTOCOL']."<br>");
	print("Request method ".$_SERVER['REQUEST_METHOD']."<br>");
	print("Request time ".$_SERVER['REQUEST_TIME']."<br>");
	print("Query String ".$_SERVER['QUERY_STRING']."<br>");
	print("Document root ".$_SERVER['DOCUMENT_ROOT']."<br>");
	print("Http Accept Language ".$_SERVER['HTTP_ACCEPT_LANGUAGE']."<br>");
	print("Http host ".$_SERVER['HTTP_HOST'
]."<br>");
	print("Http User Agent ".$_SERVER['HTTP_USER_AGENT']."<br>");
	print("Remote ADDR ".$_SERVER['REMOTE_ADDR']."<br>");
	print("Server ADDR ".$_SERVER['SERVER_ADDR']."<br>");
	print("Remote Port ".$_SERVER['REMOTE_PORT']."<br>");
	print("Script filename ".$_SERVER['SCRIPT_FILENAME']."<br>");
	print("Server Admin ".$_SERVER['SERVER_ADMIN']."<br>");
	print("Server Port ".$_SERVER['SERVER_PORT']."<br>");
	print("Script Name ".$_SERVER['SCRIPT_NAME']."<br>");
	print("Request Uri ".$_SERVER['REQUEST_URI']."<br>");
	?> 
</body>
</html>