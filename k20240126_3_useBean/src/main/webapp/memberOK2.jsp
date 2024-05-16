<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입</title>
</head>
<body>

<%
	request.setCharacterEncoding("UTF-8");

//	Date date = new Date();
//	out.println(date);


%>

<!-- 
	useBean 액션 태그로 new를 사용하지 않고 객체를 만들 수 있다.
	id 속성에는 만드려는 객체의 이름을 입력한다.
	class 속성에는 객체를 만드려하는 클래스 이름을 반드시 풀패키지 이름과 함께 입력한다.
 -->

<jsp:useBean id="date" class="java.util.Date"></jsp:useBean>
${date}<br/>

<!-- MemberVO vo = new MemberVO()와 같이 useBean을 사용해서 객체를 만든다.-->
<jsp:useBean id="vo" class="com.tjoeun.useBean.MemberVO"></jsp:useBean>

	<!-- 
		setProperty 액션 태그는 지정한 필드의 setter 메소드를 실행한다.
		property 속성에는 setter 메소드를 실행할 필드 이름을 입력한다.
		name 속성에는 setter 메소드를 실행할 필드가 정의된 객체 이름을 입력한다.
		useBean 액션 태그를 사용하면 form에 저장되서 넘어오는 데이터를 받아주는 동작을
		별도로 코딩하지 않아도 useBean이 자동으로 받아서 처리한다.
		
		 <jsp:setProperty property="id" name="vo"/>
		 <jsp:setProperty property="name" name="vo"/>
		 <jsp:setProperty property="password" name="vo"/>
		 <jsp:setProperty property="age" name="vo"/>
		 <jsp:setProperty property="gender" name="vo"/>
		 <jsp:setProperty property="ip" name="vo"/>
	 -->
	
	<!-- 
		property 속성에 "*"을 입력하면 모든 필드의 setter 메소드가 일괄적으로 실행된다.
		단, form을 구성하는 요소들의 name 속성의 속성값과 같은 이름의 필드의 setter 메소드만 실행된다.
	 -->

		 <jsp:setProperty property="*" name="vo"/>

${vo}


</body>
</html>