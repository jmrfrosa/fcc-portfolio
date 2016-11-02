var header = $("#header");
var headerHeight = header.outerHeight(true);
var navbar = $("#navbar");
//I use css here and below to ensure pixel-perfect affixing of the navbar
navbar.css('top',headerHeight)

function initParallax() {
  var scrolled = $(window).scrollTop();
  if(scrolled > headerHeight) {
    //navbar.addClass("navbar-fixed-top");
    navbar.css({'position':'fixed',
                'top':'0'});
  }
  else {
    //navbar.removeClass("navbar-fixed-top");
    navbar.css({'position':'absolute',
                'top':headerHeight});
  }
  $("#bg").css('top', -(scrolled*0.3)+'px');
  $(".header-text").css('top', (scrolled*0.5)+'px');
}

$(window).scroll(function(e){
  initParallax();
});