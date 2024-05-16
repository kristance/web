<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>파일 업로드</title>
</head>
<body>

<!-- 파일을 전송하는 폼은 enctype 속성값을 반드시  -->
<form action="fileUploadOK.jsp" method="post" enctype="multipart/form-data">
	<input name="filename" type="file"/><br/>
	<input type="submit" value="파일 전송"/>
</form>

</body>
</html>