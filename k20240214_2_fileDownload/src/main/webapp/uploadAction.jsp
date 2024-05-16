<%@page import="java.io.File"%>
<%@page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%>
<%@page import="com.oreilly.servlet.MultipartRequest"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%
	request.setCharacterEncoding("UTF-8");

	MultipartRequest mr = new MultipartRequest(
			request, 
			application.getRealPath("./upload"), 
			5 * 1024 * 1024 * 1024, // 5gb
			"UTF-8",
			new DefaultFileRenamePolicy()
			);

	
//	getOriginalFileName() : 업로드한 원본 파일 이름을 얻어온다.	
	String filename = mr.getOriginalFileName("file");
//	out.println("원본 파일 이름 : " + filename + "<br/>");
	
//	getFilesystemName() : 업로드된 파일 이름을 얻어온다.	
	String fileRealname = mr.getFilesystemName("file");
//	out.println("업로드된 파일 이름 : " + fileRealname + "<br/>");
	
//	getFile() : 업로드 하는 파일을 얻어온다.
	File realFile = mr.getFile("file");
//	length() : 업로드 한 파일의 크기를 얻어온다.
	long fileLength = realFile.length();
//	out.println("업로드 하는 파일 크기 : " + fileLength + "<br/>");

//	업로드 제한 
	out.println("<script>");
	if (fileLength > 5 * 1024 * 1024) { // 5mb 용량제한
		out.println("alert('" + fileLength + " 의 크기를 가진 파일이 업로드 시도 되었습니다.\\n" +  "업로드 가능한 크기보다 큽니다.\\n" + "5,242,880바이트까지 업로드 가능합니다.')");
		//	업로드된 파일을 삭제하기 위해 실제로 업로드된 파일의 File 객체를 생성한다.
		File file = new File(application.getRealPath("./upload/") + fileRealname);
//		out.println(application.getRealPath("./upload/") + fileRealname);
		//	delete() : 파일을 삭제한다.
		file.delete();
		
	} else if(!fileRealname.endsWith(".zip") && !fileRealname.endsWith(".png") ) { // 파일 종류 제한
		//	startsWith() : 인수로 지정한 문자열로 파일 이름이 시작되면 true, 그렇지 않으면 false를 리턴한다.
		//	endsWith() : 인수로 지정한 문자열로 파일 이름이 끝나면 true, 그렇지 않으면 false를 리턴한다.
		out.println("alert('업로드 할 수 있는 파일의 형식이 아닙니다.\\n" +  ".zip 파일과 .png 파일만 업로드 가능합니다.')");
		File file = new File(application.getRealPath("./upload/") + fileRealname);
		file.delete();
	} else { // 업로드 성공
		out.println("alert('업로드 성공\\n" +
				"원본 파일 이름 : " + filename + "\\n" +
				"업로드된 파일 이름 : " + fileRealname + "\\n" +
				"업로드 하는 파일 크기 : " + fileLength + "\\n" +
				"')");
		
	}
	out.println("location.href='index.jsp'");
	out.println("</script>");

	
		
%>


</body>
</html>