$( () => {
	$('b').bind('click', function () {
		//	클릭하면 메뉴가 보이고 다시 클릭하면 사라지게 한다.
		//	$(this).next().toggle();
		//	$(this).next().slideToggle();
		//	$(this).next().fadeToggle();
		
		//	클릭하면 메뉴가 보이고 다른 메뉴가 사라지게 한다.
			$(this).next().slideDown();
			$(this).parent().siblings().find('ul').slideUp();
		
	});
});


































