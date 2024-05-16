//	비밀번호가 일치하는지 확인하는 함수
function passwordCheckFunction() {
	
	let userPassword = $('#userPassword').val();
	let userPassword2 = $('#userPassword2').val();
	
//	console.log(`userPassword : ${userPassword}, userPassword2 : ${userPassword2}`);
	
	if (userPassword != userPassword2) {
		$('#passwordCheckMessage').html('비밀번호가 다름');
	} else {
		$('#passwordCheckMessage').html('비밀번호가 같음');
		
	}
	
/**/	
}


//	===================================================================
//	jQuery AJAX
//	===================================================================

//	회원 가입을 실행하는 함수
function userRegister() {
//	index.jsp에서 테이블에 저장할 데이터를 얻어온다.
	let userId = $('#userId').val();
	let userPassword = $('#userPassword').val();
	let userPassword2 = $('#userPassword2').val();
	let userName = $('#userName').val();
	let userAge = $('#userAge').val();
	let userGender = $('input[name=userGender]:checked').val();
	let userEmail = $('#userEmail').val();

//	console.log(userId, userPassword, userPassword2, userName, userAge, userGender, userEmail);
	
//	jQuery AJAX -> $.ajax({ .... })
//	type에 GET 방식 요청을 GET, POST 방식 요청은 POST를 입력한다.
//	url에 요청할 서블릿을 입력한다.
//	서블릿으로 데이터를 전송하는 방법은 2가지가 있는데 url에 ?을 사용한 쿼리 스트링 방식을 사용하는 방법과
//	data에 { key : value } 형태로 사용하느 방법이 있다.
//	success에 AJAX 요청이 성공하면 실행할 콜백 함수를 실행한다.
//	error에 AJAX 요청이 실패하면 실행할 콜백 함수를 실행한다.

	$.ajax({
//		type : 'GET', // GET 방식으로 서블릿을 요청한다.
		type : 'POST', // POST 방식으로 서블릿을 요청한다.
		
//		쿼리 스트링 사용한 서블릿 호출과 데이터 전송
//		url : './UserRegister?userId=' + userId + '&userPassword=' +
//	 			userPassword + '&userPassword2=' + userPassword2+ '&userName=' + userName +
//	 			 '&userAge=' + userAge + '&userGender=' + userGender + '&userEmail=' + userEmail,

//		data 사용한 서블릿 호출과 데이터 전송

		url : './UserRegister',
		data : {
			// key : value
			userId : userId,
			userPassword : userPassword,
			userPassword2 : userPassword2,
			userName : userName,
			userAge : userAge,
			userGender : userGender,
			userEmail : userEmail
		},
//		AJAX 요청이 성공하면 실행할 콜백 함수	
//		AJAX 요청이 성공하면 response.getWriter().write(문자열)의 문자열이 콜맥 함수의 인수로 넘어온다.
		success : (res) => {
//			alert('요청 성공 - ' + res);
//			다음 데이터를 입력받기 위해 텍스트 상자의 내용을 지운다.
			$('#userId').val('');
			$('#userPassword').val('');
			$('#userPassword2').val('');
			$('#userName').val('');
			$('#userAge').val('');
			$('input[name=userGender]:checked').val('');
			$('#userEmail').val('');
			$('#userId').focus();
			
//			서블릿 응답에 따른 메시지를 출력한다.
			switch (res) {
				case '1' : 
//					alert('에러 발생 : 모든 내용을 입력하세요.');
					$('#errorMessage').html('에러 발생 : 모든 내용을 입력하세요.');
					$('#messageType').html('에러 발생');
					$('#messageContent').html('모든 내용을 입력하세요');
					$('#messageCheck').addClass('bg-warning');
//					$('#messageCheck').attr('class', 'modal-header bg-warning');
					break;
				case '2' : 
					$('#errorMessage').html('에러 발생 : 비밀번호가 일치하지 않습니다.');
					$('#messageType').html('에러 발생');
					$('#messageContent').html('비밀번호가 일치하지 않습니다.');
					$('#messageCheck').addClass('bg-warning');
//					$('#messageCheck').attr('class', 'modal-header bg-warning');
					break;
				case '3' : 
					$('#errorMessage').html('회원 가입 성공.');
					$('#messageType').html('성공');
					$('#messageContent').html('회원 가입 성공.');
					$('#messageCheck').addClass(' bg-success');
//					$('#messageCheck').attr('class', 'modal-header bg-success');
					break;
				case '4' : 
					$('#errorMessage').html('에러 발생 : 이미 존재하는 회원 아이디 입니다.');
					$('#messageType').html('에러 발생');
					$('#messageContent').html('이미 존재하는 회원 아이디 입니다.');
					$('#messageCheck').addClass('bg-dark text-white');
//					$('#messageCheck').attr('class', 'modal-header bg-warning');
					break;
			}
//			모달 창을 띄운다
			$('#messageModal').modal('show');
		},
//		AJAX 요청이 실패하면 실행할 콜백 함수	
//		AJAX 요청이 실패하면 에러 정보가 콜맥 함수의 인수로 넘어온다.
		error : (err) =>  alert('요청 실패 - ' + err.status) 
		
	})	
	
	
/**/	
}



//	아이디 중복 검사를 실행하는 함수
function registerCheckFunction () {
//	중복 검사할 ID를 얻어온다.
	let userId = $('#userId').val();
	console.log(userId);
	
	$.ajax ({
		type : 'POST',
		url : './UserRegisterCheck',
		data : {
			userId : userId
		},
		success : (res) => {    // res -> UserRegisterCheck의 response.getWriter().write(result)에서 result 인수
//					alert('요청 성공 - ' + res);
			switch (res) {
				case '1' : 
//					alert('1 : 아이디를 입력하고 중복 체크 바랍니다.');
					$('#idCheckMessage').html('1 : 아이디를 입력하고 중복 체크 바랍니다.');
					$('#messageType').html('## 에 러 ##');
					$('#messageContent').html('1 : 아이디를 입력하고 중복 체크 바랍니다.');
					$('#messageCheck').addClass('bg-warning');
					$('#userId').val('');
					$('#userId').focus();			
					break;
				case '2' : 
//					alert('2 : 이미 사용중인 아이디 입니다.');
					$('#idCheckMessage').html('2 : 이미 사용중인 아이디 입니다.');
					$('#messageType').html('## 에 러## ');
					$('#messageContent').html('2 : 이미 사용중인 아이디 입니다.');
					$('#messageCheck').addClass('bg-warning');
					$('#userId').val('');
					$('#userId').focus();			
					break;
				case '3' : 
//					alert('3 : 사용 가능한 아이디 입니다.');
					$('#idCheckMessage').html('3 : 사용 가능한 아이디 입니다.');
					$('#messageType').html('## 확 인 ##');
					$('#messageContent').html('3 : 사용 가능한 아이디 입니다.');
					$('#messageCheck').addClass('bg-success');
					$('#userPassword').focus();
					break;
			}
			$('#messageModal').modal('show');

				},
		error : (err) =>  alert('요청 실패 - ' + err.status) 
	})
	
	
/**/	
}






























