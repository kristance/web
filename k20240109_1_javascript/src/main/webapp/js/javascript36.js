function createImg() {
// 	라디오 버튼의 value 속성값을 얻어와서 이미지의 경로와 이름으로 사용한다.
	 let radios = document.getElementsByName('radioBtn');
//	 console.log(radio);
	
	let radioValue = ''; // 브라우저에 표시할 이미지의 경로,이름
	 for (let radio of radios) {
	 	// console.log(radios.checked);
	 	if(radio.checked) {
		 	// console.log(radios.value);
		 	radioValue = radio.value;
		 }
	 }
	 console.log(radioValue);
	
	
//	img 태그를 넣어줄 div 태그를 얻어온다.
	let div = document.querySelector('#imageView');
	
//	라디오 버튼을 선택하고 이미지 표시 버튼을 클릭할 때마다 이미지가 변경되게 하려면
//	기존에 표시되던 img 태그를 제거하고 새로 만든 img 태그를 넣어주면 된다.
	
//	삭제할 태그를 선택한다.
//	firstElementChild : 첫번째 자식 태그
//	lastElementChild : 마지막 자식 태그
	let removeImg = div.lastElementChild; // div 태그 아래 <br/>태그
	
//	removeChild(태그) : 인수로 지정된 element(태그)를 html 문서에서 제거한다.
	div.removeChild(removeImg); // div 태그 아래 <br/>태그를 삭제하고 <img>태그를 삽입한다.
	
//	img 태그를 만들고 src 속성값을 radioValue에 저장된 값으로 지정한다.
	let img = document.createElement('img'); // <img/>
	img.setAttribute('src', radioValue); // <img src="./images/img0*.jpg"/>
	
//	div 태그에 img 태그를 넣어준다.
	div.appendChild(img);	
}

function removeImg() {
	let div = document.querySelector('#imageView');
	div.innerHTML = '<br/>'
	
}









































































