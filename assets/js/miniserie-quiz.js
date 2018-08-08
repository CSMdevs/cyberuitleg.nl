function demoFunction() {
  //define x (de input van de textbox)
  var x = document.getElementById("vraag1").value;
  
  //check of het een geheel getal is of niet
  var test = x % 1 === 0;
  
  if(test === false) {
    //melding als er een kommagetal is
    document.getElementById("demo").innerHTML = "Jouw getal is geen geheel getal, dit kan dus niet goed zijn!";
  }
}


/* function check(z) {
    if (Number.isInteger(document.getElementById("vraag1"))) { 
        return "Jouw antwoord voldoet aan de eisen";
    }
    return "Het getal mag enkel bestaan uit de nummers 1 en 0";
}

console.log(check(document.getElementById("vraag1")));
console.log(check(document.getElementById("vraag1"))); */
/*
setInterval(

, 1000);
*/


/* setInterval(function check(z) {
  if (Number.isInteger(z)) {
    return 'Jouw getal is een geheel getal!';
  }
  return 'Jouw getal is geen geheel getal, dit kan dus niet goed zijn!';
}, 1000);

document.getElementById("demo").innerHTML = check(document.getElementById("vraag1")[0].value); */

//console.log(check(10));
// expected output: "Fits!"

// console.log(check(5));
// expected output: "Does NOT fit!"


//console.log(demoFunction(document.getElementById("vraag1")));