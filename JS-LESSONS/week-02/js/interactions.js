//CLICK
//
$("#click_circle").click(function(){
    $("#cursor_circle").toggleClass("clickedOn")
})

$(".wb").click(function(){
    $(this).toggleClass("invisible")
})

$(document).mousemove(function(e){
    $("#cursor_circle").css({
        "top":e.clientY,
        "left":e.clientX
    })
})

$("#show_hide").hover(function(){
    $("#cursor_circle").addClass("clickedOn")
}, function(){
    $("#cursor_circle").removeClass("clickedOn")
})

$("#scroll").scroll(function(){
    $("#information_circle").text($(this).scrollTop()+"px");
})

let message="";
$(".select").click(function(){
    $(this).toggleClass("selected")
    message = message+$(this).text()+" ";
    console.log(message)
    if (message == "hello world  my name is ali this class is graphic design ") {
        alert(message);
        $(".selected").removeClass("selected");
        message="";
    }
})


$("#drop").hover(function(){
    $(".drop_caption").addClass("hovered")
}, function(){
    $(".drop_caption").remo veClass("hovered")
})


let written = "";
$(document).keyup(function(event){

    written= written+event.key;
    console.log(written)
})

$("#drag").draggable();
$("#drop").droppable({
    drop:function(){
        $("#drag").addClass("dropped")
        $(this).addClass("dropped")
     }
})