<%@page import="java.net.URLEncoder"%>
<%@page import="java.util.Arrays"%>
<%@page import="java.io.File"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>파일 다운로드</title>
</head>
<body>

<h1>업로드된 파일 목록</h1>


<%
	request.setCharacterEncoding("UTF-8");
//	파일이 업로드되는 폴더에 저장된 파일 목록을 얻어온다.
	String uploadDirectory = application.getRealPath("/upload");
//	list() : 지정된 디렉토리(폴더)에 저장된 파일 목록을 배열로 얻어온다.
	String[] files = new File(uploadDirectory).list();
//	out.println(Arrays.toString(files) + "<br/>");
//	out.println(request.getContextPath() + "<br/>");
	
	for(int i = 0; i < files.length; i++) {
//		out.println( (i+1)+ ". " + files[i]+ "<br/>");
%>

<%=i+1%>.
<a href="<%=request.getContextPath()%>/DownloadAction?file=<%=URLEncoder.encode(files[i], "UTF-8")%>"> <!-- get --> 
<%=files[i]%>
</a><br/> 

<%
	}
%>

<a href="./index.jsp">돌아가기</a>


<form action="<%=request.getContextPath()%>/DownloadAction" method="post">
	<input name="name" type="text"/>
	<input type="submit" value="제출"/>
</form>





</body>
</html>