function a1() {
//	javascript
//	let span = document.getElementsByTagName('span');
	let span = document.querySelectorAll('span');
//	console.log(span.length);
//	for (let i= 0 ;i < span.length;i++) {
//		span[i].style.color = 'red';
//	}
//	--------------------------------------------------------------
//	jQuery
	$('span').css("color","crimson"); // tag이름 -> 태그 선택자
}

function a2() {
//	javascript
//	let t1 = document.getElementById('t1');
	let t1 = document.querySelector('#t1');
	t1.style.color = 'green';
//	--------------------------------------------------------------
//	jQuery
	$('#t1').css('color','green'); // #아이디 -> id 선택자
	
}

function a3() {
//	javascript
//	let t2 = document.getElementsByClassName('t2');
//	let t2 = document.querySelectorAll('.t2');
//	for (let c of t2) {
//		c.style.color = 'orange';
//	}
//	--------------------------------------------------------------
//	jQuery
	$('.t2').css('color','orange'); // .클래스 -> class 선택자
}

function a4() {
//	javascript
//	let child = document.querySelectorAll('li > span');
//	for (let c of child) {
//		c.style.color = 'violet';
//	}
//	--------------------------------------------------------------
//	jQuery
	$('li > span').css('color','violet'); // > -> 자식 선택자
	
}

function a5() {
//	javascript
	let child = document.querySelectorAll('li span');
	for (let c of child) {
		c.style.color = 'tomato';
	}
//	--------------------------------------------------------------
//	jQuery
	$('li span').css('color','tomato'); // 공백 -> 자손 선택자
	
}

//   nth-child(), nth-last-child()
//   같은 부모 요소를 가지는 형제 요소 중에서 특정 순서에 있는 요소를 선택하는 선택자이다.
//   nth-child()는 앞에서 부터 세고 nth-last-child()는 뒤에서 부터 센다.
//   인수로 숫자, 연산식(곱하기는 숫자가 앞에 와야하고 더하기 빼기는 숫자가 뒤에 와야한다.)
//   odd(홀수), even(짝수)도 사용할 수 있다.


function a6() {
//	$('li').eq(0)와 $('li:eq(0)')는 같은 의미로 사용된다.
//	$('li').eq(0) -> 모든 li 태그를 선택한 후 0번째 인덱스 요소를 선택한다.
//	$('li').eq(0).css('backgroundColor','lavenderblush');
//	$('li:eq(1)') -? li 태그 중에서 1번째 인덱스 요소를 선택한다.
//	$('li:eq(1)').css('backgroundColor','lavender');

//	eq()는 인덱스가 0부터 시작하고 nth-child(), nth-last-child()는 인덱스가 1부터 시작한다. -> 주의!!!!
//	$('li:nth-child(1)').css('backgroundColor','lightgreen'); // 처음부터 위치를 센다
//	$('li:nth-last-child(1)').css('backgroundColor','gray'); // 마지막부터 위치를 센다.

//	$('li:nth-child(odd)').css('backgroundColor','lightgreen');  // 홀수 인덱스 요소만 선택한다.
//	$('li:nth-child(even)').css('backgroundColor','gray'); // 짝수 인덱스 요소만 선택한다.

//	n은 자동으로 0부터 1씩 증가하는 정수이고 '+','-','*' 연산을 할 수 있다.
//	'+','-'는 n 뒤에 사용하고 '*' 연산자는 생략하고 숫자를 n 앞에 입력하면 '*' 연산이 된다.
//	$('li:nth-child(n)').css('backgroundColor','lightgreen'); // 모두 선택한다.
//	$('li:nth-child(n + 3)').css('backgroundColor','lightgreen'); // 3번째 인덱스부터 모두 선택한다.
	$('li:nth-child(2n)').css('backgroundColor','lightgreen'); // 짝수 인덱스만 선택된다.
	$('li:nth-child(2n + 1)').css('backgroundColor','crimson'); // 홀수 인덱스만 선택된다.

}

//   first-child: 같은 부모 요소를 가지는 형제 요소 중에서 첫번째 자식 요소만 선택한다.
//   last-child: 같은 부모 요소를 가지는 형제 요소 중에서 마지막 자식 요소만 선택한다.

function a7() {
	$('li:first-child').css('backgroundColor','lavender');
	
}

function a8() {
	$('li:last-child').css('backgroundColor','blue');
	
}	
























































