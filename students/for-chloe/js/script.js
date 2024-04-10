let pausePixels = 1000;
let sectionHeight = 500;


    $("#content-row-1")
        .attr("data-0","height:0px")
        .attr("data-"+sectionHeight,"height:"+sectionHeight+"px")
        .attr("data-"+(sectionHeight+pausePixels),"height:"+sectionHeight+"px")
        .attr("data-"+(2*sectionHeight+pausePixels),"height: 0px")


        $("#content-row-2")
        .attr("data-"+(sectionHeight+pausePixels),"height:0px")
        .attr("data-"+(2*sectionHeight+pausePixels),"height:"+sectionHeight+"px")
        .attr("data-"+(2*sectionHeight+2*pausePixels),"height:"+sectionHeight+"px")
        .attr("data-"+(3*sectionHeight+2*pausePixels),"height: 0px")

        $("#content-row-3")
        .attr("data-"+(2*sectionHeight+2*pausePixels),"height:0px")
        .attr("data-"+(3*sectionHeight+2*pausePixels),"height:"+sectionHeight+"px")
         .attr("data-"+(3*sectionHeight+3*pausePixels),"height:"+sectionHeight+"px")
         .attr("data-"+(4*sectionHeight+3*pausePixels),"height: 0px")


         $("#content-row-4")
        .attr("data-"+(3*sectionHeight+3*pausePixels),"height:0px")
        .attr("data-"+(4*sectionHeight+3*pausePixels),"height:"+sectionHeight+"px")
         .attr("data-"+(4*sectionHeight+4*pausePixels),"height:"+sectionHeight+"px")
         .attr("data-"+(5*sectionHeight+4*pausePixels),"height: 0px")

         $("#footer")
        .attr("data-"+(5*sectionHeight+4*pausePixels),"top:"+$(window).height()+"px")
         .attr("data-"+(5*sectionHeight+4*pausePixels+$(window).height()),"top:0px")
          
 
 


    var s = skrollr.init();


