//	일급 객체 (first-class object)
//	프로그래밍 언어 디자인에서 일급 객체란 다른 객체들의 일반적으로 적용 가능한 연산을
//	모두 지원하는 객체를 의미한다.
//	함수를 인수로 넘기기, 수정하기, 변수에 대입하기와 같은 연산을 지원할 때 일급 객체라 한다.

//	아래 3가지 조건을 충족한다면 일급 함수라 할 수 있다.
//	1. 변수에 함수를 할당할 수 있어야한다.
//	2. 함수의 인수로 함수를 넘길 수 있어야한다.
//	3. 함수의 리턴값으로 함수를 리턴할 수 있어야한다.

//	javascript의 filter 함수 구현하기; true인 값만 모으는 filter() 함수
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

/*
function callback (element) {
	console.log(element);
}
words.filter(callback);
*/

/*
const callback = function (element) {
	console.log(element);
}
words.filter(callback);
*/

/*
words.filter(function (element) {
	console.log(element)
});
*/

/*
words.filter( (element) => {
	console.log(element)
});
*/

words.filter( (element) => console.log(element) );
console.log('------------------------');

function callback2 (element) {
	if(element.length > 6) {
		return element;
	}
	
} 
let newWords = words.filter(callback2);
	console.log('newWords : ' + newWords)
	
console.log('------------------------');

function callback3 (element) {
	if(element.length > 6) {
		return true; // truecy 한 값이므로 true가 아닌 값이 리턴됨; words 배열에 falsy한 값이 없음.
	}
	
} 
newWords = words.filter(callback3);
console.log('newWords : ' + newWords)
	
console.log('------------------------');

function callback4 (element) {
//	element.length > 6 // 실행 결과 자체가 논리값이므로 바로 리턴시킨다.
	return element.length > 6; 
} 
newWords = words.filter(callback4);
console.log('newWords : ' + newWords)
	
console.log('------------------------');

//	filter 함수의 인수로 익명 함수를 바로 넣어준다.

newWords = words.filter( function (element) {
	return element.length > 6; 
});
console.log('newWords : ' + newWords)
	
console.log('------------------------');

//	filter 함수의 인수인 익명함수를 화살표 익명 함수로 바꿔준다.
newWords = words.filter(  (element) => {
	return element.length > 6; 
});
console.log('newWords : ' + newWords)
	
console.log('------------------------');

//	화살표 함수를 생략형으로 바꿔준다.
newWords = words.filter( (element) => element.length > 6 );
console.log('newWords : ' + newWords)
	
console.log('------------------------');

function myFilter (origin, callback) {
//	조건에 만족하는 결과를 기억할 빈 배열을 선언한다.
	let result = [];
	
//	origin으로 넘어온 갯수만큼 반복하며 조건에 만족하는 데이터를 배열에 추가한다.
	for (let i = 0; i < origin.length; i++) {
		if ( callback(origin[i]) ) {
			result.push(origin[i]);
		}
	}	
//	조건에 만족하는 결과를 저장한 배열을 리턴한다.
	return result;
} 


newWords = myFilter(words, (element) => element.length > 6 );
console.log('newWords : ' + newWords)
	
console.log('------------------------');














