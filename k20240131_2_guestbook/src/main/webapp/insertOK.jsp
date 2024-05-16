<%@page import="com.tjoeun.guestbook.service.InsertService"%>
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
//	한글깨짐 방지
	request.setCharacterEncoding("UTF-8");
	/*
//	insert.jsp에서 넘어오는 데이터를 받는다.	
	String name = request.getParameter("name");
	String password = request.getParameter("password");
	String memo = request.getParameter("memo");
	String ip = request.getParameter("ip");
	
//	VO 클래스 객체를 만들고 setters 메소드로 저장한다.
	GuestbookVO vo = new GuestbookVO();

	vo.setName(name);
	vo.setPassword(password);
	vo.setMemo(memo);
	vo.setIp(ip);
	out.println(vo.toString());
	*/
%>

<!-- 
	usebean 액션 태그로 insert.jsp 에서 넘어오는 데이터를 받아서 GuestbookVO 클래스 객체에 저장한다.
	이전 페이지에서 넘어오는 데이터가 GuestbookVO 클래스에 필드로 존재하면 useBean으로 받고
	존재하지 않으면 request.getParameter()를 이용해서 받는다.
 -->
 
 <jsp:useBean id="vo" class="com.tjoeun.guestbook.vo.GuestbookVO">
	<jsp:setProperty property="*" name="vo"/>
 </jsp:useBean>
<%-- ${vo} --%>

<%
//	VO 클래스 -> 글 1건을 기억하는 클래스
//	List 클래스 -> 1페이지 분량의 글 목록과 페이징 작업에 사용할 변수 8개를 기억하는 클래스
//	Service 클래스 -> SQL 명령 실행 전에 필요한 전처리를 실행하는 클래스 -> 비즈니스 로직을 작성하는 클래스
//	DAO(Data Access Object) -> SQL명령을 실행하는 클래스 -> SQL명령 1개당 메소드 1개를 만든다.

//	insert.jsp에서 넘어온 데이터를 guestbook 테이블에 저장한다.
//	테이블에 저장할 데이터가 저장된 객체(vo)를 전처리 작업을 하기위해서 Service 클래스로 넘겨주고,
//	DAO 클래스에서 SQL명령을 실행하기 전에 필요한 작업있다면 실행한다.
	InsertService.getInstance().insert(vo);


//	테이블에 글 1건을 저장했으면 테이블에 저장된 글 목록을 브라우저에 출력하기 위해서
//	1페이지 분량의 글 목록을 얻어오는 페이지(list.jsp)로 넘겨준다.
	response.sendRedirect("list.jsp");
%>


</body>
</html>



















