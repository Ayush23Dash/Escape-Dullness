
var video = document.querySelector('.video');
var juice = document.querySelector('.orange-juice');
var btn = document.getElementById('play-pause');
// if(window.performance.navigation.type = 1 ){
//   // togglePlayPause();
//   // alert("hi");
//   // btn.click();
//   video.play();
// }
// $( document ).ready(function() {
//     // alert( "ready!" );
//     video.play();
//     // alert("s");
// });
function togglePlayPause() {
    if(video.paused) {
        btn.className = 'pause';
        video.play();
    } else {
        btn.className = 'play';
        video.pause();
    }
}

btn.onclick = function (params) {
    //video.fastSeek(570); // 9:30
    // video.currentTime = 570; //test
    togglePlayPause();
};

video.addEventListener('timeupdate', function() {
    var juicePos = video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + "%";
    if(video.ended) {
        btn.className = "play";
      // At the end of the movie, reset the position to the start and pause the playback.
        video.currentTime = 0;
        togglePlayPause();
    }

    //HANDLE MOUSE EVENTS
    document.onmousemove = function(){
      video.currentTime=0;
      btn.className = 'pause';
      video.play();
    };

    var btnPress=true;//true represents video is paused
    btn.onclick = function(){
      btnPress=!btnPress;
    };

    document.onclick = function(){
      if(btnPress === true)//If video is paused
  {
      btnPress=!btnPress;
      video.currentTime=0;
      btn.className = 'pause';
      video.play();
    }else{
      btnPress = !btnPress;
      btn.className= 'play';
      video.pause();
    }
    };

    // HANDLE KEY PRESS
    document.getElementsByTagName("BODY")[0].onkeypress = function(){
      video.currentTime = 0;
      btn.className = 'pause';
      video.play();
    };
});
btn.onkeyup = function (e) {
  // var keycode = (window.event) ? event.keyCode : e.keyCode;
             if ( e.which == 8 || e.which == 9 || e.which == 13 || e.which == 16 || e.which == 17 || e.which == 18 || e.which == 19 || e.which == 20 || e.which == 27|| e.which == 32 || e.which == 33 || e.which == 34 || e.which == 35 || e.which == 36 || e.which == 37 || e.which == 38 || e.which == 39 || e.which == 40 || e.which == 45 || e.which == 46 || e.which == 93 || e.which == 112 || e.which == 113 || e.which == 114 || e.which == 115 || e.which == 116 || e.which == 117 || e.which == 118 || e.which == 119 || e.which == 120 || e.which == 121 || e.which == 122 || e.which == 123 || e.which == 144 || e.which == 145)
             {
               video.currentTime = 0;
               btn.className = 'pause';
               video.play();
             }
};