/*
  * @package Blogline
  * @subpackage Blogline HTML
  * 
  * Template Scripts
  * Created by Tripples
  
   1. Site Search
   2. Owl Carousel
   3. Unite Gallery
   4. Tooltips
  
*/


jQuery(function($) {
  "use strict";

   
   /* ----------------------------------------------------------- */
   /*  Site search
   /* ----------------------------------------------------------- */

  $('.top-search .fa-search').on('click', function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.site-search .container').toggleClass('open');
  })

  $('.site-search .close').on('click', function() {
    $('.site-search .container').removeClass('open');;
  })
  

  /* ----------------------------------------------------------- */
   /*  Fixed header
   /* ----------------------------------------------------------- */

      $(window).on('scroll', function(){
          if ( $(window).scrollTop() > 120 ) {
            $('.site-navigation').addClass('navbar-fixed');
          } else {
            $('.site-navigation').removeClass('navbar-fixed');
          }
      });



  /* ----------------------------------------------------------- */
  /*  Main slideshow
  /* ----------------------------------------------------------- */

   $('#main-slide').carousel({
      pause: true,
      interval: 100000,
   });



  /* ----------------------------------------------------------- */
  /*  Owl Carousel
  /* ----------------------------------------------------------- */

  //Box slider

   $(".box-slider").owlCarousel({

      loop:true,
      margin:20,
      autoPlay:false,
      animateOut: 'fadeOut',
      nav:true,
      mouseDrag:true,
      touchDrag:true,
      pagination:false,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      slideSpeed:800,
      items : 3,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
         }
      }

   });

   //Slider merger

   $(".owl-merge").owlCarousel({

      merge:true,
      loop:true,
      margin:5,
      autoPlay:false,
      animateOut: 'fadeOut',
      lazyLoad:true,
      center:true,
      nav:true,
      mouseDrag:true,
      touchDrag:true,
      pagination:false,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      slideSpeed:800,
      items : 4,
      responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        }
      }

   });

   //Trending slider

   $(".column-slider").owlCarousel({

      loop:true,
      autoplay:true,
      animateOut: 'fadeOut',
      nav:true,
      mouseDrag:true,
      touchDrag:true,
      pagination:false,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      slideSpeed:1000,
      items : 3,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
         }
      }

   });

   //Trending slider

   $(".trending-slider").owlCarousel({

      loop:false,
      margin:20,
      autoplay:false,
      animateOut: 'fadeOut',
      nav:true,
      mouseDrag:true,
      touchDrag:true,
      pagination:false,
      navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
      slideSpeed:800,
      items : 3,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
         }
      }

   });



   //Trending slider

   $(".featured-slider").owlCarousel({

      loop:false,
      margin:20,
      autoplay:false,
      animateOut: 'fadeOut',
      nav:false,
      pagination:false,
      mouseDrag:true,
      touchDrag:true,
      slideSpeed:800,
      items : 3,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
         }
      }

   });

   

   //Instagram carousel

   $("#instagram-carousel").owlCarousel({

      loop:true,
      animateOut: 'fadeOut',
      nav:false,
      dots:false,
      mouseDrag:true,
      touchDrag:true,
      nav:false,
      responsive:{
           0:{
               items:1
           },
           600:{
               items:3
           },
           1000:{
               items:6
            }
      }

   });



   /* ----------------------------------------------------------- */
   /*  Tooltips
   /* ----------------------------------------------------------- */

   if ($.isFunction($.fn['tooltip'])) {
      $('[data-toggle="tooltip"]').tooltip();
   }


   /* ----------------------------------------------------------- */
   /*  Contact form
   /* ----------------------------------------------------------- */

   $('#contact-form').submit(function(){

      var $form = $(this),
         $error = $form.find('.error-container'),
         action  = $form.attr('action');

      $error.slideUp(750, function() {
         $error.hide();

         var $name = $form.find('.form-control-name'),
            $email = $form.find('.form-control-email'),
            $subject = $form.find('.form-control-subject'),
            $message = $form.find('.form-control-message');

         $.post(action, {
               name: $name.val(),
               email: $email.val(),
               subject: $subject.val(),
               message: $message.val()
            },
            function(data){
               $error.html(data);
               $error.slideDown('slow');

               if (data.match('success') != null) {
                  $name.val('');
                  $email.val('');
                  $subject.val('');
                  $message.val('');
               }
            }
         );

      });

      return false;

   });

});