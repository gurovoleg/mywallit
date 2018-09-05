$(document).ready(function() {

	(function(){

		var wrapper = '.city-selection-wrapper', // обертка по умолчанию есть в разметке блока городов
			$toggle = $('.city-toggle'), // переключатель
			$close = $('.close-selection'), // выключатель
			$cityList = $(wrapper); // блок с городами

		// Касмтоный скролл для списка
		$(wrapper).niceScroll({
				cursorcolor:"#ACACAC",
				cursorwidth:"8px",
				background:"#DBDBDB",
				cursorborder:"none",
				cursorborderradius:4,
				cursorfixedheight: 70,
				scrollspeed: 300,
				autohidemode: false			
		}); 	

		var citySelector = {

			init: function(){
				this._setupListners();
			},

			_setupListners: function(){
				
				$toggle.on('click', function(e){
					var id = $(this).attr('data-city-selector');
					$cityList = $(id);
					citySelector._toggle(e);
				});
				
				$close.on('click', function(e){
					citySelector._toggle(e);
				});
			},

			_toggle: function(e) {
				
				e.preventDefault();
				
				if ($cityList.css('display') == 'none') {
					
					$cityList.addClass('d-block');
					$("body").addClass('overflow-hidden');
				} else {
					$cityList.removeClass('d-block');
					$("body").removeClass('overflow-hidden');
				}
			}
		}

		citySelector.init();
		
	}());

});