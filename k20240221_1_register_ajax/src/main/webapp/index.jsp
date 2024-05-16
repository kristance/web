<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>   
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>   
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>   
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
<script type="text/javascript" src="./js/register.js" defer="defer"></script>


</head>
<body>

<div class="container p-3">
	<!-- <form action="./UserRegister" method="post"> --> <!-- /1/ -->
	<form> <!-- /2/ -->
		<table class="table table-hover table-borderless">
	<!--  -->			
			<tr class="table-success">
			
				<th class="align-middle text-center" colspan="3" style="font-size: 30px;">
					회원 가입 양식
				</th>
				
			</tr>
	<!--  -->	
			<tr>
		
				<th class="align-middle" width="150px">
					<label for="userId">아이디</label>
				</th>
				<td>
					<input 
						id="userId"
						class="form-control form-control-sm"
						type="text"
						name="userId"
						placeholder="아이디 입력"
						autocomplete="off"
					/>
				</td>
				<td class="text-center" width="100px">
					<button 
						class="btn btn-outline-dark btn-sm" 
						type="button"
						onclick="registerCheckFunction()">
						중복 검사
					</button>
				</td>
			</tr>
	<!--  -->	
			<tr>
		
				<th class="align-middle">
					<label for="userPassword">비밀번호</label>
				</th>
				<td colspan="2">
					<input 
						id="userPassword"
						class="form-control form-control-sm"
						type="password"
						name="userPassword"
						placeholder="비밀번호 입력"
						autocomplete="off"
						onkeyup="passwordCheckFunction()"
					/>
				</td>
				
			</tr>
	<!--  -->	
			<tr>
		
				<th class="align-middle">
					<label for="userPassword2">비밀번호 확인</label>
				</th>
				<td colspan="2">
					<input 
						id="userPassword2"
						class="form-control form-control-sm"
						type="password"
						name="userPassword2"
						placeholder="비밀번호 다시 입력"
						autocomplete="off"
						onkeyup="passwordCheckFunction()"
					/>
				</td>
				
			</tr>
	<!--  -->	
			<tr>
		
				<th class="align-middle">
					<label for="userName">이름</label>
				</th>
				<td colspan="2">
					<input 
						id="userName"
						class="form-control form-control-sm"
						type="text"
						name="userName"
						placeholder="이름 입력"
						autocomplete="off"
					/>
				</td>
				
			</tr>
	<!--  -->	
			<tr>
		
				<th class="align-middle">
					<label for="userAge">나이</label>
				</th>
				<td colspan="2">
					<input 
						id="userAge"
						class="form-control form-control-sm"
						type="number"
						name="userAge"
						placeholder="나이 입력"
						autocomplete="off"
						min="1"
					/>
				</td>
				
			</tr>
	<!--  -->	
			<tr>
			
				<th class="align-middle">
					성별
				</th>
				<td colspan="2">
					<div class="d-flex justify-content-start">
						<div class="btn-group" data-toggle="buttons">
							 <div class="form-check">
							      <input type="radio" class="form-check-input" id="man" name="userGender" value="남자" checked>
							      <label class="form-check-label" for="man">남자</label>
						    </div>
						    &nbsp;&nbsp;&nbsp;
						    <div class="form-check">
							      <input type="radio" class="form-check-input" id="woman" name="userGender" value="여자">
							      <label class="form-check-label" for="woman">여자</label>
						    </div>
						</div>
					
					</div>
				</td>
						
			</tr>
	<!--  -->	
			<tr>
		
				<th class="align-middle">
					<label for="userEmail">이메일</label>
				</th>
				<td colspan="2">
					<input 
						id="userEmail"
						class="form-control form-control-sm"
						type="email"
						name="userEmail"
						placeholder="이메일 입력"
						autocomplete="off"
					/>
				</td>
				
			</tr>
	<!--  -->			
			<tr>

				<td colspan="3" class="align-middle table-secondary text-center">
					<!-- 비밀번호 일치 검사 결과 메시지가 출력될 영역 -->
					<h5 id="passwordCheckMessage" style="color: red; font-weight: bold;"></h5>
					<!-- 아이디 중복 검사 결과 메시지가 출력될 영역 -->
					<h5 id="idCheckMessage" style="color: violet; font-weight: bold;"></h5>
					<!-- 오류 메시지가 출력될 영역 -->
					<h5 id="errorMessage" style="color: crimson; font-weight: bold;">
					 	<%-- ${messageType}  ${messageContent} --%>  <!-- /1/ -->
					</h5>
					
					<!-- <input class="btn btn-outline-success btn-sm" type="submit" value="회원가입"/> --> <!-- /1/ -->
					<input class="btn btn-outline-success btn-sm" type="button" value="회원가입" onclick="userRegister()"/> <!-- /2/ -->
					<input class="btn btn-outline-danger btn-sm" type="reset" value="다시쓰기"/>
				</td>
			
			</tr>
	<!--  -->		
		</table>
	</form>
</div>

<!-- 
	현재 프로젝트는 session을 사용하지 않기때문에 k20240220_1_register 프로젝트에서 사용하던
	모든 스크립트릿을 삭제한다.
	모달 창이 띄워진 상태에서는 모달 창을 닫기 전에는 다른 작업이 실행되면 안되므로
	다른 작업이 실행되지 않는 모달 창 코드를 부트스트랩에서 가져온다.
	모달 창을 register.js에서 띄우기때문에 모달 창을 띄우느 스크립트를 삭제한다.
 -->
<!-- Modal -->
<div id="messageModal"  class="modal fade"data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
<!-- 헤더 -->    
      <div id="messageCheck" class="modal-header">
        <h1 id="messageType" class="modal-title fs-5">
        	Modal title
        </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> <!-- X버튼 -->
      </div>
<!-- 바디 -->      
      <div id="messageContent" class="modal-body">
        ...
      </div>
<!-- 풋터 -->      
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger btn-sm" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>









</body>
</html>
































