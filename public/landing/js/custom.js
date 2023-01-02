(function($) { "use strict";


	
	//Preloader

	Royal_Preloader.config({
		mode           : 'progress',
		background     : '#ffffff',
		showProgress   : true,
		showPercentage : false
	});
		
		
	//Parallax & fade on scroll	
		
	function scrollBanner() {
	  $(document).on('scroll', function(){
		var scrollPos = $(this).scrollTop();
			if ($(window).width() > 1200) {
				$('.parallax-fade-top').css({
				  'top' : (scrollPos/4)+'px',
				  'opacity' : 1-(scrollPos/550)
				});
				$('.parallax-fade-top-2').css({
				  'top' : (scrollPos/2.5)+'px',
				  'opacity' : 1-(scrollPos/650)
				});
				$('.parallax-fade-top-3').css({
				  'top' : (scrollPos/2.5)+'px'
				});
				$('.parallax-fade-top-4').css({
				  'top' : (scrollPos/1.5)+'px'
				});
			}	
	  });    
	}
	scrollBanner();

	
	/* Scroll Too */
	
	$(window).load(function(){"use strict";
				
		/* Page Scroll to id fn call */
		$("ul.slimmenu li a,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
			highlightSelector:"ul.slimmenu li a",
			offset: 78,
			scrollSpeed:800,
			scrollEasing: "easeInOutCubic"
		});
				
		$("a[rel='next']").click(function(e){
			e.preventDefault();
			var to=$(this).parent().parent("section").next().attr("id");
			$.mPageScroll2id("scrollTo",to);
		});	
		
		if ($(window).width() < 1200) {
			$("ul.slimmenu li a,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
				highlightSelector:"ul.slimmenu li a",
				offset: 0,
				scrollSpeed:800,
				scrollEasing: "easeInOutCubic"
			});
					
			$("a[rel='next']").click(function(e){
				e.preventDefault();
				var to=$(this).parent().parent("section").next().attr("id");
				$.mPageScroll2id("scrollTo",to);
			});	
		}
				
	});	
	
	
	/* Parallax effect */
	
	if ($(window).width() > 1200) {		
		$(window).enllax();
	}
	
	
	/* Scroll Animation */
	
	window.scrollReveal = new scrollReveal();			
	
	
	
	
	$(document).ready(function() {
		
		
		//Navigation	

		"use strict";

		$('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
		//Checks if li has sub (ul) and adds class for toggle icon - just an UI


		$('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
		//Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

		$(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\"></a>");

		//Adds menu-mobile class (for mobile toggle menu) before the normal menu
		//Mobile menu is hidden if width is more then 1199px, but normal menu is displayed
		//Normal menu is hidden if width is below 1199px, and jquery adds mobile menu
		//Done this way so it can be used with wordpress without any trouble

		$(".menu > ul > li").hover(function (e) {
			if ($(window).width() > 1170) {
				$(this).children("ul").stop(true, false).fadeToggle(300);
				e.preventDefault();
			}
		});
		//If width is more than 1170px dropdowns are displayed on hover

		$(".menu > ul > li").on('click', function () {
			if ($(window).width() <= 1170) {
				$(this).children("ul").fadeToggle(300);
			}
		});
		//If width is less or equal to 1170px dropdowns are displayed on click

		$(".menu-mobile").on('click', function (e) {
			$(".menu > ul").toggleClass('show-on-mobile');
			e.preventDefault();
		});
		//when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story
		
				
		//Tooltip

		$(".tipped").tipper();
		
			
		//Home Carousel
 
		  var sync1 = $("#hero-sync1");
		  var sync2 = $("#hero-sync2");
		 
		  sync1.owlCarousel({
			singleItem : true,
			slideSpeed : 400,
			transitionStyle : "goDown",
			pagination:false,
			autoPlay : 6000,
			afterAction : syncPosition
		  });
		(function ($) { 
			var owl = $("#hero-sync1");
			owl.owlCarousel();	
			
			// Custom Navigation Events
			$(".next-hero-sync-1").click(function(){
				owl.trigger('owl.next');
			})
			$(".prev-hero-sync-1").click(function(){
				owl.trigger('owl.prev');
			})	
		} )(jQuery);
		  
		  sync2.owlCarousel({
			items : 3,
			pagination: false,
			responsiveRefreshRate : 100,
			afterInit : function(el){
			  el.find(".owl-item").eq(0).addClass("synced");
			}
		  });
		 
		  function syncPosition(el){
			var current = this.currentItem;
			$("#hero-sync2")
			  .find(".owl-item")
			  .removeClass("synced")
			  .eq(current)
			  .addClass("synced")
			if($("#hero-sync2").data("owlCarousel") !== undefined){
			  center(current)
			}
		  }
		 
		  $("#hero-sync2").on("click", ".owl-item", function(e){
			e.preventDefault();
			var number = $(this).data("owlItem");
			sync1.trigger("owl.goTo",number);
		  });
		 
		  function center(number){
			var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
			var num = number;
			var found = false;
			for(var i in sync2visible){
			  if(num === sync2visible[i]){
				var found = true;
			  }
			}
		 
			if(found===false){
			  if(num>sync2visible[sync2visible.length-1]){
				sync2.trigger("owl.goTo", num - sync2visible.length+2)
			  }else{
				if(num - 1 === -1){
				  num = 0;
				}
				sync2.trigger("owl.goTo", num);
			  }
			} else if(num === sync2visible[sync2visible.length-1]){
			  sync2.trigger("owl.goTo", sync2visible[1])
			} else if(num === sync2visible[0]){
			  sync2.trigger("owl.goTo", num-1)
			}
			
		  }

		
		/* Hero Carousel */		
		
		$("#owl-hero-1").owlCarousel({
			transitionStyle : "goDown",
			singleItem: true, 
			itemsMobile : false, 
			pagination : true,
			autoPlay : 6000,
			slideSpeed : 400
		});	
		(function ($) { 
			var owl = $("#owl-hero-1");
			owl.owlCarousel();	
			
			// Custom Navigation Events
			$(".next-hero").click(function(){
				owl.trigger('owl.next');
			})
			$(".prev-hero").click(function(){
				owl.trigger('owl.prev');
			})	
		} )(jQuery);	
		
	
		/* Separate Carousels */
	 
		$("#owl-sep-1").owlCarousel({
			navigation: false,
			pagination : true,
			transitionStyle : "fade",
			slideSpeed : 500,
			paginationSpeed : 500,
			singleItem:true,
			autoPlay: 5000
		});
		
		
		/* Video */
		
		$(".container").fitVids();
						
		$('.vimeo a,.youtube a').on('click', function (e) {
			e.preventDefault();
			var videoLink = $(this).attr('href');
			var classeV = $(this).parent();
			var PlaceV = $(this).parent();
			if ($(this).parent().hasClass('youtube')) {
				$(this).parent().wrapAll('<div class="video-wrapper">');
				$(PlaceV).html('<iframe frameborder="0" height="333" src="' + videoLink + '?autoplay=1&showinfo=0" title="YouTube video player" width="547"></iframe>');
			} else {
				$(this).parent().wrapAll('<div class="video-wrapper">');
				$(PlaceV).html('<iframe src="' + videoLink + '?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;color=6dc234" width="500" height="281" frameborder="0"></iframe>');
			}
		});	
		
		
		//Portfolio Sorting

		(function ($) { 
		
		
			var container = $('#projects-grid');
			
			
			function getNumbColumns() { 
				var winWidth = $(window).width(), 
					columnNumb = 1;
				
				
				if (winWidth > 1500) {
					columnNumb = 4;
				} else if (winWidth > 1200) {
					columnNumb = 3;
				} else if (winWidth > 900) {
					columnNumb = 2;
				} else if (winWidth > 600) {
					columnNumb = 2;
				} else if (winWidth > 300) {
					columnNumb = 1;
				}
				
				return columnNumb;
			}
			
			
			function setColumnWidth() { 
				var winWidth = $(window).width(), 
					columnNumb = getNumbColumns(), 
					postWidth = Math.floor(winWidth / columnNumb);

			}
			
			$('#portfolio-filter #filter a').on('click', function () { 
				var selector = $(this).attr('data-filter');
				
				$(this).parent().parent().find('a').removeClass('current');
				$(this).addClass('current');
				
				container.isotope( { 
					filter : selector 
				});
				
				setTimeout(function () { 
					reArrangeProjects();
				}, 300);
				
				
				return false;
			});
			
			function reArrangeProjects() { 
				setColumnWidth();
				container.isotope('reLayout');
			}
			
			
			container.imagesLoaded(function () { 
				setColumnWidth();
				
				
				container.isotope( { 
					itemSelector : '.portfolio-box-1', 
					layoutMode : 'masonry', 
					resizable : false 
				} );
			} );
			
			
		
			
		
			$(window).on('debouncedresize', function () { 
				reArrangeProjects();
				
			} );
			
		
		} )(jQuery);

		
		
	});
 
	/* DebouncedResize Function */
		(function ($) { 
			var $event = $.event, 
				$special, 
				resizeTimeout;
			
			
			$special = $event.special.debouncedresize = { 
				setup : function () { 
					$(this).on('resize', $special.handler);
				}, 
				teardown : function () { 
					$(this).off('resize', $special.handler);
				}, 
				handler : function (event, execAsap) { 
					var context = this, 
						args = arguments, 
						dispatch = function () { 
							event.type = 'debouncedresize';
							
							$event.dispatch.apply(context, args);
						};
					
					
					if (resizeTimeout) {
						clearTimeout(resizeTimeout);
					}
					
					
					execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
				}, 
				threshold : 150 
			};
		} )(jQuery);

	
	
	
  })(jQuery); 