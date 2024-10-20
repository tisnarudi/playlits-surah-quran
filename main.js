  var audio = document.getElementById('myAudio');

  function playTrack(track) {
    audio.src = track;
    audio.play();
  }