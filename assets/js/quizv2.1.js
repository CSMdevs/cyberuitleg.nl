/* global $*/
document.getElementById("boxScore").style.display = "none"; 
function show_alert() {
  if(confirm("Weet je zeker dat je de toets wilt insturen?\n\
Hierna kan je je antwoorden niet meer aanpassen."))
    submitQuiz();
  else
    return false;
}
function submitQuiz() {

  document.getElementById("boxScore").style.visibility = "visible";
  
  console.log("submitted");

  // get each answer score
  function answerScore(qName) {
    var radiosNo = document.getElementsByName(qName);
    
    for (var i = 0, length = radiosNo.length; i < length; i++) {
      if (radiosNo[i].checked) {
        // do something with radiosNo
        var answerValue = Number(radiosNo[i].value);
      }
    }
    // change NaNs to zero
    if (isNaN(answerValue)) {
      answerValue = 0;
    }
    return answerValue;
  }

  // calc score with answerScore function
  var calcScore =
    answerScore("q1") +
    answerScore("q2") +
    answerScore("q3") +
    answerScore("q4") +
    answerScore("q5") +
    answerScore("q6") +
    answerScore("q7") +
    answerScore("q8") +
    answerScore("q9") +
    answerScore("q10");
  console.log("CalcScore: " + calcScore); // it works!

  // function to return correct answer string
  function correctAnswer(correctStringNo, qNumber) {
    console.log("qNumber: " + qNumber); // logs 1,2,3,4 after called below
    return (
      "<i>Je antwoord was fout. <br> Het goede antwoord van vraag #" +
      qNumber +
      " was: &nbsp;<strong> " +
      document.getElementById(correctStringNo).innerHTML +
      "</strong></i>"
    );
  }

  for (i = 1; i < 10; i++) {
    if (answerScore("q" + i.toString()) === 0){
        if (answerScore("q"+i.toString()) === 0) {
          document.getElementById("correctAnswer"+ i.toString()).innerHTML = correctAnswer("correctString"+ i.toString(), i);
        }
      }  
    }

  // calculate "possible score" integer
  var questionCountArray = document.getElementsByClassName("question");

  var questionCounter = 0;
  for (var i = 0, length = questionCountArray.length; i < length; i++) {
    questionCounter++;
  }
  document.getElementById("boxScore").style.display = "inline";
  // show score as "score/possible score"
  var showScore = "Uitslag: " + calcScore + " van de " + questionCounter + " vragen goed.";
  // if 4/4, "perfect score!"
  if (calcScore == questionCounter) {
    showScore = showScore + "&nbsp;<br><strong>Je hebt alles goed, je bent duidelijk een 'expert'!</strong>";
  } else if (calcScore == 0) {
    showScore = showScore + "&nbsp; <br><strong>Alles fout...... Ga jij maar even een briefje halen bij B007! Jij hebt namelijk niks gedaan</strong>";
  } else if (calcScore <= 3) {
    showScore = showScore + "&nbsp; <br><strong>Bijna alles fout...... Wat heb je dan hier gedaan? Bekijk alles maar nog een keer.</strong>";
  } else if (calcScore > 3 && calcScore <= 6) {
    showScore = showScore + "&nbsp; <br><strong>Oké het is niet slecht, maar ja je zit op het vwo, dus je kan wel beter.</strong>";
  } else if (calcScore > 6 && calcScore < questionCounter) {
    showScore = showScore + "&nbsp; <br><strong>Lekker! Een zes of hoger!</strong>";
  }
  document.getElementById("userScore").innerHTML = showScore;
}

$(document).ready(function() {
  $("#submitButton").click(function() {
    $(this).addClass("hide");
  });
}); 
var submitButton = document.getElementById("submitButton");
submitButton.onclick = function () {
  show_alert();
   $('html, body').animate({
        scrollTop: $("#userScore").offset().top
    }, 2000);
};