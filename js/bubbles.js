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
    
    let zIndex = (Math.floor(Math.random()*2));
    $(bubble).css("z-index",zIndex+'');

    let speed = Math.random() * 3000 + 5000;
    $(bubble).animate({top: 0}, speed, "linear", function(){bubbleMove(bubble)});
}

function smallBubbleMove(bubble)
{
    putMeOnTheBottom(bubble);

    let zIndex = (Math.floor(Math.random()*2));
    $(bubble).css("z-index",zIndex+'');

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

//set constants needed
const UP = 38;
const LEFT = 37;
const RIGHT = 39;
const DOWN = 40;
const speedMultiplier = 5;

//store key codes and currently pressed ones
var keys = {};

//store reference to character's position and element
var diver = {
    pozX: $("#scubaDiver").offset().left,
    pozY: $("#scubaDiver").offset().top,
    ref: document.querySelector("#scubaDiver")
};

//key detection (better to use addEventListener?)
document.body.onkeyup = 
document.body.onkeydown = function(e){
    keys[e.keyCode] = (e.type == 'keydown');
    //console.log(keys);
};

//character movement update
var moveCharacter = function(dx, dy){
    diver.pozX += (dx) * speedMultiplier;
    diver.pozY += (dy) * speedMultiplier;
    //character.element.style.left = character.x + 'px';
    $(diver.ref).offset({left: diver.pozX});
    //character.element.style.top = character.y + 'px';
    $(diver.ref).offset({top: diver.pozY});
};

//character control
var detectCharacterMovement = function(){
    if ( keys[LEFT] ) {
        $(diver.ref).css({'transform':'scaleX(1)'})
        moveCharacter(-1, 0);
    }
    if ( keys[RIGHT] ) {
        $(diver.ref).css({'transform':'scaleX(-1)'})
        moveCharacter(1, 0);
    }
    if ( keys[UP] ) {
        moveCharacter(0, -1);
    }
    if ( keys[DOWN] ) {
        moveCharacter(0, 1);
    }
};


// movement-loop
setInterval(function(){
    detectCharacterMovement();
}, 50);