//	onload 이벤트에서 함수를 할당한다.
//	현재 페이지의 모든 내용이 브라우저에 로딩되고 난 후 onload 이벤트에 할당된 함수가 실행된다.
onload = function () {
//	alert('onload 이벤트 실행');
//	button 태그를 찾아서 onclick 이벤트에 함수를 할당한다.
//	이벤트에서 함수를 할당하기때문에 함수 이름뒤에 ()를 쓰면 자동 실행 함수로 인식해서 페이지가 로딩될 때
//	자동으로 실행되기때문에 자동으로 실행하면 안되는 함수는 함수 이름뒤에 ()를 쓰지 않는다.
	document.getElementsByTagName('button')[0].onclick = testDate1;
	document.getElementsByTagName('button')[1].onclick = testDate2;
	document.getElementsByTagName('button')[2].onclick = testDate3;
	document.getElementsByTagName('button')[3].onclick = testDate4;
	document.getElementsByTagName('button')[4].onclick = testDate5;

}


function testDate1() {
	let date = new Date(); //	현재 컴퓨터 시스템의 현재 날짜의 시간을 얻어온다.
	console.log(date);
	
//	let today = document.querySelectorAll('.today');
	let today = document.getElementsByClassName('today');
	today[0].innerHTML = date; //Tue Jan 16 2024 16:20:03 GMT+0900 (대한민국 표준시)
	today[1].innerHTML = date.toDateString(); // Tue Jan 16 2024
	today[2].innerHTML = date.toLocaleString(); // 2024. 1. 16. 오후 4:20:48
	today[3].innerHTML = date.toLocaleDateString(); //	2024. 1. 16.
	today[4].innerHTML = date.toLocaleTimeString(); // 오후 4:21:28
} 

function testDate2() {
	let date = new Date(); //	현재 컴퓨터 시스템의 현재 날짜의 시간을 얻어온다.
	console.log(date);
//	let year = date.getYear() + 1900; // 년, 1900을 더해야 한다.
	let year = date.getFullYear(); // 년, 1900을 더할 필요없다.
	let month = date.getMonth() + 1; // 월, 1을 더해야 한다.
	let day = date.getDate(); // 일
	let week = date.getDay(); // 요일, 일요일(0), 월요일(1),...토요일(6)
	let hour = date.getHours(); // 시간
	let minute = date.getMinutes(); // 분
	let second = date.getSeconds(); // 초
	let millisecond = date.getMilliseconds(); // 밀리초
	
	
	let weekDay = ['일','월','화','수','목','금','토'];
	
	let now = `${year}년. ${month}월. ${day}일 ( ${weekDay[week]} ) ${hour}:${minute}:${second}:${millisecond}`;
	console.log(now);
	let today = document.getElementsByClassName('today');
	today[5].innerHTML = now;
}


function testDate3() {
	let year = 2024;
	let month = 1;
	let day = 16;
	
	let specific = document.querySelectorAll('.specific');
	
	
//	Date 객체를 만들때 인수로 년, 월, 일, 시, 분 초를 넣어주면 날짜 데이터를 만들 수 있다.
//	Date(년, 월, 일)	
	let date = new Date(year, month - 1, day);
	console.log(date);
	specific[0].innerHTML = date;
	
//	Date(년, 월, 일, 시, 분, 초)
	date = new Date(year, month - 1, day, 16, 67, 15);
	console.log(date);
	specific[1].innerHTML = date;

}

function testDate4() {
//	지정 날짜를 얻어온다.	
	let date1 = document.querySelector('#date1').value;
	console.log(date1);
	console.log(typeof date1);
	
//	얻어온 지정 날짜는 string 타입의 데이터이므로 날짜 연산을 하기 위해 날짜 데이터로 만든다.
	let date = new Date(date1);
	console.log(date);
	console.log(typeof date);
	
//	경과 날짜를 얻어온다.
	let dateInput = document.querySelector('#dateInput1').value;
	console.log(dateInput);
	console.log(typeof dateInput);
	
	
//	setDate() : 날짜를 수정한다.
	console.log( typeof date.getDate() );
	console.log( date.getDate() + parseInt(dateInput) - 1 );
	date.setDate( date.getDate() + parseInt(dateInput) - 1 ); // 달이 꽉차면 자동으로 시스템에서 자동으로 달을 넘겨서 날짜 계산을 해준다.
	console.log( date.toLocaleDateString() );
	
	document.getElementById('result1').innerHTML =
		'지정 날짜에서 경과 날짜가 지난 날짜는' + date.toLocaleDateString() + '입니다.';
	
}

function testDate5() {
//	수료 날짜를 문자열 형태로 얻어와서 날짜 데이터로 변환한다.
	let date2 = document.querySelector('#date2').value;
	let endDate = new Date(date2);
	
//	지정 날짜를 문자열 형태로 얻어와서 날짜 데이터로 변환한다.
let dateInput2 = document.querySelector('#dateInput2').value;
let startDate = new Date(dateInput2);

//	수료 날짜에서 지정 날짜를 빼준다.
	let result2 = endDate - startDate;
//	날짜/시간 데이터를 연산하면 시간 데이터 연산 결과를 밀리초 단위로 계산한다.
	console.log( result2 );
	console.log( result2 / (24 * 60 * 60 * 1000) );
	
		document.getElementById('result2').innerHTML =
		'D-day까지 ' + (result2 / (24 * 60 * 60 * 1000)) + '일 남았습니다.';
	
	
	
}































































































