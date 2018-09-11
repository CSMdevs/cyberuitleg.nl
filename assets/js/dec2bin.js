// document.getElementById("dec2bin").value;

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

dec2bin(1);    // 1
dec2bin(-1);   // 11111111111111111111111111111111
dec2bin(256);  // 100000000
dec2bin(-256); // 11111111111111111111111100000000

console.log(dec2bin(document.getElementById("dec2bin").value));

/* function test(){
    document.getElementById("binair").innerHTML = dec2bin(document.getElementById("dec2bin").value);
} */