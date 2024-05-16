$( ()  => {
	/*
	$('div > p').first().click(function () {
		$('div > b').first().toggle();
	});
	*/
	$('div > p').first().click( () => $('div > b').first().toggle() );
	
	$('div > p').eq(1).click( () => {
		//	$('div > b').eq(1).toggle();
		//	$('div > b:eq(1)').css('color','seagreen');
		//	$('div > b:eq(2)').css('color','lightgreen').html('기능 연결');
		
		//	end() : 마지막에 실행한 함수의 실행 전 상태로 선택된 요소 집합( $('선택자') )을 복원시킨다.
		$('div > b').eq(1).toggle().css('color','seagreen').end().eq(2).css('color','lightgreen').html('기능 연결');
		
	});
	/*
	$('div > p').eq(2).click( () => { 
		$('div > b').slice(1, 3).css('color','thistle').toggle();
	});
	*/
	$('div > p').eq(2).click( () => $('div > b').slice(1, 3).css('color','thistle').toggle() );
		
	/*
	$('div > p').eq(3).click( () => { 
		$('div > b').last().css('color','crimson').toggle();
	});	
	*/
		
	$('div > p').eq(3).click( () => $('div > b').last().css('color','crimson').toggle() );
		
});






















































