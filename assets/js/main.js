(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        $(".homepage-slides").owlCarousel({
            items: 1,
            autoplay: true,
            autoplayTimeout: 5000,
            loop: true,
            dots: true,
            nav: true,
            navText: ["<i class='zmdi zmdi-long-arrow-left'></i>", "<i class='zmdi zmdi-long-arrow-right'></i>"]
      
            
        });
        
        $(".logo-carousel").owlCarousel({
            items: 8,
            margin: 30,
            loop: true,
            dots: false,
            nav: false,
      
            
        });
        
        $(".case-study-carousel").owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            dots: true,
            nav: false,
            autoplay: true
            
        });
        
        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            autoplay: true
            
        });
        $(".single-testmonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            autoplay: true
            
        });


       $(".video-play-btn").magnificPopup({
            type: 'video',
        });
        
        
        $(".menu-triger").on('click', function() {
            $(".off-canvas-menu").addClass("show-off-canvas-menu"); 
            $(".off-canvas-menu-shade").addClass("active");
        });
        
        $(".close-menu, .off-canvas-menu-shade").on('click', function() {
            $(".off-canvas-menu").removeClass("show-off-canvas-menu");
            $(".off-canvas-menu-shade").removeClass("active");
        });


        $(".single-testimonial-box").hover(function() {
            $(".single-testimonial-box").removeClass('active');
            $(this).addClass('active');
        });
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	