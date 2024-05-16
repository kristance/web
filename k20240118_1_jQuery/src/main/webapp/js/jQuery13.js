$( () => {
	$('.delete').click( function () {
		//	$(this).parent().css('display','none');
		//	$(this).parent().fadeOut();
		//	$(this).parent().hide();
			$(this).parent().slideUp(1000, 'easeInOutBounce');
		
	});
	
	$('#view').click( function () {
		//	$('.pane').css('display','block');
		//	$('.pane').show();
		//	$('.pane').fadeIn();
			$('.pane').slideDown(1000, 'easeInOutBounce');
	});
	
});







































