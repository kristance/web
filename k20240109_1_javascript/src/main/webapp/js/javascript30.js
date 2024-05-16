function singleArray() {
//	배열 선언 방법
//	let 배열명 = new Array() // 크기가 0인 빈 배열 객체를 선언한다.
	let arrayObj = new Array();
	console.log(arrayObj);
	console.log(typeof arrayObj);
	console.log(arrayObj.length);
	console.log('---------------------------');
	
//	let 배열명 = []; // 크기가 0인 빈 배열 객체를 선언한다.
	let arrayObj2 = [];
	console.log(arrayObj2);
	console.log(typeof arrayObj2);
	console.log(arrayObj2.length);
	console.log('---------------------------');
	
//	let 배열명 = new Array(크기) // 빈 배열의 객체를 크기를 지정해서 선언한다.
	let arrayObj3 = new Array(5);
	console.log(arrayObj3);
	console.log(typeof arrayObj3);
	console.log(arrayObj3.length);
	console.log('---------------------------');

//	초기치의 갯수만큼 크기를 가지는 배열 객체를 선언하고 초기치로 초기화시킨다.
//	let 배열명 = new Array(초기치);
//	let 배열명 = [초기치];
//	let arrayObj4 = new Array(1, 2, 3, 4, 5);
	let arrayObj4 = [5, 4, 3, 2, 1];
		console.log(arrayObj4);
		console.log(typeof arrayObj4);
		console.log(arrayObj4.length);
		console.log('---------------------------');
		
		let arrayObj5 = ['java', 2, 'script', 4, true]
		console.log(arrayObj5);
		console.log(typeof arrayObj5);
		console.log(arrayObj5.length);
		console.log('---------------------------');

}


function multiArray() {
	let arrRow = 4; // 행의 갯수
	let arrCol = 3; // 열의 갯수
	
//	행을 먼저 만들고 행의 갯수만큼 반복하며 열을 만든다.
	let arr = new Array(arrRow); // 행을 만든다.
	for (let i = 0; i < arrRow; i++) { // 행의 갯수만큼 반복한다.
		arr[i] = new Array(arrCol); // 각각의 행에 열을 만든다.
	}
	console.log(arr);
	
//	2차원 배열의 각 인덱스에 접근하려면 배열명[행][열] 형태로 접근한다.
	arr[0][0] = 'apple';
	arr[0][1] = 'banana';
	arr[0][2] = 'grapefruit';
	
	arr[1][0] = 1;
	arr[1][1] = 2;
	arr[1][2] = 3;
	
	arr[2][0] = true;
	arr[2][1] = 2;
	arr[2][2] = '뽀로로';
	
//	배열에 배열을 저장시킬 수 있다.
	arr[3][0] = ['임꺽정', 'lol']; // 3차원, 배열명[면][행][열]
	arr[3][1] = ['장길산', '도적'];
	arr[3][2] = ['등산', '개구리 중사 케로로'];
	
	
	console.log(arr);
	console.log(arr[0]);
	console.log(arr[3][0]);
	console.log(arr[3][2][1]);
	
	let arr2 = [[1,2,3], [2,3], [1]];
	console.log(arr2);
	
}

function joinTest() {
	let fruit = ['apple', 'grape', 'strawberry', 'mango'];
	let number = ['111', '222', '333', '444'];
	
//	배열을 합치고 싶어서 덧셈 연산을 하면 각각의 배열 요소는 ','로 구분된 문자열을 만들어서 합친다.
	let add = fruit + number;
	console.log(add); // apple,grape,strawberry,mango111,222,333,444
	console.log(typeof add); // string
	
//	2개 이상의 배열을 합치려면 concat() 함수를 사용해야한다.
	let result = fruit.concat(number);
	console.log(result); //	[ "apple", "grape", "strawberry", "mango", "111", "222", "333", "444" ]
	console.log(typeof result); // object
	
//	join() 함수는 배열 요소 사이에 인수로 지정한 문자열을 삽입해서 문자열로 만든다.
	let result2 = fruit.join(',');
	console.log(result2); // apple,grape,strawberry,mango
	console.log(typeof result2); // string
	
}

function alphaSort() {
//	배열명.sort() : 코드값 순서로 오름차순 정렬한다. 무조건 문자 데이터로 취급해서 정렬한다.
//	null도 문자열로 취급해서 정렬하고, 숫자도 문자열로 취급해서 정렬한다.
	let arr = ['a', 5, null, 'c', 'b', 'A', 100, 'nt', 'nv'];
	arr.sort();
	console.log(arr); // [ 100, 5, "A", "a", "b", "c", "nt", null, "nv" ]

}

function numberSort() {
	let arr = [1, 4, 3, 8, 9, 7, 10];
//	배열을 구성하는 모든 데이터가 숫자로 구성되어 있어도 무조건 문자 데이터로 취급해서 정렬한다.
	arr.sort();
	console.log(arr); // [ 1, 10, 3, 4, 7, 8, 9 ]
	
//	숫자 순서로 데이터를 정렬하기 위해서 sort() 함수의 인수로 비교 함수를 넣어줘야한다.
//	sort() 함수가 자동으로 비교 함수로 데이터를 넘겨주기 때문에 비교 함수는 인수를 쓰면 안된다.
	arr.sort(comparefn); 
	console.log(arr); // [ 1, 3, 4, 7, 8, 9, 10 ]
	
//	비교 함수는 익명으로 구현해도 된다.
//	arr.sort(function (a, b) {
//		return b - a;
//	});	
	
	arr.sort( (a, b) => b - a );	
	console.log(arr); // [ 10, 9, 8, 7, 4, 3, 1 ]
	
}

//	numberSort() 함수에서 숫자 데이터 정렬에 사용할 함수를 선언한다. -> 정렬 방식을 지정한다.
function comparefn(a, b) {
//	1번째 인수에 저장된 값이 2번째 인수에 저장된 값보다 크면 1(양수), 같으면(0), 작으면 -1(음수)를
//	리턴하게 만든다. -> 오름차순 정렬 -> 부등호를 반대로 수정하면 내림차순 정렬이 된다.
//	console.log(`a : ${a}, b: ${b}`);
	/*
	if(a > b) {
		return 1;
	} else if (a < b){
		return -1;
	} else {
		return 0;
	}
	*/
	
	return a - b; // 오름차순 정렬
//	return -(a - b); // 내림차순 정렬
//	return b - a; // 내림차순 정렬
	
}

function reverseTest() {
	let name = ['홍길동', '임꺽정', '장길산', '일지매'];
	console.log(name); // ['홍길동', '장길산', '임꺽정', '일지매'];
	name.sort();
	console.log(name); //  [ "일지매", "임꺽정", "장길산", "홍길동" ], 오름차순 정렬
//	배열명.reverse() : 배열에 저장된 데이터를 뒤집는다.	
	name.reverse();
	console.log(name); // [ "홍길동", "장길산", "임꺽정", "일지매" ], 내림차순 정렬
	
}

function arrayIO() {
	let arr = [];
	console.log(arr); // []
//	push() : 배열의 맨 뒤에 데이터를 추가하고 배열의 크기를 리턴한다.
	let len = arr.push('홍길동'); // arr.length	
	console.log(arr + '/ ' + len); // 홍길동 , 1
	len = arr.push('임꺽정'); 
	console.log(arr + '/ ' + len); // 홍길동,임꺽정, 2
	len = arr.push('장길산'); 
	console.log(arr + '/ ' + len); // 홍길동,임꺽정,장길산, 3
	
//	unshift() : 배열의 맨 앞에 데이터를 추가하고 배열의 크기를 리턴한다.
	len = arr.unshift('뽀로로'); 
	console.log(arr + '/ ' + len); // 뽀로로,홍길동,임꺽정,장길산, 4

//	pop() : 배열의 맨 뒤의 데이터를 얻어온 후 제거한다.
	let result = arr.pop();
	console.log(arr + '/ ' + result); // 뽀로로,홍길동,임꺽정 / 장길산
	
//	shift() : 배열의 앞 뒤의 데이터를 얻어온 후 제거한다.
	result = arr.shift();
	console.log(arr + '/ ' + result); // 홍길동,임꺽정 / 뽀로로
	
}


function sliceTest() {
	let arr = [1, 2, 3, 4, 5];
	console.log(arr); // [1, 2, 3, 4, 5];
	
//	배열명.slice(a, b) : 배열의 a번째 인덱스부터 b - 1 번째 인덱스 요소까지
//	복사해서 새 배열을 만든다.
	let arr2 = arr.slice(1, 4);	
	console.log(arr2); // [2, 3, 4];
	console.log(arr); // [1, 2, 3, 4, 5]; , 원본이 유지된다.
	
//	배열명.splice(a, b) : 배열의 a번째 인덱스 요소부터 b개만큼 추출해서 새 배열을 만든다.
	let arr3 = arr.splice(1, 4);	
	console.log(arr3); // [2, 3, 4, 5];
	console.log(arr); // [1]; , 원본이 변형된다.
	
}
























































































