//	callback 지옥 -> promise

const id = prompt('아이디를 입력하세요');
const password = prompt('비밀번호를 입력하세요');

class UserStorage {
	
	/*
//	아이디와 비밀번호를 받아서 로그인 처리 함수
//	loginUser(아이디, 비밀번호, 로그인 성공시 실행할 callback 함수, 로그인 실패시 실행할 callback 함수)
	loginUser(id, password, onSuccess, onError) {
		setTimeout(  () => {
			if (id == '홍길동' && password == '1111' || id == '임꺽정' && password == '2222') {
				onSuccess(id);
			} else {
				onError('로그인 실패');
			};
		}, 2000); // setTimeout
		
	};
	*/
	
//	callback 지옥에 빠진 이유는 성공시 실행할 함수와 실패시 실행할 함수를 인수로 받았기 때문이다.
//	promise를 사용하면 성공시에는 resolve(), 실패시에는 reject() 함수로 처리하면 된다.

//	loginUser(아이디, 비밀번호) // promise
	loginUser(id, password) {
		//	함수가 호출되면 promise를 만들어 리턴시킨다.
		return new Promise( (resolve, reject) => {
			//	기존의 코드를 promise의 executor 함수에서 실행한다.
				setTimeout(  () => {
					if (id == '홍길동' && password == '1111' || id == '임꺽정' && password == '2222') {
						//	onSuccess(id);
						resolve(id);
					} else {
						//	onError('로그인 실패');
						reject('로그인 실패');
					};
				}, 2000); // setTimeout
		});
	}

//	로그인 후 아이디에 따라서 역할을 받아오는 처리 함수	
	/*
//	getRoles(아이디, 역할을 받아오면 실행할 callback 함수, 역할을 받아오지 못하면 실행할 callback 함수)

	getRoles(id, onSuccess, onError) {
		setTimeout (  () => {
			if( id == '홍길동') {
				onSuccess({
					name : '홍길동',
					role : '관리자'
				});
			} else {
				onError('권한이 없습니다.');
			};
		}, 1000); // setTimeout
		
	};
	*/
	
//	getRoles(아이디) // promise
	
	getRoles(id) {
		//	함수가 호출되면 promise를 만들어 리턴시킨다.
		return new Promise( (resolve, reject) => {
			//	기존의 코드를 promise의 executor 함수에서 실행한다.
			setTimeout (  () => {
				if( id == '홍길동') {
				//	onSuccess({	name : '홍길동', role : '관리자' });
					resolve({ name : '홍길동', role : '관리자' });
				} else {
				//	onError('권한이 없습니다.');
					reject('권한이 없습니다.');
				};
			}, 1000); // setTimeout
		});
	};
	
}

const userStorage = new UserStorage();

/*
userStorage.loginUser( 
	id,
	password,
	(id) => {  
		console.log(`${id} 로그인 성공`);
			userStorage.getRoles(
				id,
				(userWithRole) => {
					console.log(`안녕하세요 ${userWithRole.name}님 당신의 권한은 ${userWithRole.role}입니다.`)
			}, (error) =>  console.log(error)) 
	}, 
	console.log 
);
*/

/*
userStorage.loginUser(id, password)
	.then ( function (id) {
		//	console.log(id);
		return userStorage.getRoles(id);
	})
	.then ( function (userWithRole) {
		//	console.log(userWithRole);
		alert(`안녕하세요 ${userWithRole.name}님 당신의 권한은 ${userWithRole.role}입니다.`);
	})
	.catch ( function (error) {
		//	console.log(error);
		alert(error)
	})
*/

userStorage.loginUser(id, password)
	.then ( (id) => userStorage.getRoles(id))
	.then ( (userWithRole) => alert(`안녕하세요 ${userWithRole.name}님 당신의 권한은 ${userWithRole.role}입니다.`))
	.catch ( (error) => alert(error) );






















