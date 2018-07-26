$(document).ready(function (){

	function footer_accordion(media) {

		if (media.matches) {
			$(".footer-about").on('click', function () {
				$('.footer-about > ul').slideToggle(300, function(){//плавное закрытие и откратие элимента со скоростью 300
			        if( $(this).css('display') === "none"){//если у элимента display == none(это происходит в media запросе при 360px)
			            $(this).removeAttr('style');//удаляю стили
			            //если открыта то к .menu отменяем все стили, и она выподает нормально
			        }
			   });
			})
			$(".footer-support").on('click', function () {
				$('.footer-support > ul').slideToggle(300, function(){//плавное закрытие и откратие элимента со скоростью 300
			        if( $(this).css('display') === "none"){//если у элимента display == none(это происходит в media запросе при 360px)
			            $(this).removeAttr('style');//удаляю стили
			            //если открыта то к .menu отменяем все стили, и она выподает нормально
			        }
			   });
			})
		} 
	};

	var accordion_media = window.matchMedia("(max-width: 380px)");
	footer_accordion(accordion_media);
	accordion_media.addListener(footer_accordion);


	//Smoth scrolling
	$("a.button").click(function () {
		var elementClick= $(this).attr("href")
		var distantion = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({
			scrollTop: distantion
		}, 1000);
		return false;
	})

	
});


$(window).on('load', function() {
 	//Preloader
	$("#loader").fadeOut();
	$("#preloader").delay(400).fadeOut("slow");

});


