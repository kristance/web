<%@page import="com.tjoeun.category.vo.CategoryVO"%>
<%@page import="com.tjoeun.category.service.CategoryService"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>복구 버튼</title>
</head>
<body>

<%
	request.setCharacterEncoding("UTF-8");

%>

<jsp:useBean id="vo" class="com.tjoeun.category.vo.CategoryVO">
<jsp:setProperty property="*" name="vo"/>	
</jsp:useBean>

<%

//	복구한 카테고리 이름을 복구 완료 메시지에 표시하기 위해서 복구 작업 전에 복구할 카테고리를 얻어온다.
	CategoryVO original = CategoryService.getInstance().selectByIdx(vo.getIdx());

//	복구 버튼이 클릭되면 deleteCheck 필드의 값을 "NO"로 수정한다.
	CategoryService.getInstance().restore(vo.getIdx());


//	복구 작업이 완료되면 메시지를 출력하고 카테고리 목록을 얻어오는 페이지(list.jsp)를 호출한다.
	out.println("<script>");
	out.println("alert('" + original.getCategory() + " 카테고리 복구완료')");
	out.println("location.href='list.jsp'");
	out.println("</script>");
%>
%>


</body>
</html>