function fetchAJAX (pagename) {
	fetch(pagename)
		.then( (response) => {
			if(response.status == 200) {
				response.text()
					.then( (text) => document.querySelectorAll('div')[0].innerHTML = text)
			} else {
				alert('요청 실패');
			}
		})
	
	
	
/**/	
}
	
$( () => {
	 if (location.hash) { 
		 fetchAJAX (location.hash.substring(2))
	 } else {
		 fetchAJAX ('summary')
	 }
	
//	list 파일의 내용을 읽어서 	<ol id="list"> ~ </ol> 사이에 넣어주는 fetch
	/*
	fetch ('list')
			.then( (response) =>  {
				if (response.status == 200) {
					response.text()
						.then( (text) => $('#list').html(text))
				} else{
					alert('요청 실패');
				}
				
			})
	*/
	
//	then() 함수 내부에 then()이 또 나오는 기법을 nested라 한다.	
//	fetch ('list').then( (response) =>  response.text().then( (text) => $('#list').html(text) ) )
	
//	then()이 리턴한 결과를 외부에서 다른 then()이 받아서 처리하는 기법을 chaining이라 한다.
	fetch ('list')
		.then( (response) =>  response.text()
		.then( (text) => $('#list').html(text) ) )


	/*
//	list2 파일의 내용을 읽어서 	<ol id="list"> ~ </ol> 사이에 넣어주는 fetch -> nested
	fetch('list2')
		.then( (response) => {
			//	console.log(response.text())
			response.text()
				.then( (text) => {
				//	console.log(text);
				//	split() 함수를 사용해서 ','를 경계로 문자열을 분리해서 배열로 리턴한다.
				let obj = text.split(',');
				//	console.log(obj);
				
				//	<ol>태그 내부에 출력할 태그 목록을 만든다.
				//	<li><a href="#!1" onclick="fetchAJAX('1')"> 1절 가사</a></li>
				let items = '';
				for (let i= 1; i <= obj.length;i++){
				//	let item = '<li><a href="#!' + i + '" onclick="fetchAJAX(\'' + i + '\')">' + obj[i-1] + '</a></li>';
					let item = `<li><a href="#!${i}" onclick="fetchAJAX('${i}')">${obj[i-1]}</a></li>`
				//	console.log(item);
					items += item;	
				
				}
				$('#list2').html(items);
				
			})
		})
	*/
	
	/*
	fetch('list2')
		.then( (response) => {
			response.text()
				.then( (text) => {
				let obj = text.split(',');
				
				let items = '';
				for (let i= 1; i <= obj.length;i++){
					let item = `<li><a href="#!${i}" onclick="fetchAJAX('${i}')">${obj[i-1]}</a></li>`
					items += item;	
				
				}
				$('#list2').html(items);
				
			})
		})
	*/

//	list2 파일의 내용을 읽어서 	<ol id="list"> ~ </ol> 사이에 넣어주는 fetch -> chaining
	/*
	fetch('list2')
		.then( function (response) { 
			return response.text()  // 다음 .then()에서 처리할 데이터를 전달이 필요하기 때문에 return을 적어준다
			})
		.then (function (text) {
			console.log(text);
			let obj = text.split(',');
			let items = '';
				for (let i= 1; i <= obj.length;i++){
					let item = `<li><a href="#!${i}" onclick="fetchAJAX('${i}')">${obj[i-1]}</a></li>`
					items += item;	
				}
				$('#list2').html(items);
		})
	*/
	
	fetch('list2')
		.then( (response) => response.text())
		.then ( (text) => {
			let obj = text.split(',');
			let items = '';
				for (let i= 1; i <= obj.length;i++){
					let item = `<li><a href="#!${i}" onclick="fetchAJAX('${i}')">${obj[i-1]}</a></li>`
					items += item;	
				}
				$('#list2').html(items);
		})
		
		
		
		
})





































