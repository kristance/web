<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>에러페이지</title>
</head>
<body>

<!-- 에러가 발생했을 때 브라우저에 표시할 페이지 설정은 web.xml 파일에서 한다. -->
<a href="pageOK.jsp">누른다.</a>

<%
//	int i = 10 / 0;
//	int j = Integer.parseInt("크와앙");
	ArrayList<String> list = null;
	list.get(0);
%>


</body>
</html>