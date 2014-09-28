$( function(){
    $("#effect-small").on("click touchstart", function(){
        $(".splash").addClass("splash-anim1");
        $(".whale").addClass("whale-anim1");
        return false;
    });
    $("#effect-mediam").on("click touchstart", function(){
        $(".splash").addClass("splash-anim2");
        $(".whale").addClass("whale-anim2");
        return false;
    });
    $(".whale").on('animationend webkitAnimationEnd mozAnimationEnd', function(){

        $(this).removeClass("whale-anim1 whale-anim2");
    });
    $(".splash").on('animationend webkitAnimationEnd mozAnimationEnd', function(){

        $(this).removeClass("splash-anim1 splash-anim2");
    });
});
