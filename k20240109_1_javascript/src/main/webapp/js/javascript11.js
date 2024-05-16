//	클래스 - function으로 선언

//	function 클래스명([인수, ...]) {
//		멤버 변수 선언 및 초기화
//		...
//		멤버 함수 선언
//		...
//	}


function Animal (type, name, sound) {
	this.type = type // 멤버변수는 this를 붙여서 선언한다.
	this.name = name // = 오른쪽은 인수로 받은 변수
	this.sound = sound
//	함수를 클래스 내부에서 선언하면 클래스의 객체가 생성될때마다 매번 함수가 만들어진다.
	this.say = function () {
		console.log(this.sound);
	}
}

//	 new를 사용해서 클래스 객체 생성
let dog = new Animal('개', '멍멍이', 'bow bow');
console.log(dog);
console.log(dog.type);
console.log(dog.name);
console.log(dog.sound);
dog.say();

let cat = new Animal('고양이', '냥이', 'meow meow');
console.log(cat);
console.log(cat.type);
console.log(cat.name);
console.log(cat.sound);
cat.say();
console.log('------------------------------- function 이용 클래스 생성');

function Animal2 (type, name, sound) {
	this.type = type
	this.name = name 
	this.sound = sound
}

//	함수를 클래스 내부에서 선언하면 클래스의 객체가 생성될 때마다 매번 같은 함수가 만들어지지만
//	클래스 외부에서 prototype으로 함수를 선언하면 객체가 생성될 때마다 같은 함수가 반복적으로 생성되지 않는다.
//	클래스명.prototype.변수 = 익명 함수 // 변수는 만들 함수의  이름

Animal2.prototype.say = function () {
	console.log(this.sound);
}

let dog2 = new Animal2('개', '멍멍이', 'bow bow');
console.log(dog2);
console.log(dog2.type);
console.log(dog2.name);
console.log(dog2.sound);
dog2.say();

let cat2 = new Animal2('고양이', '냥이', 'meow meow');
console.log(cat2);
console.log(cat2.type);
console.log(cat2.name);
console.log(cat2.sound);
cat2.say();
console.log('-------------------------------');

function Animal3 (type, name, sound) {
	this.type = type
	this.name = name 
	this.sound = sound
}

//	prototype으로 함수를 선언하지 않고 클래스 외부에서 만든 함수를 각각의 객체에 넣어줄 수 있다.

function say () {
	console.log(this.sound);
}

let dog3 = new Animal3('개', '멍멍이', 'bow bow');
dog3.say = say; //	클래스 외부에서 만든 함수를 클래스 객체에 넣어준다.

console.log(dog3);
console.log(dog3.type);
console.log(dog3.name);
console.log(dog3.sound);
dog3.say();

let cat3 = new Animal3('고양이', '냥이', 'meow meow');
cat3.say = say;

console.log(cat3);
console.log(cat3.type);
console.log(cat3.name);
console.log(cat3.sound);
cat3.say();
console.log('------------------------------- 클래스 주입');

//	상속
function Animal4 (type, name, sound) { // 부모 클래스
	this.type = type
	this.name = name 
	this.sound = sound
}
//	부모 클래스의 prototype에 say() 함수를 추가한다. ; 상속을 하기위해서는 함수를 prototype으로 만들어줘야한다.
Animal4.prototype.say = function () {
	console.log(this.sound);
}

//	Animal4(부모) 클래스를 상속받는 Dog(자식) 클래스를 정의한ㄷ나.
function Dog(name, sound) {
//	부모 클래스를 호출(call)해서 자식 클래스를 초기화 할 데이터를 전달해서 초기화한다.
	Animal4.call(this, '개', name, sound) // 1번쨰 인수는 this여야한다. ; this는 Dog의 위치를 의미함.
}

//	부모 클래스의 prototype을 자식 클래스의 prototype에 넣어준다. -> 상속 시킨다.
//	자식 클래스 객체를 선언하기 전에 넣어준다. -> 위치가 중요하다.
Dog.prototype = Animal4.prototype;

let dog4 = new Dog('한우', '음메에~~'); // 자식 클래스 객체를 생성한다.

console.log(dog4);
console.log(dog4.type);
console.log(dog4.name);
console.log(dog4.sound);
dog4.say();
/*--------------------------------------------------------------*/
function Cat(name, sound) {
	Animal4.call(this, '고양이', name, sound)
}

Cat.prototype = Animal4.prototype;

let cat4 = new Cat('냥아치', '냥냥'); 

console.log(cat4);
console.log(cat4.type);
console.log(cat4.name);
console.log(cat4.sound);
cat4.say();
console.log('------------------------------- 클래스 상속');





















































































