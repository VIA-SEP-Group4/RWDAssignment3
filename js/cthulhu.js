

//hides the image when the website is loaded
$("#cthulhuId").hide();


$(document).ready(function(){
    $(this).keydown(function(e){
        
        var key = (e.keyCode ? e.keyCode : e.which);
        e.preventDefault();
        //in order to make cthulhu appear and do his thing you need to press "c"
        if(key==67) 
            cthulhuRises();
        //then you can make him dissappear by pressing "d"
        else if(key==68){
            $("#cthulhuId").fadeOut();
            cthulhuAudio.pause();
        }
        
    });
});



function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
/* this function activates the sound associated with cthulhu, makes cthulhu visible by fading in 
and then invokes the function that makes the element go in circles */
function cthulhuRises(){
    var cthulhuAudio=document.getElementById("cthulhuAudio");
   
    cthulhuAudio.currentTime=0;
    $("#cthulhuId").fadeIn(1000);
    cthulhuAudio.play();
    moveCthulhuInCircles("#cthulhuId");
    
};


/*this function moves the given element in a circular manner, based on its radius and x/y positions, 
using trigonometric functions to simulate the positions at which it should move */
var t = 0;

function moveCthulhuInCircles() {
    t += 0.05;
    var r = 350;
    var x = 400;
    var y = 400;
    var newX = Math.floor(x + (r * Math.cos(t)));
    var newY = Math.floor(y + (r * Math.sin(t)));
    $("#cthulhuId").animate({
        top: newX,
        left: newY,
    }, 10, function() {
        moveCthulhuInCircles();
    });
}