function tableAdd() {
//	데이터가 입력된 form을 얻어와서 form에 입력된 데이터를 배열에 저장한다.
//	let form = document.getElementsByTagName('form')[0];
//	let form = document.querySelectorAll('form')[0];
//	forms : 현재 문서의 form을 배열 형태로 저장하고 있는 자바스크립트 객체
//	console.log(document.forms);
	let form = document.forms[0];
	console.log(form);
	
//	let id = document.getElementsByName('id')[0].value;
//	console.log('id : ' + id);

//	form이 저장된 변수.name속성값.value : form에서 지정된 name 속성을 가지는 요소에 입력된 값을
//	얻어올 수 있다.
//	console.log('id : ' + form.id.value);
//	console.log('password : ' + form.password.value);
//	console.log('address : ' + form.address.value);
//	console.log('phoneNumber : ' + form.phoneNumber.value);
	
	let values = [form.id.value, form.password.value, form.address.value, form.phoneNumber.value];
//	console.log(values);

//	form에 데이터가 모두 입력되었나 확인한다.
	for (let i = 0; i < values.length; i++) {
		let value = values[i];
		if (value == null || value.trim() == '' || value == undefined) {
			switch (i) {
				case 0 :
					alert('아이디를 입력하세요.');
					// 아이디가 입력되지 않았으므로 아이디 텍스트 상자의 내용을 지우고 포커스를 위치시킨다.
					form.id.value = '';
					form.id.focus();
					//	테이블에 추가할 아이디가 입력되지 않았으므로 tableAdd() 함수를 종료한다.
					return;
				case 1 :
					alert('비밀번호를 입력하세요.');
					// 비밀번호가 입력되지 않았으므로 비밀번호 텍스트 상자의 내용을 지우고 포커스를 위치시킨다.
					form.password.value = '';
					form.password.focus();
					//	테이블에 추가할 비밀번호가 입력되지 않았으므로 tableAdd() 함수를 종료한다.
					return;
				case 2 :
					alert('주소를 입력하세요.');
					// 주소가 입력되지 않았으므로  주소 텍스트 상자의 내용을 지우고 포커스를 위치시킨다.
					form.address.value = '';
					form.address.focus();
					//	테이블에 추가할 주소가 입력되지 않았으므로 tableAdd() 함수를 종료한다.
					return;
				case 3 :
					alert('전화번호를 입력하세요.');
					// 전화번호가 입력되지 않았으므로 전화번호 텍스트 상자의 내용을 지우고 포커스를 위치시킨다.
					form.phoneNumber.value = '';
					form.phoneNumber.focus();
					//	테이블에 추가할 전화번호가 입력되지 않았으므로 tableAdd() 함수를 종료한다.
					return;
			}
		}
	}

//	배열에 저장된 데이터를 id속성이 resultTable인 테이블에 추가한다.
//	<tbody>태그를 얻어온다.
//	let tbody = document.querySelector('#addtr');
	let tbody = document.getElementById('addtr');
//	values 배열에 저장된 데이터를 사용해서 <tbody> 태그에 추가할 행(<tr>태그)을 만드는 함수를 실행하고
//	함수가 리턴한 결과(<tr>태그)를 <tbody> 태그에 추가한다.
	tbody.appendChild( createRow(values) );
	
//	테이블의 데이터를 추가한 후 다음 데이터를 입력받기 위해서 텍스트 상자의 내용을 모두 제거한다.
	form.id.value = '';
	form.password.value = '';
	form.address.value = '';
	form.phoneNumber.value = '';
//	아이디 텍스트 상자를 포커스를 이동시킨다.	
	form.id.focus();
	
}

//	tableAdd() 함수에서 호출되는 <tbody> 태그에 추가할 데이터(values 배열)를 넘겨받아
//	<tr> 태그를 만들어 리턴하는 함수

function createRow(values) {
//	console.log(values);
//	<tr> 태그를 만든다.
	let tr = document.createElement('tr'); // <tr></tr>
	
//	열의 갯수(인수로 넘어온 values 배열의 length)만큼 반복하며 <td>태그를 만들어 <tr>태그에 넣어준다.
	for(let value of values) {
		//	<td>태그를 만든다.
		let td = document.createElement('td'); // <td></td>
		
		//	<td>태그에 values 배열에 저장된 데이터를 넣어준다.
		td.innerHTML = value; // <td>value</td>
		// <tr>태그에 <td>태그를 넣어준다.
		tr.appendChild(td);
	}
	
//	현재 데이터를 삭제하는 버튼을 <td>태그를 만들어서 <tr>태그에 추가한다.	
	let td = document.createElement('td'); // <td></td>
	td.innerHTML = `<input type="button" value="${ values[0] }번삭제" onclick="removeCurrent(this)"/>`;
	
	tr.appendChild(td);
	
//	<tbody> 태그에 추가할 <tr>태그를 리턴시킨다. 
	return tr;	
}

//	클릭한 삭제 버튼이 있는 행을 삭제하는 함수
function removeCurrent(removeBtn) {
//	console.log(removeBtn); // <input type="button"~> 클릭한 버튼 자신이 넘어온다.
//	console.log(removeBtn.parentNode); // <td> ~ </td>
//	console.log(removeBtn.parentNode.parentNode); // <tr> ~ </tr>

//	삭제할 <tr>태그를 선택한다.
	let tr = removeBtn.parentNode.parentNode;
//	<tbody> 태그의 자식인 <tr> 태그를 제거한다.
	let tbody = document.getElementById('addtr');
	tbody.removeChild(tr);

}


//	마지막 행을 삭제하는 함수
function removeLast() {
//	<tbody> 태그를 선택해서 마지막 <tr> 태그를 제거한다.
	let tbody = document.getElementById('addtr');
	tbody.removeChild(tbody.lastElementChild);
	
}

//	테이블의 모든 행을 삭제하는 함수
function removeAll() {
//	<tbody> 태그를 선택해서 공백으로 채운다.
	let tbody = document.getElementById('addtr');
	tbody.innerHTML = '';
	
}


































