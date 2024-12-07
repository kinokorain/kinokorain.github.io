<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = htmlspecialchars($_POST['Имя']);
    $email = htmlspecialchars($_POST['Почта']);
    $phone = htmlspecialchars($_POST['Телефон']);
    $message = htmlspecialchars($_POST['типпроекта']);

    // Указываем email, на который будем отправлять письмо
    $to = "koznev2004@mail.ru"; // Замените на ваш email
    $subject = "Новое сообщение с формы обратной связи"; // Фиксированная тема

    // Формируем тело письма
    $body = "Имя: $Имя\n";
    $body .= "Почта: $Почта\n";
    $body .= "Телефон: $Телефон\n";
    $body .= "Тип проекта:$типпроекта\n";

    // Указываем заголовки письма
    $headers = "From: $Почта\r\n";
    $headers .= "Reply-To: $Почта\r\n";

    // Отправляем письмо
    if (mail($to, $subject, $body, $headers)) {
        echo "Сообщение отправлено!";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
} else {
    echo "Некорректный метод запроса.";
}
?>