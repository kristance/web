//	input 태그의 type 속성별 선택
//  :button: type 속성이 'button'인 모든 요소를 선택한다.
// 	:checkbox: type 속성이 'checkbox'인 모든 요소를 선택한다.
//  :file: type 속성이 'file'인 모든 요소를 선택한다.
//  :image: type 속성이 'image'인 모든 요소를 선택한다.
//  :password: type 속성이 'password'인 모든 요소를 선택한다.
//  :radio: type 속성이 'radio'인 모든 요소를 선택한다.
//  :reset: type 속성이 'reset'인 모든 요소를 선택한다.
//  :submit: type 속성이 'submit'인 모든 요소를 선택한다.
//  :text: type 속성이 'text'인 모든 요소를 선택한다.

//  :checked: type 속성이 'checkbox' 또는 'radio'인 요소 중에서 체크된 모든 요소들를 선택한다.
//  :selected: option 요소 중에서 선택된 모든 요소들을 선택한다.
//  :focus: 현재 포커스를 가지고 있는 요소를 선택한다.
//  :disabled: 비활성화 되어있는 모든 요소를 선택한다.
//  :enabled: 활성화 되어있는 모든 요소를 선택한다.


function choice() {
	let names = ['홍길동', '임꺽정'];
	
//	javascript
//	let inputs = document.getElementsByTagName('input');
//	let inputs = document.querySelectorAll('input');
//	console.log(inputs.length);
//	for (let i = 0; i < inputs.length; i++) {
//		inputs[i].value = names[i];
//	}
	
//	jQuery
//	let inputs = $('input'); // input 태그 전체를 얻어온다.
//	let inputs = $('input[type="text"]'); // input 태그 중에서 type 속성의 속성값이 정확히 text인 요소만 선택한다.
	let inputs = $('input:text'); // input 태그 중에서 type 속성값이 속성값이 정확히 text인 요소만 선택한다.
	console.log(inputs.length);
	console.log(typeof inputs);
	console.log(inputs);
	
	
	
//	form 태그 요소를 선택할 때는 $('input:text')를 사용한 jQuery 방식으로 했지만 inputs라는 배열을 사용하므로
//	javascript 방식을 사용해야한다.
	let i = 0;
	for (let input of inputs) {
		console.log(inputs);
		input.value = names[i++];
		//	input.val(names[i++]); // javascript 방식을 사용중이라서 에러가 발생한다.
	}

//	javascript는 value 속성을 사용해서 '~~~.value' 형태로 값을 얻어오고, '~~~.value = 값' 형태로 넣어준다. 
//	jQuery는 value 속성을 사용하지 않고 val() 함수를 사용해서 '~~~.val()' 형태로 값을 얻어오고,
//	'~~~.val(값)' 형태로 넣어준다.
//	jQery에서 value를 사용하면 undefined가 나온다.
	
	let doc1 = document.querySelectorAll('input')[0].value;
	console.log(doc1);
//	jQuery로 $()를 사용해서 선택된 객체에서 값을 얻어올 때 val() 함수를 사용한다.
	let doc2 = $('input:text:eq(1)').val();
	console.log(doc2);
	
	document.querySelectorAll('input')[0].value = '손오공';
//	jQuery로 $()를 사용해서 선택된 객체에서 값을 넣어줄 때 val() 함수를 사용한다.
	$('input:text:eq(1)').val('저팔계');
}

function choice2() {
//	javascript
//	let input = document.getElementsByTagName('input')[3];
//	let input = document.querySelectorAll('input')[3];
//	console.log(input);
//	console.log(input.value);

//	document.getElementsByTagName('div')[0].innerHTML = `<h1>${input.value}</h1>`;
//	document.getElementById('a').innerHTML = `<h1>${input.value}</h1>`;
//	document.querySelectorAll('div')[0].innerHTML = `<h1>${input.value}</h1>`;
//	document.querySelector('#a').innerHTML = `<h1>${input.value}</h1>`;
	
//	jQuery
//	let input = $('input:eq(3)').val();
//	let input = $('input[type=radio]:eq(0)').val();
	let input = $('input:radio:eq(0)').val();
	console.log(input);
	
//	javascriptt는 태그 내부에 문자열을 넣어줄 때 innerText나 innerHTML을 사용한다.
//	jQuery는 innerText 대신 text() 함수를, innerHTML 대신 html() 함수를 사용한다.
//	$('div:eq(0)').text( `<h1>${input}</h1>` ); // text()는 태그가 적용되지 않는다.
//	$('div:eq(0)').html( `<h1>${input}</h1>` ); // html()는 태그가 적용된다.
	$('#a').html( `<h1>${input}</h1>` );
	
}

function choice3() {
	let input = $('input:checkbox:eq(0)').val();
	$('#a').text(input);
	
}


//	$(document).ready(function () {
//	$().ready(function () {
//	$().ready(() => {
$( () => {
//	javascript
	/*
//	let select = document.getElementsByTagName('select')[0];
	let select = document.querySelectorAll('select')[0];
//	console.log(select);

//	이벤트를연결할객체.이벤트 = function() { };
//	이벤트를연결할객체.이벤트 = () => { };
	select.onchange = () => {
//		console.log(select.selectedIndex); // 몇 번쨰 option이 선택되었나 얻어온다.
//		console.log(select.options); // option 목록을 배열 형태로 얻어온다.
//		console.log(select.options[select.selectedIndex]); // 선택된 option을 얻어온다.
		console.log(select.options[select.selectedIndex].value); // 선택된 option의 값을 얻어온다.
		
//		document.getElementsByTagName('input')[0].value = select.options[select.selectedIndex].value;
		document.querySelectorAll('input')[0].value = select.options[select.selectedIndex].value;
	}
	*/
	
//	javascript는 onclick, onchange와 같이 이벤트 이름이 'on'으로 시작하지만,
//	jQuery는 'on'으로 시작하지 않는다. -> click(), change()

// 	이벤트를연결할객체.이벤트함수( function() { } );
//	이벤트를연결할객체.이벤트함수( () => { } );

//	$('select').eq(0).change( function () {
	$('select:eq(0)').change( () => {
		// console.log('select 태그에서 change() 이벤트 실행');
		// console.log($('select:eq(0) > option'));
		//	$('select:eq(0) > option') 
		// 모든 select 태크 중에서 0번쨰 인덱스의 select 태그를 선택하고 그 자식 중에서 모든 option 태그를 선택한다.
		//	$('select:eq(0) > option:selected')
		// 모든 select 태크 중에서 0번쨰 인덱스의 select 태그를 선택하고 그 자식 중에서 선택된 option 태그를 선택한다.
		// console.log($('select:eq(0) > option:selected'));
		let select = $('select:eq(0) > option:selected').eq(0).val();
		console.log(select);
		
		//	$('input:eq(0)').val(select)
		//	$('input[type="text"]:eq(0)').val(select);
		$('input:text:eq(0)').val(select);
		
	});

//	모든 input 태그를 선택하고 그 중에서 3, 5, 6번째 인덱스 요소만 선택한다.
//	console.log( $('input:eq(3)') );
//	console.log( $('input:eq(5)') );
//	console.log( $('input:eq(6)') );
//	모든 input 태그 중에서 type 속성의 속성값이 radio인 모든 요소를 선택한다.
//	모든 input 태그 중에서 type 속성의 속성값이 radio인 모든 요소를 선택한다.
//	console.log( $('input[type="radio"]') );
//	console.log( $('input:radio') );
//	모든 input 태그 중에서 name 속성의 속성값이 gender인 모든 요소를 선택한다.
//	console.log( $('input[name="gender"]') );
	
	$('input[name="gender"]').click( () => {
		let check = $('input[name="gender"]:checked').eq(0).val();
		console.log(check);
		$('input:text:eq(1)').val(check);
	});
	
});












































