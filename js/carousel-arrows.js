var flkty = new Flickity( '.carousel', {
    imagesLoaded: true,
    percentPosition: false
});
  
var caption = document.querySelector('.caption');
  
flkty.on( 'select', function() {
    caption.textContent = flkty.selectedElement.getElementsByTagName('img')[0].alt;
    console.log(flkty.selectedElement.getElementsByTagName('img')[0].alt);
});
  



var previousButton = document.querySelector('.left-arrow');
previousButton.addEventListener( 'click', function() {
  flkty.previous();
});

var nextButton = document.querySelector('.right-arrow');
nextButton.addEventListener( 'click', function() {
  flkty.next();
});

