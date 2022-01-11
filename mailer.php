<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

try {
    // От кого письмо
    $mail->setFrom('info@foxcargo.kz', 'FoxCargo');
    // Кому письмо
    $mail->addAddress('logistic.specialist@foxcargo.kz');
    $mail->addAddress('kanat.juzbayev@gmail.com');
    // Тема письма
    $mail->Subject = 'Запрос с foxcargo.kz!';

    // Тело письма
    $body = '<h1>Запрос ставки</h1>';

    if(trim(!empty($_POST['name']))) {
      $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))) {
      $body.='<p><strong>email:</strong> '.$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['tel']))) {
      $body.='<p><strong>тел:</strong> '.$_POST['tel'].'</p>';
    }
    if(trim(!empty($_POST['departure']))) {
      $body.='<p><strong>ст. отправления:</strong> '.$_POST['departure'].'</p>';
    }
    if(trim(!empty($_POST['arrival']))) {
      $body.='<p><strong>ст. назначения:</strong> '.$_POST['arrival'].'</p>';
    }
    if(trim(!empty($_POST['cargo']))) {
      $body.='<p><strong>груз:</strong> '.$_POST['cargo'].'</p>';
    }
    if(trim(!empty($_POST['type']))) {
      $body.='<p><strong>тип вагона:</strong> '.$_POST['type'].'</p>';
    }

    $mail->Body = $body;

    // Отправка
    $mail->send();
    echo 'Спасибо! Скоро мы с Вами свяжемся';;

} catch (Exception $e) {
    echo "Что-то пошло не так. Ошибка: {$mail->ErrorInfo}";
}


?>
