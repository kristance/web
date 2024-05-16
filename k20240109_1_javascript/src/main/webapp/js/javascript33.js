function foodShow() {
	let food = document.getElementsByClassName('food')[0];
	console.log(food);
	
//	select 태그 객체에서 length는 option 태그의 갯수를 얻어온다.	
	console.log(food.length);
//	options는 select 태그 내부의 option 태그들을 모아놓은 객체이다. ; 배열
	console.log(food.options);
//	selectedIndex는 option 태그 중에서 몇 번째 option 태그가 선택되었나 얻어온다.
	console.log(food.options.selectedIndex);
	
	let index = food.options.selectedIndex;
//	value는 option 태그에 입력된 값을 얻어온다.
	console.log(food.options[index].value);
	
}

function foodShow2() {
	let food = document.getElementsByClassName('food')[1];
	console.log(food);
	console.log(food.length);
	console.log(food.options);
	
	let str = '';
	for (let option of food.options) {
	// selected는 특정 option 객체가 선택되면 true, 선택되지 않으면 false를 리턴한다.
	//	console.log( option.value + ', ' + option.selected );
	//	console.log( option.value + ', ' + (option.selected ? '선택됨' : '선택안됨') );
		str += option.selected ? option.value + ' ' : '';
		console.log(str.length > 0 ? str : '없음');
	}
	
	
}





































































































