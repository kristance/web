<%@page import="com.tjoeun.dbcpTest.DBUtil"%>
<%@page import="javax.sql.DataSource"%>
<%@page import="javax.naming.InitialContext"%>
<%@page import="javax.naming.Context"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>tomcat DBCP로 데이터베이스에 연결하기</title>
</head>
<body>

<% 

	Connection conn = DBUtil.getTomcatDBCPConnection();
	
	out.println("##conneted## :" + conn);
	
	DBUtil.close(conn);




%>

</body>
</html>