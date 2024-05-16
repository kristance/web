//	클래스 - class로 선언

//	class 클래스명 {
//		constructor : 생성자, 객체가 생성될 때 멤버변수를 선언하고 초기화한다.
//		constructor([인수,....]) {
//			멤버 변수 선언 및 초기화 
//			...	
//		
//		}
//		멤버 함수 선언, 함수 선언시 function을 앞에 붙이지 않는다.
//		...
//	}

class Food {
	constructor(name) {
		console.log('food 클래스 생성');
		 // 멤버변수는 this를 붙여서 선언하고, 클래스 내부의 모든 함수에서 사용할 수 있고
		 // this를 붙이지 않고 선언한 변수는 지역변수로 변수가 선언된 함수 안에서만 사용할 수 있다.
		this.name = name
		this.brand = [];
	}
	
	addbrand(brand) {
		this.brand.push(brand);
	}
	
	toString() {
		console.log(`${this.name} 을(를) 파는 음식점들 ${this.brand.join(', ')}`);
	}
}
//	new를 사용해서 클래스 객체 생성
let pizza = new Food('피자');

console.log(pizza);
console.log(pizza.name);
pizza.addbrand('미스터피자');
pizza.addbrand('피자헛');
pizza.addbrand('피자스쿨');
pizza.addbrand('도미노피자');
console.log(pizza.brand);
pizza.toString();

let chicken = new Food('치킨');

console.log(chicken);
console.log(chicken.name);
chicken.addbrand('BBQ');
chicken.addbrand('노랑통닭');
chicken.addbrand('수원왕갈비치킨');
chicken.addbrand('BHC');
console.log(chicken.brand);
chicken.toString();


console.log('------------------------------------------- class로 클래스 생성');

//	상속

class Animal { // 부모 클래스
	constructor(type, name, sound) {
		this.type = type;
		this.name = name;
		this.sound = sound;
	}

//	클래스에 멤버 함수를 정의하면 자바스크립트가 자동으로 prototype에 등록시킨다.
	say () {
		console.log(`부모 클래스의 say() 함수 실행 : ${this.sound}`);
	}
}

let dog = new Animal( '개', '멍멍이', 'bow bow' );
dog.say();

let cat = new Animal( '고양이', '냥냥이', 'meow meow');
cat.say();

console.log('-------------------------------------------');

//	class를 사용해 선언한 클래스는 java와 같이 extends 예약어를 사용한다.
//	Dog 클래스는 Animal 클래스를 상속받아 만든다.
class Dog extends Animal {
	constructor(name, sound, age) {
		//	부모 클래스의 생성자를 호출해서 상속받은 멤버를 초기화한다.
		super('개', name, sound);
		//	자식 클래스에서 사용할 멤버를 초기화한다.
		this.age = age;
	}
	
	//	함수 오버라이드
	say() {
		console.log(`${this.age}살 짜리 강아지가 ${this.sound} 웁니다.`);
	}
}


let dog2 = new Dog( '멍멍이', 'bow bow', 31 );
dog2.say();
/*-----------------------------------------------------------------------*/
class Cat extends Animal {
	constructor(name, sound, age) {
		//	부모 클래스의 생성자를 호출해서 상속받은 멤버를 초기화한다.
		super('고양이', name, sound);
		//	자식 클래스에서 사용할 멤버를 초기화한다.
		this.age = age;
	}
	
	//	함수 오버라이드
	say() {
		console.log(`${this.age}살 짜리 고양이가 ${this.sound} 웁니다.`);
	}
}


let cat2 = new Cat( '냥아치', 'meow meow', 10 );
cat2.say();


console.log('-------------------------------------------');






















































































