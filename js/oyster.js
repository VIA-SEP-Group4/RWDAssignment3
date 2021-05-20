function bubbles_movements(idRef, speed, oysterRef) {

    let oysterWidth = $(oysterRef).width();
    let oysterX = $(oysterRef).offset().left;
    let bubbleX = Math.floor(Math.random() * oysterWidth/2) + oysterX;
    let bubbleY = $(oysterRef).offset().top + $(oysterRef).height()/2;
    
    $(idRef).show();
    $(idRef).offset({top: bubbleY, left: bubbleX});
    
    $(idRef).animate({top: "-=200"}, speed, function () {
        $(this).stop(true).fadeOut(function(){
            bubbles_movements(idRef, speed, oysterRef)
        });
    });
}



$(document).ready(function(){
    let screenHeight = $(window).height();
    let screenWidth = $(window).width();

    let oysterHeight = $("#oysterId").height();
    let oysterWidth = $("#oysterId").width();
    let oysterY = screenHeight-oysterHeight;
    let oysterX = Math.floor(Math.random()*(screenWidth-oysterWidth)) +oysterWidth;

    $("#oysterId").offset({top: oysterY, left: oysterX});

    $(".oystBubbleClass").each(function(){
        let speed = Math.floor(Math.random()*3000 +2000);
        bubbles_movements(this, speed, "#oysterId")
    })
})