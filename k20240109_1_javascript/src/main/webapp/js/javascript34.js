function searchParent() {
	let child = document.getElementsByTagName('p')[0];
	console.log(child);
	
//	parentNode는 탐색된 요소의 부모 요소를 탐색한다.
	let parentDiv = child.parentNode;
	console.log(parentDiv);
	parentDiv.style.backgroundColor = 'crimson';
	
//	nodeName은 탐색된 요소의 태그 이름을 얻어온다.	
	console.log(parentDiv.nodeName);
	
	
}

function searchChild() {
	let parent = document.querySelectorAll('div')[0];
	console.log(parent);
	
	/*
//	 children은 탐색된 요소의 자식 요소(태그만)를 탐색한다.
	let child = parent.children; // 자식 태그만(p태그) 텍스트 X 
	console.log(child[0]);
	console.log(child[1]);// p
	console.log(child[2]);// p
	console.log(child[3]);// p
	
	child[0].style.backgroundColor = 'red';
	child[1].style.backgroundColor = 'blue';
	child[2].style.backgroundColor = 'seagreen';
	child[3].style.backgroundColor = 'lavenderblush';
	*/
	
//	childNodes은 탐색된 요소의 자식 요소(태그 및 텍스트)를 탐색한다.
	let child = parent.childNodes; 
	console.log(child);
	
	console.log(child[0]); // 텍스트
	console.log(child[1]); // p
	console.log(child[2]); // 텍스트
	console.log(child[3]); // p
	console.log(child[4]); // 텍스트
	console.log(child[5]); // p
	console.log(child[6]); // 텍스트
	
	child[1].style.backgroundColor = 'red';
	child[3].style.backgroundColor = 'blue';
	child[5].style.backgroundColor = 'seagreen';
	
}


function searchTest() {
	let test1 = document.querySelectorAll('p')[3];
		console.log(test1); 
	let div = test1.parentNode;// 자식부터 거슬러올라감
		console.log(div);
		div.style.backgroundColor = 'lavender';
		
	let test4 = document.querySelectorAll('div')[3];
		console.log(test4);
	let child = test4.childNodes;
		console.log(child);
		child[3].style.fontSize = '30px';
	
}





















































































