<%@page import="com.tjoeun.category.vo.CategoryVO"%>
<%@page import="com.tjoeun.category.service.CategoryService"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>수정 버튼</title>
</head>
<body>

<%
	request.setCharacterEncoding("UTF-8");

%>

<jsp:useBean id="vo" class="com.tjoeun.category.vo.CategoryVO">
	<jsp:setProperty property="*" name="vo"/>	
</jsp:useBean>
<%-- ${vo} --%>


<%

//	수정한 카테고리 이름을 수정 완료 메시지에 표시하기 위해서 수정 작업 전에 수정할 카테고리를 얻어온다.
	CategoryVO original = CategoryService.getInstance().selectByIdx(vo.getIdx());

//	수정 버튼이 클릭되면 카테고리를 수정한다.
	CategoryService.getInstance().update(vo);
	

//	수정 작업이 완료되면 메시지를 출력하고 카테고리 목록을 얻어오는 페이지(list.jsp)를 호출한다.
	out.println("<script>");
	out.println("alert('" + original.getCategory() + " 카테고리를 " + vo.getCategory() + " 카테고리로 수정 완료')");
	out.println("location.href='list.jsp'");
	out.println("</script>");
%>
%>


</body>
</html>