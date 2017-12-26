<?php
    header('Access-Control-Allow-Origin:*');
    include 'DBHelper.php';
  
    $userid = isset($_GET["userid"]) ? $_GET["userid"] : '1';
    $sql = "select * from order where userid = '$userid'";
    // $sql = "select * from order";
    
    $result = query($sql);
    // $row = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>