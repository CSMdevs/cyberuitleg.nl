var pauseTime = document.getElementById('intro-video').dataset.pause1;
var video = document.getElementById('intro-video');
var question = document.getElementById('questions');

var ansOne = document.getElementById('intro-video').dataset.ans1;
var ansTwo = document.getElementById('intro-video').dataset.ans2;
var ansThree = document.getElementById('intro-video').dataset.ans3;
var ansFour = document.getElementById('intro-video').dataset.ans4;

var ansCorrect = document.getElementById('intro-video').dataset.ansc;

var a1 = document.getElementById('answer-1');
var a2 = document.getElementById('answer-2');
var a3 = document.getElementById('answer-3');
var a4 = document.getElementById('answer-4');

var ansClicked;
var theClickedAns;

question.style.display = 'none';

a1.textContent = ansOne;
a2.textContent = ansTwo;
a3.textContent = ansThree;
a4.textContent = ansFour;

a1.onclick = function () { 
    theClickedAns = ansOne; 
    setAnswer();
};
a2.onclick = function () { 
    theClickedAns = a2;
    setAnswer();
};
a3.onclick = function () { 
    theClickedAns = a3; 
    setAnswer();
};
a4.onclick = function () {  
    theClickedAns = a4;
    setAnswer();
};


var pausing_function = function(){
    if(this.currentTime >= pauseTime) {
        this.pause();

        // remove the event listener after you paused the playback
        this.removeEventListener("timeupdate",pausing_function);
        question.style.display = 'inline';
        video.style.display = 'none';
        video.webkitExitFullScreen();
        
    }
};

function setAnswer() {
    theClickedAns.textContent = ansClicked;
    alert(theClickedAns.textContent);
    checkAnswer();
    return;
}

function checkAnswer() {
    if (ansClicked==ansCorrect) {
        ansIsCorrect();
        return;
    } else {
        ansIsWrong();
        return;
    }
}

function ansIsCorrect() {
    this.style.backgroundColor = "green";
    return;
}

function ansIsWrong() {
    this.style.backgroundColor = "red";
    return;
}

video.addEventListener("timeupdate", pausing_function);