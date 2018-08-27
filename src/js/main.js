$(document).ready(function() {
	
	$(".left-panel").customScrollbar({preventDefaultScroll: true});

	$('#ui-nav-toggle').click(function(){
		$('body').toggleClass('ui-nav--hidden');
		$('.container').toggleClass('container--left');
	});

	//-card hover effect
	$(".product-img").hover(
		function() {
			$this = $(this);
			$this.attr("src", $this.attr('data-hover'));
		},
		function() {
			$this = $(this);
			$this.attr("src", $this.attr('data'));
			}
	);	
	//-end card hover effect*/
	
});