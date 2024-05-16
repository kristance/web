function strTest1 () {
	let str1 = 'string ';
	let str2 = 'function';
	let str3 = str1 + str2;
	console.log(str3);

//	concat() : 함수를 실행한 문자열에 인수로 지정한 문자열을 합친다.
	let newStr = str1.concat(str2);
	console.log(newStr);

//	join() : 함수를 실행한 배열 요소에 인수로 지정한 문자열을 사이사이에 삽입한다.
	let joinStr = ['java', 'script', 'good'].join('\t');
	console.log(joinStr);
	console.log('java'.join(','));

}

function strTest2() {
	let num = 12.34;
	let bool = true;
	let str = '문자열';
	
//	연산자 우선 순위에 의해서 num + bool를 먼저 연산한다.
//	boolean 타입의 데이터는 숫자와 연산할 때 true는 1, false는 0으로 취급되어 연산된다.
	console.log(num + bool + str); // 13.34문자열
//	boolean 타입의 데이터는 문자열과 연산할 때 true, false가 문자열로 취급되어 연산된다.
	console.log(num + str + bool); // 12.34문자열true
}


function strTest3() {
	let str = prompt('너의 이름은?', '숫자는 입력하지 마세요.');
	console.log(str);
	console.log(typeof str);
	
//	isNaN() : 인수로 지정된 값이 숫자로만 구성되지 않았으면 true, 숫자로만 구성되었으면 false가 리턴된다.	
	console.log( isNaN(str) );
	console.log( isNaN( 'aaa' +  isNaN(str) ));
	
	if ( isNaN(str) ) {
		if (str == '타키') {
			alert(str + '야 보고싶었어 ㅜㅜ');
		} else {
			alert('처음 뵙겠습니다.')
		}
	} else {
		if (str == '') {
			alert('이름을 입력해줘 V.V');
		} else if(str == null) {
		 	alert('취소 버튼 눌렀어? 눌렀어어어어어어어어어어엉 ㅠ.ㅠ');
		} else {
			alert('숫자를 입력하지마. 보고있다. >.<');
		}
		
	}
	
//	'==', '!='는 데이터 타입은 비교하지 않고 데이터만 비교한다. '1'과 1을 같은 값으로 취급한다.
//	'===', '!=='는 데이터 타입과 데이터를 모두 비교한다. '1'과 1을 다른 값으로 취급한다.

	 let num = 10;
		console.log(typeof num);
	str = '10';
		console.log(typeof str);
	
	if (num == str) {
		console.log('데이터 타입은 비교하지 않고 데이터만 비교하므로 같다.');
	} else {
		console.log('데이터 타입은 비교하지 않고 데이터만 비교하므로 다르다.');
	}
	
	if (num === str) {
		console.log('데이터 타입과 데이터를 모두 비교하므로 같다.');
	} else {
		console.log('데이터 타입과 데이터를 모두 비교하므로 다르다.');
	}
	
	let oldName = '홍길동';
		console.log(typeof oldName);
	let newName = new String('홍길동');
		console.log(typeof newName);
	
		console.log(oldName == newName ? '같다' : '다르다');
		console.log(oldName === newName ? '같다' : '다르다');
		
}

function strTest4() {
//	indexOf() : 문자열의 왼(앞)쪽부터 인수로 지정한 문자열을 찾아 인덱스를 리턴한다.
//	lastIndexOf() : 문자열의 오른(뒤)쪽부터 인수로 지정한 문자열을 찾아 인덱스를 리턴한다.
//	indexOf(), lastIndexOf() 모두 인수로 지정한 문자열이 없으면 -1을 리턴한다.
	let name = '홍길동 임꺽정 장길산 일지매 홍길동';
	let str = prompt('검색할 이름 적어줘')
	if (name.indexOf(str) == -1) {
		console.log(str + ' 이름이 존재하지 않아');
	} else {
		console.log( 'indexOf() 함수로 검색한 인덱스 : ' + name.indexOf(str) );
		console.log( 'lastIndexOf() 함수로 검색한 인덱스 : ' + name.lastIndexOf(str) );
	}
}

function strTest5() {
//	substring(a) :	문자열에서 a번쨰 인덱스 위치부터 끝까지 추출한다.
//	substring(a, b) : 문자열에서 a번째 인덱스 위치부터 b-1 인덱스 위치까지 추출한다.
	let today = '2024-01-16 (화요일) 2023-12-06';
//	let solar = today.substring(0,10);
	let solar = today.substring( 0, today.indexOf(' ') );
//	let lunar = today.substring(15);
	let lunar = today.substring( today.lastIndexOf(' ') + 1 );
		console.log('양력 : ' + solar  + ', 음력 : ' + lunar);

}


function strTest6() {
//	split() : 인수로 지정한 구분자를 경계로 문자열을 나워서 배열로 리턴한다.
	let today = '2024-01-16 (화요일) 2023-12-06';
	let array = today.split(' ');
		console.log(array);
		console.log('양력 : ' + array[0]  + ', 음력 : ' + array[2]);
}






























































































