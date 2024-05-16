$( () => {
//	$('선택자').이벤트함수(실행할함수);
	/*
	$('p:eq(0)').click( function () {
		//	$('p:eq(0)').css('backgroundColor','seagreen');
		$(this).css('backgroundColor','seagreen');
		$('#img').hide();
	});
	$('p:eq(1)').click( function () {
		//	$('p:eq(1)').css('backgroundColor','lightgreen');
		$(this).css('backgroundColor','lightgreen');
		$('#img').show();
	});
	$('p:eq(2)').click( function () {
		//	$('p:eq(2)').css('backgroundColor','gray');
		$(this).css('backgroundColor','gray');
		$('#img').toggle();
	});
	*/

	/*
	$('p').click( function () {
		//	클릭한 <p> 태그의 배경색을 변경한다.		
		$(this).css('backgroundColor','gold');
		//	클릭한  <p> 태그를 제외한 나머지 형제들(siblings)을 선택해서 배경색을 흰색으로 변경한다.
		$(this).siblings('p').css('backgroundColor','white')
		
		//	:contains() : 인수로 지정된 문자열을 포함하면 true, 포함하지 않으면 false
//		if( $(this).is('p:contains(hide)') ) {
//			$('#img').hide();
//		} else if( $(this).is('p:contains(show)') ) {
//			$('#img').show();
//		} else if( $(this).is('p:contains(toggle)') ) {
//			$('#img').toggle();
//		}

		let command = $(this).text();
		console.log(command);
		
//		if (command == 'hide()') {
//			$('#img').hide();
//		} else if (command == 'show()') {
//			$('#img').show();
//		} else if (command == 'toggle()') {
//			$('#img').toggle();
//		}

		switch (command) {
			case 'hide()' :
				$('#img').hide();
				break;
			case 'show()' :
				$('#img').show();
				break;
			case 'toggle()' :
				$('#img').toggle();
				break;
		}
	});
	*/

//	bind() : jQuery 이벤트에 실행할 함수를 연결한다.
//	$('선택자').bind('이벤트이름', '실행할함수');	
	$('p').bind('click', function () {
		$(this).css('backgroundColor','lemonchiffon');
		$(this).siblings('p').css('backgroundColor','white')
		
		switch ( $(this).text() ) {
			case 'hide()' :
				$('#img').hide();
				break;
			case 'show()' :
				$('#img').show();
				break;
			case 'toggle()' :
				$('#img').toggle();
				break;
			case 'slideUp()' :
				$('#img').slideUp();
				break;
			case 'slideDown()' :
				$('#img').slideDown();
				break;
			case 'slideToggle()' :
				$('#img').slideToggle();
				break;
			case 'fadeOut()' :
				$('#img').fadeOut();
				break;
			case 'fadeIn()' :
				$('#img').fadeIn();
				break;
			case 'fadeToggle()' :
				$('#img').fadeToggle();
				break;
				
			//	fadeTo(재생시간, 투명도) : fade 효과에서 사용하는 opacity 속성값을 직접 지정한다.
			//	fadeTo() 함수가 실행되서 투명도가 변경되면 변경된 투명도가 계속 유지되서 표시되기때문에
			//	투명도를 다시 1.0으로 설정하는 처리가 필요할 수 있다.
			
			case 'fadeTo()' :
				$('#img').fadeTo(1000, 0.2);
				break;
				
				
			//	animate() : 여러 css 스타일을 이용해서 사용자 정의 이펙트를 정의할 수 있다.
			//	$('선택자').animate(
				//	{스타일} // 필수, 이펙트를 구성할 css 스타일 속성을 지정한다.
				//	[, 재생시간] // 선택, 이펙트가 지속될 시간을 밀리초 단위로 지정한다.
				//	[, 속도함수] // 선택, 이펙트의 시간당 속도를 지정한다.
				//	[, 콜백함수] // 선택, 이펙트 동작이 완료된 후 자동으로 실행할 함수를 지정한다.
				
			//	);
			//	속도함수
			//	swing : 시작, 끝 부분에서는 천천히 움질이고 중간부분은 빠르게 움직인다.
			//	linear : 시작, 중간, 끝 구분없이 일정한 속도로 움직인다.
			
			
			
			case 'animate()' :
				$('#img').animate(
					// 스타일
					{
						'width' : '300px',
						'left' : '600px',
						'top' : '300px'
					}
					//	재생시간
					, 1000
					//	속도 함수
					, 'linear'
					//	콜백 함수
					, function () {
						console.log('애니메이션 끝');
					}
				);
				
				//	clone() : 선택한 요소를 복사해서 새로운 요소를 만든다.
				let img2 = $('#img').clone().attr('id','img2').attr('src','./images/img04.jpg');
				$('#img').before(img2);
				
				$('#img2').animate(
					{
						'width' : '400px',
						'left' : '400px',
						'top' : '150px',
						'opacity' : 0.5
					
					} , 1000
				);				
				break;
				
				
				
		}
	
	
	});
		
});

$('h2').click( function () {
	$('p').show();
	$('p').each( function (index) {
	//	console.log(index);
	$(this).animate( 
		{
			'top' : 100 + index * 50 + 'px'
		} , 500 , 'linear'
	)
	
	
	})
});
































