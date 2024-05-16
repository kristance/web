console.log('제2외국어를 배운 호랑이가 "야옹" 했습니다.')
console.log("제2외국어를 배운 호랑이가 '야옹' 했습니다.")
console.log('제2외국어를 배운 호랑이가 \'야옹\' 했습니다.')
console.log("제2외국어를 배운 호랑이가 \"야옹\" 했습니다.")

//	'+' 연산자
//	연산자의 한쪽이라도 문자열이 나오면 문자열을 연결하는 문자열 연결 연산자로 사용되고,
//	연연산자 양쪽 모두 숫자일 경우에만 덧셈 연산자로 사용된다.
console.log('"my" + "cat" =' + 'my' + 'cat');  // "my" + "cat" =mycat
console.log('"5" + 2 =' + '5' + 2); // "5" + 2 =52
console.log('5' + 2); // 52
console.log('5' + 2); // 52
console.log(5 + 2); // 7
console.log('====================================');
//	산술 연산자
//	'+' 연산자를 제외한 나머지(-, *, /, %)는 문자(숫자화 가능한)와 숫자를 연산하면 숫자로 계산된다.
console.log('"5" + 2 =' + '5' + 2); // 덧셈 연산자는 문자열 연결
console.log('"5" + 2 =' + ('5' + 2)); 
console.log('"5" + 2 =' + parseInt('5') + 2); // parseInt() -> 정수화 함수
console.log('"5" + 2 =' + (parseInt('5') + 2));

console.log('"5" - 2 =' + '5' - 2); // NaN
console.log('"5" * 2 =' + '5' * 2); // "5" * 2 =10
console.log('"5" / 2 =' + '5' / 2); // "5" / 2 =2.5, 정수와 정수의 연산도 결과는 실수가 나온다.
console.log('"5" / 2 =' + Math.floor('5' / 2)); // "5" / 2 =2, floor() -> 내림 함수
console.log('"5" / 2 =' + Math.ceil('5' / 2)); // "5" / 2 =3, ceil() -> 올림 함수
console.log('"5" / 2 =' + Math.round('5' / 2)); // "5" / 2 =3, round() -> 반올림 함수
console.log('"5" / 2 =' + parseInt('5' / 2)); // "5" / 2 =2
console.log('"5" % 2 =' + '5' % 2); // "5" % 2 =1
console.log('"5" ** 2 =' + '5' ** 2); // "5" ** 2 =25, 거듭제곱 연산자
console.log('"5" ** 2 =' + Math.pow('5', 2)); // "5" ** 2 =25, pow() -> 거듭제곱 함수
console.log('"5" ** 0.5 =' + '5' ** 0.5); // "5" ** 0.5 =2.23.....
console.log('"5" ** 0.5 =' + Math.sqrt('5', 0.5)); // "5" ** 0.5 =2.23....., sqrt() -> 제곱근 함수
console.log('====================================');

//	증감 연산자(++, --)
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement ${preIncrement} counter ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement ${postIncrement} counter ${counter}`);
console.log('====================================');

//	대입 연산자
let x = 6;
let y = 3;
console.log('x += y => ' + (x += y)); // x += y = 9
console.log('x -= y => '  + (x -= y)); // x -= y = 6
console.log('x *= y => '  + (x *= y)); // x -= y = 18
console.log('x /= y => '  + (x /= y)); // x -= y = 6
console.log('x %= y => '  + (x %= y)); // x %= y = 0

//	관계 연산자
//	관계 연산자도 숫자와 문자를 비교하면 숫자로 비교한다.
console.log('10 < "6" => '  + (10 < "6")); // 10 < "6" => false
console.log('10 <= "6" => '  + (10 <= "6")); // 10 <= "6" => false
console.log('10 > "6" => '  + (10 > "6")); // 10 > "6" => true
console.log('10 >= "6" => '  + (10 >= "6")); // 10 >= "6" => true
console.log('10 == "6" => '  + (10 == "6")); // 10 == "6" => false
console.log('10 != "6" => '  + (10 != "6")); // 10 != "6" => true
console.log('====================================');


//	자바스크립트는 '===', '!==' 연산자가 있다.
//	'=='나 '!='는 데이터 타입을 비교하지 않고 값만 비교한다. -> 문자도 숫자로 비교한다.
//	'==='와 '!=='는 데이터 타입과 값을 비교한다.
console.log('10 == "10" => '  + (10 == "10")); // 10 == "10" => true
console.log('10 === "10" => '  + (10 === "10")); // 10 === "10" => false
console.log('10 !== "10" => '  + (10 !== "10")); // 10 !== "10" => true

//	논리 연산자
console.log('true && true => '  + (true && true)); // true && true => true
console.log('true && false => '  + (true && false)); // true && false => false
console.log('false && true => '  + (false && true)); // false && true => false
console.log('false && false => '  + (false && false)); // false && false => false

console.log('true || true => '  + (true || true)); // true || true => true
console.log('true || false => '  + (true || false)); // true || false => true
console.log('false || true => '  + (false || true)); // false || true => true
console.log('false || false => '  + (false || false)); // false || false => false

console.log('!true => '  + !true); // !true => false
console.log('!false => '  + !false); // !false => true

//	자바스크립트는 0을 제외한 모든 숫자는 true로, 0은 false로 취급한다.
console.log('!1 => '  + !1); // !1 => false
console.log('!0 => '  + !0); // !0 => false
console.log('!!3 => '  + !!3); // !!3 => true










