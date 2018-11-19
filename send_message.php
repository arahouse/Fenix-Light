<?php

if (isAjax() === false) {
    die("Not ajax request");
}

$title = "Заявка с сайта Композитные опросы освещения";
$email = '<b>Email:</b> ' . $_POST["call_form_email"];
$name = '<b>Имя:</b> ' . $_POST["call_form_name"];
$phone = '<b>Телефон:</b> ' . $_POST["call_form_phone"];
$message = '<b>Сообщение:</b> ' . $_POST["call_form_message"];

$letter =
    $email . '<br/>' .
    $name . '<br/>' .
    $phone. '<br/>' .
    $message . '<br/>';

echo json_encode(utf8mail("market@fenix-88.ru", $title, $letter));

function utf8mail($to, $s, $body, $fromName = "site.com", $fromA = "site.com", $reply = "site.com")
{
    $s = "=?utf-8?b?" . base64_encode($s) . "?=";
    $headers = "MIME-Version: 1.0\r\n";
    $headers.= "From: =?utf-8?b?" . base64_encode($fromName)  ."?= <" . $fromA . ">\r\n";
    $headers.= "Content-Type:  text/html;charset=utf-8\r\n";
    $headers.= "Reply-To: $reply\r\n";
    $headers.= "X-Mailer: PHP/" . phpversion();
    if(mail($to, $s, $body, $headers)) {
        return ['status' => true];
    } else {
        return ['status' => false];
    }
}

function isAjax()
{
    return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] === 'XMLHttpRequest';
}
?>