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

