<?php
header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
  
    $brandname = isset($_GET["brandname"]) ? $_GET["brandname"] : '';
    $brandAllname = isset($_GET["brandAllname"]) ? $_GET["brandAllname"] : '';
    if($brandAllname){
         $sql = "SELECT * from good,images";
    }else{
        $sql = "SELECT * from good,images WHERE good.brandname='$brandname' and images.goodid=good.goodid";
    }
    

    $result = query($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);

?>
