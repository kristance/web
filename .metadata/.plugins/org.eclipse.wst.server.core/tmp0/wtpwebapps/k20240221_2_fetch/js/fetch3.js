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















































