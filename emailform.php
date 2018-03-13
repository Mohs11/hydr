<?php

if(empty($_POST['submit']))
{
	echo "Form has not been subbmited!";
	exit;
}

if(empty($_POST["email"]))
	{
		echo "Please fill the form"
		exit;
	}

$email = $_POST["email"];

header('Location: musicdownload.html');


?>