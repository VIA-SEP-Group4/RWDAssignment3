$(document).ready(function () {
   casualMovement("#fish1Id"); 
   $("#deadFish").hide();                                                       //swimming around
});


$('#fish1Id').on("click",
    function(ev){
        if (ev.shiftKey)
        {
            $("#fish1Id").stop(true);
            $("#deadFish").stop(true);
            let offset = $("#fish1Id").position();
            //$("#fish1Id").fadeOut();                                          //fadeOut() not working here for some reason, only hide()
            $("#fish1Id").hide();
            let x = offset.left - 200;
            let y = offset.top;                                                 //get coordinates of the orange fish, hide the orange fish, show dead fish and drop it to the bottom
            $('#deadFish').css({'top':y,'left':x});
            $('#deadFish').show();
            $("#fish1Id").fadeOut();
            $("#deadFish").animate({top: $(window).height() - 200, left: x}, 3000, function(){
                $('#deadFish').fadeOut();
                $('#fish1Id').fadeIn();                                         //orange fish is reborn 
                casualMovement("#fish1Id");                                     //and swims happily
            });
           
        }               
           
     }
);



$(document).on("click", function(ev) {
    $("#fish1Id").stop(true);
    let x = ev.pageX;
    let y = ev.pageY;                                                            //stop current animation and get click coordinates
    let offset = $("#fish1Id").offset();                                         //get fish coordinates

    if(ev.pageX<offset.left + 150){
        $("#fish1Id").css({'transform':'scaleX(-1)'});                           //if click is on the other side, turn the fish around
        $("#fish1Id").animate({top: y - 180, left: x - 20}, 1000, function() {   //move the fish to the specified position, its mouth aligned with the click
            casualMovement("#fish1Id");
        });
    }
    else{
        $("#fish1Id").css({'transform':'scaleX(1)'});
        $("#fish1Id").animate({top: y - 180, left: x - 240}, 1000, function() {  //move the fish to the specified position, its mouth aligned with the click
            casualMovement("#fish1Id");
        });
    } 
    //console.log(x, y);
});

$("#fish1Id").on("dblclick", function () {                                       //enlarge 1.5x on double click 
    $(this).css("transform", "scale(1.5)");
    setTimeout(function () {
        $(this).css("transform", "scale(1)");                                    //this timing is funky, it's usually not three seconds
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
