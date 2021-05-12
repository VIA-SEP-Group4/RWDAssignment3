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



//  ---scubaDiver:
let diver = document.querySelector("#scubaDiver")

/// store key codes and currently pressed ones
var keys = {};
keys.UP = 38;
keys.LEFT = 37;
keys.RIGHT = 39;
keys.DOWN = 40;

/// store reference to character's position and element
var character = {
    x: $(diver).offset().left,
    y: $(diver).offset().top,
    speedMultiplier: 5,
    element: diver
};

/// key detection (better to use addEventListener, but this will do)
document.body.onkeyup = 
document.body.onkeydown = function(e){
    /// prevent default browser handling of keypresses
    if (e.preventDefault) { 
        e.preventDefault();
    }
    else {
        e.returnValue = false; 
    }
    keys[e.keyCode] = e.type == 'keydown';
};

/// character movement update
var moveCharacter = function(dx, dy){
    character.x += (dx) * character.speedMultiplier;
    character.y += (dy) * character.speedMultiplier;
    character.element.style.left = character.x + 'px';
    character.element.style.top = character.y + 'px';
};

/// character control
var detectCharacterMovement = function(){
    if ( keys[keys.LEFT] ) {
        $(diver).css({'transform':'scaleX(1)'})
        moveCharacter(-1, 0);
    }
    if ( keys[keys.RIGHT] ) {
        $(diver).css({'transform':'scaleX(-1)'})
        moveCharacter(1, 0);
    }
    if ( keys[keys.UP] ) {
        moveCharacter(0, -1);
    }
    if ( keys[keys.DOWN] ) {
        moveCharacter(0, 1);
    }
};


// movement-loop
setInterval(function(){
    detectCharacterMovement();
}, 1000/24);