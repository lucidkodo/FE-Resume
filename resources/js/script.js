$(document).ready(function() {

  ////////////////////////////////////////////
  ///// WORK EXP
  ////////////////////////////////////////////
  var job1, 
    job2, 
    job3, 
    job4, 
    job5, 
    job6, 
    expInfo1,
    expInfo2,
    expInfo3,
    expInfo4,
    expInfo5,
    expInfo6,
    closeBtn1,
    closeBtn2,
    closeBtn3,
    closeBtn4,
    closeBtn5,
    closeBtn6;


  job1 = document.querySelector('.js--exp-1');
  job2 = document.querySelector('.js--exp-2');
  job3 = document.querySelector('.js--exp-3');
  job4 = document.querySelector('.js--exp-4');
  job5 = document.querySelector('.js--exp-5');
  job6 = document.querySelector('.js--exp-6');
  
  expInfo1 = document.querySelector('.js--exp-info-1');
  expInfo2 = document.querySelector('.js--exp-info-2');
  expInfo3 = document.querySelector('.js--exp-info-3');
  expInfo4 = document.querySelector('.js--exp-info-4');
  expInfo5 = document.querySelector('.js--exp-info-5');
  expInfo6 = document.querySelector('.js--exp-info-6');
  
  closeBtn1 = document.querySelector('.closeExp1');
  closeBtn2 = document.querySelector('.closeExp2');
  closeBtn3 = document.querySelector('.closeExp3');
  closeBtn4 = document.querySelector('.closeExp4');
  closeBtn5 = document.querySelector('.closeExp5');
  closeBtn6 = document.querySelector('.closeExp6');


  job1.addEventListener('click', function() {
    expInfo1.classList.remove('hide-me');
    job1.classList.add('expActive');
    // expInfo1.focus();
    closeBtn1.addEventListener('click', function(){
      expInfo1.classList.add('hide-me');
      job1.classList.remove('expActive');
    });
    expInfo2.classList.add('hide-me');
    expInfo3.classList.add('hide-me');
    expInfo4.classList.add('hide-me');
    expInfo5.classList.add('hide-me');
    expInfo6.classList.add('hide-me');
    
    job2.classList.remove('expActive');
    job3.classList.remove('expActive');
    job4.classList.remove('expActive');
    job5.classList.remove('expActive');
    job6.classList.remove('expActive');
  });

  job2.addEventListener('click', function() {
    expInfo2.classList.remove('hide-me');
    job2.classList.add('expActive');
    closeBtn2.addEventListener('click', function(){
      expInfo2.classList.add('hide-me');
      job2.classList.remove('expActive');
    });
    expInfo1.classList.add('hide-me');
    expInfo3.classList.add('hide-me');
    expInfo4.classList.add('hide-me');
    expInfo5.classList.add('hide-me');
    expInfo6.classList.add('hide-me');

    job1.classList.remove('expActive');
    job3.classList.remove('expActive');
    job4.classList.remove('expActive');
    job5.classList.remove('expActive');
    job6.classList.remove('expActive');
  });

  job3.addEventListener('click', function() {
    expInfo3.classList.remove('hide-me');
    job3.classList.add('expActive');
    closeBtn3.addEventListener('click', function(){
      expInfo3.classList.add('hide-me');
      job3.classList.remove('expActive');
    });
    expInfo1.classList.add('hide-me');
    expInfo2.classList.add('hide-me');
    expInfo4.classList.add('hide-me');
    expInfo5.classList.add('hide-me');
    expInfo6.classList.add('hide-me');

    job1.classList.remove('expActive');
    job2.classList.remove('expActive');
    job4.classList.remove('expActive');
    job5.classList.remove('expActive');
    job6.classList.remove('expActive');

  });

  job4.addEventListener('click', function() {
    expInfo4.classList.remove('hide-me');
    job4.classList.add('expActive');
    closeBtn4.addEventListener('click', function(){
      expInfo4.classList.add('hide-me');
      job4.classList.remove('expActive');
    });
    expInfo1.classList.add('hide-me');
    expInfo2.classList.add('hide-me');
    expInfo3.classList.add('hide-me');
    expInfo5.classList.add('hide-me');
    expInfo6.classList.add('hide-me');

    job1.classList.remove('expActive');
    job2.classList.remove('expActive');
    job3.classList.remove('expActive');
    job5.classList.remove('expActive');
    job6.classList.remove('expActive');
  });

  job5.addEventListener('click', function() {
    expInfo5.classList.remove('hide-me');
    job5.classList.add('expActive');
    closeBtn5.addEventListener('click', function(){
      expInfo5.classList.add('hide-me');
      job5.classList.remove('expActive');
    });
    expInfo1.classList.add('hide-me');
    expInfo2.classList.add('hide-me');
    expInfo3.classList.add('hide-me');
    expInfo4.classList.add('hide-me');
    expInfo6.classList.add('hide-me');

    job1.classList.remove('expActive');
    job2.classList.remove('expActive');
    job3.classList.remove('expActive');
    job4.classList.remove('expActive');
    job6.classList.remove('expActive');
  });

  job6.addEventListener('click', function() {
    expInfo6.classList.remove('hide-me');
    job6.classList.add('expActive');
    closeBtn6.addEventListener('click', function(){
      expInfo6.classList.add('hide-me');
      job6.classList.remove('expActive');
    });
    expInfo1.classList.add('hide-me');
    expInfo2.classList.add('hide-me');
    expInfo3.classList.add('hide-me');
    expInfo4.classList.add('hide-me');
    expInfo5.classList.add('hide-me');

    job1.classList.remove('expActive');
    job2.classList.remove('expActive');
    job3.classList.remove('expActive');
    job4.classList.remove('expActive');
    job5.classList.remove('expActive');
  });


  ////////////////////////////////////////////
  ///// NAV SCROLL
  ////////////////////////////////////////////

    // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            // $target.focus(); ////////// removed focus box
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              // $target.focus(); // Set focus again /////////// removed focus box
            };
          });
        }
      }
    });

  ////////////////////////////////////////////
  ///// MOBILE NAVBAR
  ////////////////////////////////////////////
  $('.burger-i').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.burger-i i');

    nav.slideToggle(200);
    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });

  ////////////////////////////////////////////
  ///// MOBILE MENU
  ////////////////////////////////////////////

  // CHECK MEDIA QUERY
  if ((window.matchMedia("(min-width: 200px)").matches) && (window.matchMedia("(max-width: 767px)").matches)) {

    $('.js--section-bi').waypoint(function(direction) {
      if (direction == "down") {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    }, {
      offset: '120px'
    });  
  };

});