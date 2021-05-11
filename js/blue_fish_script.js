$("#fish2Id").on("mouseover", function(){
    $(this).stop(true);
    var posY = getRandom(0, $(document).height() - 150);
    var posX = getRandom(0, $(document).width() - 150);
    $(this).animate({top: posY, left:posX},"slow");
    randomMovement(this);
})
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
$(document).ready(function () {
    randomMovement("#fish2Id");
});
function randomMovement(idRef){
    var posY = getRandom(0, $(document).height() - 150);
    var posX = getRandom(0, $(document).width() - 150);
    $(idRef).animate({top: posY,left: posX},4000, function(){
        randomMovement(idRef);
    });
};
