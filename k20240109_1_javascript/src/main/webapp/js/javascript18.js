//	명시적 함수
function func1() {
	alert('명시적 함수');
}

//	익명 함수
//const func2 = function () {
//		alert('익명 함수');
//}

const func2 = () => alert('익명 함수');

//	함수 리터럴
// function func3 () {
//	literalTest(function (msg) {
//		alert(msg);		
//	})
//}

function func3 () {
	literalTest( (msg) => alert(msg) );
}

function literalTest (literal) { // 인수로 함수가 넘어온다.
	literal('함수 리터럴 입니다.')
}

//	자바스크립트는 함수 오버로딩이 지원되지 않는다.
//	같은 이름의 함수를 다시 선언하면 이전에 선언헀던 함수는 무시된다.
//	자바스크립트는 실인수와 가인수의 갯수가 다르더라도 정상적으로 실행된다.
//	함수가 호출될 때 넘어오는 인수를 저장할 변수가 모자라면 모자란대로 남으면 남는대로 실행된다.
//	자바스크립트는 함수가 호출될 때 실인수는 arguments 객체로 먼저 전달되고, arguments 객체에 저장된
//	실인수를 가인수의 갯수만큼 반복하며, arguments 객체에 저장된 데이터를 꺼내서 가인수에 넣어준다.


function varTest (a,b,c,d,e) {
//	console.log('varTest() 함수 실행');
	console.log(arguments);
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);
	console.log(e);
	console.log('함수가 호출될 때 전달되는 데이터의 갯수 : ' + arguments.length);
	for (let i = 0;i < arguments.length; i++) {
		console.log(`arguments[${i}] = ${arguments[i]}`);
	}
}

//	클로저(Closure)
//	함수가 생성될 당시 외부 함수의 값을 기억해 두었다가 내부 함수가 호출될 떄 사용한다.
//	참조할 수 없는 위치에 있는 값도 참조 할 수 있다.

function closureTest(value) { // 외부 함수 -> 클로저
	console.log('value : ' + value);
	var a = 100;
	
	function addValue(msg) { // 냬부 함수 
		console.log('msg : ' + msg);
		console.log('a : ' + a);
	}
//	반드시 클로저 내부에서 정의한 함수를 리턴시켜야한다.
	return addValue;	
}

//	goodEdu에는 자바스크립트 파일이 읽혀질 때 closureTest() 함수를 실행한 후 return값이  저장된다.
const goodEdu = closureTest('자바스크립트');

//	closureTest() 함수가 실행된 후 내부 함수를 리턴시키므로 closureTest() 함수가 호출된 곳으로
//	clousreTest() 함수의 내부 함수인 addValue() 함수가 리턴되므로 
//	const goodEdu = function addValue(msg) { // 냬부 함수 
//		console.log('msg : ' + msg);
//		console.log('a : ' + a);
//	}
//	와 같이 된다.
//	즉, goodEdu 변수에 closureTest() 함수의 내부 함수인 addValue() 함수가 할당된다.

console.log(goodEdu);

//	익명 함수 뿐만 아니라 이름이 있는 함수도 변수에 할당할 수 있으므로 goodEdu에 할당된 addValue()
//	함수를 goodEdu(msg) 형태로 실행이 가능하다.
goodEdu('클로저는 어렵다.');











































































