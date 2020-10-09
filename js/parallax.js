var $parallaxElement = $('.parallax-bg');
var elementHeight = $parallaxElement.outerHeight();

function parallax() {
 
  var scrollPos = $(window).scrollTop();
  var transformValue = scrollPos/40;
  var opacityValue =  1 - ( scrollPos / 2000);
  
  if ( scrollPos < elementHeight ) {
    $parallaxElement.css({
      'transform': 'translate3d(0, -' + transformValue + '%, 0)'
    });
  }
}

$(window).scroll(function() {
  parallax();
});