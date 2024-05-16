//	callback 지옥

//	아이디와 비밀번호를 입력받는다.
const id = prompt('아이디를 입력하세요');
const password = prompt('비밀번호를 입력하세요');

//	id와 password를 입력받아서 로그인 처리와 로그인 후 역할을 받아오는 처리를 하는 클래스를 만든다.
class UserStorage {
	
//	아이디와 비밀번호를 받아서 로그인 처리 함수
//	loginUser(아이디, 비밀번호, 로그인 성공시 실행할 callback 함수, 로그인 실패시 실행할 callback 함수)
	loginUser(id, password, onSuccess, onError) {
//		setTimeout( function () {
		setTimeout(  () => {
			if (id == '홍길동' && password == '1111' || id == '임꺽정' && password == '2222') {
				//	로그인에 성공했으므로 역할을 받아오는 callback 함수를 실행한다.
				onSuccess(id);
			} else {
				//	로그인 실패시 실행할 callback 함수를 실행한다.
				onError('로그인 실패');
			};
		}, 2000); // setTimeout
		
	};



//	로그인 후 아이디에 따라서 역할을 받아오는 처리 함수	
//	getRoles(아이디, 역할을 받아오면 실행할 callback 함수, 역할을 받아오지 못하면 실행할 callback 함수)
	getRoles(id, onSuccess, onError) {
//		setTimeout ( function () {
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
	
}


//	로그인 처리를 하기위해  loginUser(), getRoles() 함수가 정의된 UserStorage 클래스 객체를 생성한다.
const userStorage = new UserStorage();

/*
//	UserStorage 클래스 객체에서 loginUser() 함수를 호출해서 로그인 처리를 한다.
const onSuccess = function (id) { // loginUser();args;fn;onSuccess
	console.log(`${id} 로그인 성공`);
//	로그인에 성공했으므로 아이디에 따른 역할을 받아온다.
	userStorage.getRoles(id, onSuccess2, onError2);
	
};

const onError = function (error) { 
	console.log(error);
};

const onSuccess2 = function (userWithRole) { // getRoles();args;fn;onSuccess
//	userWithRole로 넘어온 javascript 객체에 저장된 name과 role을 출력한다.
	console.log(`안녕하세요 ${userWithRole.name}님 당신의 권한은 ${userWithRole.role}입니다.`);
	
};

const onError2 = function (error) {
	console.log(error);
	
};

userStorage.loginUser( id, password, onSuccess, onError );
*/

/*
userStorage.loginUser( id, password,  (id) => {  // loginUser();args;fn;onSuccess
		console.log(`${id} 로그인 성공`);
			userStorage.getRoles(id, (userWithRole) => { // getRoles();args;fn;onSuccess
			console.log(`안녕하세요 ${userWithRole.name}님 당신의 권한은 ${userWithRole.role}입니다.`)
			}, (error) =>  console.log(error)) // getRoles();args;fn;onError
	}, (error) => 	console.log(error)); // loginUser();args;fn;onError 
*/

userStorage.loginUser( 
	id,
	password,
	(id) => {  // loginUser();args;fn;onSuccess
		console.log(`${id} 로그인 성공`);
			userStorage.getRoles(
				id,
				(userWithRole) => { // getRoles();args;fn;onSuccess
					console.log(`안녕하세요 ${userWithRole.name}님 당신의 권한은 ${userWithRole.role}입니다.`)
			}, (error) =>  console.log(error)) // getRoles();args;fn;onError
	}, 
//	함수가 실행하는 기능이 인수로 넘어온 데이터 1건을 단순히 콘솔에 로그로 출력하는 경우 
//	(error) => 	console.log(error) 와 같이 실행하지 않고 console.log만 적어도 실행된다.
	console.log // loginUser();args;fn;onError 
);



























