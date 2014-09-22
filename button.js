$( function(){
    $(".button").on("click", function(){
        if(!$(this).hasClass('animation')){
            $.ajax({
                url: "http://www12241ue.sakura.ne.jp:4567/vote.json",
                dataType: 'jsonp',
                success: function(data, type) {
                    console.log("success.");
                    console.log("data:" + data);
                    console.log("type:" + type);
                },
                error: function(req, status, thro) {
                    console.log("error.");
                    console.log("req:" + req);
                    console.log("status:" + status);
                    console.log("thro:" + thro);
                }
            });
        }
        $(this).addClass("animation");
    });
    $(".button").on('animationend webkitAnimationEnd mozAnimationEnd', function(){
        $(this).removeClass("animation");
    });
});
