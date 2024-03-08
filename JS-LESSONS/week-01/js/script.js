let message = 'hello world';
// to get to the console, just type in CMD+OPT+J or CTRL+ALT+J
console.log(message)


$(".student").click(function(){
    
        // $("body").toggleClass("blueBG")//DO THIS
    
    let name = $(this).text()
    

    if (name == "River Carley") {
        $("body").toggleClass("blueBG");
    } else {
        alert("wait, you're not River. You're "+name)
    }
    
})