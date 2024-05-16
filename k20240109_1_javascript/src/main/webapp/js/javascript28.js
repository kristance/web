function randomNumber(number) {
	//	ramdom() : 0 이상이고 1미만인 무작위수를 발생시킨다.
	for (let i = 0; i < 10; i++) {
		console.log(parseInt(Math.random() * number));
	}

	//	ceil() :올림, floor() : 내림, round():반올림
	console.log('올림 : ' + Math.ceil(3.14));
	console.log('올림 : ' + Math.ceil(3.841592));
	console.log('내림 : ' + Math.floor(3.14));
	console.log('내림 : ' + Math.floor(3.841592));
	console.log('반올림 : ' + Math.round(3.14));
	console.log('반올림 : ' + Math.round(3.841592));

}

function randomColor() {
	/*
	let r = parseInt(Math.random() * 256) // Math.random() * 256 -> 255개의 숫자를 원할때
	let g = parseInt(Math.random() * 256) 
	let b = parseInt(Math.random() * 256) 
	
	console.log(`r : ${r}, g : ${g}, b:${b}`);
	
//	document.body.style.backgroundColor = 'rgb(' + r + ',' + g + "," + b + ')';
	document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
	*/
	
	let random = () => Math.floor( Math.random() * 256 );
	document.body.style.backgroundColor = `rgb( ${ random () },${ random () },${ random () } )`;
}


// 반지름 100 선색 ran 채우기 색 ran

function randomCircle() {
	let radius = Math.floor( Math.random() * 100 ) + 1;
	console.log('원의 반지름 :' + radius);
	
//	let circle = document.getElementById('circle');
	let circle = document.querySelector('#circle');
//	console.log(circle);
	
	circle.style.width = radius * 2 + 'px'; // id 속성값이 circle인 div 태그의 폭
	circle.style.height = radius * 2 + 'px'; // id 속성값이 circle인 div 태그의 높이
	let random = () => Math.floor( Math.random() * 256 );
	circle.style.border = '3px solid ' + `rgb( ${ random () },${ random () },${ random () } )`;
	circle.style.backgroundColor = `rgb( ${random ()}, ${random ()}, ${random ()} )`;
	circle.style.borderRadius = '50%';
	
}

function randomCircleArea() {
//	원의 지름을 얻어온다.
//	id 속성값이 circle인 div 태그의 width 속성 값을 얻어온다.
	let circleWidth = document.querySelector('#circle').style.width;
//	console.log('원의 지름 ' + circleWidth);
//	console.log(typeof circleWidth);
	
	let width = circleWidth.substring(0,circleWidth.length - 2);
//	console.log('원의 지름 : ' + width);
//	console.log(typeof width);
	
	width = parseInt(circleWidth);
//	console.log('원의 지름 : ' + width);
//	console.log(typeof width);
	
	let radius = width / 2;
//	console.log('원의 반지름 : ' + radius);
//	console.log(typeof radius);
	
	let len = 2 * Math.PI * radius; // 원의 둘레
//	console.log(typeof radius);
	let area =  Math.pow(radius,2) * Math.PI; // 원의 너비
	
	document.getElementById('len').innerHTML = Math.round(len) + 'm2';
	document.querySelector('#area').innerHTML = Math.round(area) + 'm3';
	
	
}

































































































