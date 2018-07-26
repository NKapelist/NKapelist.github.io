import './styles/styles.scss';

function makeShadow() {
    if ($(window).scrollTop() == 0) {
      $('.section_header').css('background', 'transparent');
      $('.section_header').css('box-shadow', 'none');
    } else {
      $('.section_header').css('background', 'white');
      $('.section_header').css('box-shadow', '0 1px 27px -3px rgba(0,0,0,.2)');
    }
  }
  makeShadow();
  
  $(window).scroll(function() {
    makeShadow();
  });