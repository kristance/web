//	javascript 작성법
//	document.getElementById('list').style.color = 'seagreen';

//	jQuery 작성법
//	$('css 선택자').실행할함수()
	$('#list') // = document.getElementById('list')
	$('#list').css('color', 'blue');

//	----------------------------------------------------------

//	javascript onload
/*
onload = function () {
	alert('javascript onload 이벤트 실행');
}
//	----------------------------------------------------------

onload = () =>	{
	alert('javascript onload 이벤트 실행2');
}
//	----------------------------------------------------------

onload = () =>	alert('javascript onload 이벤트 실행3');
*/

//	-----------------------------------------------------------

//	jQuery onload
/*
$(document).ready(function () {
	alert('jQuery onload 이벤트 실행1')
});
//	-----------------------------------------------------------
$().ready(function () { // document 생략 가능
	alert('jQuery onload 이벤트 실행2')
});
//	-----------------------------------------------------------
$().ready(() => { // 화살표 함수
	alert('jQuery onload 이벤트 실행3')
});
//	-----------------------------------------------------------
$().ready( () => alert('jQuery onload 이벤트 실행4') );
//	-----------------------------------------------------------
$(function () { // ().ready 생략 가능
	alert('jQuery onload 이벤트 실행5')
});
//	-----------------------------------------------------------
$(() => { // ().ready 생략 가능, 화살표 함수
	alert('jQuery onload 이벤트 실행6')
});
//	-----------------------------------------------------------
$( () => alert('jQuery onload 이벤트 실행7') );  // ().ready 생략 가능, 화살표 함수, {} 생략
*/

function imgSize() {
//	javascript
//	width만 지정하거나 height만 지정하면 지정한 하지않은 부분은 비율을 계산해서 같이 변경된다.
//	document.getElementsByTagName('img')[0].style.width = '100px';
//	width,height를 각각 지정하면 지정한 크기만큼 각각 커지거나 작아진다.
//	document.getElementsByTagName('img')[0].style.width = '100px';
//	document.getElementsByTagName('img')[0].style.height = '200px';
	
//	jQuery
//	$('img').css('width','100px');
//	$('img').css('height','200px');
	
//	아래와 같이 1줄에 여러개의 스타일 속성을 지정할 수 있다.
//	$('img').css('width','100px').css('height','200px');
//	$('img').css( {'width' : '100px', 'height' : '200px'} );
	$('img').css( {'width' : '100px', 'height' : '200px'} ).css('opacity', '0.5');


}

//	필터링 함수
//   .first(): 선택된 요소 중 첫 번째 요소를 선택한다.
//   .last(): 선택된 요소 중 마지막 요소를 선택한다.
//   .eq(index): 선택된 요소 중 index 번째 요소를 선택한다. index는 0부터 시작한다.
//   .slice(): 선택된 요소 중 전달받은 인덱스 범위에 해당하는 요소만 선택한다.
//   .filter(): 선택된 요소 중 전달받은 선택자에 해당된거나, 함수 호출 결과가 참인 모든 요소를 선택한다.
//   .not(): 선택된 요소 중 전달받은 선택자에 해당된거나, 함수 호출 결과가 거짓인 모든 요소를 선택한다.
//   .has(): 선택된 요소 중 전달받은 선택자에 해당되는 요소의 모든 자손 요소를 선택한다.
//   .is(): 선택된 요소 중 전달받은 선택자에 해당되는 요소가 하나라도 존재하면 true를 리턴한다.
//   .map(): 선택한 요소 집합의 각 요소마다 콜백 함수를 실행하고 리턴값으로 구성된 객체를 리턴한다.

function highLight() {
//	 javascript
//	document.getElementById('list').style.backgroundColor = 'lavenderblush';

//	jQuery
//	$('#list').css('backgroundColor','thistle'); //javascript  스타일 속성과 동일
//	$('#list').css('background-color','lavender'); // jQuery 스타일 속성
	$('#list').css('background','seagreen'); // 스타일 단축 속성
// -------------------------------------------------------------------------------	
//	javascript
//	document.getElementsByTagName('li')[1].style.backgroundColor = 'white';
//	document.querySelectorAll('li')[3].style.backgroundColor = 'gray';
//	document.querySelectorAll('#list > li')[5].style.backgroundColor = 'gold';

//	jQuery
	$('#list > li').first().css('background-color','lightgreen');
	$('#list > li').last().css('background-color','lightyellow');
	$('#list > li').eq(2).css('background-color','lemonchiffon');
	$('#list > li').slice(3,5).css('background-color','crimson');
	
}

//   요소(element) 추가 함수
//   선택된 요소의 내부에 추가
//      .append(): 선택된 요소의 마지막에 추가한다.
//      .prepend(): 선택된 요소의 첫 번째에 추가한다.
//   선택된 요소의 외부에 추가
//      .before(): 선택된 요소의 앞에 추가한다.
//      .after(): 선택된 요소의 뒤에 추가한다.
function addImg() {
	$('div').append('<img alt="shamid" src="./images/img03.jpg"/>');
	$('div').prepend('<img alt="이브이A" src="./images/img01.jpg"/>');
	$('div').before('<img alt="고라파덕" src="./images/img04.jpg"/>');
	$('div').after('<img alt="이브이B" src="./images/img05.jpg"/>');
	
}

//   요소의 표시와 숨김
//   .hide(): 선택한 요소의 css를 자동으로 조정해서 사라지게 한다.
//   .show(): 선택한 요소의 css를 자동으로 조정해서 표시되게 한다.
//   .toggle(): 선택한 요소의 css를 자동으로 조절해서 hide(), show() 메소드가 번갈아 적용된다.
//   hide(), show() 메소드의 인수로 시간(밀리초)을 설정하거나 "slow", "fast"와 같은 예약어를 전달해 
//   속도를 설정할 수 있다.
   
//   페이드 효과
//   .fadeOut(): 선택한 요소의 css 중 opacity 속성의 값을 줄여가며 사리지게 한다.
//   .fadeIn(): 선택한 요소의 css 중 opacity 속성의 값을 높여가며 나타나게 한다.
//   .fadeToggle(): fadeIn(), fad eOut() 메소드가 번갈아 적용된다.
//   fadeIn(), fadeOut() 메소드의 인수로 시간(밀리초)을 설정하거나 "slow", "fast"와 같은 예약어를 전달해
//   속도를 설정할 수 있다.

//   슬라이드 효과
//   .slideUp(): 선택한 요소의 css 중 height 속성의 값을 낮춰가며 사라지게 한다.
//   .slideDown(): 선택한 요소의 css 중 height 속성의 값을 높여가며 나타나게 한다.
//   .slideToggle(): slideUp(), slideDown() 메소드가 번갈아 적용된다.
//   slideUp(), slideDown() 메소드의 인수로 시간(밀리초)을 설정하거나 "slow", "fast"와 같은 예약어를 
//   전달해 속도를 설정할 수 있다.

function hideImg() {
//	개별
//	javascript
//	document.getElementsByTagName('img')[0].style.display = 'none';
//	jQuery
	$('img').first().css('display','none');
	$('img').last().css('display','none');
	$('img').eq(2).css('display','none');

//	전체
//	javascript
//	let imgs = document.getElementsByTagName('img');
//	console.log(imgs);
//	for (let img of imgs) {
//		img.style.display = 'none';
//	}

//	jQuery
//	javascript는 전체에 대해서 작업하려면 반복문을 사용해야 하지만,
//	jQuery는 반복문을 사용하지 않아도 된다. -> 별도의 설정이 없으면 전체에 대해서 일괄 처리를 한다.
//	$('img').css('display','none'); // $('img') :  모든 img 태그를 선택한다.

//	$('img').hide();
//	$('img').hide('slow');
//	$('img').hide('fast');
//	$('img').hide(5000);	
	
//	$('img').fadeOut();
//	$('img').slideUp();
	$('div').slideUp();

}


function showImg() {
//	개별
//	javascript
//	document.getElementsByTagName('img')[0].style.display = 'block';
//	jQuery
//	$('img').first().css('display','block');
//	$('img').last().css('display','block');
//	$('img').eq(2).css('display','block');

//	전체
//	javascript
//	let imgs = document.getElementsByTagName('img');
//	console.log(imgs);
//	for (let img of imgs) {
//		img.style.display = 'block';
//	}

//	jQuery
//	javascript는 전체에 대해서 작업하려면 반복문을 사용해야 하지만,
//	jQuery는 반복문을 사용하지 않아도 된다. -> 별도의 설정이 없으면 전체에 대해서 일괄 처리를 한다.
//	$('img').css('display','block'); // $('img') :  모든 img 태그를 선택한다.
	
//	$('img').show();
	$('img').fadeIn();
	$('div').slideDown();
	
}

function toggleImg() {
//	$('img').toggle();
//	$('img').fadeToggle();
	$('div').slideToggle();
	
}


























