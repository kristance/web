//	async와 await를 사용하면 promise를 보다 깔끔하게 사용할 수 있다.

//	promise
function fetchUser () {
//	작업시간이 오래 걸리는 작업이 있다면 비동기적으로 처리할 수 있게 해야한다.
	return new Promise( function (resolve, reject) {
		//	return '홍길동'; // pending 상태로 리턴한다.
		//	promise 내부에서는 resolve() 또는 reject()를 실행해서 리턴시켜야 한다.
		//	resolve('홍길동'); // fulfilled 상태로 리턴된다.
		reject('홍길동') // rejected 상태로 리턴된다.
	});
};

const user = fetchUser();
console.log('exe1-1 user : ' , user);

user
	.then( function (response) {
		console.log('exe 1-2 response : ' , response);
	})
	.catch( function (error) {
		console.log('exe 1-3 error : ' , error);
	})

//	------------------------------------------------------------------------

//	async
//	함수 앞에 async를 붙이면 함수 내부의 코드가 자동으로 promise로 변환된다.
async function fetchUser2() {
	return '홍길동';
};

const user2 = fetchUser2();
console.log('exe2-1 user2 : ' , user2);

user2
	.then( function (response) {
		console.log('exe 2-2 response : ' , response);
		
	})                                                 

//	------------------------------------------------------------------------

//	await
//	await는 async가 붙은 함수에서만 사용할 수 있고, await를 붙여준 함수가 완전히 끝나기를 기다렸다가
//	다음 작업을 실행한다.
function delay (ms) {
	return new Promise ( function (resolve, reject) {
		setTimeout ( function () {
			resolve();
		}, ms);
	});
};

//	async를 붙여서 promise를 리턴하도록 설정한 getApple() 함수는 await에 의해서 delay() 함수가
//	완전히 끝나기를 기다렸다가 delay() 함수가 종료되면 promise를 리턴한다.
async function getApple() {
	await delay(2000);
	return '사과';
};

const apple = getApple();
console.log('exe 3-1 apple : ' , apple);


apple
	.then( function (response) {
		console.log('exe 3-2 response : ' , response);
		
	})

async function getBanana() {
	await delay(1000);
	return '바나나';
};

const banana = getBanana();
console.log('exe 3-3 banana : ' , banana);

banana
	.then ( function (response) {
		console.log('exe 3-4 response : ' , response);
	})

//	------------------------------------------------------------------------

//	promise도 지나치게 chaining을 하면 callback 지옥 현상이 나타난다.

/*
function pickFruits () {
	return getApple()
				.then( function (apple) {
					console.log('exe 4-1 apple : ' , apple);
					return getBanana()
							.then( function (banana) {
								console.log('exe 4-2 banana : ' , banana);
								return apple + banana;
							})
				})
};
*/

//	순차 처리
//	async와 await를 사용하면 동기적 프로그램을 작성하는 것처럼 비동기 프로그램을 작성할 수 있다.
async function pickFruits () {
	const apple = await getApple(); // getApple() 함수가 끝나기를 기다린다. 2초 대기
	const banana = await getBanana(); // getBanana() 함수가 끝나기를 기다린다. 1초 대기
	return apple + banana;
}

pickFruits()
	.then( function (result) {
		console.log('exe 4-1 result ',result);
	})

//	------------------------------------------------------------------------

//	병렬(동시) 처리 -> 실행하는 promise가 서로 연관이 있을 때
async function pickFruits2 () {
//	병렬 처리할 함수가 동시에 실행된다.
	const applePromise = getApple();
	const bananaPromise = getBanana();
//	await를 이용해서 동시에 실행한 함수가 모두 종료될 때까지 대기한다.
	const apple = await applePromise; // 2초 대기
//	getBanana() 함수는 getApple() 함수와 동시에 실행했기때문에 getApple() 함수가 2초간 실행되는 도중에
//	종료된다.
	const banana = await bananaPromise; // 1초 대기
	return apple + banana;
};

pickFruits2()
	.then( function (result) {
		console.log('exe 5-1 result ',result);
	})

//	------------------------------------------------------------------------


//	병렬(동시) 처리 -> 실행하는 promise가 서로 연관이 없을 때
//	promise가 서로 연관없을 경우 병렬 처리할 때 위와 같이 작성하지 않고,
//	promise 객체의 all() 함수 또는 race() 함수를 사용ㅎ서 작성할 수 있다.

//	all() -> 전체 -> 모든 promise가 실행
function pickFruits3 () {
//	all() 함수의 인수로 병렬 처리할 promise가 저장된 배열을 전달하면, 
//	배열로 전달한 모든 promise가 종료된 후 리턴값(배열)이 then()으로 전달된다.
	return Promise.all( [getApple(), getBanana()] ) // 모든 promise가 실행된 결과가 저장된 배열이 리턴된다.
		//	배열에 저장된 데이터를 가공한 후 리턴하려면 then() 함수에서 가공한 후 리턴한다.
		.then( function (fruits) {
			return fruits.join(' + ');
		})

};

pickFruits3()
	.then( function (result) {
		console.log('exe 6-1 result ',result);
	})

//	------------------------------------------------------------------------

//	race() => 경쟁 -> 가장 먼저 종료되는 promise만 실행된다.
function pickFruits4 () {
//	race() 함수의 인수로 병렬 처리할 promise가 저장된 배열을 전달하면,
//	배열로 전달한 모든 promise 중에서 가장 먼저 종료된 promise의 리턴값이 then()으로 전달된다. -> 나머지 promise는 무시된다.
	return Promise.race( [getApple(), getBanana()] ); // 실행 시간이 가장 짧은 promise의 결과가 리턴된다.
	
}
	
pickFruits4()
	.then( function (result) {
		console.log('exe 7-1 result ',result);
	})





















