<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');

    // $servername = 'localhost';
    // $username = 'root';
    // $password = '';
    // $database = 'test';

	// // 1）连接数据库
	// $conn = new mysqli($servername,$username,$password,$database);

	// // 检测连接
	// if($conn->connect_errno){
	// 	die('连接失败：'.$conn->connect_error);
	// }

	// // 设置字符集
    // $conn->set_charset('utf8');

    include 'DBHelper.php';
     
    $name = isset($_GET["name"]) ? $_GET["name"] : '';
    $price = isset($_GET["price"]) ? $_GET["price"] : '';
    $Oprice = isset($_GET["Oprice"]) ? $_GET["Oprice"] : '';
    $brandid = isset($_GET["brandid"]) ? $_GET["brandid"] : '';
    $types = isset($_GET["types"]) ? $_GET["types"] : '';
    $introduce = isset($_GET["introduce"]) ? $_GET["introduce"] : '';
    $size = isset($_GET["size"]) ? $_GET["size"] : '';
    $color = isset($_GET["color"]) ? $_GET["color"] : '';
    $iventory = isset($_GET["iventory"]) ? $_GET["iventory"] : '';

    $admin_id = isset($_GET["admin_id"]) ? $_GET["admin_id"] : '';
    $username = isset($_GET["username"]) ? $_GET["username"] : '';
    $password = isset($_GET["password"]) ? $_GET["password"] : '';
    
    
    if($name){
        $sql="insert into good(`name`,`price`,`Oprice`,`brandid`,`types`,`introduce`,`size`,`color`,`iventory`)values('$name','$price','$Oprice','$brandid','$types','$introduce','$size',
        '$color','$iventory')";

        $res = multi_query_oop($sql);

        if($res){
            $msql="select * from good where name ='$name'";
            $msql .= ';select FOUND_ROWS() as rowsCount;';
            $result = multi_query_oop($msql);
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }else{
            echo json_encode($res, JSON_UNESCAPED_UNICODE);
        };
    } else if($admin_id){
        $sql="insert into admin_list(`admin_id`,`username`,`password`)values('$admin_id','$username','$password')";

        $res = multi_query_oop($sql);

        if($res){
            $msql="select * from admin_list where username ='$username'";
            $msql .= ';select FOUND_ROWS() as rowsCount;';
            $result = multi_query_oop($msql);
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }else{
            echo json_encode($res, JSON_UNESCAPED_UNICODE);
        };
    }

    


    