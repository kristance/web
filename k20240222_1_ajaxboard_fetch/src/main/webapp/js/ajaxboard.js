
onload = () => searchFunction()


/*
//	javascript AJAX를 이용한 검색 요청 
const searchRequest = new XMLHttpRequest();

searchFunctionsearchFunction
	const url = './AjaxSearch?name=' + encodeURIComponent(document.getElementById('username').value)
	searchRequest.open('GET', url, true)
	searchRequest.send(null)
	searchRequest.onreadystatechange = searchProcess 
}

function searchProcess() {
	console.log('searchFunction() 함수에서 요청한 AJAX가 완료되면 자동으로 실행되는 함수')

	if (searchRequest.readyState == 4 && searchRequest.status == 200) {
		let obj = eval('(' + searchRequest.responseText + ')')
		let result = obj.result
		let tbody = document.getElementById('ajaxTable')
		tbody.innerHTML = ''
		
		for (let i = 0; i<result.length; i++) {
			let row = tbody.insertRow(i);
			for (let j = 0; j<result[i].length; j++) {
				let cell = row.insertCell(j)
				cell.innerHTML = result[i][j].value
			}
		}
	}
	
	
}
*/

//	fetch AJAX를 이용한 검색 요청 -> GET 
function searchFunction() {
	const url = './AjaxSearch?name=' + encodeURIComponent(document.getElementById('username').value)
	fetch(url, {
		method : 'GET'
	})
		.then( (response) => {
		 return response.text()
		})
	 	.then( (text) => {
			//	javascript AJAX는 XHR객체.responseText를 이용했지만, 
			//	fetch는 response.text()로 얻어낸 text를 이용해서 처리한다.
				console.log(text);
			
			//	let obj = eval('(' + text + ')')
			let result = eval('(' + text + ')').result
			//	console.log(result);
			let tbody = document.getElementById('ajaxTable')
			tbody.innerHTML = '';
			
			for (let i = 0; i<result.length; i++) {
				let row = tbody.insertRow(i);
				for (let j = 0; j<result[i].length; j++) {
					let cell = row.insertCell(j)
					cell.innerHTML = result[i][j].value
				}
			}
			
			
			
		})
	
}

/*
//	javascript AJAX를 이용한 저장 요청 
const insertRequest = new XMLHttpRequest();

function insertFunction() {

	const url = './AjaxInsert?name=' +
					 encodeURIComponent( $('#name').val() ) +
				 '&age=' +
					 encodeURIComponent( $('#age').val() ) +
				 '&gender=' +
					 encodeURIComponent( $('input[name=gender]:checked').val() ) +
				 '&email=' +
					 encodeURIComponent( $('#email').val() );
				 

	insertRequest.open('GET', url, true)
	insertRequest.send(null)
	insertRequest.onreadystatechange = insertProcess
	
	
	
}


function insertProcess() {
	if (insertRequest.readyState == 4 && insertRequest.status == 200) {
		
		$('#name').val('');
		$('#age').val('');
		$('#email').val('');
		$('#username').val('');
		$('#name').focus();
	
		let result = insertRequest.responseText;
		if ( result == 1) {
			alert('저장 성공');
			searchFunction();	
		} else {
			alert('저장 실패');
		}
	}
	
	
	
}
*/




//	fetch AJAX를 이용한 저장 요청 -> POST

function insertFunction() {
//	POST 방식으로 전송할 데이터를 받아서 FormData 객체를 만든다.	
	const formdata = new FormData();
//	FormData 객체에 POST 방식으로 전송할 데이터를 append() 함수로 추가한다.	
	formdata.append('name', $('#name').val()) ;
	formdata.append('age', $('#age').val()) ;
	formdata.append('gender', $('input[name=gender]:checked').val());
	formdata.append('email', $('#email').val());
//	fetch 요청시 body에 넣어주기 위해 FormData 객체를 인수로 넣어 URLSearchParams 객체를 만든다.
	const payload = new URLSearchParams(formdata);

	const url = './AjaxInsert'
	fetch(url, {
		method : 'POST',
		body : payload,
		headers : {
			'ContentType' : 'application/x-www-form-urlencoded'
		}
	})
		.then ( (response) => {
			return response.text()
		})
		.then ( (text) => {
			$('#name').val('');
			$('#age').val('');
			$('#email').val('');
			$('#username').val('');
			$('#name').focus();
		
			if ( text == 1) {
				alert('저장 성공');
				searchFunction();	
			} else {
				alert('저장 실패');
			}
				
			
		})
	
	
}


















