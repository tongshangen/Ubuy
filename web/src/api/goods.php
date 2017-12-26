<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    $page = isset($_GET["page"]) ? $_GET["page"] : 1;
    $limit = isset($_GET["limit"]) ? $_GET["limit"] : 10;

    include 'DBHelper.php';
    
    // $sql = 'select * from good';
    $sql = 'select SQL_CALC_FOUND_ROWS * from good ';
    $sql .= ' limit ';
    $sql .= $page - 1;
    $sql .= ', ';
    $sql .= $limit;

    $sql .= ';select FOUND_ROWS() as rowsCount;';

    $result = multi_query_oop($sql);
    
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>