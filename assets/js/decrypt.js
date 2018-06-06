var $decryption = $('.decryption');
var originalText = $decryption.text();

function decrypt(el) {

  var clock = 0;
  var encryptedLocations = null;

  var ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@~&/%$#';
  var DELAY = 6;
  var OFFSET = 16;


  function easeFn(x) {
    return Math.round(Math.log(Math.max(0, x - OFFSET)));
  }


  function tick() {
    var textArray = originalText.split('');

    if (encryptedLocations === null) {
      encryptedLocations = _.range(originalText.length);
    }

    if (clock % DELAY === 0) {
      for (var i = 0; i < encryptedLocations.length; ++i) {
        var k = _.random(0, ALPHABET.length - 1);
        var l = encryptedLocations[i];
        textArray[l] = '<span class="blackout">' + ALPHABET[k]  + '</span>';
      }

      remCount = easeFn(clock);
      for (var i = 0; i < _.min([remCount, encryptedLocations.length]); ++i) {
        var k = _.random(0, encryptedLocations.length - 1);
        var l = encryptedLocations[k];
        textArray[l] = originalText.charAt(l);
        if (encryptedLocations.length >= 1) {
          encryptedLocations.splice(k, 1);
        }
      }

      console.log("Remove count:", remCount);
      console.log('Text:', textArray.join(''));
      console.log("Locations:", encryptedLocations);

      $decryption.html(textArray.join(''));
    }

    ++clock;

    if (encryptedLocations.length > 0) {
      window.requestAnimationFrame(tick);
    }
  }

  window.requestAnimationFrame(tick);
}

decrypt($('.decryption'));

$('button').click(function() { decrypt($('.decryption')); });