$( () => {
//	input 태그 중에서 type 속성의 속성값이 text인 모든 요소를 선택해서 배경색 변경하기
//	javascript
	/*
//	let inputs = document.getElementsByTagName('input');
	let inputs = document.querySelectorAll('input');
	console.log(inputs.length); // 9
	for (let input of inputs) {
		// getAttribute() 함수는 인수로 지정된 속성의 속성값을 얻어온다.
		console.log( input.getAttribute('type') );
		if ( input.getAttribute('type') == 'text' ) {
			input.style.backgroundColor = 'lightgray';
		}
	}
	*/
	
//	javascript에서 querySelector()와 querySelectorAll()을 사용할 때 속성 선택자를 지정할 수 있다.
	/*
	let inputs = document.querySelectorAll('input[type="text"]')
		console.log(inputs.length); // 4
	for(let input of inputs) {
		input.style.backgroundColor = 'crimson';
	}
	*/
	
//	jQuery
//	$('input[type="text"]').css('backgroundColor','lavenderblush');
	$('input:text').css('backgroundColor','lightgreen');

//	select 태그의 name 속성의 속성값이 email인 요소에서 change 이벤트가 발생되면 선택된 option의
//	value값을 name 속성이 addr인 텍스트 상자에 넣는다.

//	javascript
	/*
	let email = document.querySelectorAll('select[name="email"]')[0];
	console.log(email);
	email.onchange = () => {
		let emailValue = email.options[email.selectedIndex].value;
		console.log(emailValue);
		document.querySelectorAll('input[name="addr"]')[0].value = emailValue;
	};
	*/
	
//	jQuery
	/*
	$('select[name="email"]:eq(0)').change( () => {
		let emailValue = $('select[name="email"]:eq(0) > option:selected').eq(0).val();
			console.log(emailValue);
		$('input[name="addr"]:eq(0)').val(emailValue);
		
	} ); 
	*/
	
//	$(this)는 무조건 1개의 요소만 선택될 때 선택된 요소를 의미한다.
//	콤보상자는 한번에 무조건 1개만 선택되기 때문에
//	$('select[name="email"]:eq(0) > option:selected')와 $(this)는 같은 의미로 사용된다.
//	$(this)는 화살표 함수에서 사용할 수 없다.
	
	$('select[name="email"]:eq(0)').change( function () {
		let emailValue = $(this).val();
			console.log(emailValue);
		$('input[name="addr"]:eq(0)').val(emailValue);
		
	} );  
	
//	체크 박스를 체크(클릭)하면 체크된 목록을 출력한다.

//	javascript
//	let hobbies1 = document.getElementsByName('hobbies')[0];
//	let hobbies2 = document.getElementsByName('hobbies')[1];
//	let hobbies3 = document.getElementsByName('hobbies')[2];
//	let hobbies1 = document.querySelectorAll('input[name="hobbies"]')[0];
//	let hobbies2 = document.querySelectorAll('input[name="hobbies"]')[1];
//	let hobbies3 = document.querySelectorAll('input[name="hobbies"]')[2];

//	---------------------------------------
	/*
	hobbies1.onclick = () => {
		let hobbies = document.getElementsByName('hobbies');
		// let msg = '';
		let msg = [];
		for (let hobby of hobbies) {
			if (hobby.checked) {
				// msg += hobby.value + ' ';
				msg.push(hobby.value);
			}
		}
		//	console.log(msg.length == 0 ? '취미 없음' : ''+ msg);
		console.log(msg.length == 0 ? '취미 없음' : msg.join(', '));
	};
	*/
//	---------------------------------------
	/*
	hobbies2.onclick = () => {
		let hobbies = document.getElementsByName('hobbies');
		let msg = [];
		for (let hobby of hobbies) {
			if (hobby.checked) {
				msg.push(hobby.value);
			}
		}
		console.log(msg.length == 0 ? '취미 없음' : msg.join(', '));
	};
	*/
//	---------------------------------------
	/*
	hobbies3.onclick = () => {
		let hobbies = document.getElementsByName('hobbies');
		let msg = [];
		for (let hobby of hobbies) {
			if (hobby.checked) {
				msg.push(hobby.value);
			}
		}
		console.log(msg.length == 0 ? '취미 없음' : msg.join(', '));
	};
	*/
//	---------------------------------------
	
//	hobbies1.onclick = () => hobbyCheck();
//	hobbies2.onclick = () => hobbyCheck();
//	hobbies3.onclick = () => hobbyCheck();
	
	/*
	let hobbies = document.querySelectorAll('input[name="hobbies"]');
		for (let hobby of hobbies) {
				hobby.onclick = () => {
					let hobbies = document.getElementsByName('hobbies');
					let msg = [];
					for (let hobby of hobbies) {
						if (hobby.checked) {
							msg.push(hobby.value);
						}
					}
					console.log(msg.length == 0 ? '취미 없음' : msg.join(', '));
		};
	}
	*/
	let hobbies = document.querySelectorAll('input[name="hobbies"]');
		for (let hobby of hobbies) {
			hobby.onclick = () => hobbyCheck();
		}
		
//	jQuery
	/*
//	console.log($('input:checkbox[name="hobbies"]').length);
//	console.log($('input[type="checkbox"]').length);
//	console.log($('input:checkbox').length);
//	console.log($('input[name="hobbies"]').length);
	$('input:checkbox[name="hobbies"]').click( () => hobbyCheck() );
	*/
	
//	each() : 선택된 요소들의 인덱스와 요소 자체를 리턴하며 인수로 지정된 함수를 반복해서 실행한다.
//	each() 함수는 인수로 지정된 함수로 인수 2개를 넘긴다. 1번째 인수는 인덱스이고, 2번째 인수는 객체이다.
	
	/*
	$('input:checkbox[name="hobbies"]').click(function () {
		let msg = [];
		$('input:checkbox[name="hobbies"]:checked').each( function (index, object) {
		//	console.log('index : ' + index + ' , ' + 'object : ' + object);
			msg.push( $('input:checkbox[name="hobbies"]:checked').eq(index).val() );
		})
		console.log(msg.length == 0 ? '취미 없음' : msg.join(', '));
	});
	*/

	
	$('input:checkbox[name="hobbies"]').click( () => {
		let msg = [];
		// 인수의 순서상 변수가 나와야하는데 그 변수를 사용하지 않을 경우 '_'로 처리한다.		
		$('input:checkbox[name="hobbies"]:checked').each( (_, object) => msg.push(object.value) );
		
		console.log(msg.length == 0 ? '취미 없음' : msg.join(', '));
	});
	
	
});

function hobbyCheck() {
//	javascript
/*	
//		let hobbies = document.getElementsByName('hobbies');
		let hobbies = document.querySelectorAll('input[name="hobbies"]');
		let msg = [];
		for (let hobby of hobbies) {
			if (hobby.checked) {
				msg.push(hobby.value);
			}
		}
		console.log(msg.length == 0 ? '취미 없음' : msg.join(', '));
*/
	
//	jQuery
	let hobbies = $('input:checkbox[name="hobbies"]:checked');
	let msg = [];
		for (let hobby of hobbies) {
				msg.push(hobby.value);
		}
		console.log(msg.length == 0 ? '취미 없음' : msg.join(', '));

};
	




























































