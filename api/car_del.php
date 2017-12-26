<?php
    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
    $carid = isset($_POST["carid"]) ? $_POST["carid"] : '';

    $sql = "delete from buycar where carid = $carid";

    $result = excute($sql);

    if($result){
        echo 'ok';
    }else{
        echo 'fail';
    }

?>