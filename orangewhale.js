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
    $("#effect-big").on("click touchstart", function(){
        $(".splash").addClass("splash-anim3");
        $(".whale").addClass("whale-anim3");
        var cheer = document.getElementById("cheer");
        cheer.currentTime = 0;
        cheer.play();
        return false;
    });
    $(".whale").on('animationend webkitAnimationEnd mozAnimationEnd', function(){

        var cheer = document.getElementById("cheer");
        cheer.pause();


        $(this).removeClass("whale-anim1 whale-anim2 whale-anim3");
    });
    $(".splash").on('animationend webkitAnimationEnd mozAnimationEnd', function(){

        $(this).removeClass("splash-anim1 splash-anim2 splash-anim3");
    });
});
