<?php
    require_once 'database.php';
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Админка</title>
</head>
<body>
    <p align="center" style="color:#ff0099; font-size:30px">Добро пожаловать в админку!</p>
    <p align="center"><a href="index.php">Новостной сайт</a></p>
    <FORM method= "POST" action="add_into_bd.php"> 
    Добавить новость:
    <BR>
    Заголовок:
    <BR>
    <INPUT name="Title" type="text">
    <BR>
    Тело новости:
    <BR>
    <TEXTAREA name="Bnews" cols="50" rows="5"></TEXTAREA>
    <BR>
    <INPUT type="submit" value= "Добавить">
    </FORM>
</body>
</html>