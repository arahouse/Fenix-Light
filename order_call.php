<?php

if (isAjax() === false) {
    die("Not ajax request");
}

$title = "Заявка с сайта";
$name = '<b>Имя:</b> ' . $_POST["call_form_name"];
$phone = '<b>Сообщение:</b> ' . $_POST["call_form_phone"];

$letter =
    $name . '<br/>' .
    $phone. '<br/>';

echo json_encode(utf8mail("lizalukatova@gmail.com", $title, $letter));

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