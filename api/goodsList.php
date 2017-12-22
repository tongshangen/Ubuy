<?php
header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
  
    $brandid = isset($_GET["brandid"]) ? $_GET["brandid"] : '';
    $good_name = isset($_POST["good_name"]) ? $_POST["good_name"] : '';

    $sql = "select * from good where brandid  = $brandid";

    $result = query($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);

?>
