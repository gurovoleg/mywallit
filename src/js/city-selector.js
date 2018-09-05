$(document).ready(function() {

	(function(){

		var $cityList = $('.city-selection-wrapper'), // обертка
			$toggle = $('.city-toggle'), // переключатель
			$close = $('.close-selection'); // выключатель

		// Касмтоный скролл для списка
		$($cityList).niceScroll({
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
				$toggle.on('click', citySelector._toggle);
				$close.on('click', citySelector._toggle);
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