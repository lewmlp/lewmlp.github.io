<?php
    require_once 'database.php';
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lab 4</title>
</head>
<body>
    <p align="center" style="color:#ff0099; font-size:30px">Добро пожаловать на мой новостной сайт!</p>
    <p align="center"><a href="admin.php">Админка</a></p>
    <?php foreach($data as $new): ?>
        <h1>Новость номер <?=$new["id"]?></h1>
        <h2><?=$new["title"]?></h2>
        <h3><?=$new["bodynews"]?></h3>
    <?php endforeach; ?>

</body>
</html>