(function($) {
	"use strict";

	$(window).load(function() {
		$("#loader").fadeOut("slow");
	});

	$(document).ready(function() {

		// ====================================================================

		// Header scroll function

		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
			if (scroll > 20) {
				$("header").addClass("hide-header");
			} else {
				$("header").removeClass("hide-header");
			}
		});

		// ====================================================================

		// Jet Menu

		$(".jetmenu").jetmenu();

		// ====================================================================

		// Superslides

		$('#slider').superslides({
			play: 6000,
			animation: 'fade',
			animation_speed: 2000
		});

		// ====================================================================

		// Home Video Height

		$('#video').css({'height': (($(window).height()-0))+'px'});
		$(window).resize(function(){
			$('#video').css({'height': (($(window).height()-0))+'px'});
		});

		// ====================================================================

		// Flat Weather

		var example = $("#weather").flatWeatherPlugin({
			location: "Los Anegeles", //city and region *required 
			country: "USA",         //country *required 
			//optional:
			api: "yahoo", //default: openweathermap (openweathermap or yahoo)
			//apikey: "your-api-key",   //optional api key for openweather
			view : "partial", //default: full (partial, full, simple, today or forecast)
			displayCityNameOnly : true, //default: false (true/false) if you want to display only city name
			forecast: 5, //default: 5 (0 -5) how many days you want forecast
			render: true, //default: true (true/false) if you want plugin to generate markup
			loadingAnimation: true //default: true (true/false) if you want plugin to show loading animation
			//units : "metric" or "imperial" default: "auto"
		});

		//=====================================================================

		// Carousels

		$("#specials .owl-carousel").owlCarousel({
			items: 4,
			margin: 30,
			loop: true,
			dots: false,
			nav: true,
			navText: ['<i class="fa fa-arrow-left fa-2x"></i>','<i class="fa fa-arrow-right fa-2x"></i>'],
			responsive:{
				0:{
					items:1
				},
				767:{
					items:2
				},
				992:{
					items:3
				}
			}
		});

		$("#hot-deals").owlCarousel({
			items: 2,
			margin: 30,
			loop: true,
			dots: false,
			nav: true,
			navText: ['<i class="fa fa-arrow-left fa-2x"></i>','<i class="fa fa-arrow-right fa-2x"></i>'],
			responsive:{
				0:{
					items:1
				},
				767:{
					items:2
				}
			}
		});

		$("#home-reviews .owl-carousel").owlCarousel({
			items: 1,
			margin: 0,
			loop: true,
			dots: false,
			nav: true,
			navText: ['<i class="fa fa-arrow-left fa-2x"></i>','<i class="fa fa-arrow-right fa-2x"></i>']
		});

		$("#blog .owl-carousel").owlCarousel({
			items: 2,
			margin: 60,
			loop: true,
			dots: false,
			nav: true,
			navText: ['<i class="fa fa-arrow-left fa-2x"></i>','<i class="fa fa-arrow-right fa-2x"></i>'],
			responsive:{
				0:{
					items:1
				},
				767:{
					items:2
				}
			}
		});

		$("#reviews .owl-carousel").owlCarousel({
			items: 1,
			margin: 0,
			loop: true,
			dots: false,
			nav: false,
			autoPlay: 4000
		});

		//=====================================================================

		// Home page reviews quote

		$("#home-reviews .owl-carousel blockquote").prepend("<i class='fa fa-quote-right fa-2x'></i>");

		// ====================================================================

		// Reservation

		$("#reservation-link").click(function () {
			$("#reservation").slideDown(300);
		});

			$("#reservation .close").click(function () {
				$("#reservation").slideUp(300);
			});

		$(".quantity").on("click", function () {

			var $button = $(this);
			var oldValue = $button.closest('.form-group').find(".form-control").val();

			if ($button.text() == "+") {
				var newVal = parseFloat(oldValue) + 1;
			} else {
				// Don't allow decrementing below 1
				if (oldValue > 1) {
					var newVal = parseFloat(oldValue) - 1;
				} else {
					newVal = 1;
				}
			}

			$button.closest('.form-group').find(".form-control").val(newVal);

		});

		$(".children-quantity").on("click", function () {

			var $button = $(this);
			var oldValue = $button.closest('.form-group').find(".form-control").val();

			if ($button.text() == "+") {
				var newVal = parseFloat(oldValue) + 1;
			} else {
				// Don't allow decrementing below 0
				if (oldValue > 0) {
					var newVal = parseFloat(oldValue) - 1;
				} else {
					newVal = 0;
				}
			}

			$button.closest('.form-group').find(".form-control").val(newVal);

		});

		// ====================================================================

		// Fancybox

		$(".fancybox").fancybox();

		// ====================================================================

		// Foundation Datepicker

		var nowTemp = new Date();
		var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
 
		var checkin = $('#reservation-arrival').datepicker({
			onRender: function(date) {
				return date.valueOf() < now.valueOf() ? 'disabled' : '';
			},
			format: 'dd/mm/yyyy'
		}).on('changeDate', function(ev) {
			if (ev.date.valueOf() > checkout.date.valueOf()) {
				var newDate = new Date(ev.date)
				newDate.setDate(newDate.getDate() + 1);
				checkout.setValue(newDate);
			}
			checkin.hide();
			$('#reservation-departure')[0].focus();
		}).data('datepicker');
		var checkout = $('#reservation-departure').datepicker({
			onRender: function(date) {
				return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
			},
			format: 'dd/mm/yyyy'
		}).on('changeDate', function(ev) {
			checkout.hide();
		}).data('datepicker');

		//=====================================================================

	})

})(jQuery);

/* Detecting which sections are stretching the body container */
/*
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
*/