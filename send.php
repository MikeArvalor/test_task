<?php

$name=$_POST['name'];

$email=$_POST['email'];

$name=htmlspecialchars($name);

$email=htmlspecialchars($email);

$name=urldecode($name);

$email=urldecode($email);

$name=trim($name);

$email=trim($email);

mail("vintfak15082000@gmail.com",">Kensington Advisors Ltd",

"Name: ".$name."\n"."Email: ".$email."\n","From:\r\n")



?>