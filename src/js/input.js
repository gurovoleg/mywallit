$(document).ready(function() {

function checkEmail(){
	$('[data-type="email"]')
	.on('focus', function(){
		$(this).addClass('input-field--has-focus');
	})
	.on('blur', function(){
		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		$(this).removeClass('input-field--has-focus');
		if(pattern.test($(this).val())){
			$(this).addClass('input-field--has-focus');
			$(this).addClass('input-field--has-focus-success');
			$(this).parent().find($('.input-field--success-icon')).show();
			$(this).addClass('input-field--success');
		} else {
			$(this).addClass('input-field--has-focus');
			$(this).addClass('input-field--has-focus-error');
			$(this).parent().find($('.input-field--error-icon')).show();
			$(this).addClass('input-field--error');
			$(this).parent().find($('.input-field__error-text')).show();
		}
		if ($(this).val() == '') {
			$(this).removeClass('input-field--has-focus');
			$(this).removeClass('input-field--error');
			$(this).removeClass('input-field--has-focus-error');
			$(this).parent().find($('.input-field--error-icon')).hide();
			$(this).parent().find($('.input-field__error-text')).hide();
		}
	})
	.on( 'keydown', function(){
		var keycode = window.event.keyCode; // 13 - enter 9 - tab 8 - backspace
		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		var inputVal = $(this).val().length;
		if ( keycode == '13') {
			if(pattern.test($(this).val())){
				$(this).addClass('input-field--has-focus');
				$(this).addClass('input-field--has-focus-success');
				$(this).parent().find($('.input-field--success-icon')).show();
				$(this).addClass('input-field--success');
			} else {
				$(this).addClass('input-field--has-focus');
				$(this).addClass('input-field--has-focus-error');
				$(this).parent().find($('.input-field--error-icon')).show();
				$(this).addClass('input-field--error');
				$(this).parent().find($('.input-field__error-text')).show();
			}
		} else {
			$(this).removeClass('input-field--success');
			$(this).removeClass('input-field--has-focus-success');
			$(this).parent().find($('.input-field--success-icon')).hide();
			$(this).removeClass('input-field--error');
			$(this).removeClass('input-field--has-focus-error');
			$(this).parent().find($('.input-field--error-icon')).hide();
			$(this).parent().find($('.input-field__error-text')).hide();
		}
	})
}

function checkField(){
	$('[data-type="notEmpty"]')
	.on('focus', function(){
		$(this).addClass('input-field--has-focus');
		$(this).parent().find($('.input-field--error-icon')).hide();
		$(this).parent().find($('.input-field__error-text')).hide();
		$(this).removeClass('input-field--error');
		$(this).removeClass('input-field--has-focus-error');
	})
	.on('blur', function(){
		$(this).removeClass('input-field--has-focus');
		$(this).parent().find($('.input-field--error-icon')).hide();
		$(this).parent().find($('.input-field__error-text')).hide();
		$(this).removeClass('input-field--has-focus-error');
		if($(this).val() != ''){
			$(this).addClass('input-field--has-focus');
			$(this).addClass('input-field--has-focus-success');
			// $('.input-field--success-icon').show();
			$(this).parent().find($('.input-field--success-icon')).show();
			$(this).addClass('input-field--success');
		}
	})
	.on( 'keydown', function(){
		var keycode = window.event.keyCode; // 13 - enter 9 - tab 8 - backspace
		if ( keycode == '13') {
			if( $(this).val() != '' ){
				$(this).addClass('input-field--has-focus');
				$(this).addClass('input-field--has-focus-success');
				$(this).parent().find($('.input-field--success-icon')).show();
				$(this).addClass('input-field--success');
			} else {
				$(this).addClass('input-field--has-focus');
				$(this).addClass('input-field--has-focus-error');
				$(this).parent().find($('.input-field--error-icon')).show();
				$(this).addClass('input-field--error');
				// $('.input-field__error-text').show();
				$(this).parent().find($('.input-field__error-text')).show();
			}
		} else {
			$(this).removeClass('input-field--success');
			$(this).removeClass('input-field--has-focus-success');
			// $('.input-field--success-icon').hide();
			$(this).parent().find($('.input-field--success-icon')).hide();
			$(this).removeClass('input-field--error');
			$(this).removeClass('input-field--has-focus-error');
			// $('.input-field--error-icon').hide();
			// $('.input-field__error-text').hide();
			$(this).parent().find($('.input-field--error-icon')).hide();
			$(this).parent().find($('.input-field__error-text')).hide();
		}
		$(this).on('blur', function(){
			var inputVal = $(this).val().length;
			if( keycode && keycode != 8 && keycode != 9 && inputVal == 0) {
				$(this).addClass('input-field--has-focus');
				$(this).addClass('input-field--has-focus-error');
				$(this).parent().find($('.input-field--error-icon')).show();
				$(this).addClass('input-field--error');
				$(this).parent().find($('.input-field__error-text')).show();
			}
		})

	})
}

function withoutCheckField(){
	$('[data-type="notCheck"]')
	.on('focus', function(){
		$(this).addClass('input-field--has-focus');
	})
	.on('blur', function(){
		if ($(this).val() == '') {
		$(this).removeClass('input-field--has-focus');
		}
	})
}

function checkPass(){
	$('[data-type="pass"]')
	.on('focus', function(){
		$(this).addClass('input-field--has-focus');
		$(this).parent().find($('.input-field--error-icon')).hide();
		$(this).parent().find($('.input-field__error-text')).hide();
		$(this).removeClass('input-field--error');
		$(this).removeClass('input-field--has-focus-error');
	})
	.on('blur', function(){
		$(this).removeClass('input-field--has-focus');
		$(this).parent().find($('.input-field--error-icon')).hide();
		$(this).parent().find($('.input-field__error-text')).hide();
		$(this).removeClass('input-field--has-focus-error');
		if($(this).val() != ''){
			$(this).addClass('input-field--has-focus');
			$(this).addClass('input-field--has-focus-success');
			// $('.input-field--success-icon').show();
			$(this).parent().find($('.input-field--success-icon')).show();
			$(this).addClass('input-field--success');
		}
	})
	.on( 'keydown', function(){
		var keycode = window.event.keyCode; // 13 - enter 9 - tab 8 - backspace
		var inputVal = $(this).val().length;
		if ( keycode == '13') {
			if( $(this).val() != '' ){
				$(this).addClass('input-field--has-focus');
				$(this).addClass('input-field--has-focus-success');
				$(this).parent().find($('.input-field--success-icon')).show();
				$(this).addClass('input-field--success');
			} else {
				$(this).addClass('input-field--has-focus');
				$(this).addClass('input-field--has-focus-error');
				$(this).parent().find($('.input-field--error-icon')).show();
				$(this).addClass('input-field--error');
				// $('.input-field__error-text').show();
				$(this).parent().find($('.input-field__error-text')).show();
			}
		} else {
			$(this).removeClass('input-field--success');
			$(this).removeClass('input-field--has-focus-success');
			// $('.input-field--success-icon').hide();
			$(this).parent().find($('.input-field--success-icon')).hide();
			$(this).removeClass('input-field--error');
			$(this).removeClass('input-field--has-focus-error');
			// $('.input-field--error-icon').hide();
			// $('.input-field__error-text').hide();
			$(this).parent().find($('.input-field--error-icon')).hide();
			$(this).parent().find($('.input-field__error-text')).hide();
		}
		$(this).on('blur', function(){
			var inputVal = $(this).val().length;
			if( keycode && keycode != 8 && keycode != 9 && inputVal == 0) {
				$(this).addClass('input-field--has-focus');
				$(this).addClass('input-field--has-focus-error');
				$(this).parent().find($('.input-field--error-icon')).show();
				$(this).addClass('input-field--error');
				$(this).parent().find($('.input-field__error-text')).show();
			}
		})
	})
}

checkEmail();
checkField();
withoutCheckField();
checkPass();

$('.input-field__label')
	.on('click',function(){
	$(this).parent().find($('.input-field')).addClass('input-field--has-focus').select();
	})
	.on('blur', function(){
		$(this).parent().find($('.input-field')).removeClass('input-field--has-focus');
	})
});