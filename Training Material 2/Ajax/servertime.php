<?php
header('Content-Type: text/xml');
sleep(5);
echo "<?xml version=\"1.0\"?><clock1><time><timenow>".date('h:i:s')."</timenow><timenow>".date('i:h:s')."</timenow></time></clock1>";
?>

