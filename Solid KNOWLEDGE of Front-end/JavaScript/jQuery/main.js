$(function(){

//.append() ->We use that method for append a new element with its text content or just text content fro targetted element of inside

   let number=121
   $("p").append(number+1010)

   $("body.p").append("<h2>Hello MrIbrokhim!!!</h2>") 



//.css() -> We use that method for add many css classes or properties for targetted element.
    $("p:nth-child(5)").css({
      "background-color":"blue",
      "border":"11px solid black"})

    
    if($("p:first").html()==='Not loaded yet.1131'){
        console.log('It is RIGHT!');
        
    }
    
//.html() ->We use that method for change targetted element of also element and also context 

    $("p").html("<p>Hello world</p>")

    $("p:last").append("<h6>asdas</h6>") ;

    console.log($("p:last"));
    

    


// .on() -> We use that method for add hand event listener for targetted element.

$('h1').on("click",function(){
    $("h1").html("<h3>Click event is working</h3>")
})

$("h1") .on("mouseleave",function(){
    $("h1").html("<h6>Event listener is here!</h6>")
})

// Hover effects
 $("#hide").on("click",function(){
    $("#hideShow").hide()
 })

 $("#show").on("click",function(){
    $("#hideShow").show()
 })


 $("#hide").on("click",function(){
   $("#hideShow").hide()
 })

 $("#show").on("click",function(){

$("#hideShow").show()
  })

$("#hideShow").toggle()


// .toggle()  -> We use that method to visble content to invisible or invisible to visible

$("#toggleBtn").on('click',function(){
    $("#hideAndShow").toggle()

    if($("#hideAndShow").is(":visible")){
        $(this).text("Hide")
    }else{
        $(this).text("Show")
    }
})


// .toggleClass() -> We use that method for add or remove class for targetting element. If we have no class it add class we want due to this is toggle.If we wan to remove class we need write that class name due to first that toggle check first lement attribute ,If theere is that class toggleClass add  clas or remove.

$("#CLAssToggle").on("click", function(){

    $("#toggleClass").toggleClass("class-for-toggle-class-of-text")

    if($("#toggleClass").is(":visible")){
       $(this).text("Remove Class")
    }else{
        $(this).text("Add class")
    }
    
})

$("#toggleClass").hover(function changings(){
    $(this).toggleClass("class-for-toggle-class-of-text")
})


// .fidIn() ->We use  that method for appear targetted element like with transtion time.Like slowly 

$("#fid-in").on("click",function(){
    $("#text1").fadeIn(3000,function(){
        $(this).css({
            "background-color":"aqua",
             
        }) 
    })
})

//  .fidOut() -> We use that method for disappear element whcih is we targetted from our screen imn ,illisecons or fast as without milliseconds

$("#Fid-out").on("click",function(){
    $("#text1").fadeOut("fast")
})

// .slideDown("milliseconds", easing) -> We use that method for appearing our targetted element through animating from above to down(0 to 1 opacity) and with many easings like linear,swing and etc.

$("#slideDown").click(function(){
    $("#slideText").slideDown(2000,"linear",function(){
        $(this).css({
            "color":"green",
            "font-size":"20px",
            "padding":"20px"
        })
    })
})
  
//  .slideUp("milliseconds",easing) -> We use that method for disappear our targetted element from appeared mode to disappear like exist text lost his visibility  campain to up
$("#slideUp").click(function(){
    $("#slideText").slideUp("2000","linear")
})


// .toggleSlide("milliseconds", easing) -> We use that method for diappear element to appear,appear to disappear animating through easings in milliseconds namely with duration

$("#slideToggle").click(function(){
    $("#slideText").slideToggle(2000,"linear")
})

// .toggle(milliseconds,"easing") -> We use that method for disappear to Appear text content ,appear to disappear through easing in milliseconds.

$("#toggleBtnOFtoggle").click(function(){
    $("#toggleTextId").toggle(2000,"swing")

    if($("#toggleTextId").is(":visible")){
        $(this).text("Hide")
    }else{
        $(this).text("Show")
    }
})


// .animate() -> We use that method for animating targetted elemnt across screen of any points namely modifying targetted elemnt first looking to changed visibility such us bigger with, higer fontsize and etc.

$('#animating-button').click(function(){
    $("#animating-text").animate({
        fontSize:"2vh",
        color:"aqua",
        width:"200px",
        height:"200px",
        textAllign:"center",
        border:"1px solid blue",
        marginLeft:"300px"
 

    })
})

// selectors -> We use selectors for select elements inside of same element

$(".selectors:odd").css("color","blue")

//  advanced selectors- We use that selectors for slectiing more high level of slecting. Thorugh any operations such as (parent)>(child)

// $("#container>h3:first").css("color","blue")

$(" #container>h3:contains('Ib')").css("color","aqua")

$("#preApend-bttn").click(function(){
    $("#container > h3:first").prepend('Hello MrIbrokhim !!!!')
})

// .wrap() ->We use that method for wrap our targetted elemnt through our new element

$("#containerClassForWrap").wrap("<section class=bgClass>")

// .empty() ->We use that method for clear targetted elemnt from html file.

$("#clearContent").empty()

// .replaceWith() -> We use that method for replace targetted elemnt with inside of method scope element 

$("#replaceButton").click(function(){
    $(".containerReplacementText > h3").replaceWith("<h2>Text replaced </h2>")
})
// .replaceAll() ->We use that method for replace all elemnts with new targetted elements
$("#replaceAllBtn").on("click",function(){
    $("<article>MrIbrokhiiim </article>").replaceAll(".replaceAlll")
})

// addClass()->We use that method for add new class for our targetted element

$("#addClassContainer > button").click(function(){
    $("#addClassContainer > p").addClass('modifying')
})

// .removeClass() ->We use that method for remove exsited class from our targetted element
$("#addClassContainer > button:nth-child(2)").click(function(){
    $("#addClassContainer > p").removeClass('modifying')
})

// .toggleClass() ->We use that method for remove class if this class exist in our targetted element or reverse of that difinition

$("#addClassContainer > button:last").click(function(){
    $("#addClassContainer > p").toggleClass('modifying')
})


}) 

