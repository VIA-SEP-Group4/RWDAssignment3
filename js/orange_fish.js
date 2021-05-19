//orange fish
$(document).click(function (event) {
    $("#fish1Id").stop(true);
    $("#fish1Id").animate({left: event.pageX - 130, top: event.pageY - 130}, 1000);
    randomMoves("#fish1Id",5000);
});
$("#fish1Id").dblclick(function () {
    $(this).stop(true).animate({width: 350, height: 350});
    setTimeout(function () {   
    $("#fish1Id").animate({width: 200, height: 200}, 500);
}, 3000);     
    setTimeout(function () {
        randomMoves("#fish1Id",5000);
    }, 3000);     
}); 
$(document).ready(function () {

    randomMoves("#fish1Id",5000)
});

function randomMoves(idRef, speed) {
    var posY = getRandom(0, $(document).height() - 250);
    var posX = getRandom(0, $(document).width() - 250);
    var elPosX=$(idRef).offset().left;
    if(posX<elPosX) $(idRef).css({'transform':'scaleX(-1)'});
    else  $(idRef).css({'transform':'scaleX(1)'});
    $(idRef).animate({top: posY, left: posX}, speed, function () {
        randomMoves(idRef, speed)
    });
};
//----------------------------------------------------------
    //oyster
    
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

