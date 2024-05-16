//	배열명.splice(인덱스, 개수) : 배열에서 인덱스번째 위치부터 지정된 갯수만큼 추출해서 배열로 리턴한다.

const number = [10, 20, 30, 40];
const spliced = number.splice(1, 2); // 1번 인덱스부터 2개를 추출한다.
console.log('splice : ' + spliced); // 20, 30
//	splice() 함수는 원본 배열에서 추출되는 데이터가 제거된다.
console.log('number : ' + number); // 10, 40


//	배열명.slice(시작인덱스, 끝인덱스) : 배열에서 시작 인덱스 위치부터 끝 인덱스 -1번째 위치까지 복사해서 배열로 리턴한다.
const number2 = [10, 20, 30, 40];
const sliced = number2.slice(1, 2); // 1번 인덱스부터 1번 인덱스까지 복사한다.
console.log('slice : ' + sliced); // 20
//	slice() 함수는 원본 배열에서 데이터를 복사하므로 원본 배열의 데이터가 변경되지 않는다.
console.log('number2 : ' + number2); // 10, 20, 30, 40

console.log('-------------------------------------------------------------------------');

//	배열에 데이터 추가, 제거 함수
//	push() : 배열의 맨 뒤에 데이터를 추가하고, 배열의 크기를 리턴한다.
//	unshift() : 배열의 맨 앞에 데이터를 추가하고, 배열의 크기를 리턴한다.
//	pop() : 배열의 맨 뒤에 데이터를 얻어온 후 제거한다.
//	shift() : 배열의 맨 앞에 데이터를 얻어온 후 제거한다.

const number3 = [10, 20, 30, 40];
console.log(`number3 :  ${number3}, length : ${number3.length}`);

let len = number3.push(999);;
console.log(`number3 :  ${number3}, length : ${len}`)

len = number3.unshift(777);
console.log(`number3 :  ${number3}, length : ${len}`);

let popData = number3.pop();
console.log('popData : ' + popData);
console.log('number3 : ' + number3);

let shiftData = number3.shift();
console.log('shiftData : ' + shiftData);
console.log('number3 : ' + number3);
console.log('-------------------------------------------------------------------------');

//	배열명.concat(배열명[, 배열명, ...]) : 배열에 인수로 지정된 배열을 연결한 새 배열을 리턴한다.

const array = [1, 2, 3];
const array2 = [10, 20, 30];
const array3 = [100, 200, 300];
const concated = array.concat(array2,array3);
console.log(concated);
console.log('-------------------------------------------------------------------------');

//	배열명.join('문자열') : 배열 요소들 사이에 인수로 지정한 문자열을 삽입해서 하나의 문자열로 리턴하고
//	Join() 함수의 인수를 생략하면 ','가 기본값으로 사용된다.

 const array4 = ['홍길동', '임꺽정', '장길산', '일지매']
console.log(typeof array4.join());
console.log(array4.join(' '));
console.log(array4.join('/'));
console.log(array4.join('lol'));
console.log(array4.join('	'));
console.log(array4.join('\t'));

console.log('-------------------------------------------------------------------------');


















































































