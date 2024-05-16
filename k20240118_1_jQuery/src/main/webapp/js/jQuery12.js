$(() => {

	$('.run').bind('click', function() {
		$('#box').animate(	{'left': '400px','opacity': 0.1	}, 1000, 'linear'
		).animate(	{'top': '350px','opacity': 0.6,	'width': '20px','height': '20px'}, 1000, 'linear'
		).animate(	{'left': '0px',	'opacity': 0.5,	'width': '120px','height': '120px'}, 1000, 'linear'
		).animate(	{'top': '140px','opacity': 1.0,	'width': '150px','height': '160px'}, 1000, 'linear'
		).slideUp('1000')

	});
});































































