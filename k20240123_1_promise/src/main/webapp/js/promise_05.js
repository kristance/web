//	promise는 javascript의 비동기 처리에 사용하는 객체이다.
//	비동기 처리란  특정 코드의 실행이 완료될 때까지 기다리지 않고 
//	다음 코드를 먼저 실행하는 javascript의 특성을 말한다.

//	promise state : pending -> fulfilled 또는 rejected 
//	pending(대기) : promise가 실행되기 전 상태, 이행하지도 않고 거부하지도 않은 상태
//	fulfilled(이행 or 실행) : 연산이 성공적으로 실행됨
//	rejected(거부) : 연산이 실패함.


//	promise 만들기
//	새로운 promise가 생성되면 Promise 객체를 만들때 인수로 넘겨준 executor 함수가 자동으로 실행된다.
//	const promise이름 = new Promise(executor함수);

/*
const promise = new Promise( function (resolve, reject)  {
	console.log('promise executor 함수 실행');
	setTimeout( function () {
		//	promise가 정상적으로 실행된 결과는 resolve() 함수의 인수로 리턴시킨다.
			resolve('홍길동'); // promise 성공
		//	promise가 실패한 결과는 reject() 함수의 인수로 리턴시킨다.
		//	reject('에러 발생'); // promise 실패
	}, 2000);
});
*/

const promise = new Promise(  (resolve, reject) => {
	console.log('1.promise executor 함수 실행');
	setTimeout(  () => {
		resolve('홍길동');
		//	reject('에러 발생');
	}, 2000);
});


//	promise 사용하기
//	resolve() 함수가 리턴하는 값은 then()으로 받아 처리하고,
//	reject() 함수가 리턴하는 값은 catch()로 받아 처리한다.
//	promise의 성공/실패 여부와 상관없이 무조건 실행해야할 코드가 있다면 finally()로 처리한다.

/*
//	chaining : '.'으로 연결해서 함수를 실행하는 것
promise
	.then( function (value) { //	promise가 resolve(정상 처리)되면 실행할 코드를 입력한다.
		console.log(`promise.then : ${value}`);
	})
	.catch( function (error) { // promise가 reject(실패)되면 실행할 코드를 입력한다.
		console.log(`promise.catch : ${error}`);
	})
	.finally(function () { // promise 성공, 실패 여부와 상관없이 실행할 코드가 있다면 입력한다.
		console.log(`promise.finally : promise 성공/실패 여부와 상관없이 실행된다.`);
	});
*/

promise
	.then( (value) => {
		console.log(`1.promise.then : ${value}`);
	})
	.catch( (error) => {
		console.log(`1.promise.catch : ${error}`);
	})
	.finally( () => {
		console.log(`1.promise.finally : promise 성공/실패 여부와 상관없이 실행된다.`);
	});

//	-----------------------------------------------------------

const fetchNumber = new Promise ( (resolve, reject) => {
	console.log('2.fetchNumber executor 함수 실행');
	setTimeout ( () => resolve(1), 1000); // setTimeout
});

fetchNumber
	.then( (number) => {
		console.log(`2.fetchNumber.then1 : ${number}`);
		//	then()에서 return 시키면 promise를 return 한다.
		return number * 2;
	})
//	이전 then()에서 리턴하는 값은 다음 then에서 받아 처리할 수 있다.
	.then( (number) => {
		console.log(`2.fetchNumber.then2 : ${number}`);
		return number * 3;
	})
	.then( (number) => {
		console.log(`2.fetchNumber.then3 : ${number}`);
		//	새 Promise 객체를 만들어 return 시킬 수 있다.
		return new Promise ( (resolve, reject) => {
			setTimeout(  () => resolve(number - 1), 2000); // setTimeout
		});
	})
	.then( (number) => {
		console.log(`2.fetchNumber.then4 : ${number}`);
	});

//	-----------------------------------------------------------

//	error handling

/*
const getHen = function () {
	return new Promise( function (resolve, reject) {
		setTimeout( function () {
			resolve('암탉')
		}, 1000); // setTimeout
	});
};

const getEgg = function (hen) {
	return new Promise( function (resolve,reject) {
		setTimeout( function () {
		resolve(`${hen} -> 달걀`)
		}, 1000); //  setTimeout
	});
};

const getMeal = function (egg) {
	return new Promise( function (resolve, reject) {
		setTimeout ( function () {
			resolve(`${egg} -> 달걀프라이`)
		}, 1000);// setTimeout
	});
};
*/

const getHen = () => new Promise( (resolve, reject) => setTimeout( () => resolve('암탉'), 1000) );

const getEgg = (hen) => new Promise( (resolve, reject) =>
//	 setTimeout( () => resolve(`${hen} -> 달걀`), 1000) );
	 setTimeout( () => reject(` %%에러%% ${hen} -> 달걀`), 1000) );

const getMeal = (egg) => new Promise( (resolve, reject) => setTimeout( () => resolve(`${egg} -> 달걀프라이`), 1000) );

/*
getHen()
	.then( function (hen) {
		console.log(`3.hen : ${hen}`); // 3.hen: 암탉
		return getEgg(hen);
	})
	.then( function (egg) {
		console.log(`3.egg : ${egg}`); // 3.egg : 암탉 -> 달걀
		return getMeal(egg);
	})
	.then( function (meal) {
		console.log(`3.meal : ${meal}`); // 3.meal: 암탉 ->  달걀 -> 달걀프라이
		
	})
*/

/*
getHen()
	.then( (hen) => getEgg(hen) )
	.then( (egg) => getMeal(egg) )
	.then( console.log );
*/

getHen()
	.then( (hen) => getEgg(hen) )
//	에러가 발생된 시점에서 에러를 처리하려면 발생된 시점에 catch()를 붙여서 처리하면 된다.
//	.catch( () => '빵' )
	.then( (egg) => getMeal(egg) )
	.then( console.log )
//	catch()를 마지막에 사용하면 임의의 시점에서 발생된 에러를 처리하고, 나머지는 실행하지 않는다.	
	.catch(console.log)






















