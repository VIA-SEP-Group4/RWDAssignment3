function bubbles_movements(idRef, speed) {
    var x = getRandom(400, $(document).width()-300);
     $(idRef).offset({width: 10, height: 10, top: 880, left: 960
     });
     $(idRef).animate({width: 10, height: 10, left: x, top: -100
     }, speed, function () {
         bubbles_movements(idRef, speed)
     });
 }
 $(document).ready(function () {
     bubbles_movements("#oysteBubble1Id", 2000).interval()
 });
 $(document).ready(function () {
     bubbles_movements("#oysteBubble2Id", 3000).interval()
 });
 $(document).ready(function () {
     bubbles_movements("#oysteBubble3Id", 2000).interval()
 });
 $(document).ready(function () {
     bubbles_movements("#oysteBubble4Id", 5000).interval()
 });
 $(document).ready(function () {
     bubbles_movements("#oysteBubble5Id", 4000).interval()
 });
 
 