var cannotContinue = document.getElementById('cannot-click');
var answer = document.getElementById('second');
var yourAnswer = document.getElementById('your-answer');
var antwoordVerder = document.getElementById('antwoord-verder');
var eindeLes = document.getElementById('einde-les');
var alreadyFinished = document.getElementById('already-finished');
var verderAfterVideo = document.getElementById('verder-after-video');
var antwoordInvulPlek = document.getElementById('antwoord-invul-plek');
var ingevuldAntwoord;


//Hide stuff
cannotContinue.style.display = 'none';
answer.style.display = 'none';
eindeLes.style.display = 'none';
alreadyFinished.style.visibility = 'hidden';

antwoordVerder.onclick = function() {
    eindeLes.style.display = 'inline';
    $('html, body').animate({
        scrollTop: $("#einde-les").offset().top
    }, 2000);
    document.cookie = "finished=true; expires=Thu, 01 Jan 2019 12:00:00 UTC";
    $("#your-answer-verder-button").hide(1000);
    return;
};

verderAfterVideo.onclick = function() {
    ingevuldAntwoord = antwoordInvulPlek.value;
    if (ingevuldAntwoord==""){
        cannotContinue.style.display = 'inline';
        $('html, body').animate({
            scrollTop: $("#cannot-click").offset().top
        }, 2000);
    } else {
        setInput(ingevuldAntwoord);
        answer.style.display = 'inline';
        cannotContinue.style.display = 'none';
        $("#answer-place").hide("slow");
        $('html, body').animate({
            scrollTop: $("#second").offset().top
        }, 2000);
    }
    return;
};

function setInput(input){
    yourAnswer.innerHTML = input;
}

/*function required() {
    var empt = document.forms["the-answer"]["antwoord-invul"].value;
    if (empt == "") {
        cannotContinue.style.display = 'inline';
        $('html, body').animate({
            scrollTop: $("#cannot-click").offset().top
        }, 2000);
        return false;
    }
    else {
        answer.style.display = 'inline';
        cannotContinue.style.display = 'none';
        yourAnswer.innerHTML = empt;
        $('html, body').animate({
            scrollTop: $("#second").offset().top
        }, 2000);
        return false;
    }
}*/

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var isFinished = getCookie('finished');

if (isFinished == 'true') {
    alreadyFinished.style.visibility = 'visible';
}

function hideBanner() {
    $(alreadyFinished).hide("slow");
}
