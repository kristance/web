$( () => {
	$('#emp_search').bind('click', function () {
		let empid = $('input[name="empid"]').val();
		console.log(empid);
		if(!isNaN(empid) && empid.trim().length == 3) {
			
			$.ajax({
				url : 'emplist.xml', 
				method : 'get', 
				asyn : true, 
				dateType : 'xml', 
				success :  (data) => {
					let empInfo = $(data).find('EMPLOYEE_ID:contains(' + empid + ')').parent();
					if ($(empInfo).is('ROW')) {
						
						//	데이터가 출력될 테이블이 있을 때
						/*
						$('table input').each(function (index) {
							let search = $(empInfo).children().eq(index).text();
							$(this).val(search); 
						});
						*/
						
						//	body 태그 내부에 테이블을 만들고 xml 파일에서 읽어온 데이터를 함수를 실행한다.
						$('body').append(makeTable(empInfo));
						
					} else {
						alert(empid + '번은 존재하지 않는 사원번호입니다.');
					}
					
				},
				error : (err) => alert('요청 실패 : ' + err.status)
			});
			
		} else {
			alert ('정확한 사원번호 입력바랍니다.');
			$('input[name="empid"]').val('');
			$('input[name="empid"]').focus();
		}
		
	});
});


//	테이블을 만들고 xml 파일에서 얻오온 데이터를 테이블에 넣어서 리턴하는 함수
function makeTable(empInfo) {
// console.log(empInfo.html())

//	테이블을 만든다.
	let $table = $('<table border="1">'); // <table border="1"> ~ </table>
	
	/*
//	테이블에 추가할 첫 행(머리글 행)을 만들어 테이블에 추가한다.
	let $tr = $('<tr>') // <tr> ~ </tr>

//	xml 파일에서 읽어온 사원 번호에 해당되는 데이터(<ROW>태그의 자식요소)의 갯수만큼 반복하며
//	행에 열을 추가한다.
	for (let i = 0; i < empInfo.children().length; i++) {
		//	행에 추가할 열을 만든다.
		//	let $th = $('<th>'); //	<th> ~ </th>
		//	열에 사원정보 데이터를 넣어준다.
		//	console.log(empInfo.children().eq(i).prop('tagName'));
		//	$th.html(empInfo.children().eq(i).prop('tagName')); //	<th>tagName</th>
		let $th = $('<th>').appende(empInfo.children().eq(i).prop('tagName')); //	<th>tagName</th> 
		
		//	열을 행에 추가한다.
		$tr.append($th);
	}	
	$table.append($tr);
	*/
	
	let tr = `
		<tr>
			<th>사원번호</th>
			<th>이름</th>
			<th>이메일</th>
			<th>내선번호</th>
			<th>입사일</th>
		</tr>
	`;
	
	$table.append(tr);
	
	
//	테이블에 추가할 데이터 행을 만들어 테이블에 추가한다.
/*
	let $tr = $('<tr>');
	for (let i = 0; i < empInfo.children().length; i++) {
		//	console.log(empInfo.children().eq(i).text());
		let $td = $('<td>').append(empInfo.children().eq(i).text());
		$tr.append($td);
	}
	$table.append($tr);
*/
	tr = `
		<tr>
			<td>${empInfo.children().eq(0).text()}</td>
			<td>${empInfo.children().eq(1).text()}</td>
			<td>${empInfo.children().eq(2).text()}</td>
			<td>${empInfo.children().eq(3).text()}</td>
			<td>${empInfo.children().eq(4).text()}</td>
		</tr>
	`;
	
	$table.append(tr);

//	테이블을 리턴시킨다.
	return $table;
}

































