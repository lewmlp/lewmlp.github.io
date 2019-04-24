<?php
    $link = mysqli_connect('localhost','root','','news_db');

    if(mysqli_connect_errno())
    {
        echo 'Ошибка в подключении к базе данных';
        exit();
    }

    $sql = "SELECT * FROM news LIMIT 0, 2";

    $result = mysqli_query($link, $sql);

    $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
?>