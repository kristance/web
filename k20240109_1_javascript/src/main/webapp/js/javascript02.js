//	변수(variable)


//	변수(variable)의 타입
//	기본(원시, primitive type) 자료형
//		->  number(숫자), string(문자열), boolean(논리), null, undefined, symbol(ECMA6)
//	객체(object) 자료형, box container
//	함수(function) 자료형
//		-> 함수도 변수에 할당이 가능하다.
//		-> 함수의 인수로 함수를 전달할 수 있고, 함수의 실행 결과로 함수를 리턴할 수 있다(1급 함수)

//	'use strict' : 변수가 var, let, const로 선언되지 않으면 에러를 발생시킨다.
'use strict'; // ECMA5에서 추가

//	age = 19;	// 'use strict'에 의해서 에러가 발생된다.
//	var age = 19;	// 변수 선언시 var를 사용했으므로 'use strict'에 의해서 에러가 발생되지 않는다.
//	var age; // 변수를 선언만하고 값을 할당하지 않으면 undefined가 출력된다.
console.log('age : ' + age);

//	var -> ECMA5
//	variable hoisting
//		-> var를 사용해서 선언한 변수는 프로그램 어디에서 선언하든지 변수 선언부분만 항상 프로그램
//			맨 위로 끌어올려진다. 
//		-> let이나 const를 사용해서 변수를 선언하는 경우 hoisting은 발생되지 않는다.
var age = 100;
console.log('age : ' + age);
var age = '열살' // var는 사용중인 변수를 다시 선언할 수 있다.
console.log('age : ' + age);
console.log('=========================================');

//	var는 block scope를 사용하지 않고, function scope를 사용한다. -> 유연성
//	block scope : java처럼 변수가 선언된 {} 블록 내부에서만 사용할 수 있다. -> let, const
//	function scope : 변수가 선언된 함수에서만 사용할 수 있다. -> var
//	block scope는 변수가 선언된 {} 블록 밖으로 나가면 변수가 소멸되고,
//	function scope는 변수가 선언된 함수가 종료되면 변수가 소멸된다.

//	let -> ECMA6
let globalName = '홍길동';
{
	let name = '장길산';
	console.log('name : ' + name);
//	let name = '임꺽정'; // 에러, let은 같은 이름의 변수를 다시 선언할 수 없다.
	name = '임꺽정'; // 이미 선언된 변수에 값을 할당할 수 있다. const는 할당할 수 없다.
	console.log('name : ' + name);
	console.log('globalName : ' + globalName);
}
console.log('name : ' + name);	// 변수가 선언된 {} 블록 외부에서는 사용할 수 없다.
console.log('globalName : ' + globalName);
console.log('=========================================');

//	상수(constant) -> ECMA6
//	선언시 반드시 값을 할당해야하며, 할당된 값을 변경할 수 없다. -> 보안성
//	const maxNumber; //	상수는 최초 선언시 반드시 값을 할당해야하므로 에러가 발생한다.
const maxNumber = 100; // 상수는 최초 선언시 반드시 값을 할당해야 한다.
console.log('maxNumber ' + maxNumber);
//	maxNumber = 200; // 상수에 값을 다시 할당하려했으므로 에러가 발생된다.
console.log('=========================================');

//	template : `(그레이브)를 사용하고 출력할 데이터는 ${ ~ } 사이에 적는다.
let count = 17.5;
const size = true;
//	typeof 명령으로 변수의 자료형을 확인할 수 있다.
console.log('count ' + count + ', type ' + typeof count);
console.log(`count  ${count}, type  ${typeof count}`);
console.log(`size  ${size}, type  ${typeof size}`);
console.log('=========================================');

//	자바스크립트는 나눗셈을 0으로 하면 결과가 Infinity가 된다.
const infinity = 1 / 0;
console.log(`infinity  ${infinity}, type  ${typeof infinity}`);
const negativeInfinity = -1 / 0;
console.log(`negativeInfinity  ${negativeInfinity}, type  ${typeof negativeInfinity}`);
console.log('=========================================');

//	자바스크립트는 문자열을 나눗셈하면 결과가 NaN(Not a Number)이 된다.
const nan = 'A' / 2;
console.log(`nan ${nan}, type ${typeof nan}`);
console.log('=========================================');

//	java는 변수 선언시 변수의 타입이 결정되는 정적 자료형(static typing)을 사용하지만
//	자바스크립트는 변수에 저장된 데이터의 타입에 맞춰서 변수의 타입이 결정되는 동적 자료형(Dynamic typing)이 사용된다.
let text = 'hello';
console.log(`text ${text}, type ${typeof text}`);
text = 1;
console.log(`text ${text}, type ${typeof text}`);
console.log('=========================================');

//	Symbol : 고유한 식별자를 만들때 사용한다.
const symbol = Symbol('id');
console.log(symbol);
console.log(`type ${typeof symbol}`);
const symbol2 = Symbol('id');
console.log(symbol2);
console.log(`type ${typeof symbol2}`);
console.log(symbol == symbol2);
console.log('=========================================');

//	object
const obj = {
	name : '홍길동', // key : value
	age : 20
};
console.log(obj);
console.log(obj.name); // 객체를 구성하는 멤버에 접근할 때는 "."을 찍어서 접근한다. 
console.log(obj.age);
obj.age = 21;
console.log(obj);
console.log(obj.age);
console.log('obj ' + typeof obj);





