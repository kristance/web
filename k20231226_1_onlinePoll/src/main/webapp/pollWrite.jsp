<%@page import="com.tjoeun.onLinePoll.PollWrite"%>
<%@page import="com.tjoeun.onLinePoll.PollRead"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<!-- pollRead.jsp에서 넘어오는 투표한 항목을 받아서 득표수를 증가시켜 텍스트 파일에 저장한다.  -->
<%
// post 방식으로 데이터가 넘어올 때 한글 깨짐을 방지한다.
	request.setCharacterEncoding("UTF-8");
//	pollRead.jsp에서 넘어오는 투표 데이터를 받는다.
	String temp = request.getParameter("poll");
//	out.println(temp);

//	에러 체크
//	투표 데이터가 넘어왔나(null 도는 공백이 아닌가?) 검사한다. -> 반드시 null 검사를 먼저 한다.
	if ( temp != null && temp.trim().length() != 0 ) {
		
//		넘어온 투표 데이터가 숫자인가 검사한다.
		try {
			int result = Integer.parseInt(temp);
			
//				 텍스트 파일을 읽어서 투표 항목의 개수를 계산한다.
					String filepath = application.getRealPath("/") + "poll.txt";
					ArrayList<String> poll = PollRead.pollRead(filepath);
					int itemCount = (poll.size() - 1) / 2;
					
//			넘어온 투표 데이터가 정상적인 투표 범위의 데이터인가 검사한다.
				if (result >= 1 && result <= itemCount) {

//					여기까지 왔다는 것은 정상적인 투표 데이터가 넘어왔다는 것이므로 투표한 항목의 득표수를
//					1증가 시켜서 텍스트 파일에 저장한다.
//					득표수를 1증가 시킬 ArrayList의 위치(index)를 계산한다.		
					int index = result + itemCount;
//					득표수를 증가시킨다.
					result = Integer.parseInt(poll.get(index)) + 1;
//					1증가된 득표수를 ArrayList의 index 번째 위치에 넣어준다.
//					poll.set(index,String.valueOf(result));
//					poll.set(index,String.format("%s",result));
					poll.set(index,(result+""));
//					out.println(poll);

//					ArrayList에 저장된 데이터를 텍스트 파일에 저장하는 메소드를 실행한다.
					PollWrite.pollWrite(filepath, poll);


//					투표 결과보기 페이지로 넘겨준다.
					response.sendRedirect("pollResult.jsp");


				
				} else {
//				넘어온 투표 데이터가 정상적인 투표 범위의 숫자가 아니므로 오류 메시지를 출력하고
//				pollRead.jsp로 돌려보낸다.
					out.println("<script>");
					out.println("alert('투표데이터가 정상 투표 범위가 아닙니다..')");
					out.println("location.href='pollRead.jsp'");
					out.println("</script>");
				}
		} catch (NumberFormatException e) {
//				넘어온 투표 데이터가 숫자가 아니므로 오류메시지를 출력하고 pollRead.jsp로 돌려보낸다.
			out.println("<script>");
			out.println("alert('투표데이터가 숫자가 아닙니다.')");
			out.println("location.href='pollRead.jsp'");
			out.println("</script>");
		}
		
	} else {
//		out.println("투표하세요.");
//		투표 데이터가 넘어오지 않았으므로 오류 메시지를 출력하고 pollRead.jsp로 돌려보낸다.
		out.println("<script>"); // 클라이언트용 스크립트
		out.println("alert('투표하세요. 크와앙아아아아아앙')");
		out.println("location.href='pollRead.jsp'");
		out.println("</script>");
		
		
//		하나의 jsp 파일에 서버용 스크립트 (jsp)와 클라이언트용 스크립트(javaScript)를 모두 사용한 경우
//		코딩 순서와는 상관없이 서버용 스크립트가 먼저 다 실행된 후 클라이언트용 스크립트가 실행된다.
//		response.sendRedirect() 메소드는 인수로 지정한 페이지로 넘겨준다.
//		response.sendRedirect("pollRead.jsp"); // 서버용 스크립트
		


	}


%>




</body>
</html>