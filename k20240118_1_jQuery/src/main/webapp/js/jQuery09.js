$( () => {
//	$('div > p > b').css({'fontSize':'30px','color':'crimson'});
	$('div').find('p').find('b').css({'fontSize':'40px','color':'seagreen'});

//	$('#chd').text('야무차');
//	children() 함수의 인수를 생략하면 모든 자식 요소가 선택된다.
	$('div').children('#chd').html('<i>베지터</i>');

	$('span').css('fontSize','20px').css('backgroundColor','lightgreen');
	$('span').parent().css('backgroundColor','green');
//	parents() 함수의 인수를 생략하면 모든 조상 요소가 선택된다.	
	$('span').parents('div').css('backgroundColor','lavender');
	
	$('p:eq(2)').next().css('backgroundColor','lavenderblush');
	$('p:eq(2)').prev().css('backgroundColor','thistle');
	
});






































