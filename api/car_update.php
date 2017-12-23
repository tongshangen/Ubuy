<?php
    header('Access-Control-Allow-Origin:*');
    include 'DBHelper.php';
    
    $carid = isset($_POST["carid"]) ? $_POST["carid"] : '';
    $goodnum = isset($_POST["goodnum"]) ? $_POST["goodnum"] : '';

    $sql = "update buycar set goodnum = $goodnum where carid = $carid";

    $result = excute($sql);

    if($result){
        echo 'ok';
    }else{
        echo 'fail';
    }
?>