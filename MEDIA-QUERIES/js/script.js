

$(".random-red").each(function(){

    $(this).css({
        "top":Math.floor(Math.random()*$(window).height()),
        "left":Math.floor(Math.random()*$(window).width())
    })

})
