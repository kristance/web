function numberObject() {
	let divs = document.querySelectorAll('div');
	
//	Number 객체 선언 방법
	let num = new Number(5); // new를 사용해서 Number 객체 선언
	console.log('num : ' + num);	
	console.log(typeof num);	
	
	let num2 = 5; // 숫자 리터럴을 입력해서 Number 객체 선언
	console.log('num2 : ' + num2);	
	console.log(typeof num2);	
	
	console.log( 'num + num2 : ' + ( num + num2 ) );
	
//	document.write() : 인수로 지정한 내용을 브라우저의 내요을 전부 지우고 출력한다.
//	document.write('wow');
//	document.write('<b><i><marquee>num + num2 : ' + ( num + num2 ) + '</b></i></marquee>');
	
	divs[0].innerHTML = '<b><i><marquee>num + num2 : ' + ( num + num2 ) + '</b></i></marquee>';
	
//	parseInt() : 문자열이나 실수를 정수로 변환한다.
	divs[1].innerHTML = '100' + 5; // 연결
	divs[2].innerHTML = parseInt('100') + 5; // 덧셈
	
//	'100a'와 같이 숫자로 시작하고 정수로 변환할 수 없는 문자열이 뒤에 나오면
//	변환할 수 있는 위치까지 정수로 변환한다.		
	divs[3].innerHTML = parseInt('100a') + 5;
//	'a100'과 같이 정수로 변환할 수 없는 문자열이 맨 앞에 나오면 정수로 변환할 수 있는 숫자가 아니므로
//	NaN을 리턴한다.
	divs[4].innerHTML = parseInt('a100') + 5; // NaN
	
	divs[5].innerHTML = parseInt(3.141592) + 5;
	divs[6].innerHTML = parseInt('3.141592') + 5;
	divs[7].innerHTML = parseInt('3.141592a') + 5;
	divs[8].innerHTML = parseInt('a3.141592') + 5; // NaN
	
	divs[9].innerHTML = 1 / 0;
	divs[10].innerHTML = -1 / 0;
	divs[11].innerHTML = Number.MAX_VALUE + 0.000000000000000000001e+308;
	
//	parseFloat() : 문자열이나 정수를 실수로 변환한다.
	divs[12].innerHTML = parseFloat('3.141592') + 5;
	divs[13].innerHTML = parseFloat('3.141592a') + 5;

	
	
}



































































































