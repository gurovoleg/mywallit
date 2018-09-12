$('document').ready(function(){

// Фикс адаптивность банеров для IE 11
var ms_ie = false;
var ua = window.navigator.userAgent;
var old_ie = ua.indexOf('MSIE ');
var new_ie = ua.indexOf('Trident/');
var w = $(window).width();

if ((old_ie > -1) || (new_ie > -1)) {
	ms_ie = true;
}

if ( ms_ie ) {

	if ( w <= 360 ) {
		$('.section-banner-1').children('.container').html('<img src="../img/banners/ie11/banner_mobile_red.jpg">');
		$('.section-banner-2').children('.container').html('<img src="../img/banners/ie11/banner_mobile_blue.jpg">');
	} else if ( w <= 784 ) {
		$('.section-banner-1').children('.container').html('<img src="../img/banners/ie11/banner_tablet_red.jpg">');
		$('.section-banner-2').children('.container').html('<img src="../img/banners/ie11/banner_tablet_blue.jpg">');
	} else if ( w <= 1152 ) {
		$('.section-banner-1').children('.container').html('<img src="../img/banners/ie11/banner_desktop_red.jpg">');
		$('.section-banner-2').children('.container').html('<img src="../img/banners/ie11/banner_desktop_blue.jpg">');
	} else {
		$('.section-banner-1').children('.container').html('<img src="../img/banners/ie11/banner_desktopxl_red.jpg" style="min-width: 100%;">');
		$('.section-banner-2').children('.container').html('<img src="../img/banners/ie11/banner_desktopxl_blue.jpg" style="min-width: 100%;">');
	}

	$( window ).resize(function() {
		var w = $(this).width();
		if ( w <= 360 ) {
			$('.section-banner-1').children('.container').html('<img src="../img/banners/ie11/banner_mobile_red.jpg">');
			$('.section-banner-2').children('.container').html('<img src="../img/banners/ie11/banner_mobile_blue.jpg">');
		} else if ( w <= 784 ) {
			$('.section-banner-1').children('.container').html('<img src="../img/banners/ie11/banner_tablet_red.jpg">');
			$('.section-banner-2').children('.container').html('<img src="../img/banners/ie11/banner_tablet_blue.jpg">');
		} else if ( w <= 1152 ) {
			$('.section-banner-1').children('.container').html('<img src="../img/banners/ie11/banner_desktop_red.jpg">');
			$('.section-banner-2').children('.container').html('<img src="../img/banners/ie11/banner_desktop_blue.jpg">');
		} else {
			$('.section-banner-1').children('.container').html('<img src="../img/banners/ie11/banner_desktopxl_red.jpg" style="min-width: 100%;">');
			$('.section-banner-2').children('.container').html('<img src="../img/banners/ie11/banner_desktopxl_blue.jpg" style="min-width: 100%;">');
		}
	});

}
// END Фикс адаптивность банеров для IE 11

});