var elem = document.querySelector('.main-gallery');
var flkty = new Flickity ( elem, {
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  freeScroll: false,
  pageDots: false,
  autoPlay: 2000, //ms
  friction: 1,
  cellAlign: 'center'
  //fade, adaptiveHeight, friction: 1.0
});


var isPlaying = 0; // When 0, paused, 1 -> playing

var square = document.getElementById("anim")
square.style.cursor = 'pointer'

square.onclick = function(){
  if (isPlaying == 0) {
      square.style.animationPlayState = "running"
      isPlaying = 1
  }
  
  else if (isPlaying == 1){
      square.style.animationPlayState = "paused"
      isPlaying = 0
  }
}

