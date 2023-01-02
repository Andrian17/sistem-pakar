jQuery(function ($) {

	function sanitizeThought( submittedText ){
		var decoder = document.createElement('div');
		decoder.innerHTML = submittedText;
		var sanitized = decoder.textContent;
		return sanitized;
	}

	// Initial sort the other thoughts
	function sortThoughts(){
		if($('#thoughts-submitted').length){
			var loadMore = $('#thoughts-submitted li.load-more');
			$('#thoughts-submitted li.load-more').remove();
			$("#thoughts-submitted li").sort(sort_li).appendTo('#thoughts-submitted');
			function sort_li(a, b) {
				return ($(a).data('count')) < ($(b).data('count')) ? 1 : -1;
			}
			$(loadMore).appendTo('#thoughts-submitted');
		}
	}
	sortThoughts();

	if($('.cache-bust a').length){
		$('.cache-bust a').each(function(){
			var time = new Date().getTime();
			$(this).attr('href', function() {
				return this.href + '?cb='+time;
			});
		});
	}

	
	// Thought Form Actions
	if($('#form-activity').length){

		/**
		 * Start with an initial thought and begin saving the activity
		 */
		$('.submit-initial-thought.self-thought').on('click', function(event){

			// Disable default form submit
			event.preventDefault();

			// Disable submit
			$('.submit-initial-thought').prop('disabled', true);			
			
			// Simple validation for response
			var thoughtCheck = sanitizeThought($.trim($('textarea[name="thought_0"]').val()));

			if(thoughtCheck != ''){

				$('#thoughts-submitted .seed-admin, #thoughts-submitted .seed-user').fadeOut();

				// Clear validation
				$('.validation').removeClass('alert alert-warning').html('');
				
				// Prep the data
				var args = $('#form-activity').serialize() + '&start=1';
				
				$.ajax({
					type: "POST",
					url: do_mhaActivity.ajaxurl,
					data: { 
						action: 'thoughtSubmission',
						data: args
					},
					success: function( results ) {

						// Ajax response
						var resultData = JSON.parse(results);	
				
						// Show initial thought in the log
						setTimeout(function() {
							// Hide initial thought
							$('.activity-response, .form-item.pre-seed').slideUp();
							
							// Hide introduction
							$('article.thought_activity, #other-responses').slideUp();		
						}, 400);

						// Update post id with newly created thought
						$('input[name="pid"]').val(resultData['pid']);

						setTimeout(function() {
							$('#start-over-container').slideDown();		
							$('#thought-history .inner').html('<p class="thought-label"><em class="medium small">What you said before:</em></p><p>'+sanitizeThought(resultData.response.thought_0.replace(/\\/g, ""))+'</p>').slideDown().addClass('fade-in');		
							$('.further-actions').slideDown().addClass('fade-in');			
						}, 400);
							
						$('html, body').animate({
							scrollTop: $("#content").offset().top - 30
						}, 2000);

					},
					error: function(xhr, ajaxOptions, thrownError){
						console.error(xhr,thrownError);
					}
				});				

			} else {
				
				// Simple validation
				$('.submit-initial-thought').prop('disabled', false);
				$(this).parents('.question-item').find('.validation').addClass('alert alert-warning').html('Responses cannot be blank.');
				
			}

		});


		/**
		 * Start with admin seeded thought and begin saving the activity
		 */
		$('.submit-initial-thought.seed-admin').on('click', function(event){

			// Disable default form submit
			event.preventDefault();

			// Vars
			var seedVal = $(this).val(),
				seedText = $('.pre-seed button[value="'+seedVal+'"]').text();
				
			// Disable submit
			$('.submit-initial-thought').prop('disabled', true);
			
			// Hide initial thought
			$('.activity-response, .form-item.pre-seed').fadeOut(); // TODO: If errors show everything again
			
			// Prep the data
			$('textarea[name="thought_0').val(seedText);
			$('input[name="admin_seed').val(seedVal);
			var args = $('#form-activity').serialize() + '&start=1&seed_admin='+seedVal;

			$.ajax({
				type: "POST",
				url: do_mhaActivity.ajaxurl,
				data: { 
					action: 'thoughtSubmission',
					data: args
				},
				success: function( results ) {

					// Ajax response
					var resultData = JSON.parse(results);
				
					// Update post id with newly created thought
					$('input[name="pid"]').val(resultData['pid']);
					
					// Next steps
					$('.further-actions').fadeIn();
					$('#start-over-container').fadeIn();
					$('article.thought_activity, #other-responses').slideUp();

					$('#thought-history .inner').html('<p class="thought-label"><em class="medium small">What you said before:</em></p><p>'+sanitizeThought(resultData.response.thought_0.replace(/\\/g, ""))+'</p>').fadeIn();

					$('html, body').animate({
						scrollTop: $("#content").offset().top - 30
					}, 1000);

				},
				error: function(xhr, ajaxOptions, thrownError){
					console.error('Error');
				}
			});				

		});

		
		/**
		 * Start with another users's submitted thought
		 */
		$('.submit-initial-thought.seed-user').on('click', function(event){

			// Disable default form submit
			event.preventDefault();

			// Vars
			var seedVal = $(this).val(),
				seedText = $('.thought-text[data-pid="'+seedVal+'"]').text();
				
			// Disable submit
			$('.submit-initial-thought').prop('disabled', true);
			
			// Hide initial thought
			$('.activity-response, .form-item.pre-seed').fadeOut(); // TODO: If errors show everything again
			
			// Prep the data
			$('textarea[name="thought_0').val(seedText);
			$('input[name="user_seed').val(seedVal);
			var args = $('#form-activity').serialize() + '&start=1&seed_user='+seedVal;

			$.ajax({
				type: "POST",
				url: do_mhaActivity.ajaxurl,
				data: { 
					action: 'thoughtSubmission',
					data: args
				},
				success: function( results ) {

					// Ajax response
					var resultData = JSON.parse(results);

					// Update post id with newly created thought
					$('input[name="pid"]').val(resultData['pid']);
					
					// Next steps
					$('.further-actions').slideDown();
					$('#start-over-container').fadeIn();
					$('article.thought_activity, #other-responses').slideUp();

					$('#thought-history .inner').html('<p class="thought-label"><em class="medium small">What you said before:</em></p><p>'+sanitizeThought(resultData.response.thought_0.replace(/\\/g, ""))+'</p>').fadeIn();
					
					$('html, body').animate({
						scrollTop: $("#content").offset().top - 30
					}, 1000);

				},
				error: function(xhr, ajaxOptions, thrownError){
					console.error('Error');
				}
			});				

		});

		
		/**
		 * Select a path
		 */
		$('.submit-path').on('click', function(event){
			
			// Disable default form submit
			event.preventDefault();

			// Hide path selection
			$('.further-actions').slideUp().addClass('fadeOut animated');

			// Show selected path and first question
			var path = $(this).val();
			setTimeout(function() {
				$('ol[data-path="'+path+'"]').slideDown().addClass('active');
			}, 400);

			setTimeout(function() {
				$('ol[data-path="'+path+'"] li').first().slideDown().addClass('active');
			}, 800);

			// Prep the data
			var args = $('#form-activity').serialize() + '&continue=0&path=' + path;

			$.ajax({
				type: "POST",
				url: do_mhaActivity.ajaxurl,
				data: { 
					action: 'thoughtSubmission',
					data: args
				},
				success: function( results ) {
					
					// Ajax response
					var resultData = JSON.parse(results);

					// Show initial thought in the log
					setTimeout(function() {
						$('#other-responses').fadeIn();
						$('#thought-history .inner').html('<p class="thought-label"><em class="medium small">What you said before:</em></p><p>'+sanitizeThought(resultData.response.thought_0.replace(/\\/g, ""))+'</p>').fadeIn();				
					}, 1200);
									
					/**
					 * Update the user submitted thought list
					 */
					var index = 0,
						admin_seed = $('input[name="admin_seed').val(),
						user_seed = $('input[name="user_seed').val(),
						userThoughtArgs = 'activity_id='+resultData.response['page']+'&index='+index+'&path='+resultData.response['path']+'&admin_seed='+admin_seed+'&user_seed='+user_seed;

					$.ajax({
						type: "POST",
						url: do_mhaActivity.ajaxurl,
						data: { 
							action: 'getThoughtsSubmitted',
							data: userThoughtArgs
						},
						success: function( results ) {		

							$('#thoughts-submitted').html(results);
							sortThoughts();

						},
						error: function(xhr, ajaxOptions, thrownError){
							console.error('Error');
						}
					});	

				},
				error: function(xhr, ajaxOptions, thrownError){
					console.error('Error');
				}
			});		
	
		});

		
		/**
		 * Submit follow up thoughts
		 */
		$('.submit-thought').on('click', function(event){

			// Disable default form submit
			event.preventDefault();
				
			// Disable this submit button
			$(this).prop('disabled', true);

			// Set up easy referencees for later
			var $thisButton = $(this);

			// Simple validation for response
			var thoughtCheck = sanitizeThought($.trim($(this).parents('.question-item').find('textarea').val()));
			
			if(thoughtCheck != ''){
				
				// Prep the data
				var ref = $(this).parents('li').attr('data-reference'),
					ref_2 = $(this).parents('li').attr('data-additional-reference'),
					question = parseInt($(this).parents('li').attr('data-question')),
					path = parseInt($('ol.path.active').attr('data-path')),
					argsSuffix = '&continue=1';

				if($(this).parents('li.question-item').hasClass('last')){
					argsSuffix += '&last=1';			
				}

				var args = $('#form-activity').serialize() + '&ref=' + ref + '&ref2=' + ref_2 + '&question=' + question + '&path=' + path + '' + argsSuffix;

				// Disable textarea
				// $(this).parents('.question-item').find('textarea').prop('disabled', true);
				
				$.ajax({
					type: "POST",
					url: do_mhaActivity.ajaxurl,
					data: { 
						action: 'thoughtSubmission',
						data: args
					},
					success: function( results ) {				
						
						// Ajax response
						// var resultData = JSON.parse(results);

						$('#temp-result-data').text(results);
						$('.question-item.active .text-entry').slideUp();
						
						/**
						 * Interstitial Step
						 */
						$thisButton.hide();
						$thisButton.next('.continue-thought').fadeIn();
						
						// Display thought in the submitted area
						var newThought = '<li class="round-small-bl bubble thin submitted-by-user new-thought" style="display: none;"><div class="inner clearfix"><div class="thought-text">'+thoughtCheck+'</div><div class="thought-actions"><span class="explore-container"><button class="bar submit continue-thought-preview">Continue &raquo;</button></span></div></div></li>';
						$('#thoughts-submitted').prepend(newThought);	
						$('.new-thought').slideDown();
						setTimeout(function() {
							$('.new-thought').addClass('show-thought');		
							if($('#thoughts-submitted .no-thought').length){
								$('#thoughts-submitted .no-thought').slideUp();
							}					
						}, 400);						

					},
					error: function(xhr, ajaxOptions, thrownError){
						console.error('Error');
					}
				});		
				
				
			} else {
				
				// There is no thought submitted
				$(this).prop('disabled', false);
				$(this).parents('.question-item').find('.validation').addClass('alert alert-warning').html('Responses cannot be blank.');
				
			}

		});


		/**
		 * Additional continue button
		 */
		$(document).on('click', '.continue-thought-preview', function(event){
			
			// Disable default form submit
			event.preventDefault();

			// Just click our existing continue button
			$(document).find('.question-item.active .continue-thought').click();

		})


		/**
		 * Continue after interstitial step
		 */
		$('.continue-thought').on('click', function(event){

			// Disable default form submit
			event.preventDefault();

			// Carry over data			
			var resultData = JSON.parse($('#temp-result-data').text());
			$('#temp-result-data').html('');
			
			// Prep the data
			var question = parseInt($(this).parents('li').attr('data-question')),
				path = parseInt($('ol.path.active').attr('data-path'));

			// Hide other questions
			$('ol[data-path="'+path+'"] li').slideUp().removeClass('active');
			
			if($('ol[data-path="'+path+'"] li[data-question="'+(question + 1)+'"]').length){

				var ref = $('ol[data-path="'+path+'"] li[data-question="'+(question + 1)+'"]').attr('data-reference'),
					ref_2 = $('ol[data-path="'+path+'"] li[data-question="'+(question + 1)+'"]').attr('data-additional-reference');
				
				// Show next question
				$('ol[data-path="'+path+'"] li[data-question="'+(question + 1)+'"]').fadeIn().addClass('active');

				// Update thought log
				var thoughtHistory = '<p class="thought-label"><em class="medium small">What you said before:</em></p>';
				if(ref == 0){
					thoughtHistory += '<p>'+sanitizeThought(resultData.response['thought_'+ref])+'</p>'; // Initial thought
				} else if(resultData.response['thought_'+path+'_'+ref]){	
					thoughtHistory += '<p>'+sanitizeThought(resultData.response['thought_'+path+'_'+ref])+'</p>'; // Referred thought
				}

				if(resultData.response['thought_'+path+'_'+ref_2]){	
					thoughtHistory += '<p>'+sanitizeThought(resultData.response['thought_'+path+'_'+ref_2])+'</p>'; // Additional referred thought	
				}		
							
				$('#thought-history .inner').html(thoughtHistory.replace(/\\/g, ""));	

			} else {
				
				// Append the post id to the links
				$('.append-thought-id').each(function(){
					var href = $(this).attr('href'),
						pid = $('input[name="pid"]').val();
					$(this).attr('href', href+''+pid); // Blue Bar Links
				});

				// Update Register Links
				$('.existing-account a.plain').each(function(event){
					var href = $(this).attr('href'),
						pid = $('input[name="pid"]').val();
					if(href == '/sign-up'){
						$(this).attr('href','/sign-up/?action=save_thought_'+pid);
					}
				});

				// Update Header Login Form Redirection
				var pid = $('input[name="pid"]').val(),
					login_form_redirect = $('#loginform input[name="redirect_to"]').val()+'&action=save_thought_'+pid;
				$('#loginform input[name="redirect_to"]').val('/my-account?action=save_thought_'+pid);
				
				// Question Log
				var thoughtSummary = '<h2>Your Responses</h2>';
				thoughtSummary += '<div class="bubble round-bl light-blue thin"><div class="inner">';
				$('.question-item').each(function(event){
					var question = $(this).find('label').text(),
						answer = $(this).find('textarea').val();
					if(answer){
						thoughtSummary += '<p><strong>'+question+'</strong><br />'+answer+'</p>';
					}
				});
				thoughtSummary += '</div></div>';
				$('#thought-summary').html(thoughtSummary);

				// Show ending
				$('#other-responses, #thought-history, #start-over-container').slideUp();

				setTimeout(function() {
					$('#thought-end').slideDown();					
				}, 400);

			}

								
			/**
			 * Update the user submitted thought list
			 */
			var index = parseInt(resultData.add_row);
			if(!$('ol[data-path="'+path+'"] li[data-question="'+index+'"]').length){
				// index = index - 1;
			}
			var admin_seed = $('input[name="admin_seed').val(),
				user_seed = $('input[name="user_seed').val(),
				userThoughtArgs = 'activity_id='+resultData.response['page']+'&index='+index+'&path='+resultData.response['path']+'&admin_seed='+admin_seed+'&user_seed='+user_seed;

			$.ajax({
				type: "POST",
				url: do_mhaActivity.ajaxurl,
				data: { 
					action: 'getThoughtsSubmitted',
					data: userThoughtArgs
				},
				success: function( results ) {		

					$('#thoughts-submitted').html(results);					
					sortThoughts();

				},
				error: function(xhr, ajaxOptions, thrownError){
					console.error('Error');
				}
			});	

		});
		
		/**
		 * Continue a thought upon returning
		 */

		 // User stopped at a question
		if($('.question-item.continue').length){
	
			var path = $('.question-item.continue').parent('ol').attr('data-path'),
				ref = $('.question-item.continue').attr('data-reference'),
				ref_2 = $('.question-item.continue').attr('data-additional-reference'),
				refText0 = $('textarea[name="thought_0"]').val(),
				refText1 = $('textarea[data-path="'+path+'"][data-question="'+(ref)+'"]').val(), // 0 based index adjustment
				refText2 = $('ol[data-path="'+path+'"] li[data-question="'+(ref_2)+'"] textarea').val(); // 0 based index adjustment				
				
			var thoughtHistory = '<p class="thought-label"><em class="medium small">What you said before:</em></p>';
			if(ref == 0){
				thoughtHistory += '<p>'+refText0+'</p>'; // Initial thought
			} else if(refText1){	
				thoughtHistory += '<p>'+refText1+'</p>'; // Referred thought
			}

			if(refText2){	
				thoughtHistory += '<p>'+refText2+'</p>'; // Additional referred thought	
			}	
			
			$('#thought-history .inner').html(thoughtHistory.replace(/\\/g, "")).slideDown();	
		}

		// User has yet to choose a path
		if($('.further-actions.continue').length){
			
			// Show initial thought and the thought history for path selection
			var refText0 = $('textarea[name="thought_0"]').val();
			var thoughtHistory = '<p class="thought-label"><em class="medium small">What you said before:</em></p><p>'+refText0+'</p>'; // Initial thought
			$('#thought-history .inner').html(thoughtHistory).slideDown();

		}


		/**
		 * Abandon a thought and start fresh
		 */
		$('#start-over').on('click', function(event){
			
			event.preventDefault();

			// Vars
			var page = $('input[name="page"]').val(),
				nonce = $(this).attr('data-nonce');
				
			// Prep the data
			var args = 'page='+page+'&nonce='+nonce;
			
			// Disable flag button
			$('#start-over').prop('disabled', true);			
			
			$.ajax({
				type: "POST",
				url: do_mhaActivity.ajaxurl,
				data: { 
					action: 'abandonThought',
					data: args
				},
				success: function( results ) {

					var resp = JSON.parse(results);
					window.location.href = resp.page_redirect;

				},
				error: function(xhr, ajaxOptions, thrownError){					
					console.error(xhr,thrownError);
				}
			});	

		});

	}


	/**
	 * Liking a thought
	 */
	$(document).on('click', '.thought-like', function(event){

		// Disable default form submit
		event.preventDefault();

		// Vars
		var nonce = $(this).attr('data-nonce'),
			pid = $(this).attr('data-pid'),
			ref_pid = $('input[name="pid"]').val(),
			row = $(this).attr('data-row');
			
		// Prep the data
		var args = 'nonce='+nonce+'&pid='+pid+'&row='+row+'&ref_pid='+ref_pid;
		
		// Disable like button
		$(this).prop('disabled', true);			
		
		$.ajax({
			type: "POST",
			url: do_mhaActivity.ajaxurl,
			data: { 
				action: 'thoughtLike',
				data: args
			},
			success: function( results ) {
				$('.thought-like[data-pid="'+pid+'"][data-row="'+row+'"]').toggleClass('liked').prop('disabled', false);
			},
			error: function(xhr, ajaxOptions, thrownError){
				
				console.error(xhr,thrownError);

			}
		});	

	});


	/**
	 * Flagging a thought
	 */

	$(document).on('click', '.thought-flagger', function(event){
		event.preventDefault();
		var id = $(this).attr('aria-controls');
		$(id + ' .inner').hide();
		$(id + ' .thought-flag-confirm-container').removeClass('hidden');
	});


	$(document).on('click', '.cancel-flag-thought', function(event){
		event.preventDefault();
		var id = $(this).parents('li').attr('id');
		console.log(id);
		$('#'+id + ' .inner').show();
		$('#'+id + ' .thought-flag-confirm-container').addClass('hidden');
	});

	$(document).on('click', '.thought-flag', function(event){

		// Disable default form submit
		event.preventDefault();

		// Vars
		var nonce = $(this).attr('data-nonce'),
			pid = $(this).attr('data-pid'),
			ref_pid = $('input[name="pid"]').val(),
			row = $(this).attr('data-row'),
			thought_id = $(this).attr('data-thought-id');
			
		// Prep the data
		var args = 'nonce='+nonce+'&pid='+pid+'&row='+row+'&ref_pid='+ref_pid;
		
		// Disable flag button
		$(this).prop('disabled', true);			
		
		$.ajax({
			type: "POST",
			url: do_mhaActivity.ajaxurl,
			data: { 
				action: 'thoughtFlag',
				data: args
			},
			success: function( results ) {

				//$(`.thought-flag[data-pid="${pid}"][data-row="${row}"]`).toggleClass('flagged').prop('disabled', false); // IE doesn't like the `
				$('.thought-flag[data-pid="'+pid+'"][data-row="'+row+'"]').toggleClass('flagged').prop('disabled', false);
				$(thought_id + ' .thought-flag-confirm-container-inner').html('<p class="mb-0">Thank you for letting us know.</p>').parents('li').addClass('flagged');

			},
			error: function(xhr, ajaxOptions, thrownError){
				
				console.error(xhr,thrownError);

			}
		});	

	});
	

	/**
	 * Liking an article
	 */
	$(document).on('click', '.article-like', function(event){

		// Disable default form submit
		event.preventDefault();

		// Vars
		var nonce = $(this).attr('data-nonce'),
			pid = $(this).attr('data-pid'),
			$this = $(this),
			text = $(this).find('.text').text();
			
		// Prep the data
		var args = 'nonce='+nonce+'&pid='+pid;
		
		// Disable like button
		$(this).prop('disabled', true);			
		
		$.ajax({
			type: "POST",
			url: do_mhaActivity.ajaxurl,
			data: { 
				action: 'articleLike',
				data: args
			},
			success: function( results ) {
				$this.toggleClass('liked').prop('disabled', false);				
				$this.find('.text').text(text == 'Unsave This Page' ? 'Save This Page' : 'Unsave This Page');
			},
			error: function(xhr, ajaxOptions, thrownError){				
				console.error(xhr,thrownError);
			}
		});	

	});

	/**
	 * Hide Thoughts
	 */
	$(document).on('click', '.hide-thought', function(event){
		event.preventDefault();
		var id = $(this).attr('aria-controls');
		$(this).hide();
		$('#'+id).removeClass('hidden');
	});

	$(document).on('click', '.cancel-hide-thought', function(event){
		event.preventDefault();
		var id = $(this).parents('.hide-thought-confirm-container').attr('id');
		$('button[aria-controls="'+id+'"]').show();
		$(this).parents('.hide-thought-confirm-container').addClass('hidden');
	});

	$(document).on('click', '.hide-thought-confirm', function(event){

		// Disable default form submit
		event.preventDefault();

		// Vars
		var nonce = $(this).attr('data-nonce'),
			pid = $(this).attr('data-pid'),
			$this = $(this);
			
		// Prep the data
		var args = 'nonce='+nonce+'&pid='+pid;
		
		// Disable like button
		$(this).prop('disabled', true);			
		
		$.ajax({
			type: "POST",
			url: do_mhaActivity.ajaxurl,
			data: { 
				action: 'hideThought',
				data: args
			},
			success: function( results ) {
				$this.parents('.bubble').slideUp();			
				setTimeout(function() {
					$this.parents('.bubble').remove();	
				}, 400);
			},
			error: function(xhr, ajaxOptions, thrownError){				
				console.error(xhr,thrownError);
			}
		});	

	});

	/**
	 * Hide Screen
	 */
	$(document).on('click', '.hide-screen', function(event){
		event.preventDefault();
		var id = $(this).attr('aria-controls');
		$(this).hide();
		$('#'+id).removeClass('hidden');
	});

	$(document).on('click', '.cancel-hide-screen', function(event){
		event.preventDefault();
		var id = $(this).parents('.hide-screen-confirm-container').attr('id');
		$('button[aria-controls="'+id+'"]').show();
		$(this).parents('.hide-screen-confirm-container').addClass('hidden');
	});

	$(document).on('click', '.hide-screen-confirm', function(event){

		// Disable default form submit
		event.preventDefault();

		// Vars
		var nonce = $(this).attr('data-nonce'),
			pid = $(this).attr('data-pid'),
			$this = $(this);
			
		// Prep the data
		var args = 'nonce='+nonce+'&pid='+pid;
		
		// Disable like button
		$(this).prop('disabled', true);			
		
		$.ajax({
			type: "POST",
			url: do_mhaActivity.ajaxurl,
			data: { 
				action: 'hideScreen',
				data: args
			},
			success: function( results ) {
				$this.parents('.screen-result-item').slideUp();			
				setTimeout(function() {
					$this.parents('.screen-result-item').remove();	
				}, 400);
			},
			error: function(xhr, ajaxOptions, thrownError){				
				console.error(xhr,thrownError);
			}
		});	

	});


	/**
	 * Load More Thoughts
	 */

	$(document).on('click', '.load-more-thoughts', function(event){
		
		// Disable default behavior
		event.preventDefault();

		// Get vars
		var $this = $(this),
			activity_id = $this.attr('data-activity-id'),
			index = $this.attr('data-index'),
			path = $this.attr('data-path'),
			admin_seed = $this.attr('data-admin-seed'),
			user_seed = $this.attr('data-user-seed'),
			dreturn = $this.attr('data-return'),
			path = $this.attr('data-path'),
			page = $this.attr('data-paged');		
			
		// Prep the data
		var args = 'activity_id='+activity_id+'&index='+index+'&path='+path+'&paged='+page+'&admin_seed='+admin_seed+'&user_seed='+user_seed+'&dreturn='+dreturn;

		// Disable rhe button
		$this.prop('disabled', true);			
		
		$.ajax({
			type: "POST",
			url: do_mhaActivity.ajaxurl,
			data: { 
				action: 'loadMoreThoughts',
				data: args
			},
			success: function( results ) {

				//$this.parents('li').remove();
				$('#thoughts-submitted li.load-more').remove();
				$('#thoughts-submitted').append(results);

			},
			error: function(xhr, ajaxOptions, thrownError){				
				console.error(xhr,thrownError);
			}
		});	

	});


});