//	 promise 만들기 1 -> Promise 객체를 만들어 변수에 할당한다.
const job = new Promise( (resolve, reject) => {
	setTimeout( () => resolve('job ok'), 1000);
});

job.then( (data) => console.log('1-1 data - ', data))

const job2 = new Promise( (resolve, reject) => {
	setTimeout( () => reject('job2 fail'), 1000);
});

job2.catch( (error) => console.log('1-2 error - ', error))

//	----------------------------------------------------------

//	 promise 만들기 2 -> 함수에서 Promise 객체를 만들어 리턴한다.

function job3 () {
	return new Promise( (resolve, reject) => {
		setTimeout ( () => resolve('job3 done'), 2000);
	});
};

job3().then( (data) => console.log('2-1 data - ', data));

function job4 () {
	return new Promise( (resolve, reject) => {
		setTimeout ( () => reject('job4 fail'), 2000);
	});
};

job4().catch( (error) => console.log('2-2 error - ', error));

//	----------------------------------------------------------

job3()
	.then( (data) => {
		console.log('3-1 data - ', data)
		job4()
			.catch ( (error) => {
				console.log('3-2 error - ', error)
			})
	})

//	----------------------------------------------------------

job4()
	.then( (data) => {
		console.log('4-1 data - ', data)
		job3()
	})
//	catch()가 중간에 있으면 실패했어도 다음 작업이 이어서 실행된다.	
	.catch( (error) => {
		console.log('4-2 error - ', error);
		//	catch()가 중간에 있어도 Promise 객체의 reject() 함수를 실행하면 이어지는 작업을
		//	중지시킬 수 있다.
		return Promise.reject('현재 작업이 실패해서 다음 작업 속행 불능');
	})
	.then( (data) => {
		console.log('앞의 작업이 실패하면 이곳의 작업은 실행하면 안된다.');
	})
//	catch()가 마지막에 있으면 실패한 작업 이후의 작업은 실행되지 않는다.	
//	.catch( (error) => {
//		console.log('4-2 error - ', error)
//	})



















