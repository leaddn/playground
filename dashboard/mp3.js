/* ==================== MP3 ====================== */
//var player = document.querySelector('#audioPlayer');

function play(idPlayer, control) {

    var player = document.querySelector('#' + idPlayer);
  
     
  
    if (player.paused) {
  
        player.play();
  
        control.textContent = 'Pause';
  
    } else {
  
        player.pause();
  
        control.textContent = 'Play';
  
    }
  
  }
  
  
  
  function resume(idPlayer) {
  
    var player = document.querySelector('#' + idPlayer);
  
    player.currentTime = 0;
  
    player.pause();
  
  }
  
  function volume(idPlayer, vol) {
  
    var player = document.querySelector('#' + idPlayer);
    player.volume = vol;   
  
  }
  
  function update(player) {
  
    var duration = player.duration;    // Durée totale
    var time     = player.currentTime; // Temps écoulé
    var fraction = time / duration;
    var percent  = Math.ceil(fraction * 100);
    var progress = document.querySelector('#progressBar');
  
    progress.style.width = percent + '%';
    progress.textContent = percent + '%';
    progress.style.backgroundColor = "lightblue";
  
  }
  
  var timeslider = document.getElementById("timeRange");
  var output = document.getElementById("timeOutput");
  output.innerHTML = timeslider.value; // Display the default slider value
  
  // Update the current slider value (each time you drag the slider handle)
  timeslider.oninput = function() {
    output.innerHTML = this.value;
  }