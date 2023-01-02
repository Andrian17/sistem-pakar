(function( $ ) {
	
	$(document).ready(function() {

		function GlideAutoHeight(Glide, Components, Events) {
			const Component = {
				mount() {
					if (!Glide.settings.autoHeight) return;
					Components.Html.track.style.transition = 'height 200ms ease-in-out';
					this.updateTrackHeight();
				},
		
				updateTrackHeight() {
					if (!Glide.settings.autoHeight) return;		
					const activeSlides = Components.Html.slides.filter((slide, index) => {
						return (index >= Glide.index && index <= (Glide.index-1) + Glide.settings.perView);
					});		
					const newMaxHeight = activeSlides.reduce((maxHeight, slide) => {
						return Math.max(maxHeight, slide.offsetHeight);
					}, 0);		
					const glideTrack = Components.Html.track;
					if (newMaxHeight !== glideTrack.offsetHeight) {
						glideTrack.style.height = `${newMaxHeight}px`;
					}
				},
			};
		
			Events.on('run', () => {Component.updateTrackHeight();});
			Events.on('update', () => {Component.updateTrackHeight();});
			Events.on('resize', () => {Component.updateTrackHeight();});
		
			return Component;
		}

		function getAllQuestions(){

			if( $('#crowdthoughtsContent').html().length > 0){
				return; // Crowdsource already loaded, no need to reload it
			}
			
			// GA Event - diy_show_others
			window.dataLayer.push({
				'event': 'diy_show_others',
				'diy_title': $('h1.entry-title').text(),
				'submitted_url': $('input[name="current_url"]').val()
			});

			// Loading animation
			$('#crowdthoughtsContent').addClass('loading');

			// Vars
			let current_question = $('#crowdthoughtsContent').attr('data-question'),
				current_activity = $('#crowdthoughtsContent').attr('data-activity'),
				current_post = $('input[name="diytool_current_id"]').length ? $('input[name="diytool_current_id"]').val() : $('#crowdthoughtsContent').attr('data-current'),
				carousel = $('#crowdthoughtsContent').attr('data-carousel'),
				data = 'question='+current_question+'&activity_id='+current_activity+'&carousel='+carousel+'&current='+current_post;

			// Save that the user viewed crowdsource content and on which question
			if( $('input[name="opened_diy"]').val() == ''){
				$('input[name="opened_diy"]').val('1');
				$('input[name="opened_diy_question"]').val(current_question);
			}

			// Get the question content 
			$.ajax({
				type: "POST",
				url: do_mhaDiyTools.ajaxurl,
				data: { 
					action: 'getDiyCrowdsource',
					data: data
				},
				success: function( results ) {
					
					var res = JSON.parse(results);
					$('#crowdthoughtsContent').removeClass('loading');
					$('#crowdthoughtsContent').html(res.html);

					var sliders = document.querySelectorAll('.crowdsource-responses');	
					for (var i = 0; i < sliders.length; i++) {
						var crowdGlide = new Glide(sliders[i], {
							type: 'slider',
							start: current_question,
							focusAt: 'center',
							perView: 1,
							gap: 40,
							rewind: false,
							autoHeight: true,
							peek: {
								before: 150,
								after: 150
							},
							breakpoints: {
								880: {
									gap: 20,
									peek: {
										before: 80,
										after: 80
									}
								},
								580: {
									gap: 10,
									peek: {
										before: 30,
										after: 30
									}
								}
							}
						});						
						crowdGlide.mount();
					}

				},
				error: function(xhr, ajaxOptions, thrownError){
					console.error(xhr,thrownError);
				}
			});	
		}

		function getCurrentQuestions(){
			let current_question = $('#crowdthoughtsContent').attr('data-question'),
				current_activity = $('#crowdthoughtsContent').attr('data-activity'),
				carousel = $('#crowdthoughtsContent').attr('data-carousel'),
				data = 'question='+current_question+'&activity_id='+current_activity+'&carousel='+carousel;

			$('#crowdthoughtsContent').addClass('loading');

			//console.log(data);

			// Get the question content 
			$.ajax({
				type: "POST",
				url: do_mhaDiyTools.ajaxurl,
				data: { 
					action: 'getDiyCrowdsource',
					data: data
				},
				success: function( results ) {
					
					var res = JSON.parse(results);
					$('#crowdthoughtsContent').removeClass('loading');
					if(!$('#crowdthoughtsContent').length){
						$('#crowdthoughtsContent').append(res.html);
						$('.diy-direct-slide[data-index="'+question.index+'"]').click();
					}

				},
				error: function(xhr, ajaxOptions, thrownError){
					console.error(xhr,thrownError);
				}
			});	
		}

		if($('#diy-questions').length){

			// Disable buttons from submitting the form accidentally
			$('.toggle-crowdthoughts').on("click",function(e){
				e.preventDefault();
			});

			/**
			 * Carousel for DIY Questions/Answer Tools
			 */
			var questionStart = $('#diy-questions').attr('data-start'),
				questionPeek = $('#diy-questions').attr('data-peek'),
				questionAllowSkip = $('#diy-questions').attr('data-skip');
			$('.question-direct[data-question=q'+questionStart+']').parent('li').addClass('active');

			// Setup Glide
			var glideOptions = {
				type: 'slider',
				start: questionStart,
				focusAt: 'center',
				perView: 1,
				gap: 40,
				rewind: false,
				autoHeight: true,
			};
			if(questionPeek == 1){
				glideOptions.peek = {
					before: 150,
					after: 150
				}
				glideOptions.breakpoints = {
					880: {
						gap: 20,
						peek: {
							before: 80,
							after: 80
						}
					},
					580: {
						gap: 10,
						peek: {
							before: 30,
							after: 30
						}
					}
				}
			} else {
				glideOptions.breakpoints = {
					880: {
						gap: 20
					}
				}
			}
			if(questionAllowSkip == 0){
				glideOptions.swipeThreshold = false;
				glideOptions.dragThreshold = false
			}

			// Total slides
			const questionTotal = function(Glide, Components, Events) {
				return {
					mount () {
						Events.emit('slider.length', Components.Sizes.length);
						//console.log('Console log', Components.Sizes.length);
					}
				}
			}

			// Activate Glide
			const question = new Glide('.glide', glideOptions ).mount({
				GlideAutoHeight: GlideAutoHeight
			});

			question.on(['run', 'move.after'], () => {

				// Disable/enable Next
				if( questionTotal.length == question.index + 1 ){
					$('.question-next').prop('disabled',true);
				} else {
					$('.question-next').prop('disabled',false);
				}
				
				// Disable/enable previous
				if( question.index == 0 ){
					$('.question-prev').prop('disabled',true);
				} else {
					$('.question-prev').prop('disabled',false);
				}

				// Update crowdsource index
				$('#crowdthoughtsContent').attr('data-question', question.index);
				$('.diy-direct-slide[data-index="'+question.index+'"]').click();
			});

			// Update active navigation
			question.on('move', function() {
				$('.question-breadcrumb li').removeClass('active');
				$('.question-direct[data-question=q'+question.index+']').parent('li').addClass('active');
				$('.question-direct[data-question=q'+question.index+']').find('textarea').focus();
			});
			// Update active navigation
			question.on('run.after', function() {
				// Crowdsource Load
				if( $('.toggle-crowdthoughts').attr('aria-expanded') == 'true' ){
					$('.crowdsource-responses .glide__arrows .diy-direct-slide[data-index="'+question.index+'"]').click();
				}
			});
			
			// Carousel navigation
			var elements = document.getElementsByClassName("diy-carousel-nav");
			var questionNavigation = function(e) {

				// Avoid submitting the form
				e.preventDefault();

				// Get the direction
				let dir = this.getAttribute("data-glide-dir");

				//console.log(dir);
				//console.log( $('.glide__slide--active'));

				// Prevent skips
				if( $('#diy-questions-container').attr('data-skippable') == 0){
					// Previous
					if(dir == '<' && $('.glide__slide--active').prev().hasClass('valid') === false ){
						return;
					}

					// Next
					if(dir == '>' && $('.glide__slide--active').hasClass('valid') === false ){
						return;
					}
				}

				// Process skips
				question.go(dir);

			};
			for (var i = 0; i < elements.length; i++) {
				elements[i].addEventListener('click', questionNavigation, false);
			}


			$("#diy-questions[data-skip=0] textarea").each(function(e){
				let $parent = $(this).parents('li'),
					$nextButton = $parent.find('.action-button');
				// Enable in case of refresh
				if($(this).val() != ''){
					$nextButton.prop('disabled', false);
					$parent.addClass('valid');
				}
				// Simple validation*
				$(this).on("input", function() {
					if($(this).val() != ''){
						$nextButton.prop('disabled', false);
						$parent.addClass('valid');
					} else {
						$nextButton.prop('disabled', true);
						$parent.removeClass('valid');
					}
				});
			});


			/**
			 * Form Submissions
			 */
			$('#diy-questions-container .action-button.next-question').on('click', function(event){
				event.preventDefault();

				// Vars for later
				let q_id = $(this).attr('data-question'),
					response_id = $('#diy-questions-container').attr('diy-questions-container'),
					q_answer = $('textarea[data-question='+q_id+']').val();
		
				if(q_answer != ''){

					// Disable submit
					$('.action-button.next-question[data-question='+q_id+']').prop('disabled', true);	

					// Prep the data
					var args = $('#diy-questions-container').serialize();

					// Submit complete form check
					if( $(this).hasClass('submit')) {
						args += '&submit=1';
					}

					//console.log(args);
					
					$.ajax({
						type: "POST",
						url: do_mhaDiyTools.ajaxurl,
						data: { 
							action: 'mhaDiySubmit',
							data: args
						},
						success: function( results ) {
							
							$('.action-button.next-question[data-question='+q_id+']').prop('disabled', false);		
							var res = JSON.parse(results);

							var current_post = $('input[name="diytool_current_id"]').val();
							if(current_post == ''){
								$('input[name="diytool_current_id"]').val(res.post_id);
							}

							if(res.error){

								$('.next-question.submit').tooltip({
									title: res.error,
								});
								$('.next-question.submit').tooltip('show');

							} else {

								if(res.redirect){

									let total_questions = $('#diy-questions textarea').length,
										total_answers = 0;
									$('#diy-questions textarea').each(function(){
										if($(this).val()){
											total_answers++;
										}
									});

									// GA Event - diy_submit
									window.dataLayer.push({
										'event': 'diy_submit',
										'diy_title': $('h1.entry-title').text(),
										'submitted_url': $('input[name="current_url"]').val(),
										'diy_total_answers': total_questions,
										'diy_total_questions': total_answers
									});
									window.location.href = res.redirect;

								}

							}

						},
						error: function(xhr, ajaxOptions, thrownError){
							console.error(xhr,thrownError);
						}
					});		

				} else {
					
				}

			});

			// Crowdsource Display on Activity Page
			$('#crowdthoughts').on('show.bs.collapse', function () {
				// getCurrentQuestions();
				getAllQuestions();
			});

		}

		// Crowdsource Display
		$('#crowdthoughtsAll').on('show.bs.collapse', function () {
			//$('.toggle-crowdthoughts').addClass('invisible');
			getAllQuestions();
		});
		if( $('.single-diy_responses #crowdthoughtsAll').hasClass('show') ){
			getAllQuestions();
		}

		$(document).on('click', 'button.text-snippet-toggle', function(e){
			e.preventDefault;
			let snipid = $(this).attr('data-snippet-toggle');
			if($('.text-snippet-long[data-snippet-id="'+snipid+'"]').hasClass('hidden')){
				$(this).text('Read less');
				$('.text-snippet-short[data-snippet-id="'+snipid+'"]').addClass('hidden').attr('aria-expanded', 'false');
				$('.text-snippet-long[data-snippet-id="'+snipid+'"]').removeClass('hidden').attr('aria-expanded', 'true');
			} else {
				$(this).text('Read more');
				$('.text-snippet-short[data-snippet-id="'+snipid+'"]').removeClass('hidden').attr('aria-expanded', 'true');
				$('.text-snippet-long[data-snippet-id="'+snipid+'"]').addClass('hidden').attr('aria-expanded', 'false');
			}
		});

	});

})( jQuery );
