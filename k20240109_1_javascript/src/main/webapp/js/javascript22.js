function searchID() {
	let doc = document.getElementById('test');
	console.log(doc);
	console.log(doc.length);
	doc.innerHTML += '<br/>getElementById() 함수는 DOM에서 id 속성을 선택한다';
	doc.style.backgroundColor = 'lavenderblush';

}


function searchName() {
	let docs = document.getElementsByName('test');
	console.log(docs);
	console.log(docs.length);
	
//	docs[0].value = '홍길동'; 
//	docs[1].value = '장길산';
//	docs[2].value = '임꺽정'; // 박스 안에 집어넣으려면 value를 붙여한다.

	const names = ['홍길동','장길산','임꺽정'];
	
//	for (let i = 0; i < docs.length; i++) {
//		docs[i].value = names[i];
//	}
	
//	let i = 0;
//	for (let doc of docs) {
//		doc.value = names[i++];
//	}

//	for (let i in docs ) {
//		docs[i].value = names[i];
//	}
	
//	배열명.forEach(변수[, 인덱스])	
//	변수에는 배열에 저장된 각 인덱스의 데이터가 차례대로 넘어가고, 
//	인덱스에는 변수에 저장되는 데이터의 인덱스가 저장된다.
//	DOM 선택 함수 중에서 getElementByName()은 NodeList 객체로 얻어오고,
//	getElementsByTagName()과 getElementsByClassName()은 HTMLCollection 객체로 얻어온다.
//	HTML Collection 객체에는 forEach() 함수를 사용할 수 없다.
//	docs.forEach(function (doc, i) {
//		console.log( doc + ',' + i );
//		doc.value = names[i++];
//	})

	docs.forEach( (doc, i) => doc.value = names[i++]);

}


function searchTagName() {
	let docs = document.getElementsByTagName('p');
	console.log(docs);
	console.log(docs.length);
	
	for (let i in  docs) {
		docs[i].style.backgroundColor = 'lavender';
	}
	
//	docs.forEach( (doc, i) => doc.style.backgroundColor = red); // 에러 발생
	
}

function searchClass() {
	let docs = document.getElementsByClassName('test');
	console.log(docs);
	console.log(docs.length);
	
	for (let i in  docs) {
		docs[i].style.backgroundColor = 'seagreen';
	}
	
//	docs.forEach( (doc, i) => doc.style.backgroundColor = red); // 에러 발생
}
	
function searchCSSSelector() {
//	id 속성으로 탐색	
//	querySelector('#id속성값')
	let doc = document.querySelector('#test');
	console.log(doc);
	doc.innerHTML = 'querySelector()로 id 탐색';
	doc.style.color ='white';
	doc.style.backgroundColor ='red';
	
//	class 속성으로 탐색
//	querySelectorAll('.class속성값');
	let docs = document.querySelectorAll('.test');
	console.log(docs);
	
//	for (let i in  docs) {
//		doc.innerHTML = 'querySelectorAll()로 Class 탐색';
//		doc.style.color ='yellow';
//		docs[i].style.backgroundColor = 'black';
//	}
	
	docs.forEach( (doc) => {
		doc.innerHTML = 'querySelectorAll()로 Class 탐색';
		doc.style.color ='yellow';
		doc.style.backgroundColor = 'black';
	})
	
//	tag 이름으로 선택
//	querySelectorAll('tag이름');
	docs = document.querySelectorAll('p');
	console.log(docs);
	
	
//	for (let i in  docs) {
//		doc.innerHTML = 'querySelectorAll()로 tag 탐색';
//		doc.style.color ='yellow';
//		docs[i].style.backgroundColor = 'black';
//	}

docs.forEach( (doc) => {
		doc.innerHTML = 'querySelectorAll()로 tag 탐색';
		doc.style.color ='yellow';
		doc.style.backgroundColor = 'black';
	})
	
}
	






















































































