function addAppend() {
	let fieldset = document.querySelector('#addElement');
	console.log(fieldset);
	
	let p = document.createElement('p'); // <p></p> 생성
	p.innerHTML = '<b>fieldset 내부의 div 태그 뒤에 추가</b>';
	fieldset.appendChild(p); 
	 	
}

function addBefore() {
	let fieldset = document.querySelector('#addElement');
	let p = document.createElement('p'); // <p></p> 생성
	p.innerHTML = '<b>fieldset 내부의 div 태그 앞에 추가</b>';
//	let div = document.getElementsByTagName('div')[0];
	let div = document.querySelectorAll('#addElement > div')[0];
	
//	insertBefore(태그1, 태그2) : 태그2 앞에 태그1을 삽입한다.
	
	fieldset.insertBefore(p, div);
	
}

function moveElement() {
	let fieldset = document.querySelector('#addElement');
	
//	children[인덱스]	 : 선택된 태그의 인덱스 번쨰에 해당되는 자식 요소를 얻어온다.
	console.log(fieldset.children[0]);
	console.log(fieldset.children[1]);
	
//	특정 태그를 선택해서 다른 위치에 넣어주면 기존 위치에서 제거된다. -> 이동된다.
	let body = document.body;
	body.appendChild( fieldset.children[1] );	
	
		
}

































