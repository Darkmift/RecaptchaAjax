<?php

$name=stripslashes($_POST["name"]);
$email=stripslashes($_POST["email"]);
$message=stripslashes($_POST["message"]);
$secret="6LcOQjoUAAAAAEJaaX_D0i2JKAD3ASxs1PTxDFPn";
$error="CAPTCHA FAILED";
$response=$_POST["captcha"];
$verify=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$response}");
$captcha_success=json_decode($verify);
if ($captcha_success->success==false) {
  return $error;
}
else if ($captcha_success->success==true) {
  return $verify;
}
