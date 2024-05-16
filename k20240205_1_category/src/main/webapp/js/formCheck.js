function mainFormCheck(obj) {
//	console.log(obj);
//	console.log(obj.category.value);
	if (!obj.category.value || obj.category.value.trim().length == 0) {
		alert('메인 카테고리는 반드시 입력해야 합니다.');
		obj.category.value = '';
		obj.category.focus();
		return false;
	}

	return true;
}

function subFormCheck(obj) {
	if (!obj.category.value || obj.category.value.trim().length == 0) {
		alert('서브 카테고리는 반드시 입력해야 합니다.');
		obj.category.value = '';
		obj.category.focus();
		return false;
	}

	return true;
}


//	------------------------------------------------------------------------------

//	$(document).ready( function () {
//	$(document).ready( () => {
$(() => { 
//		alert('jQuery 로드')
//	메인 카테고리에 아무것도 입력되지 않았나 검사한다.
//	메인 카테고리를 입력하는 form은 1개만 있기때문에 id를 지정해서 처리한다.
//	$('#form').submit(function (event) {})
//	 	-> form이라는 id 속성이 지정된 form에서 submit버튼이 클릭되면 submit() 함수의 인수로 지정한
//			익명함수가 실행된다.
//		-> 이때, 익명 함수의 인수 event로 실행되는 이벤트가 넘어온다.
	
	$('#form').submit(function (event) {
//		alert('메인 카테고리 form에서 submit 버튼이 클릭됨');
//		alert($('#category').val());
//		$.trim() : 인수로 지정된 문자열의 앞, 뒤의 불필요한 빈 칸을 제거한다.
//		alert( $.trim($('#category').val()).length ); // 메인 카테고리에 입력한 불필요한 공백을 제거한 글자수
		if( $.trim($('#category').val()).length == 0 ) {
			alert('메인 카테고리는 반드시 입력해야 합니다.');
			//	유효성 검사를 실행했는 규칙에 위배되므로 action 페이지로 넘겨주는 submit 이벤트의
			//	기본(default) 동작을 중지시킨다.
			//	preventDefault() : 익명 함수의 인수로 넘어온 이벤트 실행을 강제로 중지시킨다.
			event.preventDefault();
			
			//	category라는 id속성이 지정된 텍스트 상자의 내용을 지운다. -> 선택된 요소의 내용만 지운다.
				$('#category').val('');
			//	form이라는 id속성이 지정된 폼에서 reset 이벤트를 실행한다. -> 폼의 모든 요소의 내용을 지운다.
			//	반드시 [0]이라고 인덱스를 지정해야 정상적으로 실행된다.
			//	$('#form')[0].reset();
			//	category라는 id속성이 지정된 텍스트 상자로 포커스를 옮겨준다.
				$('#category').focus();
			
			
			
		}
	
	})
//	서브 카테고리에 아무것도 입력되지 않았나 검사한다.
//	서브 카테고리를 입력하는 form은 여러개가 있기때문에 class를 지정해서 처리한다.
//	서브 카테고리를 입력하는 폼의 갯수만큼 반복하며 모든 서브 서브 카테고리 입력 폼에 name 속성을 다르게 지정한다.
//		-> 서브 카테고리를 입력하는 폼이 여러개이므로 어떤 폼에서 이벤트가 발생되었나 확인하기 위해서이다.

//	sub_form이라는 class 속성이 지정된 폼의 갯수만큼 each() 함수의 인수로 지정한 익명 함수가 반복되서 실행된다.
//	each() 함수는 인수로 지정된 익명 함수로 2개의 인수를 넘기는데 첫번째 인수는 선택된 객체의 인덱스이고,
//	두번째 인수는 선택된 객체들 중에서 인덱스 번째의 객체이다.
	$('.sub_form').each(function (index, item) {
//		console.log(index, item);
//		addClass() 함수로 each() 함수를 통해서 반복되는 객체(서브 카테고리 입력폼)에 class 속성을 추가한다.
		$(item).addClass('sub_form' + index);
	})
	
//	서브 카테고리를 입력하는 텍스트 상자의 갯수만큼 반복하며 모든 서브 카테고리를 입력하는 텍스트 상자에 
//	서로 다른 class 속성을 지정한다.
	$('.sub_category').each(function (index, item) {
		$(item).addClass('sub_category' + index);
	})
	
	
	$('.sub_form').each(function (index, item) {
		$('.sub_form' + index).submit(function (event) {
			//	서브 카테고리를 입력하는 텍스트 상자에 입력한 글자수
			if( $.trim($('.sub_category' + index).val()).length == 0 ) {
				//	submit 이벤트가 실행된 폼의 카테고리를 얻어온다.
				let categoryName = $.trim($('.sub_form' + index).find('span').text());
				alert(categoryName +' 서브 카테고리는 반드시 입력해야 합니다.');
				event.preventDefault();
				$('.sub_category' + index).val('');
				$('.sub_category' + index).focus();
			}
			
		})
		
		
	})
	
	
	

});



//	수정 버튼이 클릭되면 update.jsp로 폼이 입력된 데이터를 전송하는 함수
function mySubmitUpdate(obj) {
	console.log(obj);
	if (!obj.category.value || obj.category.value.trim().length == 0) {
			alert('수정할 카테고리를 입력해주세요.');
			obj.category.value = '';
			obj.category.focus();
	} else {
		//	인수로 넘어온 폼의 action 페이지를 subCategoryInsert.jsp에서 update.jsp로 수정한다.
		obj.action = 'update.jsp';
		//	action 페이지를 호출하고 폼의 데이터를 전송한다.
		obj.submit();
	}
}
	
	
	
//	삭제 버튼이 클릭되면 delete.jsp로 폼이 입력된 데이터를 전송하는 함수
function mySubmitDelete(obj) {
	console.log(obj);
		obj.action = 'delete.jsp';
		obj.submit();
	}
	
	
	
//	복구 버튼이 클릭되면 retore.jsp로 폼이 입력된 데이터를 전송하는 함수
function mySubmitRestore(obj) {
		
	console.log(obj);
		obj.action = 'restore.jsp';
		obj.submit();
	}
	
	
	
//	신고 버튼이 클릭되면 report.jsp로 폼이 입력된 데이터를 전송하는 함수
function mySubmitReport(obj) {
	console.log(obj);
		obj.action = 'report.jsp';
		obj.submit();
	}













































