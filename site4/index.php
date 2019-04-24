<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lab 4</title>
</head>
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
<body>
    <p align="center" style="color:#ff0099; font-size:30px">Добро пожаловать на мой новостной сайт!</p>

    <?php foreach($data as $new): ?>
        <h1>Новость номер <?=$new["id"]?></h1>
        <h2><?=$new["title"]?></h2>
        <h3><?=$new["bodynews"]?></h3>
    <?php endforeach; ?>

</body>
</html>