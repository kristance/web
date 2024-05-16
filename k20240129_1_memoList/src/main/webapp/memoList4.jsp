<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="com.tjoeun.memoList.DBUtil"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>출첵 게시판</title>

<style type="text/css">



</style>

</head>
<body>

<form action="memoInsert.jsp" method="post">
	<table width="1000" align="center" border="1" cellpadding="5" cellspacing="0">
		<tr>
			<th colspan="3">
				아주 아주 많이 허접해 보이는 출첵 게시판 Ver 0.55
			</th>
		</tr>
		<tr>
			<th width="100">이름</th>
			<th width="100">비밀번호</th>
			<th width="800">메모</th>
		</tr>
		<tr>
			<td align="center">
				<input type="text" name="name" style="width: 85%; padding: 5px;"/>
			</td>
			<td align="center">
				<input type="password" name="password" style="width: 85%; padding: 5px;"/>
			</td>
			<td align="center">
				<input type="text" name="memo" style="width: 91%; padding: 5px;"/>
				<input type="submit" value="저장" style="height: 28px;"/>
			</td>
		</tr>
	</table>
</form>

<br/>
<hr size="3" color="dodgerblue"/>
<br/>

</body>
</html>

<%
	int pageSize = 10; 
	int totalCount = 0; 
	int totalPage = 0;  
	int currentPage = 1;
	int startNo = 0;  
	int endNo = 0;     
	int startPage = 0;   
	int endPage = 0;    

//	--------------------------------------------------------------------------------------------------
//	페이지당 표시할 글의 갯수를 받아서 pageSize 변수에 저장한다.
//	게시판이 최초로 실행될 때 이전 페이지가 없으므로 넘어오는 pageSize 값이 null이고 보기 버튼 이외의
//	다른 버튼이 클릭되면 역시 pageSize 값이 넘어오지 않기 대문에 null이 된다. -> 예외 처리를 한다.
	try {
		pageSize = Integer.parseInt( request.getParameter("pageSize") );
		//	화면에 표시할 글의 갯수가 정상적으로 넘어왔으므로 화면에 표시할 글의 갯수를 세션에 저장한다.
		session.setAttribute("pageSize", pageSize + "");
	} catch (NumberFormatException e) {
		//	보기 버튼을 제외한 나머지 버튼은 pageSize를 전달하는 기능이 없기때문에 NumberForematException이 발생되어
		//	이곳으로 오게된다.
		//	이전 페이지에서 넘어오는 pageSize가 null이면 세션에 저장해둔 pageSize를 얻어와서 화면에 표시할
		//	글의 갯수로 지정한다.
		//	브라우저가 최초로 실행될 때 세션이 만들어지기때문에 브라우저가 최초로 실행되면 이전 페이지에서
		//	넘어오는 pageSize도 null이고, 세션에 저장된 pageSize도 없으므로 null이다.
		String temp =  (String) session.getAttribute("pageSize");
		if (temp != null) {
			pageSize = Integer.parseInt(temp);
		}
	}


//	--------------------------------------------------------------------------------------------------
	
	Connection conn = DBUtil.getMysqlConnection();
	
	String sql = "select count(*) as 'count' from memo";
	PreparedStatement pstmt = conn.prepareStatement(sql);
	ResultSet rs = pstmt.executeQuery();
	
	rs.next();
	totalCount = rs.getInt("count");

	totalPage = (totalCount - 1) / pageSize + 1;
	try {
		currentPage = Integer.parseInt(request.getParameter("currentPage"));
		currentPage = currentPage > totalPage ? totalPage : currentPage;
	} catch (NumberFormatException e) {
		
	}
	startNo = (currentPage - 1) * pageSize;
	endNo = startNo + pageSize - 1;
	
	endNo = endNo > totalCount ? totalCount : endNo;
	
	sql = "select * from memo order by idx desc limit ?, ?";
	pstmt = conn.prepareStatement(sql);
	pstmt.setInt(1, startNo);
	pstmt.setInt(2, pageSize);
	rs = pstmt.executeQuery();
%>

<table width="1200" align="center" border="1" cellpadding="5" cellspacing="0">
	<tr>
		<th width="80">글번호</th>
		<th width="80">이름</th>
		<th width="740">메모</th>
		<th width="120">작성일</th>
		<th width="80">ip</th>
		<th width="100"></th>
	</tr>
	
	<tr>
		<!-- 한 페이지에 표시할 글의 갯수를 지정한다. -->
		<td colspan="3" align="center">
			<form action="?" method="post">
				페이지당 표시할 글의 갯수를 지정하세요.
				<!--
				<select name="pageSize" style="width:100px; height: 25px;">
					<option>3</option>
					<option>5</option>
					<option selected="selected">10</option>
					<option>15</option>
					<option>20</option>
				</select>
				-->
				<!--
				<input type="radio" name="pageSize" value="3"/>3
				<input type="radio" name="pageSize" value="5"/>5
				<input type="radio" name="pageSize" value="10" checked="checked"/>10
				<input type="radio" name="pageSize" value="15"/>15
				<input type="radio" name="pageSize" value="20"/>20
				-->
				<input type="number" name="pageSize" value="10" min="1" />
				<input type="submit" value="보기"/>
			</form>
		</td>
		
		<td colspan="3" align="center">
			<%=totalCount%>(<%=currentPage%> / <%=totalPage%>)
		</td>
	</tr>
	
<%
	if (rs.next()) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy.MM.dd(E)");
		do {
%>
	
	<tr>
		<td align="right"><%=rs.getInt("idx")%></td>
		<td align="center"><%=rs.getString("name").replace("<", "&lt;").replace(">", "&gt;")%></td>
		<td><%=rs.getString("memo").replace("<", "&lt;").replace(">", "&gt;")%></td>
		<td align="center"><%=sdf.format(rs.getTimestamp("writeDate"))%></td>
		<td align="center"><%=rs.getString("ip")%></td>
		
		<!-- 
			수정, 삭제 버튼 추가 
			수정 또는 삭제 기능을 실행하는 페이지로 수정 또는 삭제할 글번호(idx)와
			삭제 작업 후 돌아갈 페이지 번호(currentPage)를 넘겨줘야한다.
		  -->
		<td align="center">
			<button type="button" 
			onclick="location.href='memoUpdate.jsp?idx=<%=rs.getInt("idx")%>&currentPage=<%=currentPage%>'">수정</button>
			<button type="button" 
			onclick="location.href='memoDelete.jsp?idx=<%=rs.getInt("idx")%>&currentPage=<%=currentPage%>'">삭제</button>
		</td>
		
		
	</tr>
		
<%	
		} while (rs.next());
	} else {
%>
	
	<tr>
		<td colspan="6">
			<marquee>테이블에 저장된 글이 없습니다.</marquee>
		</td>
	</tr>
	
<%
	}
%>
	<tr>
		<td colspan="6" align="center">
		
<%
	startPage = (currentPage - 1) / 10 * 10 + 1;
	endPage = startPage + 9;
	endPage = endPage > totalPage ? totalPage : endPage;

	if(currentPage > 1) {
		out.println("<button type='button' title='처음으로 이동'"
				+ "onclick='location.href=\"?currentPage=1\"'>첫 페이지로</button>");
	} else {
		out.println("<button type='button' " 
				+ " title='첫페이지입니다.' disabled='disabled'>첫 페이지입니다.</button>");
	}
	
	
	if (startPage > 1) {
		out.println("<button type='button' title='이전 10페이지로 이동합니다.' "
						+ " onclick='location.href=\"?currentPage=" + (startPage-1) + "\"'>(-10)</button>");
	} else {
		out.println("<button type='button' disabled='disabled' "
						+ " title='이미 첫 10페이지 입니다.'>(-10)</button>");
	}
	
	for (int i = startPage; i <= endPage; i++) {
		if (currentPage == i) {
			out.println("<button type='button' disabled='disabled'>" + i + "</button>");
		} else {
			out.println("<button type='button' " 
						+ " onclick='location.href=\"?currentPage=" + i + "\"'>" + i + "</button>");
		}
	}

	if (endPage < totalPage) {
		out.println("<button type='button' title='다음 10페이지로 이동합니다.' "
						+ " onclick='location.href=\"?currentPage=" + (endPage+1) + "\"'> (+10) > </button>");
		
	} else {
		out.println("<button type='button' title='마지막 페이지 입니다.' disabled='disabled'>(+10)</button>");
	}

	if (currentPage < totalPage) {
		out.println("<button type='button' title='마지막 페이지로 이동' "
						+ " onclick='location.href=\"?currentPage=" + totalPage + "\"'>마지막 페이지로</button>");
		
	} else {
		out.println("<button type='button' title='마지막 페이지입니다.' disabled='disabled'>마지막 페이지입니다.</button>");
	}
	
%>
		
		</td>
	</tr>
	

</table>

<%
	DBUtil.close(conn);
%>


























