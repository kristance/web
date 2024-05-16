<%@page import="com.tjoeun.guestbook.service.UpdateService"%>
<%@page import="com.tjoeun.guestbook.service.DeleteService"%>
<%@page import="com.tjoeun.guestbook.service.SelectService"%>
<%@page import="com.tjoeun.guestbook.vo.GuestbookVO"%>
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
//	update.jsp에서 넘어오는 데이터를 받는다.
int currentPage = Integer.parseInt( request.getParameter("currentPage") );


%>

 <jsp:useBean id="vo" class="com.tjoeun.guestbook.vo.GuestbookVO">
	<jsp:setProperty property="*" name="vo"/>
 </jsp:useBean>
 
 <%
 //	수정할 글의 비밀번호와 수정하기 위해 입력한 비밀번호를 비교하기 위해 수정할 글을 얻어온다.
 	GuestbookVO original = SelectService.getInstance().selectByIdx(vo.getIdx());
 
 //	수정할 글의 비밀번호(original.getPassword())와 수정하기 위해 입력한 비밀번호(vo.getPassword())를 비교한다.
 	out.println("<script>");
 	if ( original.getPassword().trim().equals(vo.getPassword()) ) {
 		//	비밀번호가 일치하면 글을 수정하는 메소드를 실행한다.
 		UpdateService.getInstance().update(vo);
 		//	수정 완료 메시지를 출력한다
 		out.println("alert('" + original.getIdx() + "번 글 수정했습니다.')");
 	} else {
 		//	비밀번호가 일치하지 않으면 오류메시지를 출력한다.
	 	out.println("비밀번호가 일치하지 않습니다.");
 	}
//	list.jsp로 돌려보낸다.
 	out.println("location.href='list.jsp?currentPage=" + currentPage + "'");
 	out.println("</script>");
 %>


</body>
</html>