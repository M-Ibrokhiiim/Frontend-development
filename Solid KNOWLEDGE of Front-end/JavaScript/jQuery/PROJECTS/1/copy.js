$(function(){
    // $("h1").empty()
    // $("h1").addClass('h1')
    // $("h1").removeClass('h1')
    // $('h1').css({
    //     "border":"2px solid black"
    // })

    // $('h1').prepend('<h4>Hi bro!!!</h4>')
    // $('h1').html('<p>Chnged to P tag</p>')
    // $('h1').hide(function(){
    //     alert('TEXT hided')
    // })
    // $('h1').show()

    $('button').click(function(){
        $("h1").toggle()


        if($('h1').is(":visible")){
           $(this).text('Hide')
        }else{
            $(this).text('Show')

        }
    })
})