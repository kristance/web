$ ( () => {
	$('button:eq(0)').bind('click', function () {
		//	클릭한 버튼위의 문자열이 START면 STOP으로 변경하고, STOP이면 START로 변경한다.
		//	console.log( $(this).html() );
		if ($(this).html() == 'START') {
			$(this).html('STOP');
		//	START버튼이 클릭되면 active라는 클래스를 추가하고 이미지 롤링을 시작한다.
		//	$('img').addClass('active')
		
		} else {
			$(this).html('START');
		//	STOP버튼이 클릭되면 active라는 클래스를 제거하고 이미지 롤링을 종료한다.
		//	$('img').removeClass('active')
			alert(`오늘 점심은 ${$('img:eq(2)').attr('alt')} 를(을) 먹는다.`);
		
		}
		
		$('img').toggleClass('active')
		
	});
	
//	자바스크립트로 주기적인 작업을 실행하기 위해서는 setInterval() 함수와 setTimeout() 함수를 사용한다.
//	setInterval() 함수와 setTimeout() 함수는 비슷하게 실행되지만 중요한 차이점을 가진다.

//	setInterval() : 지정된 시간마다 지정된 함수를 반복해서 실행한다.
//	setInterval(실행할 함수, 함수를 주기적으로 실행할 시간)
//	clearInterval() : setInterval() 함수의 실행을 중지시킨다.
//	let count = 0;
//	setInterval(function () {
//		console.log(++count);
//	}, 1000);



//	setTimeout() :	지정된 시간이 되면 함수를 실행한다.
//	setTimeout(실행할 함수, 대기 시간)
//	clearTimeout() : setTimeout() 함수의 실행을 중지시킨다.
//	let count = 0;
//	setTimeout(function () {
//		console.log(++count);
//	}, 1000);

	let count = 0;
	setInterval(function () {
		// 메뉴의 첫번째 이미지를 선택해서 마지막 이미지 위치로 이동시킨다.
		// appendTo() : 선택된 요소를 인수로 지정한 요소의 마지막에 추가(이동)한다.
		$('.active').first().appendTo('#menu')
	   }, 500);


	
});






























