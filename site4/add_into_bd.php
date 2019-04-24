<?php
    require_once 'database.php';
?>
<html lang="ru">
<head>
</head>
<body>
    <p align="center"><a href="index.php">News</a></p>
    <p align="center"><a href="admin.php">Admin</a></p>
    <?php
    $title = $_POST['Title'];
    $bodynews = $_POST['Bnews'];
    $result1 = $link->query("INSERT INTO news (title, bodynews) VALUES ('$title','$bodynews')");
    if ($result == true){
        echo "OK!";
    }else{
        echo "Bad";
    }
    ?>
</body>
</html>