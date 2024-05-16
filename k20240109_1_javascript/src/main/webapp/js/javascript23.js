//	객체 선언 object
const people = {
//	key : value
	name : '홍길동',
	age : 20
};

const people2 = {
//	key : value
	name : '임꺽정',
	age : 35
};

function objectObject() {
	console.log(`${people.name}님은 ${people.age}세입니다.`);
	console.log(`${people2.name}님은 ${people2.age}세입니다.`);
	
}

//	객체 선언 - function
function Clazz(name, age) {
	this.name = name;
	this.age = age;
	
//	멤버 함수 선언
	this.info = function () {
		console.log(`${this.name}님은 ${this.age}세입니다.`);
	}	
}

function objectFunction() {
	const people1 = new Clazz('홍길동', '20');
	people1.info();
	const people2 = new Clazz('임꺽정', '35');
	people2.info();
}

//	객체 선언 - class
class Clazz2 {
//	생성자 함수를 이용해서 멤버 변수 초기화
	 constructor (name, age) {
		 this.name = name;
		 this.age = age;
	 }
//	 멤버 함수 선언 -> function을 쓰면 안된다.
	info () {
		console.log(`${this.name}님은 ${this.age}세입니다.`);
	}	
}

function objectClass() {
	const people1 = new Clazz2('홍길동', '20');
	people1.info();
	const people2 = new Clazz2('임꺽정', '35');
	people2.info();
}


//	객체 선언 - json -> key 부분은 반드시 큰 따옴표로 묶어야한다.
const jsonObject = {
	"name" : '장길산',
	"age" : 45,
	"info" : function ()  {
		//	함수 내부에서 json 형식을 사용한 객체의 key에 할당된 value 값을 참조하려면,
		//	객체 이름에 '.'을 찍어서 접근해야한다.
		console.log(`${jsonObject.name}님은 ${jsonObject.age}세입니다.`);
	}
}

function objectJson() {
//	json형식으로 선언한 객체는 자바스크립트 객체처럼 별도의 선언 과정없이 사용한다.
	console.log(typeof jsonObject);
	console.log(jsonObject);
	console.log(jsonObject.name);
	console.log(jsonObject.age);
	jsonObject.info();
	
//	json을 가장한 문자열 -> key 부분은 반드시 큰따옴표를 사용해야한다.
	let myJson = '{"name" : "일지매", "age" : 41}';
	console.log(typeof myJson);
	console.log(myJson);

//	JSON.parse() : 인수로 지정된 json을 가장한 문자열을 json 객체로 변환한다.
	let jsonObj = JSON.parse(myJson);
	console.log(typeof jsonObj);
	console.log(jsonObj);
	console.log(jsonObj.name);
	console.log(jsonObj.age);
	
	myJson = {
		"name" : '손오공',
		"age" : 1000
	}
	console.log(typeof myJson);
	console.log(myJson);
	
//	JSON.stringify() : 인수로 지정된 json객체를 문자열로 변환한다.
	let jsonStr = JSON.stringify(myJson);
	console.log(typeof jsonStr);
	console.log(jsonStr);

}







































































































