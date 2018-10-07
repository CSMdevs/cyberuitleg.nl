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

var verderCorrect = document.getElementById('verder-correct');
var verderWrong = document.getElementById('verder-wrong');

var ansRight = document.getElementById('correct');
var ansWrong = document.getElementById('wrong');
var buttons = document.getElementById('answer-buttons');

var afterVideo = document.getElementById('after-video');

var theClickedAns;

//Hide stuff
question.style.display = 'none';
ansRight.style.display = 'none';
ansWrong.style.display = 'none';
afterVideo.style.display = 'none';

a1.textContent = ansOne;
a2.textContent = ansTwo;
a3.textContent = ansThree;
a4.textContent = ansFour;

a1.onclick = function() {
    theClickedAns = "one";
    setAnswer();
    return;
};
a2.onclick = function() {
    theClickedAns = "two";
    setAnswer();
    return;
};
a3.onclick = function() {
    theClickedAns = "three";
    setAnswer();
    return;
};
a4.onclick = function() {
    theClickedAns = "four";
    setAnswer();
    return;
};

video.onended = function() {
     $(afterVideo).show("slow");
    video.webkitExitFullScreen();
    $('html, body').animate({
        scrollTop: $("#after-video").offset().top
    }, 2000);
};

verderCorrect.onclick = function() {
    $(question).hide("slow");
    $(video).show("slow");
    $('html, body').animate({
            scrollTop: $(video).offset().top
        }, 2000);
    video.play();
    return;
};

verderWrong.onclick = function() {
    $(question).hide("slow");
    $(video).show("slow");
    $('html, body').animate({
            scrollTop: $(video).offset().top
        }, 2000);
    video.play();
};

var pausing_function = function() {
    if (this.currentTime >= pauseTime) {
        this.pause();

        // remove the event listener after you paused the playback
        this.removeEventListener("timeupdate", pausing_function);
        video.webkitExitFullScreen();
        $(question).show("slow");
        $(video).hide("slow");
        $('html, body').animate({
            scrollTop: $(question).offset().top
        }, 2000);


    }
};

function setAnswer() {
    checkAnswer();
    return;
}

function checkAnswer() {
    if (theClickedAns == ansCorrect) {
        ansIsCorrect();
        return;
    }
    else {
        ansIsWrong();
        return;
    }
}

function ansIsCorrect() {
    $(ansRight).show("slow");
    $(buttons).hide("slow");
    return;
}

function ansIsWrong() {
    $(ansWrong).show("slow");
    $(buttons).hide("slow");
    video.currentTime = 0;
    return;
}

//The stuff that's needed, but not intresting
video.addEventListener("timeupdate", pausing_function);

