function elementCreate() {
//	createElement('태그이름') : 인수로 지정한 element(태그)를 만든다. 
	let div = document.createElement('div'); // <div></div>
	console.log(div);
	
	/*
//	createAttribute('속성이름') : 인수로 지정한 속성을 만든다.
	let attr = document.createAttribute('style'); // style=""
//	nodeValue : 속성에 속성값을 추가한다.
	attr.nodeValue = 'border:1px solid black'; // style="border:1px solid black"
//	setAttributeNode(속성) : 태그에 속성을 추가한다.
	div.setAttributeNode(attr);
	*/
	
//	setAttribute('속성이름', '속성값') : 속성을 만들고 속성값을 추가한 후 태그에 추가한다.
	div.setAttribute('style','border:1px solid black');
	
	div.innerHTML = '<marquee>div 태그 추가</marquee>';
	
//	appendChild(태그) : 인수로 지정된 element(태그)를 html 문서에 추가한다.
	document.body.appendChild(div);	
}











































































