$(document).ready(function () {
   casualMovement("#fish1Id");
});

$(document).on("click", function(ev) {
    $("#fish1Id").stop(true);
   // let x = ev.pageX;
   // let y = ev.pageY;
    let x = ev.pageX;// - $(document).offset().left;
    let y = ev.pageY;// - $(document).offset().top;
    let offset = $("#fish1Id").offset();

    if(ev.pageX<offset.left + 240){
        $("#fish1Id").css({'transform':'scaleX(-1)'});
        $("#fish1Id").animate({top: y - 180, left: x - 20}, 1000, function() {
           // $("#fish1Id").delay(1000);
            casualMovement("#fish1Id");
        });
    }

    else{
        $("#fish1Id").css({'transform':'scaleX(1)'});
        $("#fish1Id").animate({top: y - 180, left: x - 240}, 1000, function() {
           // $("#fish1Id").delay(1000);
            casualMovement("#fish1Id");
        });
    } 
    //console.log(x, y);
});

$("#fish1Id").on("dblclick", function () {
  //  $("#fish1Id").stop(true);
    $("#fish1Id").css("transform", "scale(1.5)");
    setTimeout(function () {
        $("#fish1Id").css("transform", "scale(1)");
    }, 3000);
    
});

function casualMovement(idRef){
    let x = getRandom(0, $(window).width() - 200);
    let y = getRandom(0, $(window).height() - 200);
    let elPosX=$(idRef).offset().left;
    if(x<elPosX) $(idRef).css({'transform':'scaleX(-1)'});
    else  $(idRef).css({'transform':'scaleX(1)'});

    $(idRef).animate({top: y, left: x}, 4000, function() {
        
        casualMovement(idRef);
    });
};


function getRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
};
