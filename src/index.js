import './styles/styles.scss';

function makeShadow() {
    if ($(window).scrollTop() == 0) {
      $('.header').css('background', 'transparent');
      $('.header').css('box-shadow', 'none');
    } else {
      $('.header').css('background', 'white');
      $('.header').css('box-shadow', '0 1px 27px -3px rgba(0,0,0,.2)');
    }
  }
  makeShadow();
  
  $(window).scroll(function() {
    makeShadow();
  });