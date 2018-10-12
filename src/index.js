import './styles/styles.scss';
import Typed from 'typed.js';

// header text color and shadow
function makeShadow() {
    if ($(window).scrollTop() == 0) {
      $('.header').css('background', 'transparent');
      $('.header').css('box-shadow', 'none');
      $('.header').css('transition', '0s');
      $('.header__col-logo, .header-nav__item-theme, .burger-controller_icon').css('color', 'white');
      $('.header').css('padding-top', '15px');
    } else {
      $('.header').css('background', 'white');
      $('.header').css('box-shadow', '0 1px 27px -3px rgba(0,0,0,.5)');
      $('.header').css('transition', '0.5s');
      $('.header__col-logo, .header-nav__item-theme, .burger-controller_icon').css('color', '#424242');
      $('.header').css('padding-top', '0px');
    }
}
makeShadow();
  
$(window).scroll(function() {
    makeShadow();
});

// burger menu open/close button 
window.openNav = function () {
  document.getElementById("col-burger-controller").style.width = "100%";
}

window.closeNav = function () {
  document.getElementById("col-burger-controller").style.width = "0";
}

//header typed strings
var typedText = new Typed('#typed', {
  stringsElement: '#typed_strings',
  typeSpeed: 50,
  backSpeed: 40,
  backDelay: 1000,
  startDelay: 500,
  loop: true
});

var sections = $('section'),
    nav = $('.header__col-nav'),
    nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this),
    id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
  
  return false;
});