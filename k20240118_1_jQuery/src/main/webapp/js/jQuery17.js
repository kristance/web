$( () => {
//	<div> 태그의 첫 번째 요소로 <p> 태그를 만들어 넣어준다.
	$('button:eq(0)').click( function ()  {
		// prepend() : 인수로 지정된 요소를 선택된 요소 내부에 첫번쨰 요소로 추가한다.
		//	$('<tag>') : 인수로 지정된 태그를 만든다.
		//	<div>의 0번쨰 인덱스 요소를 선택해서 <p> 태그를 만들어 첫번쨰 요소로 추가한 후
		//	<div>의 0번째 인덱스 요소에 'prepend' 문자열을 넣는다. 
		//	$('div:eq(0)').prepend($('<p>')).text('prepend'); // 이렇게 사용하지 않도록 주의한다.
		
		//	prepend() 함수에서 태그를 만들고 필요한 속성까지 모두 지정해야한다.
		//	$('div:eq(0)').prepend( $('<p>').text('prepend').addClass('prepend') );
		
		//	jQuery는 변수를 선언할 때 앞에 태그를 기억할 변수는 앞에 '$'를 붙여서 선언하는 것이 관행이다.
		let $p = $('<p>').text('prepend').addClass('prepend');
		$('div:eq(0)').prepend($p);
		
		//	태그를 만들어서 넣으면 태그가 추가되지만, 태그를 선택해서 넣으면 선택된 태그가 이동된다.
		$('div:eq(0)').prepend( $('div > p:last') );
		
	});

//	<div> 태그의 마지막 요소로 <p> 태그를 만들어 넣어준다.
	$('button:eq(1)').click( function ()  {
		//	append() : 인수로 지정된 요소를 선택된 요소 내부에 마지막 요소로 추가한다.
		let $p = $('<p>').text('append').addClass('append');
		$('div:eq(0)').append($p);
		
		//	태그를 만들어서 넣으면 태그가 추가되지만, 태그를 선택해서 넣으면 선택된 태그가 이동된다.
		$('div:eq(0)').append( $('div > p:first') );
		
	});

});



































