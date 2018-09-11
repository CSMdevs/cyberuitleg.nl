function demoFunction() {
  //define x (de input van de textbox)
  var x = document.getElementById("vraag1").value;
  
  //check of het een geheel getal is of niet
  var test = x % 1 === 0;
  
  if(test === false) {
    //melding als er een kommagetal is
    document.getElementById("demo").innerHTML = "Het ingevulde antwoord is geen geheel getal, dit kan dus niet goed zijn!";
  } else {
    document.getElementById("demo").innerHTML = null;
  }
}