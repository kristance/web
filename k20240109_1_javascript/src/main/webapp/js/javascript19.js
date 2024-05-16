function openWin() {
//	console.log('openWin() 실행');
//	window.open();
//	window.open(url, title, option);
	let url = './20_javascript_윈도우2.html'; //	새로 띄울 창에 표시할 페이지 이름
	title = '아이디 중복 검사'; //	윈도우 이름
	option = 'top=50px, left=200px, width=600px, height=500px'; // 윈도우 옵션
//	option을 생략하면 현재 브라우저에 새 탭으로 새 창이 열린다.
//	option을 지정하면 지정된 위치에 지정된 크기로 브라우저가 새로 실행되고 새 창이 열린다.
	window.open(url, title, option);
}


function registerForm() {
//	감춰놓은 id 속성이 register로 지정된 div 태그를 화면에 표시한다.
	document.getElementById('register').style.display = 'block';
	document.body.style.backgroundColor = 'grey';
	
//	모든 버튼을 비활성화 시킨다.
//	name 속성이 btn인 모든 객체를 얻어온다.
	let btns = document.getElementsByName('btn');

//	for(let i = 0; i< btns.length; i++ ) {
//		btns[i].disabled = 'disabled';
//	}

//	for (let btn of btns) {
//		btn.disabled = 'disabled';
//	}

//	for (let i in btns) {
//		btns[i].disabled = 'disabled';
//	}

//	btns.forEach(function (btn) {
//		btn.disabled = 'disabled'
//	});

//	btns.forEach( (btn) => btn.disabled = 'disabled'	);

//	모든 input 태그를 비활성화 시킨다.
	let inputs = document.getElementsByTagName('input');
	for(let i = 0; i< 7; i++ ) {
		inputs[i].disabled = 'disabled';
	}

}

function closeWin() {
//	id 속성이 register로 지정된 div 태그를 화면에서 사라지게한다.
	document.getElementById('register').style.display = 'none';
	document.body.style.backgroundColor = 'white';
	
//	registerForm() 함수에서 비활성화한 input 태그를 활성화한다.
	let inputs = document.getElementsByTagName('input');
	for(let i = 0; i< 7; i++ ) {
		inputs[i].disabled = '';
	}
}

function idChk() {
	alert('중복체크 버튼을 클릭해서 아이디 중복체크를 하세요.');
}

function idCheck() {
	let url = './21_javascript_윈도우3.html';
	title = '아이디 중복 검사';
	option = 'top=50px, left=200px, width=600px, height=700px';
	window.open(url, title, option);
}
































































































