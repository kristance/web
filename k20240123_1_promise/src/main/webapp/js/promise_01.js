// JSON(JavaScript Object Natation)

//	javascript 객체를 json으로 변환하기
//	JSON.stringify(javascript 객체) : 인수로 지정된 javascript 객체를 json으로 변환한다.
let json = JSON.stringify(true);
	console.log(true, typeof true);
	console.log(json, typeof json);
	console.log('---------------------------------');

json = JSON.stringify(['apple','banana']);
	console.log(['apple','banana'], typeof ['apple','banana']);
	console.log(json, typeof json);

//	javascript 객체
const rabbit = {
	//	key : value
	name : '토깽이',
	color : 'white',
	size : '6척 반',
//	javascript 객체나 함수는 stringify() 함수로 json 형태로 변환시킬 수 없다.
	birthDate : new Date(),
	jump : () => console.log('jump')
};

	console.log(rabbit, typeof rabbit);
console.log('---------------------------------');

//	json은 javascript 객체와 달리 key부분을 반드시 큰 따옴표를 사용하는 문자열로 만든다.
json = JSON.stringify(rabbit);
	console.log(json, typeof json);
	
//	stringify() 함수의 2번쨰 인수로 json으로 변환할 속성을 배열로 지정할 수 있다.
json = JSON.stringify(rabbit, ['name', 'color']);
	console.log(json);
console.log('---------------------------------');

//	더 세밀한 제어를 하기 위해서 stringify() 함수의 2번째 인수로 콜백 함수를 지정할 수 있다.
//	콜백 함수는 javascript 객체의 key와 value를 인수로 받는다.
json = JSON.stringify(rabbit, function (key, value) {
	console.log('stringify() 함수의 콜백 함수 실행됨');
	console.log(`key : ${key}, value : ${value}`);
	console.log('key : ' + key + ',' + 'value : ' + value);
//	return value; // 콜백 함수에서 인수에 저장된 내용을 처리하려면 반드시 value 값을 return 시켜야한다.
	return key == 'name' ? '별주부' : value;

});
	console.log(json);
console.log('---------------------------------');

//	json을 javascript 객체로 변환하기
//	JSON.parse(json)
//	console.clear() // 콘솔 창에 출력한 내용을 모두 지운다.
//	rabbit javascript 객체를 json으로 변환한 후 다시 javascript 객체로 변환한다.
json = JSON.stringify(rabbit);
	console.log(json);
let obj = JSON.parse(json);
	console.log(obj, typeof obj);
console.log('---------------------------------');

//	javascript 객체이므로 jump() 함수가 실행된다.
rabbit.jump(); 
//	json으로 변환될때 jump() 함수가 소멸된다.
//	json.jump(); 
//	jump() 함수가 소멸된 json을 다시 javascript 객체로 변환시켰으므로 실행할 수 없다.
//	obj.jump();

//	javascript 객체이므로 Date 객체의 함수 getFullYear()가 실행된다.
console.log(rabbit.birthDate.getFullYear()); 
//	Date 객체는 json으로 변환하면 문자열로 변환되므로 getFullYear() 함수를 실행할 수 없다.
//	console.log(json.birthDate.getFullYear());
//	json의 날짜 형태 문자열을 javascript 객체로 변환하면 문자열이므로 getFullYear() 함수를 실행할 수 없다.
//	console.log(obj.birthDate.getFullYear());
console.log('---------------------------------');

//	더 세밀한 제어를 하기 위해서 parse() 함수의 2번째 인수로 콜백 함수를 지정할 수 있다.
//	콜백 함수는 javascript 객체의 key와 value를 인수로 받는다.
obj = JSON.parse(json, function (key, value) {
	console.log('parse() 함수의 콜백 함수 실행됨');
	console.log(`key : ${key}, value : ${value}`);
	return key == 'birthDate' ? new Date() : value;
	
});
	console.log(obj);

//   json 관련 유용한 사이트
//   1. json diff(https://json-diff.com/): 서버로 요청해 응답받은 데이터를 비교한다.
//   2. json beautifier(https://codebeautify.org/jsonviewer): json 데이터 포맷을 예쁘게 만든다.
//   3. json parser(http://json.parser.online.fr/): json 데이터를 객체 형태로 만든다.
//   4. json validator(https://jsonformatter.curiousconcept.com/): json 데이터가 유효한지 검사한다.


















