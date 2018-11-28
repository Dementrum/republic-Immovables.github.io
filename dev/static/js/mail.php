<?php
$recepient = "dmi56756877@yandex.ru";
$siteName = "Проверка";
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$tema = trim($_POST["tema"]);
$message = "Имя: $name \nТелефон: $phone \nТема: $tema";
$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>