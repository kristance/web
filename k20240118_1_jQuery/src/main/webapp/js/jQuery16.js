//   class 속성 추가 및 제거
//   .addClass(): 선택된 요소에 인수로 전달받은 클래스를 추가한다.
//   .removeClass(): 선택된 요소에 인수로 전달받은 클래스를 제거한다.
//   .toggleClass(): 선택된 요소에 인수로 전달받은 클래스가 없으면 추가하고 인수로 전달받은 클래스가
//                있으면 제거한다.
//   .hasClass(): 선택된 요소에 인수로 전달받은 클래스가 존재하면 true, 존재하지 않으면 false를 리턴한다.

$( () => {
	$('#btn').bind('click',function () {
		//	이벤트가 간단한 css 스타일을 변경한다면 아래와 같이 attr() 함수를 사용하면 된다.
		//	$('img').attr('style','display:none')
		//	이벤트가 복잡한 css 쓰타일을 변경한다면 attr() 함수를 사요하는 것보다
		//	class에 css 스타일을 정의하고 class 자체를 추가하면 된다.
		$('img').toggleClass('onOffImage');
	});
	
	$('img').bind('click', function () {
		if( $(this).hasClass('addSize') ) {
			$(this).removeClass('addSize');
		} else {
			$(this).addClass('addSize');
		}
	});
});





























