<?php
header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
  
    $brandid = isset($_GET["brandid"]) ? $_GET["brandid"] : '';
    
    $sql = "SELECT * from good,images WHERE good.brandid=$brandid and good.goodid=images.goodid";

    $result = query($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);

?>
