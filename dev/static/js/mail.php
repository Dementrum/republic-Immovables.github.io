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
<!-- <?php
  if (isset($_POST['name'])) {$name = $_POST['name']; 
    echo "<b>Имя отправителя: </b>".$name."<br>";}
  if (isset($_POST['email'])) {$email = $_POST['email']; echo "<b> E-mail  отправителя: </b>".$email."<br>";}
  if (isset($_POST['theme'])) {$theme = $_POST['theme']; echo "<b>Тема: </b>".$theme."<br>";}
  if (isset($_POST['phone'])) {$phone = $_POST['phone']; echo "<b>Телефон: </b>".$phone."<br>";}
  if (isset($_POST['text'])) {$text = $_POST['text']; echo "<b>Сообщение: </b>".$text."<br>";}
  $to = "dmi56756877@mail.ru, web-js-coder.ru@yandex.ru, dmi56756877@yandex.ru, dmitrikolesnikov1976@gmail.com"; 
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
  $headers .= "From: \"".$name."\" <".$email.">\r\n";
  $subject = $theme;
  $message = "<b>Имя отправителя:</b> $name <br>
              <b>E-mail отправителя:</b> $email <br>
              <b>Телефон:</b> $phone <br>
              <b>Сообщение:</b> <br> $text";
  $send = mail ($to, $subject, $message, $headers);
    
    if ($send == 'true')
    {
      echo "<div class='block_chip'><p>Ваше письмо доставлено. Очень скоро с вами свяжутся.</p></div>";
        }
    else
    {
      echo "<div class='block_important'><p>К сожалению, ваше письмо не доставлено. Вы можете написать нам на почту dmi56756877@yandex.ru</p></div>";
    }
						?> -->
   