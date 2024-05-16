<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Commons DBCP로 데이터베이스에 연결하기</title>
</head>
<body>

<%
//	lib 폴더에 commonsDBCP 드라이버 클래스(commons-dbcp-1.4.jar, commons-pool-1.5.7.jar)를 복사해 넣는다.
//	src/main/java에 *.jocl 파일을 작성한다. -> pool.jocl 파일을 복사해 넣는다. -> 데이터베이스 연결 정보

//	.jocl 파일에서 데이터베이스 연결 정보 설정
//	mysql 5.x
//	<object class="org.apache.commons.dbcp.DriverManagerConnectionFactory">
//		<string value="jdbc:mysql://localhost:3306/데이터베이스이름?useUnicode=true&amp;characterEncoding=UTF-8"/>
//		<string value="계정이름"/>
//		<string value="비밀번호"/>
//	</object>

//	mysql 8.x
//	<object class="org.apache.commons.dbcp.DriverManagerConnectionFactory">
//		<string value="jdbc:mysql://localhost:3306/데이터베이스이름?serverTimezone=UTC"/>
//		<string value="계정이름"/>
//		<string value="비밀번호"/>
//	</object>


//	oracle
//	<object class="org.apache.commons.dbcp.DriverManagerConnectionFactory">
//		<string value="jdbc:oracle:thin:@localhost:1521:xe"/>
//		<string value="계정이름"/>
//		<string value="비밀번호"/>
//	</object>

	Connection conn = null;
	try {
		//	사용할 데이터베이스의 드라이버
//		Class.forName("com.mysql.jdbc.Driver"); // mysql 5.x
//		Class.forName("com.mysql.cj.jdbc.Driver"); // mysql 8.x
		Class.forName("oracle.jdbc.driver.OracleDriver"); // oracle

//		commons DBCP 드라이버 클래스를 읽어온다.
		Class.forName("org.apache.commons.dbcp.PoolingDriver"); // commons DBCP
		
//		데이터베이스 연결 정보가 저장된 파일 (*.jocl)의 경로를 지정한다.
		String url = "jdbc:apache:commons:dbcp:/pool";
		conn = DriverManager.getConnection(url);
		
		out.println("##connected## : " + conn);
		
	} catch (ClassNotFoundException e) {
		out.println("드라이버 클래스가 없거나 읽어올 수 없습니다.");
	} catch (Exception e) {
		out.println("데이터베이스 접속 정보가 올바르지 않습니다.");
	} finally {
		if (conn != null) {
			conn.close();
		}
	}
	
	
	
	
%>


</body>
</html>









