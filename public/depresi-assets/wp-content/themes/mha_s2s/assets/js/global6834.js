(function( $ ) {
	
    AOS.init({
		once: true
	});

	/**
	 * Document Ready Functions
	 */
	$(document).ready(function() {

		// Social Buttons
		$('a.social-share').click(function(e){
			e.preventDefault(); 
			var url = $(this).attr('href');
			window.open(url, '_blank', 'toolbar=yes, scrollbars=yes, resizable=no, top=200, left=200, width=570, height=400');
		});

		// Search Toggle
		$('#search-toggle').on('click', function(event){
			event.preventDefault();

			$("input#mha-search-form").focus();

			$(this).attr('aria-expanded', function (i, attr) {
				return attr == 'true' ? 'false' : 'true'
			});
			$('#search-header').toggleClass('show');
		});	

		// Log In Toggle
		$('#sign-in-toggle').on('click', function(event){
			event.preventDefault();			
			$(this).attr('aria-expanded', function (i, attr) {
				return attr == 'true' ? 'false' : 'true'
			});					
			$('strong', this).text(function (i, attr) {
				return attr == 'Close' ? 'Log In' : 'Close'
			});			
			$('#utility-menu').toggleClass('show-login-hover');
		});

		// External links open in a new tab
		$('#content a').each(function() {
			var a = new RegExp('/' + window.location.host + '/');
			if(!a.test(this.href) && !$(this).hasClass('social-share')){
				$(this).click(function(event) {
					event.preventDefault();
					event.stopPropagation();
					window.open(this.href, '_blank');
				});
			}
		});

		// Disable "heading" links in the menu
		$('li.heading > a').on('click', function(event) {
			event.preventDefault();
		});
		
		// Dropdown Menus
		$('.sf-menu').superfish({
			delay:         400,                         
			speed:         'fast',                          
			autoArrows:    false,        
			animation:     { opacity: 'show', left: '15px' },
			animationOut:  { opacity: 'hide', left: '-15px' }
		});

		// Hamburger Icon
		$('#mobile-menu-button').on('click',function(e){
			e.preventDefault();

			// Toggle the active class
			$('body').toggleClass('mobile-menu-active');

			// Aria toggles
			$(this).attr('aria-expanded', function (i, attr) {
				return attr == 'true' ? 'false' : 'true'
			});

			// Toggle the text
			var text = $('#mobile-menu-button .text').text();
			$('#mobile-menu-button .text').text(text == 'Menu' ? 'Close' : 'Menu');
		});


		// Anchor Jump Buttons
		$('.anchor-button').on('click', function(event){
			var id = $(this).attr('data-target');
			if($(this).hasClass('active')){
				$('html, body').animate({
					scrollTop: $(id).offset().top
				}, 1000);
			}
		});

		// Account Confirmation Message Check Display
		if($('#account-settings-form').length){
			if($('.gform_confirmation_wrapper').length){
				$('#account-settings-form').addClass('reveal');
			}
		}
		
		// Scrolling to reveal content when opened    
		$(document).on('shown.bs.collapse', function(event){

			// If .anchor-content scroll to the content
			// Useful for multiple stacking reveals
			if($(event.target).hasClass('anchor-content')){
				var id = $(event.target).attr('id');
				$('html, body').animate({
					scrollTop: $('#'+id).offset().top
				}, 1000, 'easeInOutQuad');

				// Focus on input if class is present on source button
				var currentClasses = event.currentTarget.activeElement.classList,
					ccArray = [];
				for (var i = currentClasses.length >>> 0; i--;) { 
					ccArray[i] = currentClasses[i];
				}
				if( ccArray.includes("input-focus") ){
					$('#'+id).find('input:first').focus();
				}
			}

			if($(event.target).hasClass('all-screen-results')){
				var id = $(event.target).attr('id');
				$('button[aria-controls="'+id+'"]').text('Show Fewer Results');
			}

			if($(event.target).attr('id') == 'allThoughts'){
				var id = $(event.target).attr('id');
				$('button[aria-controls="'+id+'"]').text('View Less Thoughts');
			}

		});

		$(document).on('hidden.bs.collapse', function(event){

			if($(event.target).hasClass('all-screen-results')){
				var id = $(event.target).attr('id');
				$('button[aria-controls="'+id+'"]').text('Show More Results');
			}

			if($(event.target).attr('id') == 'allThoughts'){
				var id = $(event.target).attr('id');
				$('button[aria-controls="'+id+'"]').text('View All Thoughts');
			}

		});

		
		// Accordion Toggle Overrides
		// Switch between original text and toggle text on show/hide
		$('.button[data-toggle="collapse"]').each(function(event){
			var ogText = $(this).text();
			$(this).addClass('toggle-switcher').attr('data-original-text', ogText);
		});
		$(document).on('hide.bs.collapse', function(event) {
			if($(event.currentTarget.activeElement).hasClass('toggle-switcher')){
				$(event.currentTarget.activeElement).text($(event.currentTarget.activeElement).attr('data-original-text'));
			}
		});
		$(document).on('show.bs.collapse', function(event) {
			if($(event.currentTarget.activeElement).hasClass('toggle-switcher')){
				$(event.currentTarget.activeElement).text($(event.currentTarget.activeElement).attr('data-toggle-text'));
			}
		});

		// Replace + and - on click for expanding buttons
		$('button.toggle-switcher').click(function(){
			$(this).text(function(i,old){
				if(old.includes("+") || old.includes("-")){
					return old == '+' ?  '-' : '+';
				}
			});
		});


		// Checkbox Limiter
		$.fn.limit = function(n) {
			var self = this;
			this.click(function(){ return (self.filter(":checked").length<=n); });
		}
		/*
		$('.limit-1 .ginput_container_checkbox ul').each(function(e){
			var id = $(this).attr('id');
			$("ul#"+id+" li input:checkbox").limit(1);
		});
		*/
		$('.limit-2 .ginput_container_checkbox ul').each(function(e){
			var id = $(this).attr('id');
			$("ul#"+id+" li input:checkbox").limit(2);
		});
		$('.limit-3 .ginput_container_checkbox ul').each(function(e){
			var id = $(this).attr('id');
			$("ul#"+id+" li input:checkbox").limit(3);
		});
		$('.limit-4 .ginput_container_checkbox ul').each(function(e){
			var id = $(this).attr('id');
			$("ul#"+id+" li input:checkbox").limit(4);
		});
		$('.limit-5 .ginput_container_checkbox ul').each(function(e){
			var id = $(this).attr('id');
			$("ul#"+id+" li input:checkbox").limit(5);
		});

		// Checkbox single limiter (radio style hotfix)
		$('.limit-1 .ginput_container_checkbox input:checkbox').on('change', function(evt) {
			$(this).parents('.gfield_checkbox').find('input:checkbox').prop('checked', false);
			$(this).prop('checked', true);
		});

		// Animated form labels
		$(".float-label input").on("blur input focus", function() {
			var $field = $(this).closest(".float-label");
			if (this.value) {
				$field.addClass("filled");
			} else {
				$field.removeClass("filled");
			}
		});
		$(".float-label input").on("focus", function() {
			var $field = $(this).parents(".float-label");
			if (this) {
				$field.addClass("filled");
			} else {
				$field.removeClass("filled");
			}
		});
		$(".float-label input").each(function(e){
			if($(this).val()){
				$(this).parents(".float-label").addClass('filled');
			}
		});

		// Reveal button toggle
		$('.reveal-excerpt').on('click', function(event){
			event.preventDefault();

			// Close Others
			var $thisScreen = $(this).parents('.screen-item');
			$('.screen-item').not($thisScreen).each(function(e){
				$(this).find('.reveal-excerpt').not(this).removeClass('revealed').attr('aria-expanded', 'false').text('+');
				$(this).find('.excerpt.block').slideUp('200', 'easeInOutQuad').removeClass('show');
				$(this).find('.button').removeClass('revealed');
			});

			// Expand This One
			var reveal = $(this).attr('data-reveal');
			$('#'+reveal).slideToggle('200', 'easeInOutQuad').toggleClass('show').parent('a').toggleClass('revealed');
			
			$(this).attr('aria-expanded', function (i, attr) {
				return attr == 'true' ? 'false' : 'true'
			});					
			$(this).toggleClass('revealed').text(function (i, attr) {
				return attr == '-' ? '+' : '-'
			});			
		});

		// Filter Display
		// showFilters();

		// User test results display toggler
		$('.show-test-group').on('click', function(event){
			event.preventDefault();
			var group = $(this).attr('data-group-control');
			var text = $(this).text();
			
			$('div[data-test-group]').addClass('loading');
			$('#testSelection span').text(text);
			setTimeout(function() {
				$('div[data-test-group]').addClass('hidden');
				$('div[data-test-group]').removeClass('loading');	
				$('div[data-test-group="'+group+'"]').removeClass('hidden');			
			}, 400);
		});

		// Bootstrap tooltips
		/*
		$('[data-toggle="tooltip"]').tooltip({
			options: 'click hover'
		});
		*/
		$('body').tooltip({
			selector: '[data-toggle=tooltip]',
			options: 'click hover'
		});

		// Sticky Sidebars		
		//$("aside.article-right .sticky").stick_in_parent();
		$('aside.article-right .sticky').stickySidebar({
			topSpacing: 24,
			bottomSpacing: 24
		});


		/**
		 * Iframe mode options
		 */
		// Open links out of iframes
		$('.iframe-mode #page a').each(function(){
			$parent = $(this).parent();
			if(!$parent.hasClass('screen-item') && $(this).attr('id') != 'screen-take'){
				$(this).attr('target', '_blank');
			}
		});

		// Open form submissions in new window
		/*
		if($('body').hasClass('iframe-mode')){
			if($('.screen-progress-bar').hasClass('step-2-of-3')){
				// $('.iframe-mode form').attr('target', '_blank'); // Open results in new window
				// $('.single-screen form input[type="submit"]').attr('formtarget', '_blank');
			}
		}
		*/

		/**
		 * Masonry
		 */	

		// CTAs
		$('.cta-cols').each(function(event){
			if($(this).children('.block-cta').length > 1){
				let macyCtaBlock = $(this).attr('id');
				$('#'+macyCtaBlock).addClass('masonry');
				let macy = Macy({
					container: '#'+macyCtaBlock,
					trueOrder: true,
					waitForImages: false,
					margin: 0,
					columns: 2,
					breakAt: {
						767: 1
					}
				});
			}
		});

		// Screening Results Next Steps
		if($('.next-steps.masonry').length){	
			$('.next-steps.masonry').addClass('masonry-loaded');		
			let macyNextSteps = Macy({
				container: '.next-steps',
				trueOrder: true,
				waitForImages: false,
				margin: {
					x: 20,
					y: 20  
				},
				columns: 2,
				breakAt: {
					480: 1
				}
			});
		}

		
		/**
		 * dataLayer events
		 */
		var firstInputInteracted = false,
			fieldInputs = '.gform_body .gform_page:first-of-type .question input, .gform_body .gform_page:first-of-type .question-optional input',
			fieldInputsTotal = 0;

		// Get the total fields in case of refresh
		$(fieldInputs).each(function(){
			if( $(this).prop('checked') || $(this).attr('type') == 'number' && $(this).val() > 0 || $(this).attr('type') == 'text' && $(this).val != '' ) {
				fieldInputsTotal++;
			}
		});

		$(document).on('keyup click', fieldInputs, function(){
			if(firstInputInteracted == false && fieldInputsTotal == 0){
				if( $(this).val().length !== 0 ) {
					firstInputInteracted = true;
					window.dataLayer = window.dataLayer || [];
					window.dataLayer.push({
						'event': 'screen_interacted'
					});
				}
			}
		});


		/**
		 * Autosubmit .auto-submit Gravity Forms on radio change
		 */
		if($('.auto-submit').length){
			$('.auto-submit input[type=radio]').on('change', function() {
				$(this).closest("form").trigger('submit');
			});
		}

		/**
		 * Print Results Helper
		 */
		if($('#screen-result-content').length){
			var screenResultContent = $('#screen-result-content').html();
			$('<div id="screen-result-content-print" class="d-none d-print-block">'+screenResultContent+'</div>').insertBefore('#screen-result-buttons');

			// This content is below
			$('#screen-result-content-print .bubble.collapse').remove();
			$('#screen-result-content-print .screen-result-content-inner').removeClass('d-print-none');			
		}

		// Iframe Resizing
		var iframe_resizer = iFrameResize({log:true}, '#fulliframe');

	});


	/**
	 * Window Resize Functions
	 */
	$(window).resize(function() {
		
		// Filter Display
		// showFilters();

	});

})( jQuery );
