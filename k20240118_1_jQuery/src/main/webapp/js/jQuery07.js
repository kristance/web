$( () => {
//	class 속성이 menu인 모든 div 태그의 자식인 div태그를 숨긴다.
	$('.menu > div').hide();
	
//	hover() : 자바스크립트의 mouseenter, mouseleave 이벤트를 하나의 이벤트로 연결하고, 선택된 요소에서
//	mouseenter, mouseleave 이벤트가 발생되었을 때 설정한 함수를 실행한다.
//	mouseenter : 마우스가 요소 위로 올라올 때 발생되는 이벤트
//	mouseleave : 마우스가 요소에서 빠져나갈 때 발생되는 이벤트
//	hover(mouseenter 이벤트가 실행되면 실행할 함수, mouseleave 이벤ㅌ가 실행되면 실행할 함수)

	$('.menu').hover(function () {
		console.log('마우스 올라감');
		//	children() : 선택된 요소의 자식 요소 중에서 선택자를 지정한 요소를 탐색한다.	
		//	stop() : 이벤트가 실행되면 다른 요소에서 실행 중인 효과를 즉시 중지시킨다.
		$(this).children('div').stop().slideDown();
	} , function () {
		console.log('마우스 떠나감');
		$(this).children('div').stop().slideUp();
		
	});



});

























































