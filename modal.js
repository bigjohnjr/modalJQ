$(function(){

	/* DECLARE VARIABLES */
	var modal = $('.modal')
	,	overlay = $('#overlay')
	,	closeBtn = $('#close-btn')
	,	openModal = $('.modal-open')
	;

	closeBtn.click(function(){
		modal.fadeOut();
		overlay.fadeOut();
	});

	openModal.click(function(){
		modal.fadeIn();
		overlay.fadeIn();
	});


});
