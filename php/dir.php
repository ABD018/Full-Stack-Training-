<?php
	function EmptyDir($dir)
	{
	$handle=opendir($dir);
	while(($file=readdir($handle))!=false)	
	{
	echo("$file<br>");
	unlink($dir.'/'.$file);
	}
	}
	EmptyDir("New Folder");
	?>