import './styles/styles.scss';
import Typed from 'typed.js';

// header shadow
function makeShadow() {
    if ($(window).scrollTop() == 0) {
      $('.header').css('background', 'transparent');
      $('.header').css('box-shadow', 'none');
      $('.header').css('transition', '0s');
    } else {
      $('.header').css('background', 'white');
      $('.header').css('box-shadow', '0 1px 27px -3px rgba(0,0,0,.5)');
      $('.header').css('transition', '0.7s');
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


var typedText = new Typed('#typed', {
  stringsElement: '#typed_strings',
  typeSpeed: 50,
  backSpeed: 40,
  backDelay: 1000,
  startDelay: 500,
  loop: true
});