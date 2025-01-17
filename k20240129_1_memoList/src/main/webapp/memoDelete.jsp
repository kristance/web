<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="com.tjoeun.memoList.DBUtil"%>
<%@page import="java.sql.Connection"%>
<%@page import="javax.tools.DocumentationTool.Location"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>삭제할 글 보기</title>
</head>
<body>

<%
request.setCharacterEncoding("UTF-8");

//	memoList4.jsp에서 넘어오는 삭제할 글번호(idx)와 삭제 후 돌아갈 페이지 번호(currentPage)를 받는다.
	String tempIdx = request.getParameter("idx");
	String tempCurrentPage = request.getParameter("currentPage");
//	out.println(tempIdx + ", " + tempCurrentPage);
	
//	삭제할 글번호와 삭제 후 돌아갈 페이지 번호가 모두 넘어왔나 검사한다.
	if (tempIdx != null && tempIdx.trim().length() != 0 &&
		tempCurrentPage != null && tempCurrentPage.trim().length() != 0) {
	
		//	삭제할 글번호와 삭제 후 돌아갈 페이지 번호가 모두 숫자인가 검사한다.
		try {
			int idx = Integer.parseInt(tempIdx);
			int currentPage = Integer.parseInt(tempCurrentPage);
			
			//	삭제할 글번호에 해당되는 글이 테이블에 존재하는가 확인하기위해서 글번호에 해당되는 글을
			//	테이블에서 얻어온다.
			Connection conn = DBUtil.getMysqlConnection();
			String sql = "select * from memo where idx = ?";
			PreparedStatement pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, idx);
			ResultSet rs = pstmt.executeQuery();
					
			//	삭제할 글이 테이블에 존재하는가 검사한다.
			if ( rs.next() ) {
					SimpleDateFormat sdf = new SimpleDateFormat("yyyy년 MM월 dd일 E요일 a h시 mm분 ss초");
%>

<!-- 삭제할 글이 테이블에 존재하므로 삭제할 글을 화면에 보여주고 비밀번호를 입력받는다. -->
<form action="deleteOK.jsp" method="post">
	<table width="700" border="1" align="center" cellpadding="5" cellspacing="0">
		<tr>
			<th colspan="2">삭제할 글 확인</th>
		</tr>
		<tr>
			<th width="100">글번호</th>
			<td width="600"><%=rs.getInt("idx")%></td>
		</tr>	
		<tr>
			<th>이름</th>
			<td><%=rs.getString("name").replace("<", "&nt;").replace(">", "&gt;")%></td>
		</tr>	
		<tr>
			<th>작성일</th>
			<td><%=sdf.format(rs.getTimestamp("writeDate"))%></td>
		</tr>	
		<tr>
			<th>메모</th>
			<td><%=rs.getString("memo").replace("<", "&nt;").replace(">", "&gt;")%></td>
		</tr>	
		<tr>
			<td colspan="2">
				<label>비밀번호 <input type="password" name="password"/></label>
				<input type="submit" value="삭제하기"/>
				<input type="reset" value="다시쓰기"/>
				<input type="button" value="돌아가기1" onclick="history.back()"/>
				<input type="button" value="돌아가기2" onclick="history.go(-1)"/>
				<input type="button" value="돌아가기3" onclick="location.href='memoList4.jsp?currentPage=<%=currentPage%>'"/>
			</td>
		</tr>	
	</table> 
	
	<!-- 삭제할 글번호와 삭제 후 돌아갈 페이지 번호도 deleteOK.jsp로 넘겨줘야한다. -->
	<input type="hidden" name="idx" value="<%=idx%>"/>
	<input type="hidden" name="currentPage" value="<%=currentPage%>"/>
</form>

				
<%				
				
			} else {
			//	삭제가 글이 테이블에 존재하지 않기 때문에 에러메시지를 출력하고
			//	memoList4.jsp로 돌려보낸다.
				out.println("<script>");
				out.println("alert('" + idx + "번의 글은 테이블에 존재하지 않습니다.')");
				out.println("location.href='memoList4.jsp'");
				out.println("</script>");
				
			}
			
			DBUtil.close(conn);
			
		} catch (NumberFormatException e) {
		//	삭제가 글번호 또는 돌아갈 페이지 번호가 숫자가 아니므로 에러메시지를 출력하고
		//	memoList4.jsp로 돌려보낸다.
			out.println("<script>");
			out.println("alert('삭제할 글번호 또는 돌아갈 페이지 번호가 모두 숫자가 아닙니다.')");
			out.println("location.href='memoList4.jsp'");
			out.println("</script>");
		}
		

	} else {
		//	삭제가 글번호 또는 돌아갈 페이지 번호가 넘어오지 않았으므로 에러메시지를 출력하고
		//	memoList4.jsp로 돌려보낸다.
		out.println("<script>");
		out.println("alert('삭제할 글번호 또는 돌아갈 페이지 번호가 넘어오지 않았습니다.')");
		out.println("location.href='memoList4.jsp'");
		out.println("</script>");
	}


	
%>





</body>
</html>