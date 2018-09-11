$('document').ready(function(){

// Фикс адаптивность банеров для IE 11
var ms_ie = false;
var ua = window.navigator.userAgent;
var old_ie = ua.indexOf('MSIE ');
var new_ie = ua.indexOf('Trident/');
var w = $(window).width();
console.log(w);

if ((old_ie > -1) || (new_ie > -1)) {
	ms_ie = true;
}

if ( ms_ie ) {

	if ( w <= 360 ) {
		$('.section-banner-1').children().html('<img src="../img/banners/banner_mobile_red.png">');
		$('.section-banner-2').children().html('<img src="../img/banners/banner_mobile_blue.png">');
	} else if ( w <= 784 ) {
		$('.section-banner-1').children().html('<img src="../img/banners/banner_tablet_red.png">');
		$('.section-banner-2').children().html('<img src="../img/banners/banner_tablet_blue.png">');
	} else if ( w <= 1152 ) {
		$('.section-banner-1').children().html('<img src="../img/banners/banner_desktop_red.png">');
		$('.section-banner-2').children().html('<img src="../img/banners/banner_desktop_blue.png">');
	} else {
		$('.section-banner-1').children().html('<img src="../img/banners/banner_desktopxl_red.png">');
		$('.section-banner-2').children().html('<img src="../img/banners/banner_desktopxl_blue.png">');
	}

}
// END Фикс адаптивность банеров для IE 11

});