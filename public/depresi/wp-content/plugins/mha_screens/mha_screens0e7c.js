jQuery(function ($) {

	// Footer Form Submit Actions
	if($('#email-screening-results').length){
	
        $.validator.addMethod("checkEmail", function(value, element) {
			var re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
			// var re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|academy|accountants|agency|apartments|associates|bargains|bike|bingo|boutique|builders|business|cab|cafe|camera|camp|capital|cards|care|careers|cash|casino|catering|center|chat|cheap|church|city|claims|cleaning|clinic|clothing|coach|codes|coffee|community|company|computer|condos|construction|contractors|cool|coupons|credit|creditcard|cruises|dating|deals|delivery|dental|diamonds|digital|direct|directory|discount|dog|domains|education|email|energy|engineering|enterprises|equipment|estate|events|exchange|expert|exposed|express|fail|farm|finance|financial|fish|fitness|flights|florist|football|foundation|fund|furniture|fyi|gallery|gifts|glass|gold|golf|graphics|gratis|gripe|guide|guru|healthcare|hockey|holdings|holiday|house|immo|industries|institute|insure|international|investments|jewelry|kitchen|land|lease|legal|life|lighting|limited|limo|loans|maison|management|marketing|mba|media|memorial|money|movie|network|partners|parts|photography|photos|pictures|pizza|place|plumbing|plus|productions|properties|recipes|reisen|rentals|repair|report|restaurant|run|sarl|school|schule|services|shoes|show|singles|soccer|solar|solutions|style|supplies|supply|support|surgery|systems|tax|taxi|team|technology|tennis|theater|tienda|tips|tires|today|tools|tours|town|toys|training|university|vacations|ventures|viajes|villas|vin|vision|voyage|watch|wine|works|world|wtf|zone|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
            return this.optional(element) || re.test(value.trim());
        }, 'Invalid email address.'); 
		
		
 		// Resets in case of refresh
		$('#email-screening-results .submit').prop('disabled', false);

		$("#email-screening-results").validate({
			rules: {
				email: {
					// email: true,
					checkEmail: true
				}
			},
			submitHandler: function(form) {

				// Prep the data
				var data = $(form).serialize();

				// Form submitted class
				$(form).addClass('submitted');

				// Disable submit
				$('.submit',form).prop('disabled', true).addClass('loading');

				$.ajax({
					type: "POST",
					url: do_mhaScreenEmail.ajaxurl,
					data: { 
						action: 'mhaScreenEmail',
						data: data
					},
					success: function( results ) {
						
						$(form).addClass('success');
						if($('.submit',form).hasClass('espanol')){
							$('.form-message',form).html('<p class="section-title text-dark-teal large bold m-0 text-center">Resultados enviados</p>').show();
						} else {
							$('.form-message',form).html('<p class="section-title text-dark-teal large bold m-0 text-center">Your test results have been sent</p>').show();
						}
						$('.form-content',form).slideUp();
					},
					error: function(xhr, ajaxOptions, thrownError){
						$(form).addClass('error').removeClass('submitted');
						$('.submit',form).prop('disabled', false).removeClass('loading');
						$('.form-message',form).html('<div class="form-message-inner warning">There was a problem submitting the form. Please review your information and try again or try again later.</div>').show(); 
					}
				});

			}
		});

	}

	// Update button URLs to match
	if($('#screen-take').length){
		$('#main-menu-buttons li:first a').attr('href', $('#screen-take').attr('href'));
	}

	// Force .rounded-number field classes to be rounded
	$('.rounded-number input').on('input', function() {
		let old_val = Math.round( $(this).val() ),
			val = old_val,
			min_num = parseInt($(this).attr('min')),
			max_num = parseInt($(this).attr('max')),
			max = $(this).attr('max').toString().length;

		// Limit max characters
		if (val.toString().length > max) {
			val = val.toString().slice(0, max);
		}		
		$(this).val( val ); // Replace input value

		console.log(old_val, min_num, max_num);
		if(val < min_num || val > max_num){
			let error_id = $(this).parents('.rounded-number').attr('id'),
				error_valid_id = error_id.replace('field_','');
				error = '<div id="validation_message_'+error_valid_id+'" class="gfield_description validation_message gfield_validation_message">Please enter a number from <strong>'+min_num+'</strong> to <strong>'+max_num+'</strong>.</div>';
			if(!$(this).parents('.rounded-number').find('.validation_message').length){
				$(this).parents('.rounded-number').append(error);
			}
		} else {
			console.log('remove');
			$(this).parents('.rounded-number').find('.validation_message').remove();
		}
	});

	// Step up/down buttons
	$(document).on('click', '.number-stepper .step-up', function(e){
		let $input = $(this).parents('.number-stepper').find('input[type="number"]'),
			step = parseInt($input.attr('step')),
			min = parseInt($input.attr('min')),
			max = parseInt($input.attr('max')),
			old_val = parseInt($input.val()),
			new_val = old_val + step;
		if(new_val < min){ new_val = min; }
		if(new_val > max){ new_val = max; }
		$input.val( new_val );
	});
	$(document).on('click', '.number-stepper .step-down', function(e){
		let $input = $(this).parents('.number-stepper').find('input[type="number"]'),
			step = parseInt($input.attr('step')),
			min = parseInt($input.attr('min')),
			max = parseInt($input.attr('max')),
			old_val = parseInt($input.val()),
			new_val = old_val - step;
		if(new_val < min){ new_val = min; }
		if(new_val > max){ new_val = max; }
		$input.val( new_val );
	});

	/**
	 * User Behavior
	 */
	$(document).on('gform_post_render', function( event, formId, currentPage ) {

		// Demographic Page View
		if ( currentPage == 2 && $('#gform_page_'+formId+'_2').length && $('#gform_page_'+formId+'_2').hasClass('demographics') ) {
			window.dataLayer.push({
				'event': 'demographic_view_d',
				'page_title': $('h1.entry-title').text()
			});
		} 

	});

});