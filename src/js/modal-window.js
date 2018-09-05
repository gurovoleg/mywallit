$(document).ready(function() {

	(function(){

		var $modalWindow = $('.bg-modal-window'),
			
			// Обертка для страницы, элементы которой будут перекрываться модальным окном
			$wrapper = $('.blur-wrapper'),
			
			// Добавить класс к вызывающему элементу (конпки, ссылки, иконки...)
			$showModal = $(".show-modal-window")
			// Добавить к класс к закрывающему элементу (конпки, ссылки, иконки...)
			$closeModal = $(".close-modal-window")
			
			//	 !!! Так же необходимо элементу в качестве атрибута data-modal указать класс или id  модального окна, которое будет вызываться !!!!
			//		Пример:	
			//		<button class="show-modal-window" data-modal="#modal-window-1">Открыть модальное оккно 1</button>
			//      <button class="close-modal-window" data-modal="#modal-window-1>Закрыть модальное оккно 1</button>

		var modalWindow = {

			init: function(){
				this._setupListners();
			},

			_setupListners: function(){
				
				$showModal.on('click', function(){
					mw = $(this).attr('data-modal');
					modalWindow._open(mw)	
				});

				$closeModal.on('click', function(){
					mw = $(this).attr('data-modal');
					modalWindow._close(mw);	
				});
	
			},

			_open: function(modalId) {
											
				if (modalId != "" && modalId != undefined) {
					$modalWindow.show();
					$(modalId).show(200);
					$wrapper.addClass('filter-blur');
					$("body").addClass('overflow-hidden');	
				}
	
			},		
			
			_close: function(modalId){

				$(modalId).hide(200,function(){
					$modalWindow.hide();	
				});
				
				$wrapper.removeClass('filter-blur');
				$("body").removeClass('overflow-hidden');			
			
			}				
		}

		modalWindow.init();
		
	}());

});
