//	동기 방식 처리 -> 순서대로 실행한다.
console.log('1');
console.log('2');
console.log('3');
//	위와 같이 실행하면 순서대로 실행해서 1, 2, 3이 출력된다.

//	비동기 방식처리 -> 앞의 기능이 실행 중이더라도 다음 기능 실행된다
console.log('a');
//	setTimeout(실행할함수, 대기시간) : 지정된 시간이 되면 함수를 실행한다.
setTimeout( function () {
	console.log('b');
}, 1000);
console.log('c');
//	위와 같이 실행하면 setTimeout() 함수에 의해 비동기 방식으로 실행해서 a,c가 출력되고
//	1초 경과 후 b가 출력된다.

//	동기적 callback
//	변수를 var를 붙여서 선언하거나 함수가 선언되면 호이스팅 기능에 의해서 맨위로 올라간다.

/*
printImmediately(function () {
	console.log('printImmediately 함수 실행');
});
*/

printImmediately( () => console.log('printImmediately 함수 실행') );

function printImmediately(print) {
	print();
}

//	비동기적 callback

/*
printWithDelay(function () {
	console.log('async callback');
}, 1000);
*/

printWithDelay( () => console.log('async callback'), 1000);

function printWithDelay(print, timeout){
	setTimeout(print, timeout);
};




















