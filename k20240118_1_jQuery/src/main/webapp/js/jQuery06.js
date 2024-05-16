$( () => {
//	class 속성값이 error로 지정된 span 태그(에러 메시지)를 숨긴다.
	$('.error').hide();	
	$('#infoBox').focus();
	
//	id 속성값이 single로 지정된 form에서 	submit 버튼이 클릭되면 실행할 이벤트를 정의한다.
//	submit 이벤트는 input 태그나 button 태그의 type 속성값이 submit인 버튼이 클릭되면 발생되는 이벤트이다.
//	submit 이벤트에서는 서버로 전송하기 전에 폼의 유효성을 검사해서
//	입력된 데이터에 이상이 없으면 true를 리턴시키고, 이상이 있으면 에러 메시지를 출력한 후 false를 리턴시킨다.
//	submit 이벤트의 실행 결과가 true(기본값)면 action 속성에 지정된 페이지로 이동하고, 실행결과가 false면
//	현재 페이지 그대로 머물러 있는다.

	$('#single').submit(function () {
		//	console.log('submit() 이벤트 함수 실행');
		//	let userId = $('input:eq(0)').val().trim();
		//	let userId = $('input[type="text"]:eq(0)').val().trim();
		//	let userId = $('input[name="userId"]:eq(0)').val().trim();
		//	let userId = $('input[id="infoBox"]:eq(0)').val().trim();
		//	let userId = $('input:text:eq(0)').val().trim();
			let userId = $('#infoBox').val().trim();
		//	console.log(userId);
		if (userId == null || userId == '') { // 유효성 검사
			$('#infoBox').val('');
			$('#infoBox').focus();
			$('.error').show();	// 시작할 때 감춰둔 에러 메시지를 표시한다.
			return false; // false를 리턴시키면 현재 페이지에 그대로 머물러있는다.
		} 
		
		return true; // true를 리턴시키면 action 속성에 지정된 페이지로 이동한다.
		
		
		
	});
	
//	전체선택 체크박스가 클릭되면 모든 체크 박스를 선택 또는 해제한다.
	$('input:checkbox[name="all"]:eq(0)').click(function () {
		//	console.log('전체선택 클릭');
		
		//	name 속성이 all인 체크 박스의 선택 여부를 얻어온다.
		//	prop('속성이름') : 인수로 지정된 속성의 프로퍼티를 얻어온다.
		let check = $('input:checkbox[name="all"]:eq(0)').prop('checked');
		//	console.log(check);
			
		//	name 속성이 chk인 모든 체크 박스의 프로퍼티를 name 속성이 all인 체크 박스의 프로퍼티로 변경한다.
		//	prop('속성이름', 프로퍼티) : 인수로 지정된 속성의 프로퍼티를 변경한다.
		/*
		$('input:checkbox[name="chk"]').each(function (index, obj) {
			// console.log(index);
			$('input:checkbox[name="chk"]').eq(index).prop('checked', check);
			
		})
		*/
		
		/*
		$('input:checkbox[name="chk"]').each( (index) => {
			$('input:checkbox[name="chk"]').eq(index).prop('checked', check);
		});
		*/
		
		/*
		//	each() 함수를 실행하면 한번에 1개의 객체만 처리하게 되므로 $(this)를 사용할 수 있다.
		$('input:checkbox[name="chk"]').each( function () {
			console.log( $(this) );
			$(this).prop('checked', check);
		});
		*/
		
		$('input:checkbox[name="chk"]').prop('checked', check);
		
	});
	
//	name 속성값이 chk인 체크박스가 클릭되면 name 속성이 chk인 모든 체크 박스가 체크되었나 검사해서
//	모두 체크되었으면 전체 선택 체크 박스를 체크하고, 그렇지 않으면 전체 선택 체크 박스의 체크를 해제한다.
	$('input:checkbox[name="chk"]').click( () => {
		//	console.log('name 속성값이 chk인 체크 박스 클릭');
		//	name 속성값이 chk인 요소 전체의 갯수와 name 속성값이 chk인 요소 중에서 체크된 요소의 갯수와 비교한다.
		//	console.log('name 속성값이 chk인 요소 전체의 갯수 : ' + $('input:checkbox[name="chk"]').length);
		//	console.log(' name 속성값이 chk인 요소 중에서 체크된 요소의 갯수 : ' + $('input:checkbox[name="chk"]:checked').length);
		if ($('input:checkbox[name="chk"]').length == $('input:checkbox[name="chk"]:checked').length) {
			//	console.log('모두 체크됨')
			$('input:checkbox[name="all"]:eq(0)').prop('checked', true);
		} else {
			//	console.log('모두 체크되지않음')
				$('input:checkbox[name="all"]:eq(0)').prop('checked', false);
		}
		
	});
	
//	과일 이름이 지정된 체크 상자를 체크하고 확인 버튼을 클릭하면 id 속성인 result인 div 태그 내부에
//	과일 이름과 과일 가격을 출력한다.
	$('#confirm').click(function () {
	//	console.log('confirm 확인버튼 클릭 이벤트 실행');
		
	//	선택한 과일 가격이 표시될 div 태그 내부 내용을 지운다.
	//	$('#result').text('');
	//	$('#result').html('');

	//	empty() : 선택된 요소의 내부 내용을 지운다.
		$('#result').empty();
	
	// name 속성값이 chk인 체크 박스의 체크된 항목의 갯수를 얻어온다.
		let chk = $('input:checkbox[name="chk"]:checked');
		//	console.log(chk.length);

//   형제(sibling) 요소 탐색
//   .siblings() : 선택된 요소의 형제 요소 중에서 지정한 선택자에 해당되는 모든 형제 요소를 선택한다.
//   .next() : 선택된 요소 바로 다음에 위치한 형제 요소 1개를 선택한다.
//   .nextAll() : 선택된 요소 바로 다음에 위치한 형제 요소를 모두 선택한다.
//   .nextUntil() : 선택된 요소 바로 다음에 위치한 형제 요소 중에서 지정한 선택자에 해당되는 요소 
//                  바로 이전까지의 요소를 모두 선택한다.
//   .prev() : 선택된 요소 바로 이전에 위치한 형제 요소 1개를 선택한다.
//   .prevAll() : 선택된 요소 바로 이전에 위치한 형제 요소를 모두 선택한다.
//   .prevUntil() : 선택된 요소 바로 이전에 위치한 형제 요소 중에서 지정한 선택자에 해당되는 요소 
//                  바로 다음까지의 요소를 모두 선택한다.


		if(chk.length == 0) {
			$('#result').html('<b style="color : crimson;">과일을 1개 이상 선택하세요</b>');	
		} else {
			chk.each(function (index) {
				let obj = chk.eq(index)
					console.log (obj); // <input type="checkbox" name="chk" value="1000"/>
					console.log ( obj.val() ); // 과일 가격
					console.log ( obj.next() ); // <input type="checkbox" ~ >의 바로 다음 형제인<span>사과</span>
					console.log ( obj.next().html() ); // 과일 이름
				
				// $('#result').html(`과일 이름 : ${ obj.next().html() } , 과일 가격 ${ obj.val() }<br/>`);
				// append() : html() 함수와 같은 동작을 실행하는데 html() 함수는 기존 내용을 지우고 인수로 지정한 내용을 넣어주지만
				// append() 함수는 기존의 내용에 인수로 지정한 내용을 추가한다.
				 $('#result').append(`<b>과일 이름 : ${ obj.next().html() } , 과일 가격 ${ obj.val() }원</b><br/>`);
				
			})
		}
		
	});

	
});


























































