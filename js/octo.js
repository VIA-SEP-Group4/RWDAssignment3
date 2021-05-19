$("#octopus").on("click", function() {
    $(this).stop(true);
    var posY = randPos($(document).height() - 300);
    var posX = randPos($(document).width() - 300);
    $(this).animate({opacity:0.2}, 2000, function() {
        $(this).animate({opacity:1},5000);
    });
    $(this).animate({top: posY, left: posX},7000, function(){
        moveConstantly(this);
    });
});



$(document).ready(function () {
    moveConstantly("#octopus");

});

function randPos(x) {
    return Math.floor(Math.random()*x);
};

function moveConstantly(cons){
    var posY = randPos($(document).height() - 300);
    var posX = randPos($(document).width() - 300);
    $(cons).animate({top: posY, left: posX},7000, function(){
        moveConstantly(cons);
    });
};