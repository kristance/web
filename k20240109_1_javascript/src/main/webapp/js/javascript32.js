function allCheck() {
//	name 속성인 all인 체크 박스를 체크하면 true, 해제하면 false인 상태를 변수에 저장한다.
//	radio 버튼이나 체크 박스의 checked 속성은 선택되면 true, 해제되면 false를 얻어온다.
	let check = document.getElementsByName('all')[0].checked;
//	console.log(check);

//	name 속성인 chk인 모든 체크 박스를 얻어온다.
	let checkBox = document.getElementsByName('chk');
//	console.log(checkBox);
	
//	name 속성값이 chk인 체크 박스에 갯수만큼 반복하며 일괄적으로 선택 또는 해제시킨다.
	for (let checkB of checkBox) {
//		console.log(checkB);
		checkB.checked = check;
	}
	
}

function chkSelect() {
	/*
//	name 속성값이 chk인 모든 체크 박스를 얻어온다.
	let checkBox = document.getElementsByName('chk');
	
	
//	빨강, 파랑, 노랑, 검정 체크박스가 체크된 체크 박스의 갯수를 계산한다.
	let count = 0; // 체크된 체크박스의 갯수를 기억할 변수
	for (let checkB of checkBox) {
//		console.log(checkB.checked);
		if (checkB.checked) {
			count++;
		}	
	}
//		console.log(count);
	
//	빨강, 파랑, 노랑, 검정 체크 박스가 모두 체크되었으면 전체 선택 체크 박스에 체크하고
//	한개라도 체크가 안되어있으면 전체 선택 체크박스의 체크를 해제한다.
	if (count == checkBox.length) { // 모든 체크박스가 체크되었나?
		document.getElementsByName('all')[0].checked = true; // 무조건 체크
	} else {
		document.getElementsByName('all')[0].checked = false; // 무조건 해제
	}
	*/
	let checkBox = document.getElementsByName('chk');
	let flag = true;
	for (let checkB of checkBox) {
//		각각의 체크 박스가 체크되어있나 검사해서 한개라도 체크가 안되어있으면 flag를 false로
//		변경한다.
		if(!checkB.checked) {
			flag = false;
//			각각의 체크 박스 중에서 한개라도 체크가 안되어 있으면 나머지는 비교할 필요가 없다.
			break;
		}
	}
	document.getElementsByName('all')[0].checked = flag; // true일경우 체크 O, false일경우 체크 X
}

function selectColor() {
	let checkBox = document.getElementsByName('chk');
	for (let checkB of checkBox) {
		if (checkB.checked) {
			// 선택된 체크 박스이 배경색과 글자색을 변경한다.
//			console.log(checkB.value + '선택');
			document.getElementById(checkB.value).style.backgroundColor = checkB.value;
			document.getElementById(checkB.value).style.color = 'white';
				
		} else {
			//	선택이 해제된 체크 박스의 배경색과 글자색을 원래대로 되돌린다.
//			console.log(checkB.value + '해제');		
			document.getElementById(checkB.value).style.backgroundColor = 'white';
			document.getElementById(checkB.value).style.color = 'black';
		}
	}
	
}

function clearColor() {
	/*
	let div = document.getElementsByTagName('div');
	for(let i = 1; i < div.length;i++) {
		div[i].style.backgroundColor = 'white';
		div[i].style.color = 'black';
	}
	*/
	
	let div = document.querySelectorAll('#colorBox > div');
	for(let divs of div) {
		divs.style.backgroundColor = 'white';
		divs.style.color = 'black';
	}
	
//	전체 선택 체크박스와 모든 체크 색상 체크 박스를 해제한다.
	document.getElementsByName('all')[0].checked = false;
//	document.getElementsByName('chk')[0].checked = false;
//	document.getElementsByName('chk')[1].checked = false;
//	document.getElementsByName('chk')[2].checked = false;
//	document.getElementsByName('chk')[3].checked = false;
//	getElementByName('chk')가 배열이므로 반복문을 사용해서 배열 개개의 요소에 접근하거나 인덱스를 이용해 하나씩 접근해야함.
	allCheck();

}







































































































