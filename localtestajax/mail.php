<?php
$secret="6LfDyjoUAAAAAE-2jDDtn01GGMfzQ4bELgo_FUCZ";
$response=$_POST["captcha"];
$fail="FAILURE";
$win="SUCCESS";

$verify=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$response}");
$captcha_success=json_decode($verify);
if ($captcha_success->success==false) {
  //This user was not verified by recaptcha.
    echo $fail;
}
else if ($captcha_success->success==true) {
  //This user is verified by recaptcha
  echo $win;
}