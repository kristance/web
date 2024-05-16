function alertTest() {
//	alert('단순한 메시지')
	alert('단순한 메시지를 출력하는 대화창')
}

function confirmTest() {
//	confirm('질문 메시지')
//	확인 버튼이 클릭되면 true, 취소 버튼이 클릭되면 false를 리턴한다.
	let result = confirm('브라우저 배경색을 바꾸시겠습니까?')
	console.log(result);
	if (result) {
		document.body.style.backgroundColor = 'black';
		document.body.style.color = 'white';
	}
}

function promptTest() {
//	prompt('메시지')
//	prompt('메시지', '안내메시지')
//	확인 버튼을 클릭하면 입력한 문자열, 취소 버튼을 클릭하면 null을 리턴한다.
	let menu = prompt('점심은 무엇을 먹을까요?\n(1. 짜장면, 2: 김치찌개, 3:짬뽕)','난 짜장면');
	console.log(menu);
	console.log(typeof menu);
	
	switch (menu) {
		case '1':
			console.log('짜장면');
			break;
		case '2':
			console.log('김치찌개');
			break;
		case '3':
			console.log('짬뽕');
			break;
		default :
			console.log('짜장면, 김치찌개, 짬뽕 중에서 고르세요');
			break;
	}
}






































































































