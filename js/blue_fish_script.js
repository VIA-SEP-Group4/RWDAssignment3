$("#fish2Id").on("mouseover", function(e){
    $(this).stop(true);
    var posX = getRandom(0, $(document).width() - 150);
    var posY = getRandom(0, $(document).height() - 150);
    if(e.pageX>posX) $(this).css({'transform':'scaleX(-1)'});
    else $(this).css({'transform':'scaleX(1)'});
    $("#fish2Id").animate({top: posY,left: posX},1000,function(){
        randomMovement(this);
    });
    
});
$(document).ready(function () {
    
    randomMovement("#fish2Id");
});
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function randomMovement(idRef){
    var posY = getRandom(0, $(document).height() - 150);
    var posX = getRandom(0, $(document).width() - 150);
    var elPosX=$(idRef).offset().left;
    if(posX<elPosX) $(idRef).css({'transform':'scaleX(-1)'});
    else  $(idRef).css({'transform':'scaleX(1)'});
    $(idRef).animate({top: posY,left: posX},4000, function(){
        
        randomMovement(idRef);
    });
};



