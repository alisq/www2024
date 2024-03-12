

let message = 'hello world';
// to get to the console, just type in CMD+OPT+J or CTRL+ALT+J
console.log(message)


$(document).scroll(function(){
    let fromTop = $(document).scrollTop()/10;
    $(".second-hand").css("transform","rotate("+fromTop+"deg)")
})



$(".student").hover(function(){
    if ( ! $(this).hasClass("hovered")) {
        let name = $(this).text();
        let interaction = $(this).attr("data-inter");    
        let newName = name +" - "+interaction;
        $(this)
        .text(newName)
        .addClass("hovered");
    }
    

})









$(".student").click(function(){
    
        // $("body").toggleClass("blueBG")//DO THIS
    
    let name = $(this).text()
    

    if (name == "River Carley") {
        $("body").toggleClass("blueBG");
    } else {
        // alert("wait, you're not River. You're "+name)
    }
    
})

$(".circle").click(function(){
    $(this).toggleClass('active')
})