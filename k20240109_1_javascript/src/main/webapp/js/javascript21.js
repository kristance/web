const ids = ['aaa','bbb','ccc', 'ddd'];


function confirmChk () {
//	 중복 검사 할 아이디를 얻어온다.
	let id = document.getElementById('id').value.trim();
//	console.log(id);
	
//	아이디 중복 검사 메시지를 출력한 div 태그를 얻어온다.
	let div = document.getElementsByTagName('div')[0];
	div.innerHTML = id;
	
//	입력한 아이디가 아이디 목록에 존재하는가 검사한다.
	if (id.length == 0) {
		div.innerHTML = '<br/><b style="color:red;">중복체크할 아이디를 입력하세요</b><br/>';
		
	} else if(ids.indexOf(id) >= 0){
		div.innerHTML = '<br/><b><span style="color:red;">' + id + '</span>은(는)사용할 수 없는 아이디입니다.</b><br/>';
	} else {
		div.innerHTML = '<br/><b><span style="color:red;">' + id + '</span>은(는)사용할 수 있는 아이디입니다.</b><br/>' 
						 + '<input type="button" value="사용" onclick="insertID(\''+ id +'\')"/>';
		// 	자바스크립트 함수는 변수에 저장된 문자열을 호출하는 함수의 인수로 전달하려면 변수명만 사용하면 안된다. 
		//	변수명만 사용하면 변수의 저장된 값이 숫자일 경우 데이터가 잘 전달이 되나, 변수에 저장된 값이 숫자가 아닐 경우
		//	변수에 저장된 값을 문자열로 인식하는 것이 아니고 변수로 인식해서 변수가 정의되지 않았다는 에러가 발생된다.
		//	id라는 변수에 'hong'이 저장되어 있을 때 id라는 변수를 함수로 전달하면 'hong'이라는 묹자열로 인식하는 것이 아니고
		//	hong이라는 변수로 인식한다.
		//	변수에 저장된 문자열을 함수의 인수로 전달하려면 변수이름 앞뒤에 따옴표를 붙여서 전달해야 한다.
		//	큰따옴표와 작은따옴표가 모두 사용된 상태일 경우 또, 따옴표를 따옴표를 찍어야 한다면 \" 또는 \'를 사용해야한다.
		
		
	}
	 
//	아이디를 입력하지 않았거나 사용중인 아이디일 경우 아이디를 다시 입력할 수 있도록 
//	아이디 입력 상자의 내용을 지우고 포커스를 이동시킨다.
	document.getElementById('id').value = '';
	document.getElementById('id').focus();
	
	
}

/*
ids.reduce(function acc, value) {
	if(!acc) {
		if (id == value) {
			return true;
		} else {
			return false;
		}
	} else {
		return acc;
	}
}
*/

function insertID(id) {
//	console.log('insertID() 실행');
//	중복검사를 통과한 아이디를 부모 창으로 넘기고 비밀번호에 포커스를 위치시킨다.
//	console.log(id);

	opener.document.getElementsByName('id')[0].value = id;
	opener.document.getElementsByName('password')[0].focus();
//	중복 검사창을 닫는다.
	self.close();
}
































































































