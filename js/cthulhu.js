
$("#cthulhuId").hide();
$(document).ready(function(){
    $(this).keydown(function(e){
        
        var key = (e.keyCode ? e.keyCode : e.which);
        e.preventDefault();
        if(key==67) 
            cthulhuRises();
        else if(key==68){
            $("#cthulhuId").fadeOut(1000);
            cthulhuAudio.pause();
        }
        
    });
});
$(document).ready(function(){
    $(this).on("click",function(e){
        console.log("X: "+e.pageX);
        console.log("Y:"+e.pageY);
    })
    console.log($(this).width());
    console.log($(this).height());
});


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function cthulhuRises(i){
    var cthulhuAudio=document.getElementById("cthulhuAudio");
   
    cthulhuAudio.currentTime=0;
    $("#cthulhuId").fadeIn(1000);
    cthulhuAudio.play();
    cthulhuMove("#cthulhuId");
    
};
function cthulhuMove(id){
    var x=getRandom(0,$(document).width()-300);
    var y=getRandom(0,$(document).height()-300);
    $(id).animate({top: y,left: 3}).delay(1000)
    .animate({top: 3,left: x}).delay(1000)
    .animate({top: y,left: $(document).width()-450 }).delay(1000)
    .animate({top: $(document).height()-300,left:x },function(){
        cthulhuMove(id);
    }).delay(1000);
}