<%@page import="com.tjoeun.dbcpTest.DBUtil"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Commons DBCP로 데이터베이스에 연결하기</title>
</head>
<body>

<%

	Connection conn = DBUtil.getCommonsDBCPConnection();
	
		out.println("##connected## : " + conn);
		
		DBUtil.close(conn);

	
	
	
	
%>


</body>
</html>









