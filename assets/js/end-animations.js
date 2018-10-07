/* global $*/
$(function() {
function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
      }
    sleep (5000);
    $("body").removeClass("fade-out");
});