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
        $id = $_POST['id'];
        $result2 = $link->query("DELETE FROM news where id = '$id'");
        if ($result == true){
            echo "OK!";
        }else{
        echo "Bad";
        }
    ?>
</body>
</html>