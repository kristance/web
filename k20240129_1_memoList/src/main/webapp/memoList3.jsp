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
				아주 아주 많이 허접해 보이는 출첵 게시판 Ver 0.35
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
	int startPage = 0;   // 페이지 이동 하이퍼링크 또는 버튼에 표시될 시작 페이지 번호
	int endPage = 0;     // 페이지 이동 하이퍼링크 또는 버튼에 표시될 마지막 페이지 번호

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
	
//	마지막 페이지에 표시되는 글의 갯수는 반드시 화면에 표시할 글의 갯수(pageSize)만큼 표시되지 않는다.
//	한 페이지에 표시할 마지막 글의 인덱스는 전체 글의 갯수보다 커지면 안되므로 마지막 글의 인덱스가
//	전체 글의 갯수보다 커지면 전체 글의 갯수로  endNo를 수정한다.
	endNo = endNo > totalCount ? totalCount : endNo;
	
	sql = "select * from memo order by idx desc limit ?, ?";
	pstmt = conn.prepareStatement(sql);
	pstmt.setInt(1, startNo);
	pstmt.setInt(2, pageSize);
	rs = pstmt.executeQuery();
%>

<table width="1100" align="center" border="1" cellpadding="5" cellspacing="0">
	<tr>
		<th width="80">글번호</th>
		<th width="80">이름</th>
		<th width="740">메모</th>
		<th width="120">작성일</th>
		<th width="80">ip</th>
	</tr>
	
	<tr>
		<td colspan="5" align="right">
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
		<td align="center"><%=rs.getString("name")%></td>
		<td><%=rs.getString("memo")%></td>
		<td align="center"><%=sdf.format(rs.getTimestamp("writeDate"))%></td>
		<td align="center"><%=rs.getString("ip")%></td>
	</tr>
		
<%	
		} while (rs.next());
	} else {
%>
	
	<tr>
		<td colspan="5">
			<marquee>테이블에 저장된 글이 없습니다.</marquee>
		</td>
	</tr>
	
<%
	}
%>
	
	<!-- 페이지 이동 버튼 -->
	<tr>
		<td colspan="5" align="center">
		
<%
//	페이지 이동 버튼의 시작 페이지 번호와 마지막 페이지 번호를 계산한다.
	startPage = (currentPage - 1) / 10 * 10 + 1;
	endPage = startPage + 9;
//	페이지 이동 버튼의 마지막 페이지 번호가 전체 페이지 개수보다 커지면 존재하지 않는 페이지번호가
//	표시되므로 페이지 이동 버튼의 마지막 페이지 번호를 전체 페이지 번호로 수정한다.
	endPage = endPage > totalPage ? totalPage : endPage;

//	첫 페이지로 이동
//	currentPage가 1보다 크다면 처음으로 이동할 수 있다.
	if(currentPage > 1) {
%>
		<button type="button" title="처음으로 이동" onclick="location.href='?currentPage=1'">첫 페이지로</button>

<% 
	} else {
%>

		<button type="button" title="첫페이지입니다." disabled="disabled">첫 페이지입니다.</button>

<%
	}
	
	
	
//	10페이지 앞으로
//	startPage가 1보다 크면 이전 10페이지가 있다.
	if (startPage > 1) {
%>
			<button type="button" title="이전 10페이지로 이동합니다." 
					onclick="location.href='?currentPage=<%=startPage-1%>'"
					<%-- onclick="location.href='?currentPage=<%=currentPage-10%>'" --%>
					>(-10)</button>
<%
	} else {
%>
			<button type="button" disabled="disabled" title="이미 첫 10페이지 입니다.">(-10)</button>
<%		
	}
	
//	 10페이지 단위로 페이지 이동 버튼을 추가한다. 
	for (int i = startPage; i <= endPage; i++) {
		if (currentPage == i) {
			out.println("<button type='button' disabled='disabled'>" + i + "</button>");
		} else {
			out.println("<button type='button' onclick='location.href=\"?currentPage=" + i + "\"'>" + i + "</button>");
		}
	}

//	10페이지 뒤로 이동
//	endPage가 totalPage보다 작으면 다음 10페이지가 있다.
	if (endPage < totalPage) {
%>
		<button type="button" title="다음 10페이지로 이동합니다." 
			onclick="location.href='?currentPage=<%=endPage+1%>'"> (+10) > </button>
			<%-- onclick="location.href='?currentPage=<%=current+10%>'">(+10)</button> --%>
<% 
	} else {
%>
		<button type="button" title="마지막 페이지 입니다." disabled="disabled">(+10)</button>
<%
	}

//	마지막 페이지로 이동
//	currentPage가 totalPage보다 작으면 마지막 페이지로 이동할 수 있다.
	if (currentPage < totalPage) {
%>
		<button type="button" title="마지막 페이지로 이동" 
					onclick="location.href='?currentPage=<%=totalPage%>'">마지막 페이지로</button>
<%
	} else {
%>
		<button type="button" title="마지막 페이지입니다." disabled="disabled">마지막 페이지입니다.</button>
<%	
	}
%>
		
		</td>
	</tr>
	

</table>

<%
	DBUtil.close(conn);
%>


























