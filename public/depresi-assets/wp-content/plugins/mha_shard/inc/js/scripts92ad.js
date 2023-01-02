jQuery(function ($) {

	// Disable wheel scrolling on number fields to prevent number changes
	$(document).on("wheel", "input[type=number]", function (e) {
		$(this).blur();
	});

	function getParameterByName(name, url = window.location.href) {
		name = name.replace(/[\[\]]/g, '\\$&');
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}

	// Main Search Filter Search
	/*
	function submitFilterForm( order, orderby, append, page ){

		// IE doesn't like default parameters, so using this shorthand cheat instead
		var append = append || '';
		var page = page || 1;

		// Provider/Get Help Override
		if($('body').hasClass('page-template-page-providers')){
			// If zip has value, "uncheck" the national only checkbox
			if($('#zip-search').val()){
				$('#area-national').val('');
			} else {
				$('#area-national').val('national');
			}
		}

		// Prep the data
		var args = $('.search-filters').serialize();
		if(orderby !=  '' && order !=  ''){
			args = args+'&order='+order+'&orderby='+orderby+append;
		}
		if(append === 1){
			args = args+'&append=1';
		}
		if(page > 1){
			args = args+'&paged='+page;
		}

		// Disable things while search
		$('#filters-content').addClass('loading');	
		$('#filters-content').addClass('loading');			
		$('#filters-content button, #filters-content input', $(this)).prop('disabled', true);

		$.ajax({
			type: "POST",
			url: do_mhaContent.ajaxurl,
			data: { 
				action: 'getArticlesAjax',
				data: args
			},
			success: function( results ) {
				
				// Remove previous pager
				$('#filters-content .navigation').remove();

				// Append or replace
				if(append === 1){
					$('#filters-content').removeClass('loading').append( results );	
				} else {
					$('#filters-content').removeClass('loading').html( results );	
				}

				// Make filters usable again
				$('#filters-content button, #filters-content input', $(this)).prop('disabled', false);

			},
			error: function(xhr, ajaxOptions, thrownError){		
				$('#filters-content').removeClass('loading');
				$('#filters-content button, #filters-content input', $(this)).prop('disabled', false);
			}
		});	

	}
	*/

	// Submit filter on checkbox changes
	//var intentDelay;
	$('#zip-search, #keyword-search').on('keyup', function (e) {
		
		if (e.key === 'Enter' || e.keyCode === 13) {
			var orderby = $('#orderSelection').val(),
				order = $('#orderSelection').attr('data-order');
			submitFilterForm( order, orderby );	
			return false;
		}

		/*
		var $this = $(this);
		$this.addClass('searching');
		
		clearTimeout(intentDelay);

		intentDelay = setTimeout(function() {

			$this.prop('disabled',true);

			var orderby = $('#orderSelection').val(),
				order = $('#orderSelection').attr('data-order');
			submitFilterForm( order, orderby );	
			$this.addClass('disabled').removeClass('searching');
				
			setTimeout(function() {
				$this.prop('disabled',false).removeClass('disabled');
			}, 2000);
			
		}, 1000);
		*/

	});

	// Submit filter form on page load if boxes are checked
	if($('#filters input:checkbox:checked').length > 0){		
		var orderby = $('#orderSelection').val(),
			order = $('#orderSelection').attr('data-order');
		submitFilterForm( order, orderby );	
	}
	
	// Submit filter on checkbox changes
	$('.filter-checkboxes input[type="checkbox"]').change(function(event) {
		event.preventDefault();
		var orderby = $('#orderSelection').val(),
		order = $('#orderSelection').attr('data-order');
		submitFilterForm( order, orderby );	
	});

	// Submit filter search
	$('.search-filters').on('submit', function(event){
		event.preventDefault();
		// Get selected ordering
		var orderby = $('#orderSelection').val(),
			order = $('#orderSelection').attr('data-order');
		submitFilterForm(order, orderby );		
	});

	// Change order
	$('.filter-order').on('click', function(event){
		event.preventDefault();
		// Set up vars
		var text = $(this).text(),
			orderby = $(this).val(),
			order = $(this).attr('data-order');			
		$('#orderSelection').text(text).attr('data-order', order).val(orderby);
		submitFilterForm( order, orderby );		
	});

	// Load More Ajax
	$(document).on('click', '.load-more-articles', function(event){
		event.preventDefault();
		
		// Disable and show loading state
		$(this).prop('disabled',true).addClass('loading');	

		// Set up vars
		var page = $(this).attr('data-paged'),
			orderby = $(this).val(),
			order = $(this).attr('data-order');		

		// Submit
		submitFilterForm( order, orderby, 1, page );		
	});

	// Load More Faux Paging
	$(document).on('click', '.load-more-articles-facet', function(event){
		event.preventDefault();
		
		// Disable and show loading state
		$(this).prop('disabled',true).addClass('loading');	

		// Set up vars
		let page = $(this).attr('data-paged'),
			per_page = $(this).attr('data-per-page'),
			i = 0;

		$('.filter-bubble').each(function(e){
			if(i < page * per_page){
				$(this).removeClass('d-none');
			}
			i++;
		});

		if($('.filter-bubble.d-none').length > 0){
			$('.load-more-articles-facet').prop('disabled',false).removeClass('loading').attr('data-paged', page + 1);
		} else {
			$('.load-more-articles-facet').hide();
		}
	
	});


	// Show "All Conditions" checkbox
	if($('.show-all-conditions').length){
		var countChecked = function() {
			var checks = $(".show-all-conditions input").filter(":checked").length;
			
			if(checks >= 1){
				$("#all-conditions-container").collapse('show');
			} else {
				$("#all-conditions-container").collapse('hide');
			}        
		};
		countChecked();		 
		$(".show-all-conditions input").on("change", countChecked );
	}


	// Submit Article Form Display + Captcha Confirmation
	$('#article-submit-recaptcha-confirm').on('submit', function(event){

		event.preventDefault();		

		var recaptcha = $('#g-recaptcha-response').val();
		$('#article-submit-recaptcha-confirm .button').prop('disabled',true).addClass('loading');

		if(recaptcha.length == 0 ){
			$('#recaptcha-error .inner').html('We\'re sorry, but that response was invalid, please try again.');
			$('#recaptcha-error').removeClass('hidden');
			$('#article-submit-recaptcha-confirm .button').prop('disabled',false).removeClass('loading');
		} else {
			$('#recaptcha-error').addClass('hidden');
			$('#recaptcha-error .inner').html('');
			
			var args = $('#article-submit-recaptcha-confirm').serialize();

			$.ajax({
				type: "POST",
				url: do_mhaContent.ajaxurl,
				data: { 
					action: 'mha_submit_article_form_display',
					data: args
				},
				success: function( result ) {

					// Insert the form HTML
					$('#article-submit-container').html(result);
					
					// Reorder fields before displaying
					var contentField = $('div[data-name="_post_content"]');
					$('div[data-name="_post_content"]').remove();
					$('div[data-name="tagline"]').after(contentField);
					
					// Initialize ACF form
					acf.do_action('append', $('#article-submit-container'));


				},
				error: function(xhr, ajaxOptions, thrownError){		
					$('#recaptcha-error .inner').html('We\'re sorry, but there was an error loading the form, please try again later.');
					$('#recaptcha-error').removeClass('hidden');
					$('#article-submit-recaptcha-confirm .button').prop('disabled',false).removeClass('loading');
				}
			});	
			
		}

	});

	function submitCustomZipSearch( event = null ){
		if (event.which == 13 || event == 1) {
			var enteredZip = $('#zip-code-search').val();
			var isValidZip = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/.test(enteredZip);

			if(isValidZip){
				
				// Destroy tooltip when valid
				$('#zip-code-search').tooltip('dispose');

				$.ajax({
					type: "POST",
					url: do_mhaContent.ajaxurl,
					data: { 
						action: 'get_geo',
						data: "zip="+enteredZip
					},
					success: function( result ) {

						var res = JSON.parse(result); 
						$('.search-filters').collapse('hide');
						FWP.facets['location_search'] = [
							res.lat,
							res.lng,
							50,
							encodeURIComponent(res.state+" "+enteredZip)
						];
						FWP.fetchData();
						FWP.setHash();

					},
					error: function(xhr, ajaxOptions, thrownError){		
						$('#recaptcha-error .inner').html('We\'re sorry, but there was an error loading the form, please try again later.');
						$('#recaptcha-error').removeClass('hidden');
						$('#article-submit-recaptcha-confirm .button').prop('disabled',false).removeClass('loading');
					}
				});	

			} else if( enteredZip == ''){

				$('.search-filters').collapse('hide');
				FWP.facets['location_search'] = '';
				FWP.fetchData();
				FWP.setHash();

			} else {

				// Show error when invalid zip
				$('#zip-code-search').tooltip({
					title: 'The zip code you have entered is not valid. Please try again.',
				});
				$('#zip-code-search').tooltip('show');
				
			}
		}
	}

	$(document).on('click', '.submit-zip-search', function(event){
		submitCustomZipSearch( 1 );
		return;
	});
	$('#zip-code-search').keypress( function(event){
		submitCustomZipSearch( event );
		return;		
	});	
	var hasGeoOnLoad = getParameterByName('geo');
	if(hasGeoOnLoad && $('body').hasClass('page-template-page-providers')){
		submitCustomZipSearch( 1 );
	}

});