<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>오라클 연결</title>
</head>
<body>

<!-- 
	오라클 연결
	시작 버튼 -> 오라클 -> Run SQL Command Line 실행
	SQL> connect system
	Enter password: -> 오라클 설치시 지정한 비밀번호 입력, 비밀번호를 입력할 때 아무런 문자도 표시되지 않는다
 	
 	사용자 계정 생성
 	SQL> create user 계정이름 identified by 비밀번호;
 	User created
 	
 	SQL> select * from all_users; -> 현재 생성된 계정 확인
 	
 	권한 설정 ->  DBA(관리자), resource(개발자), connect(일반 사용자)
 	SQL> grant 권한1, 권한2 .... to 계정이름;
 	Grant succeeded.
 -->


<%
	Connection conn = null;
	try {
		//	오라클 드라이버 클래스를 읽어온다.
		Class.forName("oracle.jdbc.driver.OracleDriver");
		//	오라클에 연결해서 Connection 객체에 저장한다.
		//	DriverManager 클래스의 getConnection() 메소드로 오라클에 연결한다.
		String url = "jdbc:oracle:thin:@localhost:1521:xe";
		conn = DriverManager.getConnection(url, "admin", "1234");
		
		out.println("##Connected## : " + conn);
		
	} catch (ClassNotFoundException e) {
		out.println("드라이버 클래스가 없거나 읽어올 수 없습니다.");
	} catch (SQLException e) {
		out.println("데이터베이스 접속정보가 올바르지 않습니다.");
	} finally {
		if(conn != null) {
			conn.close();
		}
	}


	


%>


</body>
</html>




















