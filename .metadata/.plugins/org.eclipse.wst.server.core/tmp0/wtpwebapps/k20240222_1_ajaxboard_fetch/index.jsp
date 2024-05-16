<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>javascript ajax</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

<!-- ajax 구현 js -->
<script type="text/javascript" src="./js/ajaxboard.js" defer="defer"></script>

</head>
<body>

<!-- 회원 가입 양식 -->
<div class="container p-3">
	<table class="table table-hover">
<!--  -->	
		<tr class="table-primary">
				<th class="align-middle text-center" colspan="2" style="font-size: 30px;">
					회원가입
				</th>
		</tr>
<!--  -->		
		<tr>
		
			<th class="align-middle" width="100px">
				<label for="name">이름</label>
			</th>
			<td width="500px">
				<input 
					id="name"
					class="form-control form-control-sm"
					type="text"
					autocomplete="off"
					placeholder="이름 입력"
					style="width: 200px;"
				/>
			</td>
					
		</tr>
<!--  -->
		<tr>
		
			<th class="align-middle">
				<label for="age">나이</label>
			</th>
			<td>
				<input 
					id="age"
					class="form-control form-control-sm"
					type="text"
					autocomplete="off"
					placeholder="나이 입력"
					style="width: 200px;"
				/>
			</td>
					
		</tr>
<!--  -->
		<tr>
		
			<th class="align-middle">
				성별
			</th>
			<td>
				<div class="d-flex justify-content-center">
					<div class="btn-group" data-toggle="buttons">
						 <div class="form-check">
						      <input type="radio" class="form-check-input" id="man" name="gender" value="남자" checked>
						      <label class="form-check-label" for="man">남자</label>
					    </div>
					    &nbsp;&nbsp;&nbsp;
					    <div class="form-check">
						      <input type="radio" class="form-check-input" id="woman" name="gender" value="여자">
						      <label class="form-check-label" for="woman">여자</label>
					    </div>
					</div>
				
				</div>
			</td>
					
		</tr>
<!--  -->
		<tr>
		
			<th class="align-middle">
				<label for="email">이메일</label>
			</th>
			<td>
				<input 
					id="email"
					class="form-control form-control-sm"
					type="text"
					autocomplete="off"
					placeholder="이메일 입력"
				/>
			</td>
					
		</tr>
<!--  -->		
		<tr class="table-secondary">
			<th class="align-middle text-end" colspan="2"">
				<input 
				class="btn btn-outline-primary btn-sm" 
				type="button" 
				value="입력하기" 
				onclick="insertFunction()"/>
			</th>
		</tr>		
	
	</table>
</div>


<!-- 회원 출력 양식 -->
<div class="container p-3">
	<div class="form-group row d-flex justify-content-end mb-3">
		<div class="col-sm-3">
			<input 
				id="username" 
				class="form-control form-control-sm" 
				type="text" 
				autocomplete="off" 
				onkeyup="searchFunction()"/>
		</div>
		<div class="col-sm-1">
			<input 
				class="btn btn-outline-primary btn-sm" 
				type="button" 
				value="검색" 
				onclick="searchFunction()"/>
		</div>
	</div>

	<table class="table table-hover">
		<thead>
			<tr class="table-info">
				<th class="align-middle text-center">번호</th>
				<th class="align-middle text-center">이름</th>
				<th class="align-middle text-center">나이</th>
				<th class="align-middle text-center">성별</th>
				<th class="align-middle text-center">이메일</th>
			</tr>
		</thead>
		<tbody id="ajaxTable">
			<tr></tr>
		</tbody>
	</table>
</div>


</body>
</html>



















