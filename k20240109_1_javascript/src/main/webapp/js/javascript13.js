//	falsy : 조건을 비교하지 않아도 무조건 거짓이 되는 값 -> false, 0, '', null, undefined, NaN
//	truthy : 조건을 비교하지 않아도 무조건 참이 되는 값 -> falsy를 제외한 나머지

//	단축 평가(short-circuit evaluation)
//	'&&' 논리 연산에서 앞의 조건이 truthy한 값이면 '&&' 뒤의 내용이 출력된다.
console.log(true && 'hello');
//	'&&' 논리 연산에서 앞의 조건이 falsy한 값이면 falsy한 값이 출력된다.
console.log(false && 'hello');
console.log(0 && 'hello');
console.log('' && 'hello');
console.log(null && 'hello');
console.log(undefined && 'hello');
console.log(NaN && 'hello');

console.log('-------------------------------------------------------------------- ');

const dog = {
	name:'멍멍이'
}
/*
function getName (animal) {
//	console.log(animal);
	if (animal) {
		return animal.name;	
	}
	return undefined;
}
*/


function getName (animal) {
	return animal && animal.name
}
console.log( getName(dog) );
console.log( getName() );

console.log('-------------------------------------------------------------------- &&');

//	'||' 논리 연산에서 앞의 조건이 truthy한 값이면 '||' truthy한 값이 출력된다.
console.log(true || 'hello');
console.log('hi' || 'hello');

//	'||' 논리 연산에서 앞의 조건이 falsy한 값이면 '||' 뒤의 내용이 출력된다.
console.log(false || 'hello');
console.log(0 || 'hello');
console.log('' || 'hello');
console.log(null || 'hello');
console.log(undefined || 'hello');
console.log(NaN || 'hello');

const cat = {
	name:'고양이'
}
function getName2 (animal) {
	const name = animal || animal.name;
	if (name) {
		return name.name;	
	} else {
		return 'No Name';
	}
}
console.log( getName2(cat) );
// console.log( getName2() ); // 에러 발생

console.log('-------------------------------------------------------------------- ||');



























































































