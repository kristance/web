<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>한국을 빛낸 100명의 위인들</title>

<link rel="icon" href="./images/logo.png">
<link rel="stylesheet" href="./css/fetch.css"/>
<script type="text/javascript" src="./js/han.js" defer="defer"></script>
</head>
<body>

<h2>
	<a href="./summary.jsp">한국을 빛낸 100명의 위인들</a>
</h2>

<ol>
	<li>
		<a href="#" onclick="document.querySelectorAll('div')[0].innerHTML = '1절 가사다'"> 1절 가사</a>
	</li>
	<li>
		<a href="#" onclick="han2()"> 2절 가사</a>
	</li>
	<li>
		<a href="#" onclick="han3()"> 3절 가사</a>
	</li>
	<li>
		<a href="#" onclick="han4()"> 4절 가사</a>
	</li>
	<li>
		<a href="#" onclick="han5()"> 5절 가사</a>
	</li>
</ol>

<div>
	가사가 출력될 영역
	
</div>

</body>
</html>