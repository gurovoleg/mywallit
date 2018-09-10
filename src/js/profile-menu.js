$(document).ready(function() {
 $(".cabinet-menu-item__link").on('click', function(){
 	$(this).addClass('cabinet-menu-item__link--active');
 	$(this).parent('li').siblings('li').children('.cabinet-menu-item__link').removeClass('cabinet-menu-item__link--active');
 })



})