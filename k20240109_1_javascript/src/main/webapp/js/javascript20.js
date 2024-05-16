function requestID() {
//	alert('onload 이벤트 실행');
//	부모 창의 데이터에서 자식 창에 사용할 데이터를 얻어온다.
//	opener는 현재 창을 띄운 부모 창을 의미한다.
	let parentID = opener.document.getElementById('parentID').value;
	console.log(parentID);
//	부모 창에서 얻어온 데이터를 자식 창의 객체에 넣어준다.
	document.getElementById('childID').value = parentID;
}

function sendID1() {
//	부모 창으로 넘겨줄 자식 창의 데이터를 가져온다.
	let childID = document.getElementById('childID').value;
	console.log(childID);
//	부모 창으로 데이터를 넘겨준다.
	opener.document.getElementById('requestID').value = childID;
}

function sendID2() {
//	부모 창으로 넘겨줄 자식 창의 데이터를 가져온다.
	let childID = document.getElementById('childID').value;
	console.log(childID);
//	부모 창으로 데이터를 넘겨준다.
	opener.document.getElementById('requestID').value = childID;

//	id 속성이 아닌 name 속성이나 태그 이름 및 class 속성으로 객체를 얻어오려면 
//	id는 무조건 1개만 사용할 수 있으므로 Element처럼 단수형을 사용하고,
//	name 속성이나 태그 이름 및 class 속성은 같은 속성 값이 여러개 나올수 있기 때문에
//	Elements처럼 복수형으로 사용한다.

//	getElementById() : 인수로 지정된 id 속성을 가지는 객체를 얻어온다. 
//	getElementsByName() : 인수로 지정된 name 속성을 가지는 모든 객체들을 배열로 얻어온다. 
//	getElementsByTagName() : 인수로 지정된 모든 tag 객체들을 배열로 얻어온다. 
//	getElementsByClassName() : 인수로 지정된 class 속성을 가지는 모든 객체들을 배열로 얻어온다. 

//	getElementById() 함수는 1개만 얻어오기 때문에 그냥 변수에 저장해서 사용하면 되지만,
//	getElemnetsByName(), getElementByTagName(), getElementByClassName() 함수는 여러개를 배열로 얻어오기 때문에
//	그냥 사용하면 안되고, 인덱스를 지정해서 사용해야한다.

	opener.document.getElementsByName('requestID')[0].value = childID;
	opener.document.getElementsByTagName('input')[4].value = childID;
	opener.document.getElementsByClassName('requestID')[0].value = childID;
	opener.document.getElementsByTagName('h1')[1].innerHTML = 
		'<marquee style="color:crimson">' + childID + '</marquee>';

//	자식 창의 데이터를 부모 창으로 넘겨준 후 자식 창을 닫는다.
	self.close(); //	현재 창을 닫는다.
}
















































































































