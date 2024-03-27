let defaultZ = 9999;


 


$(".layer").click(function(e){
    

    console.log(e.target.classList.value)
    
     if (! e.target.classList.value.includes("dontCycle") )   {
        defaultZ=defaultZ-1;
        $(this).css({
            "z-index":defaultZ
        })
     }
    

})


$("")