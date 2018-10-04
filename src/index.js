import './styles/styles.scss';

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

window.openNav = function () {
  document.getElementById("col-burger-controller").style.width = "100%";
}

window.closeNav = function () {
  document.getElementById("col-burger-controller").style.width = "0";
}