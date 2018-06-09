var meerVertellen = document.getElementById("meer-vertellen-gwn");
var meerVertellenButton = document.getElementById("antwoord-weer-verder");

meerVertellen.style.display = 'none';

meerVertellenButton.onclick = function (){
     $(meerVertellen).show("slow");
}