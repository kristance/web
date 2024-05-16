//	jsonplaceholder 검색
//	https://jsonplaceholder.typicode.com/ 아래쪽으로 이동해서 /posts 클릭
//	https://jsonplaceholder.typicode.com/posts

//	javascript fetch api
//	https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch

//	fetch()의 리턴값은 promise 이다. -> then(), catch()로 결과를 받아 처리한다.


console.log('exe 1-1');
fetch('https://jsonplaceholder.typicode.com/posts')
//	then()이 사용가능하다는 것은 fetch() 실행 후 리턴이 promise라는 의미이다.
	.then ( function (response) {
		//	console.log('1-2-1.response', response);
		//	console.log('1-2-2 response.json()', response.json()); // json 타입의 데이터를 javascript 객체로 변환한다.
		//	fetch(url) 실행으로 promise를 받아오면 바로 사용할 수 없고, .then()을 이용해 .json() 메서드를 사용, json파일의 내용을 추출해서 사용해야한다.
		//	.json() 메서드 사용으로 나온 결과값도 promise이다.
		return response.json();
	})
	.then ( function (data) {
		//	console.log(typeof data);
		console.log('1-2-2  data' , JSON.stringify(data));
	})
console.log('exe 1-3');

//	-------------------------------------------------------------------------------------------

//	fetch(요청 url) 함수의 리턴값은 promise이며 response(응답) 객체이다. 
let fetched = fetch('https://jsonplaceholder.typicode.com/posts');

console.log('exe 2-1' + fetched); // exe 2-1 [object Promise]
console.log('exe 2-2' , fetched); // exe 2-1 Promise { <state>: "pending" }

//	fetch() 함수가 리턴한 값은 Promise 객체이므로 then()과 catch() 함수를 사용할 수 있다.
//	then() 함수는 fetch() 함수가 성공적으로 실행되면 호출되고, catch() 함수는 fetch() 함수가
//	정상적으로 실행되지 않으면 호출된다.
//	fetch() 함수가 실행되면 Promise가 리턴되고 then() 함수도 실행되면 Promise를 리턴한다.

fetched.then( (response) => console.log('exe 2-3' , response) ) // Response { type: "cors", url:.....

fetch('https://jsonplaceholder1.typicode.com/posts'); // 주소 틀림
fetched.catch( (error) =>console.log('exe 2-4' , error) ) // TypeError : Failed to fetch

//	-------------------------------------------------------------------------------------------

fetch('https://jsonplaceholder.typicode.com/posts')
	.then( function (response) {
		//	console.log( 'exe 3-1' , response.json() ); // Promise { <state>: "pending" }
		
		//	then() 함수 내부에 또 then() 함수가 나오는 방식 nested promise라 한다.
		//	response.json().then( (data) => console.log('exe 3-2' , data))
		return response.json(); // promise를 리턴한다.
		
	})
	.then( function (data) {
		//	then() 함수에서 promise를 리턴시키고 외부 then()로 받아서 사용하는 방법을
		//	chaining이라 하고 nested 방식보다 더 많이 사용이 된다.
		console.log('exe 3-2' , data);
	})
	.catch( (error) => console.log('exe 3-3' , error) )






















