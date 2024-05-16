//	인수로 넘겨받은 시간이 경과한 후 넘겨받은 시간을 리턴하는 promise를 리턴하는 함수
/*
function timer(time) {
	return new Promise( function (resolve, reject) {
		setTimeout( function () {
			resolve(time)
		}, time);
	});

};

timer(2000)
	.then( function (time) {
		console.log('1-1', time);
	})
*/

function timer(time) {
	return new Promise( (resolve, reject) => {
		setTimeout( () => resolve(time), time)
	});
};

timer(2000).then( (time) => console.log('1-1 time', time));

//	---------------------------------------------------

//	timer() 함수 실행 앞, 뒤에 start, end 표시

console.log('start 2');
timer(1000)
	.then( function (time) {
		console.log('2-1 time', time);
		return timer(time + 1000);
	})
	.then ( function (time) {
		console.log('2-2 time', time);
		return timer(time + 1000);
	})
	.then ( function (time) {
		console.log('2-3 time', time);
		console.log('end 2'); // 여기에 코딩해야 모두 완료된 후 출력된다.
		// 모두 완료된 후 리턴할 값이 있다면 여기서 리턴시킨다.
		
	})
//	---------------------------------------------------

//	위에서 실행한 것과 동일한 결과를 가지게끔 async와 await를 사용하는 함수로 수정

async function run () {
	console.log('start 3');
	let time = await timer(1000);	
		console.log('3-1 time', time);
	time = await timer(time + 1000);	
		console.log('3-2 time', time);
	time = await timer(time + 1000);	
		console.log('3-3 time', time);
		console.log('end 3');
	// 모두 완료된 후 리턴할 값이 있다면 여기서 리턴시킨다.
	return '리턴값';
};

run()
	.then( function (value) {
		console.log('3-4 value', value);
		
	})

//	---------------------------------------------------

//	run() 함수 앞, 뒤에 parent start, parent end 표시
async function run2 ()  {
	console.log('parent start');
//	 await run();
	let value = await run();
	console.log('4-1 value', value);
	console.log('parent end');
}

run2();











