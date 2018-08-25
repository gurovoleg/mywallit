$(document).ready(function() {
	
	$(".left-panel").customScrollbar({preventDefaultScroll: true});

	$('#ui-nav-toggle').click(function(){
		$('body').toggleClass('ui-nav--hidden');
		$('.container').toggleClass('container--left');
	});

});