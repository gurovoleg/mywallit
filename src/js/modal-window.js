$(document).ready(function() {

	(function(){

		var $modalWindow = $('.bg-modal-window'),
			$wrapper = $('.blur-wrapper'),
			$subscribeOpen = $('#subscribe-button'),
			$oneClickOpen = $('#one-click-button'),
			$subscribeClose = $('.order-subscribe__close-icon'),
			$oneClickClose = $('.order-one-click__close-icon');

		var modalWindow = {

			init: function(){
				this._setupListners();
			},

			_setupListners: function(){
				
				$subscribeOpen.on('click', function(){
					modalWindow._open('#order-subscribe')	
				});
				$oneClickOpen.on('click', function(){
					modalWindow._open('#order-one-click')	
				});
				
				$subscribeClose.on('click', function(){
					modalWindow._close('#order-subscribe')	
				});
				$oneClickClose.on('click', function(){
					modalWindow._close('#order-one-click')	
				});
	
			},

			_open: function(modalId) {
											
				$modalWindow.show();
				$(modalId).show(200);
				$wrapper.addClass('filter-blur');
				$("body").addClass('overflow-hidden');		
			},		
			
			_close: function(modalId){

				$modalWindow.hide();
				$(modalId).hide(200);
				$wrapper.removeClass('filter-blur');
				$("body").removeClass('overflow-hidden');			
			
			}				
		}

		modalWindow.init();
		
	}());

});
