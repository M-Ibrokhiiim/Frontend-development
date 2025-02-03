// You tube subscribe button

const appealToSUBSbtn=document.getElementById('subscribe-btn');

appealToSUBSbtn.addEventListener('click',()=>{
       if(appealToSUBSbtn.textContent==='Subscribe'){
        appealToSUBSbtn.textContent='Unsubscribe'
        appealToSUBSbtn.classList.add('unsubscribe-button')
       }else  if(appealToSUBSbtn.textContent==='Unsubscribe'){
        appealToSUBSbtn.textContent='Subscribe'
        appealToSUBSbtn.classList.remove('unsubscribe-button')
       }
})


// Shipping cost calculator

let valueOfInput=document.getElementById('input').value

console.log(valueOfInput);

let costs=[]
const appealToCalculatorBtn=document.getElementById('calculateBtn')

appealToCalculatorBtn.addEventListener('click',()=>{
 costs.push(valueOfInput)
//  valueOfInput.textContent=''
})

console.log(costs);
