
let bottom = $(window).height();

function floatAllBubbles()
{
    $(".bubbleClass").each(function(){bubbleMove(this)})
}
floatAllBubbles();

function bubbleMove(bubble)
{
    putMeOnTheBottom(bubble);
    let speed = Math.random() * 1000 + 3000;
    $(bubble).animate({top: 0}, speed, function(){bubbleMove(bubble)});
}

function putMeOnTheBottom(bubble)
{
    let random_Xpoz = Math.random() * $(window).width();
    $(bubble).offset({top: bottom, left: random_Xpoz});
}


$(".bubbleClass").each(function(){
    $(this).on("click", function(){
        $(this).stop(true).fadeOut().bubbleMove(this);
    })
})