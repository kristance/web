function fetchAJAX (pagename) {
	fetch(pagename)
		.then( (response) => {
			if(response.status == 200) {
				response.text()
					.then( (text) => document.querySelectorAll('div')[0].innerHTML = text)
			} else {
				alert('요청 실패');
			}
		})
	
	
	
/**/	
}


//	페이지가 로드되거나 새로고침 될 때 해시가 없으면 summary 파일에 저장된 내용을 표시하고
//	해시가 있으면 지정된 파일의 내용을 표시한다.

//	javascript onload
/*
onload = function () {
	//	location.hash :  클릭한 하이퍼링크에 붙여준 해시를 얻어온다.
	console.log('location.hash - ' + location.hash);
	 if (location.hash) { // 해시가 있는가?
		 fetchAJAX (location.hash.substring(2))
	 } else {
		 fetchAJAX ('summary')
	 }
	
	
}
*/


//	jQuery onload
	
$( () => {
	 if (location.hash) { 
		 fetchAJAX (location.hash.substring(2))
	 } else {
		 fetchAJAX ('summary')
	 }
	
	
})




































