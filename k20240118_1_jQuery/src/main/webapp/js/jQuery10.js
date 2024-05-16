$( () => {
//	0번째 <p> 태그를 선택한다.	
//	$('p:eq(0)').css('backgroundColor','lavenderblush');
//	$('p').eq(0).css('backgroundColor','lavender');
//	모든 <span> 태그를 선택한다.
//	$('span').css('color','green')
	
//	0번째 <p> 태그의 자식 요소 <span> 태그를 선택한다.	
//	$('p:eq(0) > span').css('backgroundColor','red');
	$('p:eq(0)').add('span:eq(0)').css('backgroundColor','tomato');
	
	$('div').children().css('backgroundColor','blue');
	$('div').children().click(function () {
		if($(this).is('span')) {
			$(this).css('color','gold');
		}
		if($(this).is('b')) {
			$(this).css('color','red');
		}
		if($(this).is('p')) {
			$(this).css('color','lemonchiffon');
		}
	});
	
	
});










































