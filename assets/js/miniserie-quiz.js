function check(z) {
    if (Number.isInteger(document.getElementById("vraag1"))) { 
        return "Jouw antwoord voldoet aan de eisen";
    }
    return "Het getal mag enkel bestaan uit de nummers 1 en 0";
}

console.log(check(document.getElementById("vraag1")));
console.log(check(document.getElementById("vraag1")));