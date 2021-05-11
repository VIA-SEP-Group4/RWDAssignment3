$("#fish2Id").on("mouseover", function(e){
    $(this).stop(true);
    var posY = getRandom(0, $(document).height() - 150);
    var posX = getRandom(0, $(document).width() - 150);
    if(e.pageX>posX) $(this).css({'transform':'scaleX(-1)'});
    else $(this).css({'transform':'scaleX(1)'});
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

