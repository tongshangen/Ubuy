<?php
    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
    
    $goodid = isset($_POST["goodid"]) ? $_POST["goodid"] : '';
    $userid = isset($_POST["userid"]) ? $_POST["userid"] : '';
    $status = isset($_POST["status"]) ? $_POST["status"] : '';

    $sql = "insert into order(goodid,userid,status) values($goodid,$userid,$status)";

    $result = excute($sql);

    if($result){
        echo 'ok';
    }else{
        echo 'fail';
    }

?>