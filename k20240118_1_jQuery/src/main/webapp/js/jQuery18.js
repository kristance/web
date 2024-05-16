$( () => {
//	<div> 태그의 외부 뒤에 <div> 태그를 만들어 넣어준다.
	$('button:eq(0)').click( function ()  {
		//	after() : 선택된 요소 외부 뒤에 인수로 지정한 요소를 추가한다.
		//	$('선택자').after(추가할요소);
		let $div = $('<div>').text('after').addClass('after');
		$('div:eq(0)').after($div);
	});
	
	$('button:eq(1)').click( function ()  {
		//	insertAfter() : 인수로 지정한 요소를 선택된 요소 외부 뒤에 추가한다.
		//	$('추가할요소').insertAfter(선택자);
		let $div = $('<div>').text('insertAfter').addClass('insertAfter');
		$($div).insertAfter($('div:eq(0)'));
		
	});
	
//	<div> 태그의 외부 앞에 <div> 태그를 만들어 넣어준다.
	$('button:eq(2)').click( function ()  {
		//	before() : 선택된 요소 외부 앞에 인수로 지정한 요소를 추가한다.
		//	$('선택자').before(추가할요소);
		let $div = $('<div>').text('before').addClass('before');
		$('div:eq(0)').before($div);
		
	})

	$('button:eq(3)').click( function ()  {
		//	insertBefore() : 인수로 지정한 요소를  선택된 요소 외부 앞에 추가한다.
		//	$('추가할요소').insertBefore(선택자);
		let $div = $('<div>').text('insertBefore').addClass('insertBefore');
		$('div:eq(0)').insertBefore($div);
		
	});

});






































