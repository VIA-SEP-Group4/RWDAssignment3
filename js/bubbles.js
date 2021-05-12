let bottom = $(window).height();

function floatBubbles()
{
    $(".bubbleClass").each(function(){bubbleMove(this)})
}
function floatSmallBubbles()
{
    $(".smallBubbleClass").each(function(){smallBubbleMove(this)})
}

floatBubbles();
floatSmallBubbles();


//--------------------------------------------------------

function bubbleMove(bubble)
{
    putMeOnTheBottom(bubble);
    
    let speed = Math.random() * 3000 + 5000;
    $(bubble).animate({top: 0}, speed, "linear", function(){bubbleMove(bubble)});
}

function smallBubbleMove(bubble)
{
    putMeOnTheBottom(bubble);

    let randomSize = Math.random()*30 +20; 
    $(bubble).css({
        "width" : randomSize+'px',
        "height" : randomSize+'px'
    })

    let speed = Math.random() * 3000 + 5000;
    $(bubble).animate({top: 0}, speed, "linear", function(){smallBubbleMove(bubble)});
}


function putMeOnTheBottom(bubble)
{
    let random_Xpoz = (Math.random() * $(window).width());
    if( (random_Xpoz + $(bubble).outerWidth() ) > $(window).width())
    {
        //console.log(random_Xpoz + " + " + $(bubble).outerWidth() + " < " + $(window).width());
        random_Xpoz -= $(bubble).outerWidth();
        //console.log("new poz = " + random_Xpoz);
    }
    $(bubble).offset({top: bottom, left: random_Xpoz});
}


//bubble-burst Handler:
$(".bubbleClass").each(function(){
    $(this).on("click", function(){
        $(this).stop(true).fadeOut(function(){
            putMeOnTheBottom(this);
            $(this).show();

            let speed = Math.random() * 1000 + 5000;
            $(this).animate({top: 0}, speed, "linear", function(){bubbleMove(this)});
        });
    })
})