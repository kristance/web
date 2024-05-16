 let superheroes = [ '아이언맨', '캡틴아메리카', '토르', '닥터스트레인지' ];
 
 //	for 제어문을 사용하면 배열의 각 인덱스에 해당되는 데이터에 접근만 가능하다.
 for (let i = 0; i < superheroes.length; i++) { // 일반 for
	 console.log(superheroes[i]);
 }
 console.log('---------------------------');

for (let hero of superheroes) { // 향상된 for -> of
	 console.log(hero);
}
 console.log('---------------------------');

for (let i in superheroes) { // 향상된 for -> in
	 console.log(superheroes[i]);
}
 console.log('---------------------------');

//	배열명.forEach(함수) : 인수로 지정된 함수로 배열 요소를 차례대로 전달하며 함수를 반복해 실행한다.
function print(hero) { // 일반 함수
	 console.log(hero);
}

//	forEach() 함수의 인수로 지정하는 함수는 함수 이름에 ()을 붙이면 안된다.
//	자바스크립트가 알아서 superheroes 배열의 각 인덱스 요소를 print() 함수의 인수인 hero로 전달한다.
superheroes.forEach(print)
 console.log('---------------------------');

const print2 = (hero) => { console.log(hero) }; //	화살표 함수

superheroes.forEach(print2)
 console.log('---------------------------');

//	화살표 함수는 인수가 1개일 때 ()를, 실행할 문장이 1개일 때 {}를 생략할 수 있다.
const print3 = hero => console.log(hero) ; 

superheroes.forEach(print3)
 console.log('---------------------------');
 
superheroes.forEach( (hero) => { console.log(hero) })
 console.log('---------------------------');
 
superheroes.forEach( hero =>  console.log(hero) )
 console.log('---------------------------');

//	기존 배열에 저장된 값을 제곱해서 새 배열에 저장한다.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let squared = []; // 제곱 결과를 기억할 빈 배열

for (let i = 0; i < array.length; i++) {
//	squared.push(array[i] * array[i]);
//	squared.push(array[i] ** 2);
	squared.push(Math.pow(array[i],2));
}
console.log(squared);
 console.log('1---------------------------');
 
 let squared2 = [];
 for (let n of array) {
	squared2.push(Math.pow(n,2));
 }
console.log(squared2);
 console.log('2---------------------------');

 let squared3 = [];
for(let i in array) {
	squared3.push(Math.pow(array[i],2));
}
console.log(squared3);
 console.log('3---------------------------');

 let squared4 = [];
function square (n) { squared4.push(Math.pow(n,2))}
array.forEach(square);
console.log(squared4);
 console.log('4---------------------------');

 let squared5 = [];
const square2 = (n) => { squared5.push(Math.pow(n,2)) };
array.forEach(square2);
console.log(squared5);
 console.log('5---------------------------');

 let squared6 = [];
const square3 = n => squared6.push(Math.pow(n,2));
array.forEach(square3);
console.log(squared6);
 console.log('6---------------------------');

 let squared7 = [];
array.forEach((n) =>
 { squared7.push(Math.pow(n,2))});

console.log(squared7);
 console.log('7---------------------------');

 let squared8 = [];
 array.forEach(n => squared8.push(Math.pow(n,2)));
 console.log(squared8);
 console.log('8---------------------------');

//	배열명.map(함수) : 인수로 지정된 함수로 배열 요소를 차례대로 전달하여 함수 실행 결과를 배열로 리턴한다.

function square4(n) {
	return Math.pow(n,2);
}

let squared9 = array.map(square4);
 console.log(squared9);
 console.log('9---------------------------');

const square5 = (n) => {return Math.pow(n,2)};
let squared10 = array.map(square5);
 console.log(squared10);
 console.log('10---------------------------');
 
//	함수가 실행할 문장이 1문자일 때 {}를 생략하면 return도 생략한다.
const square6 = n => Math.pow(n,2);
let squared11 = array.map(square6);
 console.log(squared11);
 console.log('11---------------------------');

let squared12 = array.map((n) => {return Math.pow(n,2)});
 console.log(squared12);
 console.log('12---------------------------');
 
let squared13 = array.map(n => Math.pow(n,2));
 console.log(squared13);
 console.log('13---------------------------');
 
//	배열 내부의 객체에서 key가 text인 value값만 얻어와서 새 배열을 만든다.
const items = [
	{
		id : 1,
		text : 'hello'
	},
	{
		id : 2,
		text : 'hi'
	}
];
console.log(items);

const text = [];
for (let i = 0; i < items.length;i++) {
//	console.log(items[i].text);
	text.push(items[i].text);
}
console.log(text);
 console.log('14 일반 for---------------------------');

const text2 = [];
for (let item of items) {
	text2.push(item.text);
}
console.log(text2);
 console.log('15 향상된 for---------------------------');
 
const text3 = [];
for (let i in items) {
	text3.push(items[i].text);
}
console.log(text3);
 console.log('16 향상된 for -> in---------------------------');
 
const text4 = [];
function textChoice (item) {
	text4.push(item.text);
}
items.forEach(textChoice);
console.log(text4);
 console.log('16 for-Each 일반 함수---------------------------');

const text5 = [];
const textChoice2 = function (item) {
	text5.push(item.text);
}
items.forEach(textChoice2);
console.log(text5);
 console.log('17 for-Each 익명 함수1---------------------------');
 
const text6 = [];

items.forEach(function (item) {
	text6.push(item.text);
});
console.log(text6);
 console.log('18 for-Each 익명 함수2---------------------------');

const text7 = [];
const textChoice3 = (item) => {
	text7.push(item.text);
}
items.forEach(textChoice3);
console.log(text7);
 console.log('19 for-Each 화살표 함수1---------------------------');

const text8 = [];
items.forEach((item) => {
	text8.push(item.text)
	});
console.log(text8);
 console.log('20 for-Each 화살표 함수2---------------------------');

const text9 = [];
items.forEach(item => text9.push(item.text));
console.log(text9);
 console.log('21 for-Each 화살표 함수3---------------------------');

function textChoice5(item) {
	return item.text;
}
const text10 = items.map(textChoice5);
console.log(text10);
 console.log('22 map 함수---------------------------');

const textChoice6 =function (item) {
	return item.text;
}
const text11 = items.map(textChoice6);
console.log(text11);
 console.log('23 map 익명 함수1---------------------------');

const text12 = items.map(function (item) {
	return item.text;
});
console.log(text12);
 console.log('24 map 익명 함수2---------------------------');

const textChoice7 = (item) => {
	return item.text;
}
const text13 = items.map(textChoice7);
console.log(text13);
 console.log('25 map 화살표 함수1---------------------------');

const text14 = items.map( (item) => {
	return item.text;});
console.log(text14);
 console.log('26 map 화살표 함수2---------------------------');

const text15 = items.map( item => item.text );
console.log(text15);
 console.log('27 map 화살표 함수3---------------------------');

//	배열명.indexOf() : 배열에서 인수로 지정된 값을 왼쪽부터 찾아서 첫번째 요소의 인덱스를 리턴한다.
//	배열명.lastIndexOf() : 배열에서 인수로 지정된 값을 오른쪽부터 찾아서 첫번째 요소의 인덱스를 리턴한다.
//	indexOf(), lastIndexOf() 함수는 인수로 지정한 값이 있으면 인덱스가 리턴되지만 없으면 -1을 리턴된다.

let superheroes2 = [ '아이언맨', '캡틴아메리카', '토르', '캡틴아메리카', '닥터스트레인지' ];
let index = superheroes2.indexOf('캡틴아메리카');
console.log('indexOf() : ' + index);
index = superheroes2.lastIndexOf('캡틴아메리카');
console.log('lastIndexOf() : ' + index);
index = superheroes2.lastIndexOf('슈퍼맨');
console.log('없으면 : ' + index);

if(index >= 0) {
	console.log('있음');
} else {
	console.log('없음');
}

console.log(index >= 0 ? '있음' : '없음'); // 삼항연산자
console.log('----------------------------------------');

//	배열명.findIndex(조건) : 배열에서 인수로 지정된 조건을 만족하는 첫번째 요소의 index를 리턴한다.
//	findIndex() 함수의 조건은 함수로 만들어야한다.
//	인수로 지정된 조건을 만족하는 값이 있으면 인덱스가 리턴되지만, 없으면 -1이 리턴된다.

const todos = [
	{
		id:1,
		text:'자바',
		done:true
	},
	{
		id:2,
		text:'함수',
		done:true
	},
	{
		id:3,
		text:'객체와 배열',
		done:true
	},
	{
		id:4,
		text:'배열 함수',
		done:false
	}
];

function todoChoice(todo) { // 함수로 만든 조건 ; id가 1인것을 찾는다.
	return todo.id == 1;
}
index = todos.findIndex(todoChoice);
console.log(index);
/*---------------------------------------------*/
const todoChoice2 = function (todo) { // 익명 함수
	return todo.id == 2;
}
index = todos.findIndex(todoChoice2);
console.log(index);
/*---------------------------------------------*/
index = todos.findIndex(function (todo) {
	return todo.id == 3;
});
console.log(index);
/*---------------------------------------------*/
const todoChoice3 = (todo) => { // 화살표 함수
	return todo.id == 4;
}
index = todos.findIndex(todoChoice3);
console.log(index);
/*---------------------------------------------*/
index = todos.findIndex((todo) => { 
	return todo.id == 5});
console.log(index);
/*---------------------------------------------*/
const textChoice4 = todo => todo.done == true;
index = todos.findIndex(textChoice4);
console.log(index);
/*---------------------------------------------*/
index = todos.findIndex(todo => todo.done == false);
console.log(index);

console.log('-------------------------------------------------------------------------');

//	배열명.find(조건) : 배열에서 인수로 지정된 조건을 만족하는 첫번쨰 요소를 찾아 리턴한다.
//	find() 함수의 조건은 함수로 만들어야한다.
//	인수로 지정된 조건을 만족하는 값이 있으면 값이 리턴되지만, 없으면 undefined가 리턴된다.

function todoFind(todo) {
	return todo.done == true
}

let findItem = todos.find(todoFind);
console.log(findItem); // 일반함수
/*---------------------------------------------*/
const todoFind2 = function (todo) {
	return todo.done == true
}
findItem = todos.find(todoFind2);
console.log(findItem); // 익명 함수 1
/*---------------------------------------------*/
findItem = todos.find(function (todo) {
	return todo.done == true
});
console.log(findItem); // 익명 함수 2
/*---------------------------------------------*/
const todoFind3 = (todo) => {
	return todo.done == false
}
findItem = todos.find(todoFind3);
console.log(findItem); // 화살표 함수 1
/*---------------------------------------------*/
findItem = todos.find((todo) => {
	return todo.done == false;
});
console.log(findItem); // 화살표 함수 2
/*---------------------------------------------*/
const todoFind4 = todo => todo.done == false;
findItem = todos.find(todoFind4);
console.log(findItem); // 화살표 함수 3
/*---------------------------------------------*/
findItem = todos.find(todo => todo.done == 'error');
console.log(findItem); // 화살표 함수 4

console.log('-------------------------------------------------------------------------');

//	배열명.filter(조건) : 배열에서 인수로 지정된 조건을 만족하는 모든 요소를 찾아서 리턴한다.
//	filter() 함수의 조건은 함수로 만들어야한다.
//	인수로 지정된 조건을 만족하는 값이 있으면 값들이 저장된 배열이 리턴되지만, 없으면 빈 배열이 리턴된다.

/*---------------------------------------------*/
function todoFilter(todo) {
	return todo.done == true;
}
let filterItem = todos.filter(todoFilter);
console.log(filterItem); 
/*---------------------------------------------*/
const todoFilter2 = function (todo) {
	return todo.done == true;
}
filterItem = todos.filter(todoFilter2);
console.log(filterItem); 
/*---------------------------------------------*/
filterItem = todos.filter(function (todo) {
	return todo.done == true;
});
console.log(filterItem); 
/*---------------------------------------------*/
const todoFilter3 = todo => todo.done == true;
filterItem = todos.filter(todoFilter3);
console.log(filterItem); 
/*---------------------------------------------*/
filterItem = todos.filter(todo => todo.done == true);
console.log(filterItem); 
/*---------------------------------------------*/


console.log('-------------------------------------------------------------------------');












