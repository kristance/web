<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Statement"%>
<%@page import="com.tjoeun.memoList.DBUtil"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%
//	한글 깨짐을 방지하고 memoList.jsp에서 넘어오는 데이터를 받는다.
	request.setCharacterEncoding("UTF-8");
	String name = request.getParameter("name");
	String password = request.getParameter("password");
	String memo = request.getParameter("memo");
//	접속자 ip 주소를 받는다.
	String ip = request.getRemoteAddr();
//	out.println(name + ", " + password + ", " + memo + ", " + ip);
	
//	데이터베이스에 접속한다.
	Connection conn = DBUtil.getMysqlConnection();
//	out.println("연결성공: " + conn);
	
	/*
//	Statement를 사용해서 넘겨받은 데이터를 데이터베이스 테이블에 저장한다.
//	sql 명령을 만든다.
//	String sql = "insert into memo(name, password, memo, ip) values ('" + 
//		name + "', '" + password + "', '" + memo + "', '" + ip + "')";
	String sql = String.format(
			"insert into memo(name, password, memo, ip) values ('%s', '%s', '%s', '%s')", 
			name, password, memo, ip
		);
//	out.println(sql);
//	Statement를 사용해서 sql 명령을 실행할 준비를 한다.
	Statement stmt = conn.createStatement();
//	sql 명령을 실행한다.
//	executeUpdate() => 테이블에 저장된 데이터가 갱신되는 sql 명령을 실행한다. => insert, delete, update
//	executeQuery() => 테이블에 저장된 데이터가 갱신되지 않는 sql 명령을 실행한다. => select
	stmt.executeUpdate(sql);
	*/
	
//	PreparedStatement를 사용해서 넘겨받은 데이터를 데이터베이스 테이블에 저장한다.
//	sql 명령을 만든다.
	String sql = "insert into memo(name, password, memo, ip) values (?, ?, ?, ?)"; // 불완전한 sql 명령
//	sql 명령을 임시로 실행한다.
	PreparedStatement pstmt = conn.prepareStatement(sql);
//	"?"에 데이터를 넣어준다.
	pstmt.setString(1, name);
	pstmt.setString(2, password);
	pstmt.setString(3, memo);
	pstmt.setString(4, ip);
//	sql 명령을 실행한다.
	pstmt.executeUpdate();

//	데이터베이스 작업이 완료되었으므로 connection을 닫는다.
	DBUtil.close(conn);

//	테이블에 저장된 데이터를 브라우저에 출력하기 위해서 memoList2.jsp로 넘겨준다.
	response.sendRedirect("memoList4.jsp");
%>

</body>
</html>


















