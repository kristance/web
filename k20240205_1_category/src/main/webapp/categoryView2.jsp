<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
  <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> <!-- 대입문, 제어문 -->
  <%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%> <!-- 서식 -->
  <%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%> <!-- 함수 -->
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>카테고리 프로젝트</title>

<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="./js/formCheck.js" defer="defer" ></script>

</head>
<body class="p-3">

<h1 class="m-3">Category 프로젝트</h1>

<!-- 메인 카테고리 입력 -->
<!-- jQuery로 메인 카테고리 입력 폼 체크 -->
<form class="row m-3" action="mainCategoryInsert.jsp" method="post">
	<div class="col-md-3">
		<input id="category" class="form-control" type="text" name="category"/>
	</div>
	<div class="col-md-2">
		<input class="btn btn-outline-dark btn-sm" type="submit" value="메인 카테고리 만들기"/>
	</div>
</form>

<br/>
<hr style="color: red"/>
<br/>

<!-- 카테고리 갯수만큼 반복하며 카테고리 목록을 출력하고 서브 카테고리를 입력받는다. -->
<c:forEach var="vo" items="${categoryList.list}">

	<!-- 서브 카테고리를 입력하는 모든 폼에 서로 다른 name 속성이 지정되어야 식별이 가능하므로 폼 이름을 만든다. -->
	<%-- <c:set var="formName" value="form${vo.idx}"></c:set> --%>



	<!-- 서브 카테고리 입력 -->
	<!-- jQuery로 서브 카테고리 입력 폼 체크 -->
		<%-- <form class="sub_form row m-1" action="subCategoryInsert.jsp" method="post" name="${formName}"> --%>
								 <!-- 폼 이름 만들어서 폼에 name 또는 id속성을 지정해 각각의 폼을 선택(멀티 submit을 구현)-->
		<form class="sub_form row m-1" action="subCategoryInsert.jsp" method="post">
			<div class="col-md-4">
				<input type="text" name="idx" value="${vo.idx}" size="1" />
				<input type="text" name="gup" value="${vo.gup}" size="1" />
				<input type="text" name="lev" value="${vo.lev}" size="1" />
				<input type="text" name="seq" value="${vo.seq}" size="1" />
				
				<!-- 카테고리 레벨(lev)에 따른 들여쓰기를 한다. -->
				<c:if test="${vo.lev > 0}">
					<c:forEach var="i" begin="1" end="${vo.lev}" step="1">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					</c:forEach>
					<img src="./images/arrow2.png" width="20"/>
				</c:if>
				
				<!-- 삭제된 카테고리 블라인드 처리 -->
				<c:if test="${vo.deleteCheck == 'YES'}">
					삭제된 카테고리입니다.
				</c:if>
				<c:if test="${vo.deleteCheck != 'YES'}">
					<!-- 신고된 카테고리 블라인드 처리 -->
					<c:if test="${vo.report > 10}">
						신고 횟수가 초과된 카테고리입니다.
					</c:if>
					<c:if test="${vo.report <= 10}">
						<span>${vo.category}(신고횟수 : ${vo.report})</span>
					</c:if>
				</c:if>
				
			</div>
			
			<!-- 삭제되지않고 신고 횟수가 초과되지 않은 카테고리는 서브 카테고리 입력 상자와 모든 버튼을 나오게 한다. -->
			<c:if test="${vo.deleteCheck != 'YES' && vo.report <= 10}">
				<div class="col-md-3">
					<input class="sub_category form-control" type="text" name="category"/>
				</div>
				<div class="col-md-5">
					<input class="btn btn-outline-dark btn-sm" type="submit" value="서브 카테고리 만들기"/>
					
					<%-- 
					<!-- 삭제된 카테고리는 삭제 버튼 비활성화, 복구 버튼 활성화-->
					<c:if test="${vo.deleteCheck == 'YES'}">
						<input class="btn btn-outline-danger btn-sm" type="button" value="삭제" disabled="disabled"
						/>
						<input class="btn btn-outline-primary btn-sm" type="button" value="복구"
						onclick="location.href='restore.jsp?idx=${vo.idx}'"/>
					</c:if>
					<!-- 삭제되지 않은 카테고리는 삭제 버튼 활성화, 복구 버튼 비활성화-->
					<c:if test="${vo.deleteCheck != 'YES'}">
						<input class="btn btn-outline-danger btn-sm" type="button" value="삭제"
						onclick="location.href='delete.jsp?idx=${vo.idx}'"/>
						<input class="btn btn-outline-primary btn-sm" type="button" value="복구" disabled="disabled"/>
					</c:if> 
					--%>
					
					
					<!-- 삭제 가능한 카테고리는 삭제 버튼만 표시한다.-->
					
					
					<c:if test="${vo.deleteCheck != 'YES'}">
						<input class="btn btn-outline-danger btn-sm" type="button" value="삭제"
						<%-- onclick="location.href='delete.jsp?idx=${vo.idx}'"/> --%>
						onclick="mySubmitDelete(form)"/>
					</c:if> 
					
					<!-- 신고 가능한 카테고리만 신고 버튼을 표시한다.  -->
					<c:if test="${vo.report <= 10}">
						<input class="btn btn-outline-warning btn-sm" type="button" value="신고"
						<%-- onclick="location.href='report.jsp?idx=${vo.idx}'"/> --%>
						onclick="mySubmitReport(form)"/>
					</c:if>
					
					
					<input class="btn btn-outline-success btn-sm" type="button" value="수정"
					onclick="mySubmitUpdate(form)"/>
					<%-- onclick="mySubmitUpdate(${formName})"/> --%> <!-- 폼 이름 만들어서 폼에 name 또는 id속성을 지정해 각각의 폼을 선택(멀티 submit을 구현)-->
					<!-- 자바스크립트 함수의 인수로 form을 입력하면 현재 컨트롤이 포함된 form이 함수로 넘어간다. -->		
				</div>
			</c:if>
					
					
				<!-- 복구 가능한 카테고리는 삭제 버튼만 표시한다. -->
			<c:if test="${vo.deleteCheck == 'YES'}">
				<div class="col-md-5">
						<input class="btn btn-outline-primary btn-sm" type="button" value="복구"
						<%-- onclick="location.href='restore.jsp?idx=${vo.idx}'"/> --%>
						onclick="mySubmitRestore(form)"/>
				</div>
			</c:if>
			
		</form>
		
</c:forEach>

</body>
</html>