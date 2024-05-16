<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>한국을 빛낸 100명의 위인들</title>

<link rel="icon" href="./images/logo.png">
<link rel="stylesheet" href="./css/fetch.css"/>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script type="text/javascript" src="./js/fetch5.js" defer="defer"></script>
</head>
<body>




<h2>
	<a href="#!summary" onclick="fetchAJAX('summary')">한국을 빛낸 100명의 위인들</a>
</h2>

<ol id="normal">
	<li>
		<a href="#!1" onclick="fetchAJAX('1')"> 1절 가사</a>
	</li>
	<li>
		<a href="#!2" onclick="fetchAJAX('2')"> 2절 가사</a>
	</li>
	<li>
		<a href="#!3" onclick="fetchAJAX('3')"> 3절 가사</a>
	</li>
	<li>
		<a href="#!4" onclick="fetchAJAX('4')"> 4절 가사</a>
	</li>
	<li>
		<a href="#!5" onclick="fetchAJAX('5')"> 5절 가사</a>
	</li>
	
	
</ol>
<!--  -->
<ol id="list">

</ol>
<!--  -->
<ol id="list2">

</ol>

<div id="content">
	가사가 출력될 영역
	
</div>

</body>
</html>