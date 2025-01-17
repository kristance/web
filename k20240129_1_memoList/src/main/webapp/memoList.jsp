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
</head>
<body>

<!-- 입력 화면 시작 -->
<form action="memoInsert.jsp" method="post">
	<table width="1000" align="center" border="1" cellpadding="5" cellspacing="0">
		<tr>
			<th colspan="3">
				아주 아주 많이 허접해 보이는 출첵 게시판 Ver 0.01
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
<!-- 입력 화면 끝 -->

<br/>
<hr size="3" color="dodgerblue"/>
<br/>

</body>
</html>

<!-- 테이블에 저장된 글 목록 전체를 글번호(idx)의 내림차순(최신글 부터)으로 얻어온다. -->
<%
	Connection conn = DBUtil.getMysqlConnection();
	String sql = "select * from memo order by idx desc";
	PreparedStatement pstmt = conn.prepareStatement(sql);
	ResultSet rs = pstmt.executeQuery();

//	ResultSet 객체에 저장된 다음 데이터가 없을 때 까지 반복하며 얻어온 글 목록을 출력한다.
//	next(): ResultSet 객체에 저장된 다음 데이터로 접근한다. => 다음 데이터가 있으면 true, 
//	없으면 false를 리턴한다.
	/*
	if (rs.next()) {
		// 테이블에 저장된 글이 있는 경우
		// out.println("테이블에 저장된 글이 있습니다.");
		do {
			out.println(rs.getInt("idx") + ", ");
			out.println(rs.getString("name") + ", ");
			out.println(rs.getString("password") + ", ");
			out.println(rs.getString("memo") + ", ");
			out.println(rs.getTimestamp("writeDate") + ", ");
			out.println(rs.getString("ip") + "<br/>");
		} while(rs.next());
	} else {
		// 테이블에 저장된 글이 없는 경우
		out.println("테이블에 저장된 글이 없습니다.");
	}
	*/
%>

<!-- 테이블에서 얻어온 글 목록을 출력한다. -->
<table width="1100" align="center" border="1" cellpadding="5" cellspacing="0">
	<tr>
		<th width="80">글번호</th>
		<th width="80">이름</th>
		<th width="740">메모</th>
		<th width="120">작성일</th>
		<th width="80">ip</th>
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
	
</table>

<%
	DBUtil.close(conn);
%>

