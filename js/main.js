 /*
  * ----------------------------------------------------------------------------------------
  Author       : PlutoTheme
  Template Name: Nafi - Responsive Bootstrap 4 Personal Portfolio Template
  Version      : 1.0
  * ----------------------------------------------------------------------------------------
  */

(function ($) {
    'use strict';
 
    jQuery(document).ready(function () {

     /*
      * ----------------------------------------------------------------------------------------
      *  SCROLLSPY JS
      * ----------------------------------------------------------------------------------------
      */
      $('body').scrollspy({ target: '#nav-main-menu' });


     /*
      * ----------------------------------------------------------------------------------------
      *  SMOOTH SCROLLING JS
      * ----------------------------------------------------------------------------------------
      */
        $("#nav-main-menu li a, .scroll-down-wrapper a").bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        });
    
        
     /*
      * ----------------------------------------------------------------------------------------
      *  Mobile menu activeJS
      * ----------------------------------------------------------------------------------------
      */
      $('header nav').meanmenu({
        meanMenuContainer: 'header.main-header',
        meanScreenWidth: "768"
      });


   /*
    * ----------------------------------------------------------------------------------------
    *  SMOOTH SCROLLING FOR Moblie menu JS
    * ----------------------------------------------------------------------------------------
    */
    $(document).on("click", ".mean-nav ul li a", function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
    });


   /*
    * ----------------------------------------------------------------------------------------
    *  Sfilter items on button click JS
    * ----------------------------------------------------------------------------------------
    */
    $(".portfolio-filter").on("click", "li", function() {
      var filterValue = $(this).attr("data-filter");
      $(".portfolio-filter li").removeClass("active");
      $(this).addClass("active");
      $grid.isotope({ filter: filterValue });
    });

    //activation code here
    var $grid = $(".portfolio_items_list").isotope({
      itemSelector: ".grid",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid"
      }
    });


   /*
    * ----------------------------------------------------------------------------------------
    *  wow JS
    * ----------------------------------------------------------------------------------------
    */
    var wow = new WOW(
      {
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       0,
        mobile:       true,
        live:         true,
        callback:     function(box) {
        },
        scrollContainer: null 
      }
    );
    wow.init();


   /*
    * ----------------------------------------------------------------------------------------
    *  magnificPopup JS
    * ----------------------------------------------------------------------------------------
    */
    $('.work_thumb').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      },
      retina: {
        ratio: 1,
          replaceSrc: function(item, ratio) {
          return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
        }
      },
      mainClass: 'mfp-with-zoom',

      zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out',
        opener: function(openerElement) {
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });


   /*
    * ----------------------------------------------------------------------------------------
    *  Counterup  JS
    * ----------------------------------------------------------------------------------------
    */
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });


   /*
    * ----------------------------------------------------------------------------------------
    *  stickyheader  JS
    * ----------------------------------------------------------------------------------------
    */
    $(window).on('scroll', function (event) {
      var scrollValue = $(window).scrollTop();
      if (scrollValue > 70) {
        $('.main-header').addClass('affix');
      } else{
        $('.main-header').removeClass('affix');
      }
    });
  
  
   /*
    * ----------------------------------------------------------------------------------------
    *  Main navbar smart hide JS
    * ----------------------------------------------------------------------------------------
    */
    // $("header.auto-hide").autoHidingNavbar();


   /*
    * ----------------------------------------------------------------------------------------
    *  slick slider active JS
    * ----------------------------------------------------------------------------------------
    */
    $(".testimonial-wrapper").slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


   /*
    * ----------------------------------------------------------------------------------------
    *  Back to Top Button Activated JS
    * ----------------------------------------------------------------------------------------
    */
    $('body').append('<a id="back-top" href="#top"><i class="ti-angle-up"></i></a>');
    if ($('#back-top').length) {
      var scrollTrigger = 100,
        backToTop = function () {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > scrollTrigger) {
            $('#back-top').addClass('show-btn');
          } else {
            $('#back-top').removeClass('show-btn');
          }
        };
      backToTop();
      $(window).on('scroll', function () {
        backToTop();
      });
      $('#back-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
          scrollTop: 0
        }, 500);
      });
    };


   /*
    * ----------------------------------------------------------------------------------------
    *  lazyload active JS
    * ----------------------------------------------------------------------------------------
    */
    var myLazyLoad = new LazyLoad({
      elements_selector: ".lazy",
      load_delay: 100
    });

   /*
    * ----------------------------------------------------------------------------------------
    *  Preloader
    * ----------------------------------------------------------------------------------------
    */
    $(window).on('load', function() {
      $('.preloader.loading').fadeOut(2000);
      $('.preloader-wrapper').delay(1000).fadeOut('slow');

    });

  });

})(jQuery);