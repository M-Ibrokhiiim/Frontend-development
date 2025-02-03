$(function(){
    $("h1").on({
        "click":function(){console.log('Clicked');},
        "mousemove":function(){console.log('DbClick');
        }
    })
// hide
    $("#hideBtn").click(function(){
        $("#txt").fadeOut()
    })
// show
$("#showBtn").click(function(){
    $("#txt").fadeIn(2000)
})

$("#runbtn").click(function () {
    $("#blueBox")
    .animate({ opacity:0.5,marginLeft:"+=30"}, 2200 )
    .animate({width:"200px"},1000)
    .animate({height:"1300px"},3000)
    
})

// .val()

$("#setValue").click(function(){
    let valueOfInput= $("#nameInput").val()
    console.log(valueOfInput);
    
})


// TableFunction

$("#add-btn").click(function(){
  $("#nameOfTr").html($("#nameId").val())
})

// Here are I used comment
$("#h1Text").before("<h2>Above</h2>")
$("#h1Text").after("<h2>Bottom</h2>")
})