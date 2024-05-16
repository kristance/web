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






























