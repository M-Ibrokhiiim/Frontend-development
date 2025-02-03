 


// Rock-Paper-Scisors game

// Show score

const score={
  wins:0,
  lost:0,
  same:0,
}

localStorage.setItem('score',JSON.stringify(score))
JSON.parse(localStorage.getItem('score'))
 
// Random Number through Math.random()



// Rock function

function rockBtnFunc(){
  let randomNumber=Math.random()

  let  computerTurn=''
  if (randomNumber>0 && randomNumber<1/3){
    computerTurn='Rock'
  }else if(1/3<randomNumber && randomNumber<2/3){
    computerTurn='Paper'
  }else if(2/3<randomNumber && randomNumber<=1){
    computerTurn='Scisors'
  }
   
   let result=''
  if(computerTurn==='Rock'){
    result='Same,try again!'
  }else if(computerTurn==='Paper'){
    result='You lose' 
  }else if(computerTurn==='Scisors'){
    result='You won!!!'
  }
  

  if(result==='You won!!!'){
    score.wins++
  }else if(result==='You lose'){
     score.lost++
  }else if(result==='Same,try again!'){
     score.same++
  }
  let appealToResultPTag=document.querySelector('.result')
  appealToResultPTag.innerHTML=result


  let wins=document.querySelector('.winsR')
  let losts=document.querySelector('.losesR')
  let sames=document.querySelector('.samesR')


  wins.innerHTML=`Wins:${score.wins}`
  losts.innerHTML=`Loses:${score.lost}`
  sames.innerHTML=`Same:${score.same}`

 return result
}

// Paper function

function paperBtnFunc(){
  let randomNumber=Math.random()

  let  computerTurn=''
  if (randomNumber>0 && randomNumber<1/3){
    computerTurn='Rock'
  }else if(1/3<randomNumber && randomNumber<2/3){
    computerTurn='Paper'
  }else if(2/3<randomNumber && randomNumber<=1){
    computerTurn='Scisors'
  }
   
   let result=''
  if(computerTurn==='Rock'){
    result='You won!!!'
  }else if(computerTurn==='Paper'){
    result='Same,try again!' 
  }else if(computerTurn==='Scisors'){
    result='You lose'
  }
  

  if(result==='You won!!!'){
    score.wins++
  }else if(result==='You lose'){
     score.lost++
  }else if(result==='Same,try again!'){
     score.same++
  }
  let appealToResultPTag=document.querySelector('.result')
  appealToResultPTag.innerHTML=result


  let wins=document.querySelector('.winsR')
  let losts=document.querySelector('.losesR')
  let sames=document.querySelector('.samesR')


  wins.innerHTML=`Wins:${score.wins}`
  losts.innerHTML=`Loses:${score.lost}`
  sames.innerHTML=`Same:${score.same}`

 return result
}



// Scisors function



function scisorsBtnFunc(){
  let randomNumber=Math.random()

  let  computerTurn=''
  if (randomNumber>0 && randomNumber<1/3){
    computerTurn='Rock'
  }else if(1/3<randomNumber && randomNumber<2/3){
    computerTurn='Paper'
  }else if(2/3<randomNumber && randomNumber<=1){
    computerTurn='Scisors'
  }
   
   let result=''
  if(computerTurn==='Rock'){
    result='You lose'
  }else if(computerTurn==='Paper'){
    result='You won!!!' 
  }else if(computerTurn==='Scisors'){
    result='Same,try again!'
  }
  

  if(result==='You won!!!'){
    score.wins++
  }else if(result==='You lose'){
     score.lost++
  }else if(result==='Same,try again!'){
     score.same++
  }
  let appealToResultPTag=document.querySelector('.result')
  appealToResultPTag.innerHTML=result


  let wins=document.querySelector('.winsR')
  let losts=document.querySelector('.losesR')
  let sames=document.querySelector('.samesR')


  wins.innerHTML=`Wins:${score.wins}`
  losts.innerHTML=`Loses:${score.lost}`
  sames.innerHTML=`Same:${score.same}`

 return result
}


// Reset Button


function resetBtnFunc(){
  let appealToResultPTag=document.querySelector('.result')
  appealToResultPTag.innerHTML='';
  score.wins=0;
  score.lost=0;
  score.same=0;


  let wins=document.querySelector('.winsR')
  let losts=document.querySelector('.losesR')
  let sames=document.querySelector('.samesR')


  wins.innerHTML=`Wins:${score.wins}`
  losts.innerHTML=`Loses:${score.lost}`
  sames.innerHTML=`Same:${score.same}`

}
