const dog = {
	name : '멍멍이',
	sound : 'bow bow',
	
//	객체의 멤버로 함수를 가질 수 있다.
//	key에 함수를 할당할 때 함수의 이름은 의미가 없으므로, 익명 함수로 만들어 할당한다.
	/*
	say : function() {
		// console.log(sound); // 에러
		// 객체에 정의한 함수에서 객체의 멤버를 참조할 때 자신을 의미하는 'this'를 붙여야한다.
		console.log(this.sound); // bow bow
	}
	*/
	/*
	say : () =>{
		 //	화살표 함수에서는 자기 자신을 의미하는 'this'를 사용할 수 없다.
		 console.log(this.sound); // undefined
	 }
	*/
	
//	key에 할당하지 않고 바로 함수를 정의할 수 있는데 이 때 function은 사용하면 안된다.	
	say() {
		 console.log(this.sound);
	}
	
}
console.log(dog);
console.log(dog.name);
console.log(dog.sound);

dog.say() // 객체에서 정의한 함수를 실행한다.
console.log('--------------------------------------');

//	겍체 외부에 작성된 함수를 객체에 주입할 수 있다.
const cat = {
	name : '고양이',
	sound : 'meow meow'
}
console.log(cat); // 주입 전

//	 객체 외부에서 객체에 주입할 함수를 만든다.
const say = function() {
		 console.log(this.sound);
};
//	객체 외부에서 만든 say() 함수를 cat 객체에 주입한다.
cat.say = say;
console.log(cat); // 주입 후
cat.say();
console.log('--------------------------------------');

//	다른 객체에서 작성된 함수를 객체에 주입할 수 있다.
//	dog 객체의 say() 함수르 cat 객체에 주입한다.
cat.say2 = dog.say;
console.log(cat);
cat.say2();
console.log('--------------------------------------');

//	getter, setter를 사용하면 객체의 값을 얻어오거나 넣어줄 때 필요한 기능을 실행할 수 있다.
const numbers = {
	a : 1,
	b : 2,
	
//	getter : get으로 선언하는 함수
	get sum () {
		console.log('sum() 함수가 실행');
		//	getter 함수는 값을 얻어오는 함수이므로 반드시 return이 있어야 한다.
		//	return이 없으면 return되는 값이 없으므로 undefined가 된다.
		return  this.a + this.b;
		}
}

console.log(numbers);
console.log(numbers.a);
console.log(numbers.b);
//	getter 함수를 실행할 때는 함수 뒤에 ()을 붙이지 않는다.
console.log(numbers.sum); // getter 함수 실행
//	numbers.sum(); // numbers.sum is not a function 에러가 발생된다.
console.log('--------------------------------------');

const bull = {
	_name : '황소',
	
//	getter -> get으로 선언한다.
//	getter 함수를 실행할 때는 getter 함수 이름 뒤에 ()을 붙이면 안된다.
//	특정 멤버의 값이나 연산 결과를 얻어와야하므로 일반적으로 return을 사용해서 값을 return 시킨다.
	get name() {
		console.log('name을 조회한다.'); // 값을 가져오기 전에 필요한 기능을 실행한다.
		return this._name; // 값을 가져온다.
	},
	
//	setter -> set으로 선언한다	
//	setter 함수를 실행할 때는 setter 함수 이름 뒤에 ()을 붙이면 안된다.
//	특정 멤버에 값을 넣어줘야 하므로 멤버에 넣어줄 값을 setter 함수가 받아야한다.
	set name(value) { // 일반적으로 setter 함수의 인수는 value를 사용한다.
		console.log('name을 변경한다.');
		this._name = value;
	}

};

console.log(bull);
console.log(bull._name);
//	console.log(bull.name()); // 에러 발생
console.log(bull.name); // getter 함수 실행

//	bull.name('한우'); // 에러 발생
bull.name = '한우'; // setter 함수 실행
console.log(bull);

console.log('--------------------------------------');

const numbers2 = {
	_a : 1,
	_b : 2,
	sum : 3,
	
	calculator () {
		this._sum = this._a + this._b;
		console.log(`a : ${this._a}, b : ${this._b}, sum : ${this._sum}`);
	},
	
	get a() {
		return this._a;
	},
	get b() {
		return this._b;
	},
	
	set a(value) {
		this._a = value;
		this.calculator();
	},
	set b(value) {
		this._b = value;
		this.calculator();
	}
};

console.log(numbers2);
console.log(numbers2.a); // _a의 getter 실행
console.log(numbers2.b); // _b의 getter 실행
console.log(numbers2.sum);

numbers2.a = 5; // _a의 setter 실행
numbers2.b = 7; // _b의 setter 실행












