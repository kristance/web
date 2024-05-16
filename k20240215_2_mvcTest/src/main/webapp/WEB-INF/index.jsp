<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>index</title>
</head>
<body>

<h1>index.jsp</h1>

<a href="<%= request.getContextPath()%>/HomeController?name=홍길동">클릭1</a><br/>
<a href="./HomeController?name=임꺽정">클릭2</a>

<form action="<%= request.getContextPath()%>/HomeController?name=홍길동" method="post">
	<input name="name" type="text"/>
	<input type="submit" value="클릭3
	"/>
</form>
</body>
</html>  