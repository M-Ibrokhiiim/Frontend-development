$(function(){
     $("#append").append(" _Here is appeand method ");
// 
     $("#preapend").prepend("Here is preappend method_");
// 
     $("#html").html("<h4>Hello html method!!! </h4>");
// 
     $("#css").css({
        "width":"100px",
        "height":"100px",
        "margin":"0 auto",
        "background-color":"blue",
        "text-align":"center",
        "display":"flex",
        "justify-content":"center",
        "align-items":"center"

     });
// 
     $("#eventListener").on("click",function(){
        $(".eventListener").append("Event listener button clicked")
     });
// 
     $("#show").on("click",function(){
        $(".text").show(2000)
     })
// 
     $("#hide").click(function(){
        $(".text").hide(2000)
     })
// 
     $("#toggle").click(function(){
        $(".text").toggle()

        if($(".text").is(":visible")){
            $(this).text("Toggle(Hide)")
        }else{
            $(this).text("Toggle(Show)")
        }
     })
// 
     $("#fadeIn").click(function(){
        $("#fadeTEXT").fadeIn(2000,"linear")
     })

     $("#fadeOut").click(function(){
        $("#fadeTEXT").fadeOut(4000)
     })

     $("#toggleFade").click(function(){
        $("#fadeTEXT").fadeToggle(2000)

        if($("#fadeTEXT").is(":visible")){
            $(this).text("Toggle(FadeOut)")
        }else{
            $(this).text("Toggle(FadeIn)")
        }
     })

// 
  $("#slideDown").click(function(){
    $("#slideTEXT").slideDown(2000)
  })

  $("#slideUp").click(function(){
    $("#slideTEXT").slideUp(3000)
  })

  $("#toggleSlide").click(function(){
    $("#slideTEXT").slideToggle(2000)

    if($("#slideTEXT").is(":visible")){
        $(this).text("ToggleSlide(Up)")
    }else{
        $(this).text("ToggleSlide(Down)")
    }
  })

// 

   $("#leftAnimate").click(function(){
    $("#animateTEXT").animate({
        "marginLeft":"-90px",
    },2000)
   })

   $("#rightAnimate").click(function(){
    $("#animateTEXT").animate({
        "marginRight":"-90px"
    },2000)
   })

   $("#bottomAnimate").click(function(){
    $("#animateTEXT").animate({
        "marginTop":"50px"
    })
   })


// 
 $("#addClass").click(function(){
    $("#classTEXT").addClass('classForMethod')
 })

 $("#removeClass").click(function(){
    $("#classTEXT").removeClass('classForMethod')
 })

 $("#toggleClass").click(function(){
    $("#classTEXT").toggleClass('classForMethod')
 })
//  
$("#WERAP").click(function(){
    $("#wrap").wrap("<h3 class=classForMethod>")
})

// 
$(".deleteBtn").click(function(){
    $("#emptyText").empty(3000)
})

// 
  $("#removeAll-btn").on("click",function(){
     $("<h1> Replaced </h1>").replaceAll(".p")
  })


// 
$("#replaceWithBtn").on("click",function(){
    $("#replaceWithText").replace("<h3>Removed to H3 tag </h3>")
})
})