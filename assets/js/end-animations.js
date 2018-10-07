/* global $*/
$(function() {
function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
      }
    sleep (1000);
    $("body").removeClass("fade-out");
});