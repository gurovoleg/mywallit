$( '.button-file-wrapper' ).each( function()
	{
		var $input	 = $( this ).find('.button-file__input');

		$input.on( 'change', function( e )
		{
			var fileName = '';
			fileName = e.target.value.split( '\\' ).pop();
			
			if ( fileName ) {
				$('.button-file').text('Выбран 1 файл');
			}
		});
});