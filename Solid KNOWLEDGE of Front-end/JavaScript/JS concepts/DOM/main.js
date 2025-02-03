// DOM-document Object Model


function subscribeBtnAndUnsubscribeBtn(){
    const a=document.querySelector('.sbscribeBtn')
     if(a.innerText==="Subscribe"){
        const b=document.querySelector('.sbscribeBtn').innerText="Unsubscribe"
        return b
     }else if(a.innerText==="Unsubscribe"){
        const c=document.querySelector('.sbscribeBtn').innerText="Subscribe"
        return c
     }
    // return  btn.innerText="Subscribed"
}




const secInvoking=document.querySelector('section')

console.log(secInvoking.innerText);
console.log(secInvoking.textContent);



// DOM's core


// Modifying elemnts in DOM-is refer to changing elements of content or removes,giving styles to elements and etc.

function funcForModfy(){
const invovedBtn=document.getElementById('Btn')
const invokeToH1=document.getElementById('h1(2)')
const invokedImg=document.querySelector('img')

invokedImg.setAttribute('id','imgId')
invokedImg.removeAttribute('alt')
invokedImg.removeAttribute('id')


invokeToH1.style.color='green'
invokeToH1.innerText='Modified text here'
invovedBtn.textContent='Modified'
invokeToH1.remove()

 
}

// Adding newElement



const invokingOfDiv=document.getElementById('id')
const p=document.createElement('p')
const appealToElement=document.getElementById('ahref')

 


 


 


// Event handlers,eventlisteners



const appealToBtn=document.getElementById('clickBtnn')




appealToBtn.addEventListener('keydown',function(){
   const appealToPtag=document.getElementById('pTag')
   appealToPtag.textContent='Bye Bye Buddy!'
})

function forBtn(){
   const a=document.getElementById('pTag')
   a.innerHTML=';ASDCN'
}
 




