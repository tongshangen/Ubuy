<?php
	header('Access-Control-Allow-Origin:*');

	// 配置参数
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'buy';
	// 1）连接数据库
	$conn = new mysqli($servername,$username,$password,$database);
	// 检测连接
	if($conn->connect_errno){
		die('连接失败：'.$conn->connect_error);
	}
	// 设置字符集
	$conn->set_charset('utf8');
?>