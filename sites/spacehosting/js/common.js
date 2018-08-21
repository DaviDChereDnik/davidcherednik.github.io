$(document).ready(function() {

	//Disallow move img
	$('img:not(.item>img)').mousedown(function() {
		return false;
	});


	//****Main menu****
	// var mainHeaderH = $('.main-header').outerHeight();
	// $(window).bind('scroll', function() {
	// 	if ($(window).scrollTop() > mainHeaderH) {
	// 		$('.main-navbar').addClass('sticky-navbar');
	// 	} 
	// 	else {
	// 		$('.main-navbar').removeClass('sticky-navbar');
	// 	}
	// });
	//Open main menu
	$('.navbar-main-menu-button>a').on('click', function(){
		$('.main-menu').show();
		$('html, body').css({
			'overflow-y': 'hidden',
		});
		
	});
	$('.main-menu-back>a').on('click', function(){
		$('.main-menu').hide();
		$('html, body').css({
			'overflow-y': 'auto',
		});
	});
	// $(document).mouseup(function(e) {
	// 	var container = $(".main-menu");
	// 	if (container.has(e.target).length === 0) {
	// 		container.hide();
	// 		$('html, body').css({
	// 			'overflow-y': 'auto',
	// 		});
	// 	}
	// }); //Non stable


	//Select2
	$(".main-menu-autor-email-content").select2({
		minimumResultsForSearch: Infinity //Do not show search input
	});

	//Click on li in "Our services"
	$('.main-menu-services-shared').on('click', function() {
		location.href = $('.main-menu-services-shared>a').attr('href');
	});
	$('.main-menu-services-vps').on('click', function() {
		location.href = $('.main-menu-services-vps>a').attr('href');
	});
	$('.main-menu-services-dedicated').on('click', function() {
		location.href = $('.main-menu-services-dedicated>a').attr('href');
	});
	$('.main-menu-services-domains').on('click', function() {
		location.href = $('.main-menu-services-domains>a').attr('href');
	});
	//Click on li in "Userful links"
	$('.main-menu-links-home').on('click', function() {
		location.href = $('.main-menu-links-home>a').attr('href');
	});
	$('.main-menu-links-about').on('click', function() {
		location.href = $('.main-menu-links-about>a').attr('href');
	});
	$('.main-menu-links-account').on('click', function() {
		location.href = $('.main-menu-links-account>a').attr('href');
	});
	$('.main-menu-links-blog').on('click', function() {
		location.href = $('.main-menu-links-blog>a').attr('href');
	});
	$('.main-menu-links-support').on('click', function() {
		location.href = $('.main-menu-links-support>a').attr('href');
	});
	$('.main-menu-links-contact').on('click', function() {
		location.href = $('.main-menu-links-contact>a').attr('href');
	});

	//Internal operations menu
	$(".navbar-internal-operations-account").on('click', function() {
		location.href = $('.navbar-internal-operations-account>a').attr('href');
	});
	$(".navbar-internal-operations-messages").on('click', function() {
		location.href = $('.navbar-internal-operations-messages>a').attr('href');
	});
	$(".navbar-internal-operations-cart").on('click', function() {
		location.href = $('.navbar-internal-operations-cart>a').attr('href');
	});
	$(".navbar-internal-operations-settings").on('click', function() {
		location.href = $('.navbar-internal-operations-settings>a').attr('href');
	});
	$(".navbar-internal-operations-logout").on('click', function() {
		location.href = $('.navbar-internal-operations-logout>a').attr('href');
	});

	$(".navbar-internal-operations-three-dots").on('click', function() {
		$(".navbar-internal-operations-list").toggle();
		$(".navbar-internal-operations-three-dots").css({
			'filter': 'invert(10%)'
		});
	});
	$(document).mouseup(function(e) {
		var container = $(".navbar-internal-operations-list");
		if (container.has(e.target).length === 0) {
			container.hide();
			$(".navbar-internal-operations-three-dots").css({
				'filter': 'invert(0%)'
			});
		}
	});

	//Smooth scroll
	$('.home-header-button').on('click', function() {
		var homeHeaderHref = "#home--hosting-pluses";
		var homeHeaderDest = $(homeHeaderHref).offset().top + 1;
		$('html').animate({
			scrollTop: homeHeaderDest
		}, 750);
		return false;
	});

	//Cneck domain (home)
	$(".home--check-domain-select").select2({
		minimumResultsForSearch: Infinity //Do not show search input
	});

	//Pricing plans (home)
	var home__PriceHeight = $(".home--pricing-offer-price").height();
	$(".home--pricing-choice-caption-content").css({
		'height': home__PriceHeight
	});

	$(".home--pricing-offer:nth-child(3)").addClass('home--pricing-offer-active');

	//Accodrion
	$(".home--pricing-accordion-caption").on('click', function () {
		$(this).next().slideToggle(200);
	});

	//OwlCarousel
	var home__owl = $('.home--happy-clients>.owl-carousel');
	home__owl.owlCarousel({
		items: 6,
		margin: 50,
		loop: true, 
		autoplay: true,
		autoplayTimeout: 7000, //Mayvt 5000
		autoplayHoverPause: true,
		dotsContainer: "#home--custom-dots",
		responsive:{
			0:{
				// dotsContainer: "#home--responsive-custom-dots",
				items: 3,
				margin: 20,
			},
			576:{
				items: 3,
				margin: 50,
			},
			768:{
				items: 4,
			},
			992:{
				items: 5,
			},
			1200:{},
		},

	});
	home__owl.on('mousewheel', 
		'.owl-stage', function(e) {
		if(e.deltaY>0) {
			home__owl.trigger('next.owl');
		}
		else {
			home__owl.trigger('prev.owl');
		}
		e.preventDefault();
	});

	//Footer
	$(".main-footer-up").on('click', function() {
		$("html, body").animate({
			scrollTop: 0
		}, 1500);
		return false;
	});

	var mainFooterBottom = $(".main-footer-subfooter").outerHeight() - ($(".main-footer-up>a>img").outerHeight() / 2);
	var mainFooterLeft = $(".main-footer-content").width() + parseInt($(".main-footer-content").css('padding-left'));
	mainFooterLeft -= $(".main-footer-up>a>img").width();
	$(".main-footer-up>a>img").css({
		'bottom': mainFooterBottom,
		'left': mainFooterLeft,
	});

	//Accordeon

	// $(".home--pricing-accordion-caption").on('click', function () {
	// 	$(this).next().slideToggle(200);
	// });
	var mainHeaderListDisplay = $('.main-footer>.main-footer-content>.main-footer-hosting>ul').css('height');
	if (mainHeaderListDisplay == "0px") {
		$(".main-footer-caption").on('click', function() {
			if($(this).text() == "Email Newsletters") {
				return false;
			}
			else {
				$(this).next().addClass("main-footer-toggle");
			}

			// alert("a");
			if ($(this).next().hasClass("main-footer-toggle")) {
				$(this).next().animate({"height": "100%"}).removeClass("main-footer-toggle");
				$(this).next().addClass("main-footer-overlay");
			}
			else {
				$(this).next().animate({"height": "0px"}).addClass("main-footer-toggle");
				$(this).next().removeClass("main-footer-overlay");
			}
			$(".main-footer-list-close").on('click', function() {
				$(".main-footer-caption").next().animate({"height": "0px"}).removeClass("main-footer-toggle");
			})
		});
	}
	else {
		return false;
	}





});
