<%@page import="com.tjoeun.dbcpTest.DBUtil"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>오라클 연결</title>
</head>
<body>

<%
	Connection conn = DBUtil.getOracleConnection();
		out.println("##Connected## : " + conn);
	DBUtil.close(conn);

	


%>


</body>
</html>




















