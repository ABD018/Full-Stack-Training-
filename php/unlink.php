<?php
	if(!unlink("aha.txt"))
	{
	print("Error deleting file");
	}
	else 
	{
	print("File deleted");
	}
	?>