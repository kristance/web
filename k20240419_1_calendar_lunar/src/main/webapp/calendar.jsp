<%@page import="com.tjoeun.myCalendar.SolarToLunar"%>
<%@page import="com.tjoeun.myCalendar.LunarDate"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Calendar"%>
<%@page import="java.util.Date"%>
<%@page import="com.tjoeun.myCalendar.MyCalendar"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>만년 달력</title>

<style type="text/css">

	table {
		border: 0px solid mediumpurple;
	}

	tr {
		height: 70px;
		border-width: 0px;
	}

	th {
		font-size: 22px;
		width: 100px; 
		border-width: 0px;
	}

	th#title {
		font-size: 30px; 
		font-family: D2Coding; 
		font-weight: bold; 
		color: tomato; 
	}
	
	th#sunday {
		color: red;
	}
	
	th#saturday {
		color: blue;
	}

	td {
		text-align: right; 
		vertical-align: top;
		border: 1px solid black;
		border-radius: 6px;
		font-weight: bold;
	}
	
	td.sun {
		color: red;
	}
	
	td.sat {
		color: blue;
	}
	
	td#beforesun {
		color: red;
		font-size: 12px;
		background-color: lavender;
	}
	
	td.before {
		font-size: 12px;
		background-color: lavender;
	}
	
	td#aftersat {
		color: blue;
		font-size: 12px;
		background-color: yellowgreen;
	}
	
	td.after {
		font-size: 12px;
		background-color: yellowgreen;
	}
	
	td#choice {
	 	text-align: center;
	 	vertical-align: bottom;
	 	border-width: 0px;
	}
	
	td.holiday {
	 	color : white;
	 	background-color:tomato;
	}
	
	span {
		font-size: 12px;
	}
	
	a {
		color: black;
		text-decoration: none; 
	}
	
	a:hover {
		color: hotpink;
		text-decoration: underline;
	}
	
	a:active {
		color: yellowgreen;
		text-decoration: none;
	}

	.button {
		background-color: #04AA6D; 
		border: none;
		color: white;
		padding: 10px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		transition-duration: 0.4s;
		cursor: pointer;
		border-radius:14px;
	}

	.button1 {
		background-color: white; 
		color: black; 
		border: 2px solid #04AA6D;
	}
	
	.button1:hover {
		background-color: #04AA6D;
		color: white;
	}
	
	.button2 {
		background-color: white; 
		color: black; 
		border: 2px solid #008CBA;
	}

	.button2:hover {
		background-color: #008CBA;
		color: white;
	}
	
	.select { 
		width: 100px;
		height: 30px;
	}
	
	fieldset {
		width: 105px;
		display: inline;
	}
	
	

</style>

</head>
<body>

<%
	Calendar calendar = Calendar.getInstance();
	int year = calendar.get(Calendar.YEAR);
	int month = calendar.get(Calendar.MONTH) + 1;
	
	try {
		year = Integer.parseInt(request.getParameter("year"));
		month = Integer.parseInt(request.getParameter("month"));
		
		if (month >= 13) {
			year++;
			month = 1;
		} else if (month <= 0) {
			year--;
			month = 12;
		}
	} catch (NumberFormatException e) {
		
	}
	
//	달력을 출력할 달의 양력/음력 대응 결과를 얻어온다.
	ArrayList<LunarDate> lunarDate = SolarToLunar.solarToLunar(year, month); 
%>

<table width="700" border="1" align="center" cellpadding="5" cellspacing="0">
	<tr>
		<th>
			<input class="button button1" type="button" value="이전달" onclick="location.href='?year=<%=year%>&month=<%=month - 1%>'">
		</th>
		<th id="title" colspan="5">
			<%=year%>년 <%=month%>월
		</th>
		<th>
			<button class="button button2" type="button" onclick="location.href='?year=<%=year%>&month=<%=month + 1%>'">다음달</button>
		</th>
	</tr>
	<tr>
		<th id="sunday">일</th>
		<th>월</th>
		<th>화</th>
		<th>수</th>
		<th>목</th>
		<th>금</th>
		<th id="saturday">토</th>
	</tr>
	<!--  -->
	<tr>
<%
int week = MyCalendar.weekDay(year, month, 1);

	int start = 0;
	if (month == 1) {
		start = 31 - week;
	} else {
		start = MyCalendar.lastDay(year, month - 1) - week; // 2 ~ 12월
	}

	for (int i = 0; i<week; i++) {
		if (i == 0) {
	out.println("<td id='beforesun'>" + (month == 1 ? 12 : month - 1) + "/" + ++start + "</td>");
		} else {
	out.println("<td class='before'>" + (month == 1 ? 12 : month - 1) + "/" + ++start + "</td>");
		}
	}

	for (int i = 1; i<=MyCalendar.lastDay(year, month); i++) {
		
//	공휴일인가 판단해서 class 속성을 다르게 지정해서 날짜를 출력한다.
	if (lunarDate.get(i - 1).getHoliday().length() > 0) { // 공휴일인가?
			out.println("<td class='holiday'>" + i + lunarDate.get(i - 1).getHoliday() + "</td>");
		
	} else { // 공휴일을 제외한 나머지 날짜
		switch (MyCalendar.weekDay(year, month, i)) {
			case 0:
				out.println("<td class='sun'>" + i + "</td>");
				break;
			case 6:
				out.println("<td class='sat'>" + i + "</td>");
				break;
			default:
				out.println("<td>" + i + "</td>");
				break;
		}
	}
		// 출력한 날짜가 토요일이고 그 달의 마지막 날짜가 아니면 줄을 바꾼다.
		if (MyCalendar.weekDay(year, month, i) == 6 && i != MyCalendar.lastDay(year, month)) {
			out.println("</tr><tr>");
		}
	}

	//	날짜를 다 출력하고 남은 빈 칸에 다음달 날짜를 출력한다.
	int last = MyCalendar.weekDay(year, month, MyCalendar.lastDay(year, month));
	for (int i = 1; i <= 6 - last; i++) {
		if (i == 6 - last) {
	out.println("<td id='aftersat'>" + (month == 12 ? 1 : month + 1) + "/" + i + "</td>");
		} else {
	out.println("<td class='after'>" + (month == 12 ? 1 : month + 1) + "/" + i + "</td>");
		}
	}
%>
	</tr>
	<!-- 년, 월을 선택하고 보기 버튼을 클릭하면 선택된 달의 달력으로 한번에 넘어가게 한다. -->
	<tr>
		<td id="choice" colspan="7">
			<form action="?" method="post">
			<fieldset>
				<legend>년</legend>
					<select class="select" name="year">
<%
	for (int i = 1900; i <= 2100;i++) {
		if (calendar.get(Calendar.YEAR) == i) {
			out.println("<option selected='selected'>" + i + "</option>");						
			
		} else {
			out.println("<option>" + i + "</option>");						
		}
	}
%>
					</select>
			</fieldset>
			<fieldset>
				<legend>월</legend>
					<select class="select" name="month">
<%
	for (int i = 1; i <= 12;i++) {
		if (calendar.get(Calendar.MONTH) + 1 == i) {
			out.println("<option selected='selected'>" + i + "</option>");						
		} else {
			out.println("<option>" + i + "</option>");
		}
	}
%>
					</select>
			</fieldset>
				<input class="select" type="submit" value="보기">
			</form>
		</td>
	</tr>
</table>

</body>
</html>

























