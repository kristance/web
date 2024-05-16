const purpleCuteSlime = {
	name : '슬라임',
	attribute : 'cute',
	color : 'purple'
};

//	rest : spread와 반대로 펴져있는 것을 모은다. 연산자는 spread와 같이 '...'을 사용한다.
//	객체에 rest를 사용할 때는 뽑아낸 값을 저장할 변수 이름이 객체를 구성하는 key와 같아야한다.
//	지정된 속성을 제외한 나머지 속성이 rest에 저장되므로 rest는 반드시 맨 마지막에 딱 1번만 사용해야한다.

// 	et color = purpleCuteSlime.color
//	let color = purpleCuteSlime['color']
//	const {color} = purpleCuteSlime; // 비구조화 할당
const {color, ...cuteSlime} = purpleCuteSlime;
console.log(color);
console.log(cuteSlime);

const {attribute, ...slime} = cuteSlime;
console.log(attribute);
console.log(slime);

console.log('------------------------------------------------');

const number = [100, 1, 2, 3, 4, 5, 6];

//	객체는 데이터가 할당된 key가 존재하므로 변수 이름을 key와 똑같이 작성하면 되었지만,
//	배열은 key가 존재하지 않아서 변수 이름으로 무엇을 적어도 상관없고 배열의 인덱스 순서대로 뽑혀 나온다.

const [a, b, ...c] = number;
console.log(a);
console.log(b);
console.log(c);
console.log('------------------------------------------------ rest');

//	spread와 rest를 사용한 함수 - 합계
	function sum (...rest) {
// ...rest는 rest ;[100, 1, 2, 3, 4, 5, 6] 배열을 spread로 100, 1, 2, 3, 4, 5, 6값 7개로 풀어서 sum 함수의 인수(...rest)로 전달한다.
//	console.log(rest);
//	console.log(typeof rest);
//	console.log(rest.length);
	
//	let sum = 0;
//	for (let i = 0; i < rest.length; i++) {
//		sum += rest[i];
//	}
//	return sum;

//	return rest.reduce(function (acc,curr) {
//		return acc + curr;
//	}, 0);

	return rest.reduce( (acc,curr) => acc + curr, 0);
}

// [100, 1, 2, 3, 4, 5, 6] 배열 1개를 sum 함수의 인수로 전달한다.
console.log( '합계 : ' + sum(number) );
console.log('------------------------------------------------ ');
//	[100, 1, 2, 3, 4, 5, 6] 배열을 spread로 100, 1, 2, 3, 4, 5, 6값 7개로 풀어서 sum 함수의 인수로 전달한다.
console.log( '합계 : ' + sum(...number) ); //	...number는 spread
console.log('------------------------------------------------ 합계 구하기 ');

//	spread와 rest를 사용한 함수 - 최대값

function maxValue (...value) {
//	return value.reduce( function (acc,curr) {
//		if (acc >= curr) {
//			return acc;
//		} else {
//			return curr;
//		}
//	}, value[0] );
	
//	return value.reduce( function (acc,curr) {
//		return (acc >= curr) ? acc : curr;
//	}, value[0] );

//	return value.reduce(  (acc,curr) => (acc >= curr) ? acc : curr , value[0] );
//	 reduce() 함수가 실행할 함수의 acc에 들어갈 초기치를 생략하면 reduce() 함수가 실행되는 배여르이 0번째
//	인덱스의 값이 자동으로 초기화된다.	
	return value.reduce(  (acc,curr) => (acc >= curr) ? acc : curr );
}
console.log( '최대값 : ' + maxValue(...number) );

console.log('------------------------------------------------ 최대값 구하기 ');


















































































