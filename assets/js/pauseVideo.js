var pauseTime = document.getElementById('intro-video').dataset.pause1;
var video = document.getElementById('intro-video');
var question = document.getElementById('questions');

question.style.display = 'none';

var pausing_function = function(){
    if(this.currentTime >= pauseTime) {
        this.pause();

        // remove the event listener after you paused the playback
        this.removeEventListener("timeupdate",pausing_function);
        question.style.display = 'inline';
        video.remove();
    }
};

video.addEventListener("timeupdate", pausing_function);