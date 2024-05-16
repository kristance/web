
//	배열에 저장된 모든 데이터의 합계 계산
const number = [1, 2, 3, 4, 5];
/*-----------------------------------------*/
let sum = 0;
for (let i = 0; i < number.length;i++) {
	sum += number[i];
}
console.log(sum);
/*-----------------------------------------*/
sum = 0;
for (let n of number) {
	sum += n;
}
console.log(sum);
/*-----------------------------------------*/
sum = 0;
for (let i in number) {
	sum += number[i];
}
console.log(sum);
/*-----------------------------------------*/
sum = 0;
number.forEach(function (n) {
	sum += n});
console.log(sum);
/*-----------------------------------------*/
sum = 0;
const total1 = (n) => sum += n;
number.forEach(total1);
console.log(sum);
/*-----------------------------------------*/
sum = 0;
number.forEach((n) => sum += n);
console.log(sum);
/*-----------------------------------------*/

console.log('-----------------------------------------');
//	배열명.reduce(함수[, accumulator의 초기치])
//	최초 실행시 accumulator의 초기치를 accumulator에 저장한 후 인수로 지정된 함수를 실행하고,
//	그 다음에는 현재 실행한 함수의 return값을 다음에 실행할 함수의 accumulator에 저장한 후 배열의 끝까지 반복한다.

//	reduce() 함수의 인수로 지정하는 함수의 형식
// 	function 함수명(accumulator[, currentValue, currentIndex, array]) { // 일반 함수
//		실행할 문장
//			....
//		return 값 // 현재 return 값이 다음 실행의 accumulator 초기값이 된다.
//	}
//	accumulator의 초기치를 생략하면 배열의 0번째 인덱스의 값이 초기치로 지정되고 배열의 1번째 인덱스부터 반복하고,
//	accumulator의 초기치를 지정하면 배열의 0번째 인덱스부터 반복한다.

// 	(accumulator[, currentValue, currentIndex, array]) => { // 화살표 함수
//		실행할 문장
//			....
//		return 값 // 현재 return 값이 다음 실행의 accumulator 초기값이 된다.
//	}

//	accumulator : 필수 입력, 연산 결과가 저장될 기억장소
//	currentValue : 생략가능, reduce() 함수를 실행하는 배열에 저장된 값이 차례대로 넘어와 저장되는 변수
//	currentIndex : 생략가능, currentValue로 넘어오는 값의 index가 저장되는 변수
//	array : 생략가능, reduce() 함수를 실행하는 배열 전체가 넘어와 저장되는 변수

function total (acc, value, index, array) {
	console.log(acc, value, index, array);
	return acc + value;
}

sum = number.reduce(total, 0);
console.log(sum);
console.log('1-----------------------------------------');

const total2 = function (acc, value, index, array) {
	return acc + value;
}

sum = number.reduce(total2, 0);
console.log(sum);
console.log('2 익명함수-----------------------------------------');

sum = number.reduce(function (acc, value, index, array) {
	return acc + value;
}, 0);
console.log(sum);
console.log('3 -----------------------------------------');

sum = number.reduce( (acc, value, index, array) => { return acc + value }, 0);
console.log(sum);
console.log('4 화살표 함수----------------------------------------');

sum = number.reduce( (acc, value, index, array) => acc + value, 0);
console.log(sum);
console.log('5 -----------------------------------------');

sum = number.reduce( (acc, value) => acc + value, 0); // index, array 사용하지 않아 삭제
console.log(sum);
console.log('6 -----------------------------------------');

//	배열에 저장된 데이터 중에서 10보다 큰 데이터의 갯수

const number2 = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 60];

let count = 0;
for (let i = 0; i < number2.length;i++) {
	if (number2[i] > 10) {
		count++;
	}
}
console.log(count);
console.log(' ----------------------------------------- 1');

count = 0;
for(let n of number2) {
	if (n > 10) {
		count++;
	}
}
console.log(count);
console.log(' ----------------------------------------- 2');

count = 0;
for(let i in number2) {
	if (number2[i] > 10) {
		count++;
	}
}
console.log(count);
console.log(' ----------------------------------------- 3');

count = 0;
number2.forEach(function (n) {
	if (n > 10) {
		count++;
	}
})
console.log(count);
console.log(' ----------------------------------------- 4');

count = 0;
number2.forEach( (n) => {
	if (n > 10) {
		count++;
	}
})
console.log(count);
console.log(' ----------------------------------------- 5');

count = number2.filter(function (n) {
	return n >= 10})
	.length;
console.log(count);
console.log(' ----------------------------------------- 6');

count = number2.filter( (n) =>  n >= 10 ).length;
console.log(count);
console.log(' ----------------------------------------- 7');

/*
function tenOverCount(acc, value) {
	if(value > 10) {
		// 조건을 만족하면 10보다 큰 경우이므로 현재 acc 값을 1증가시키켜 다음으로 넘겨준다.
		return ++acc; // 증가 후 사용
	} else {
		// 조건을 만족하지않으면 10보다 작은 경우이므로 현재 acc 값을 그대로 다음으로 넘겨준다.
		return acc;
	}
}
*/

count = number2.reduce(function (acc, value) {
	if(value > 10) {
		return ++acc;
	} else {
		return acc;
	}
}, 0);

count = number2.reduce(function (acc, value) {
	return value > 10 ? ++acc : acc;
}, 0);

console.log(count);
console.log(' ----------------------------------------- 8');

count = number2.reduce( (acc, value) => value > 10 ? ++acc : acc, 0);
console.log(count);
console.log(' ----------------------------------------- 9');

//	배열에 저장된 문자 갯수 세기 -> {a: 4, b: 1, c:2, d: 1,e: 1}

const alpha = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e', 'a'];
/*
function alphaCount(acc, val) {
	console.log(acc,val);
	if(acc[val] != undefined) {	//	객체에 val에 저장된 key가 있는가?
		// key가 있으면 key에 할당된 value 값(문자의 개수)을 1증가시킨다.
		acc[val]++;
	} else {
		// key가 없으므로 1로 초기화시킨다.
		acc[val] = 1;
	}
	return acc;
}
*/

count = alpha.reduce(function (acc, val) {
	console.log(acc,val);
	if(acc[val] != undefined) {
		acc[val]++;
	} else {
		acc[val] = 1;
	}
	return acc;
}, {}) // acc를 빈 객체({})로 초기화하고 시작한다.
console.log(count);
console.log(' ----------------------------------------- 10');

count = alpha.reduce( (acc, val) => {
	if(acc[val] != undefined) {
		acc[val]++;
	} else {
		acc[val] = 1;
	}
	return acc;
}, {})
/*-------------------------------------------------------------*/
count = alpha.reduce( (acc, val) => {
	(acc[val] != undefined) ? acc[val]++ : (acc[val] = 1);
	return acc;
}, {})
console.log(count);
console.log(' ----------------------------------------- 11');

























