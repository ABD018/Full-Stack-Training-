<?php
if($_FILES["file"]["error"]>0)
{
echo"There is an error".$_FILES["file"]["error"]."<br>";
}
else
{
echo "<Font face='comic sans ms' color='red'>UPLOADED:".$_FILES["file"]["name"]."<br>";
echo "Type:".$_FILES["file"]["type"]."<br>";
echo "Size : ". $_FILES["file"]["size"]/1024 ." Kb<br>";
echo "Stored In:".$_FILES["file"]["tmp_name"]."<br>";
}
if(file_exists("upload/".$_FILES["file"]["name"]))
{
echo $_FILES["file"]["name"]."Already Exist";
}
else
{
move_uploaded_file($_FILES["file"]["tmp_name"],"upload/".$_FILES["file"]["name"]);
echo "stored in :"."upload/".$_FILES["file"]["name"];
}
 
?>