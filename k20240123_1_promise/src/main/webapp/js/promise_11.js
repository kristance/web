function timer(time) {
	return new Promise ( (resolve, reject) => {
		setTimeout ( () => resolve(time), time);
	});
};

//	all() -> 전체 -> 모든 promise가 실행
//	all() 함수의 인수로 병렬 처리할 promise가 저장된 배열을 전달하면, 
//	배열로 전달한 모든 promise가 종료된 후 리턴값(배열)이 then()으로 전달된다.
console.time('Promise.all 실행시간')
Promise.all([timer(1000), timer(3000), timer(2000) ])
	.then( function (result) { // result에 Promise.all에서 실행한 결과의 값이 배열로 저장됨; Array(3) [ 1000, 3000, 2000 ]
		console.log('result',result);
		console.timeEnd('Promise.all 실행시간')
	})


//	race() => 경쟁 -> 가장 먼저 종료되는 promise만 실행된다.
//	race() 함수의 인수로 병렬 처리할 promise가 저장된 배열을 전달하면,
//	배열로 전달한 모든 promise 중에서 가장 먼저 종료된 promise의 리턴값이 then()으로 전달된다. -> 나머지 promise는 무시된다.

console.time('Promise.race 실행시간')
Promise.race([timer(1000), timer(3000), timer(2000) ])
	.then( function (result) {
		console.log('result',result);
		console.timeEnd('Promise.race 실행시간')
	})


































