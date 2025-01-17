<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JSP의 시스템 영역</title>
</head>
<body>

<h2>requestTest.jsp</h2>


<% 
//	var라는 일반 변수가 선언되지 않았으므로 에러가 발생된다.
//	out.println("일반 변수 " + var + "<br/>");

	out.println("pageContext 영역 변수 - " + pageContext.getAttribute("pageContextVar") + "<br/>");
	out.println("request 영역 변수 - " + request.getAttribute("requestVar") + "<br/>");
	out.println("session 영역 변수 - " + session.getAttribute("sessionVar") + "<br/>");
	out.println("application 영역 변수 - " + application.getAttribute("applicationVar") + "<br/>");
	
%>
<hr/>

<%-- 
	EL(Expression Language, 표현 언어) 내장 객체 -> jsp의 표현식 ( <%= ~ %> )을 대신해서 간단한 출력에 사용된다.
	EL 사용법 = ${변수이름} 또는 ${영역객체이름Scope.변수이름} -> getter 메소드를 사용하는 효과를 낸다.
	출력할 때 jsp를 사용하면 영역 변수에 저장된 데이터가 없으면 null을 출력하지만 EL은 아무것도 출력하지 않는다.
 --%>

requestTest.jsp 파일의 pageContext 영역 변수(println() 메소드) :
<% 
	out.println( pageContext.getAttribute("pageContextVar") + "<br/>");
%>
requestTest.jsp 파일의 pageContext 영역 변수(jsp 표현식) : <%= pageContext.getAttribute("pageContextVar") %> <br/>
requestTest.jsp 파일의 pageContext 영역 변수(EL) : ${pageContextScope.pageContextVar} <br/>
requestTest.jsp 파일의 pageContext 영역 변수(EL) : ${pageContextVar} <br/>


</body>
</html>