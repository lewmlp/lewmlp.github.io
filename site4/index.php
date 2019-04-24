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
?>
<body>
</body>
</html>