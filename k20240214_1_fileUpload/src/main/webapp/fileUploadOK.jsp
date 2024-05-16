<%@page import="java.io.IOException"%>
<%@page import="java.io.File"%>
<%@page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%>
<%@page import="com.oreilly.servlet.MultipartRequest"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>파일 업로드</title>
</head>
<body>

<%
	request.setCharacterEncoding("UTF-8");
try {
//	enctype 속성값이 multipart/form-data로 통해서 넘어오는 데이터를 받으려면 request로 받을 수 없고
//	multipart를 지원하는 객체로 받아야한다.
	MultipartRequest mr = new MultipartRequest(
			request, //	요청 객체
			application.getRealPath("./upload"), //	파일을 업로드할 실제 경로
			5 * 1024 * 1024,//	업로드 할 파일의 최대 크기, 바이트 단위로 지정
			"UTF-8",//	문자 인코딩 방식
			new DefaultFileRenamePolicy()//	업로드 되는 파일과 같은 이름의 파일이 존재할 경우 이름을 자동으로 변경해주는 객체
			);

//	getOriginalFileName() : 업로드 하는 파일(원본)의 이름을 얻어온다.
	String originalFileName = mr.getOriginalFileName("filename");
	out.println("원본 이름 : " + originalFileName + "<br/>");
	
//	getFile() : 업로드된 실제 경로와 파일 이름을 얻어온다.
	File realFileName = mr.getFile("filename");
	out.println("업로드된 실제 경로와 파일 이름 : " + realFileName + "<br/>");
//	getName() : 업로드된 파일 이름을 얻어온다.
	out.println("업로드된 실제 파일 이름 : " + realFileName.getName() + "<br/>");
		
	} catch (IOException e) {
		out.println("업로드 파일 용량 초과, 5mb까지만 업로드 가능");
	}
	
%>

파일 업로드 완료<br/>
<a href="./fileUploadForm.jsp">돌아가기</a>


</body>
</html>