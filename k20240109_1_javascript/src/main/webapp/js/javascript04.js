/*
	함수의 형식
	function 함수이름([인수,...]) {
		함수가 실행할 문장;
		....
		[return 값]
	}
*/

function printHello() {
	console.log('Hello');
}
 
printHello(); // 함수 호출
console.log('=======================');

//	자바스크립트의 함수는 오버로딩을 지원하지 않고, 인수의 갯수가 달라도 상관없다.
function log(message) {
	console.log(message);
}

//	자바스크립트는 같은 이름으로 함수를 다시 선언하면 앞에 선언한 함수는 무시된다.
function log() {
	console.log('안녕, 클레오파트라2');
}

log('안녕, 클레오파트라1');
log();
console.log('=======================');

//	함수의 인수로 객체를 받을 수 있다.
const hong = {
	name : '홍길동',
	age : 20
};

console.log(hong);
console.log(hong.name);
console.log(hong.age);

function setName(obj) {
	obj.name = '임꺽정'
};

setName(hong);
console.log(hong);
console.log('=======================');

//	디폴트 인수 -> ECMA6 추가
//	디폴트 인수를 사용하지 않으면 인수로 값이 넘어오면 넘어온 값으로 함수를 실행하지만,
//	인수가 넘어오지 않으면 undefined로 처리된다.

//	ECMA5
function showMessage(message, from) {
	if (from == undefined) {
		from = '수신인 없음';
	}
	console.log(`ECMA5 : ${message} by ${from}`);
};

showMessage('hi', 'hong');
showMessage('hi', 'hong', 20);
showMessage('hi');

//	ECMA6
//	디폴트 인수는 기본값을 가지는 인수를 말한다.
//	from에 데이터가 넘어오면 넘어온 데이터로 함수를 실행하고, 데이터가 넘어오지 않으면 디폴트 인수로
//	지정된 '수신인 없음'을 from에 넣고 함수를 실행한다.
function showMessage2(message, from = '수신인 없음') {
	console.log(`ECMA6 : ${message} by ${from}`);
};

showMessage2('hi', 'hong');
showMessage2('hi', 'hong', 20);
showMessage2('hi');
console.log('=======================');

//	rest -> 가변 인자 -> ECMA6 추가
//	가변 인자는 '...'을 앞에 붙여서 인수를 선언하면 인수가 배열로 만들어진다.
//	java와 같이 가변 인자는 인수 목록의 맨 마지막 위치에 딱 1번만 사용해야한다.
function printAll (...args) {
//	console.log(typeof args);
//	console.log('배열에 저장된 데이터 : ' + args);
//	console.log('배열에 저장된 데이터 갯수 : ' + args.length);

//	일반 for
//	for (let i = 0; i < args.length; i++) {
//		console.log(args[i]);
//	}

//	향상된 for
//	배열의 첫번째 인덱스의 값을 변수에 넣고 반복을 시작하고, 마지막 인덱스의 값을
//	변수에 넣고 반복한 후 종료한다.
	for (let arg of args) {
		console.log(arg);
	}
}

printAll('홍길동');
console.log('=======================');
printAll('홍길동', '임꺽정');
console.log('=======================');
printAll('홍길동', '임꺽정', '장길산');
console.log('=======================');
printAll('홍길동', '임꺽정', '장길산', '일지매');
console.log('=======================');

//	익명 함수
//	자바스크립트는 변수에 함수를 할당할 수 있음므로 익명으로 만든 함수를 변수에 할당해서
//	사용(실행)할 수 있다. -> 변수 이름이 함수 이름처럼 사용된다. ->1급함수

const print = function () { //	변수에 익명 함수 할당
	console.log('print');
};

//	익명 함수를 할당한 변수를 함수 이름처럼 사용한다. (함수랑 호출방법이 동일)
print();

//	함수가 할당된 변수를 다른 변수에 할당하면 다른 변수를 함수처럼 사용할 수 있다.
const printAgain = print; //	함수가 할당된 변수를 다른 변수에 할당한다.
printAgain();

//	변수에는 꼭 익명 함수만 할당할 수 있는 것이 아니라, 일반 함수도 할당할 수 있다.
function sum(a, b) {
	return a + b;
}

console.log(sum(5, 8));

const sumAgain = sum; //	변수에 일반 함수 할당
console.log(sumAgain(5, 8));

//	함수의 인수로 함수를 받을 수 있다. 
function total(a, b, fn) {
	console.log(fn(a, b));
}
total(5, 8, sum);
console.log('=======================');

//	callback 함수
//	callback 함수는 코드를 통해서 명시적으로 호출되는 함수가 아니라, 개발자는 함수를 등록하기만 하고
//	어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출(자동으로 실행)하는 함수를
//	말한다. -> 익명 함수가 callback을 구현할 때 주로 사용된다.

const printYes = function() {
	console.log('Yes');
};

const printNo = function() {
	console.log('No');
};

function quiz (answer, yes, no) { 
	if(answer == '사랑해') {
		yes(); // yes에 printYes 할당 -> yes()
	} else {
		no(); // no에 printNo 할당 -> no()
	}
};

//	함수를 호출할 때 처리할 데이터와 그 데이터를 처리할 함수까지 전달한다.
quiz('사랑해', printYes, printNo);
quiz('미안해', printYes, printNo);

quiz('사랑해', function() {
	console.log('Yes');
}, function() {
	console.log('No');
});

quiz('사랑해', () => console.log('Yes'), ()=>console.log('No'));
console.log('=======================');


//	화살표 함수(arrow function)
//	일반 익명 함수
const simplePrint = function () {
	console.log('일반 익명 함수 simplePrint() 실행');
}

simplePrint();

//	function을 생략하고 ')'와 '{' 사이에 화살표 (=>)을 입력한다.
const simplePrint2 = () => {
	console.log('일반 익명 함수 simplePrint2() 실행');
}

simplePrint2();

//	화살표 함수가 실행할 문장이 1문장일 때 {}를 생략할 수 있다.
const simplePrint3 = () => console.log('일반 익명 함수 simplePrint2() 실행');

simplePrint3();

console.log('=======================');

function whoAreYou(name) {
	console.log(name + '님 안녕하세요');
}
whoAreYou('홍길동');

const whoAreYou2 = function (name) {
	console.log(name + '님 안녕하세요');
}
whoAreYou2('임꺽정');

const whoAreYou3 = (name) => console.log(name + '님 안녕하세요');
whoAreYou3('장길산');

//	화살표 함수의 인수가 딱 1개일 경우 ()를 생략할 수 있다.
const whoAreYou4 = name => console.log(name + '님 안녕하세요');
whoAreYou3('일지매');
console.log('=======================');

//	화살표 함수가 실행하는 문장이 return 딱 1문장만 있을 경우, {}를 생략하면 return도 생략해야한다.
function add(a, b) {
	return a + b;
}
console.log(add(5, 8));

const add2 = function(a,b) {
	return a + b;
}
console.log(add2(5, 8));

const add3 = (a, b) => a + b;
console.log(add3(5, 8));
console.log('=======================');

//	자동 실행 함수
//	자동 실행 함수는  함수 전체를 ()로 묶은 후 ')' 뒤에 ()를 붙여서 만든다.
(
	function hello() {
		console.log('자동 실행');
	}
)();

//	자동 실행 함수는 일반 함수처럼 실행하면 에러가 발생한다.
//	hello(); // 에러 발생, hello is not defined







