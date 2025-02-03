//Function Declaration



// Maket
// function functionName(parametrs){
//     body-of-Function
// }

// prinNameFunction()




// Example of FUNCTION DECLARATION
function prinNameFunction(){
    console.log('M_Ibrokhim');
}









// Function expression


// Maket 

// const functionName=function(parametrs){
//     bodyofFunction
// }

// functionName(parametr)



// Example fro FUNCTION EXPRESSION
let a=1213;
let b=12343112;

const printNameAgainWithParamInExpression=function (param1,param2) {
     
    let plus=param1+param2;
    let divide=plus/param1+param2;
    let times=divide*param1*param2;
    
    return(times+plus+divide);
    
}

const absoluteFunc=function(paragraph){
    return paragraph*paragraph
}

let numbers=12;

absoluteFunc(numbers)


 


// Using return to our functions. We use return keyword for function to take any value of our functions.



let yearOfcar = 2022;

const carWheelDiametr = function(d) {
    let size = d + yearOfcar;
    return size;
};


carWheelDiametr(12)
function calculateCost(USD) {

    let cost=USD+1280000;
    console.log(cost);
    
    return cost;
     
}

calculateCost(carWheelDiametr());





function name11213(params) {

    const a=params+1000;
    console.log(a);    


    return a
}


name11213(12134234)



































function choosingRanNumThroCamp(){
    

    const randomNumber=Math.random();
    
    let hpValue='';

    if(randomNumber>0 && randomNumber<=1/3){
        hpValue='Rock'
        console.log(hpValue);
    }else if(randomNumber>1/3 && randomNumber<2/3){
        hpValue='Paper';
        console.log(hpValue);
    }else if(randomNumber>2/3 && randomNumber<1){
        hpValue='Scisors'
        console.log(hpValue);
    }


    let result=''


    if(hpValue==='Rock'){
        result='Same,try again!'
        console.log(result);
        
    }else if(hpValue==='Paper'){
        result='HP won'
        console.log(result);
    }else if(hpValue==='Scisors'){
        result='You won!!!';
        console.log(result);
        
    }
   console.log(`LOOOOOK:${randomNumber}`);
   
}
 


choosingRanNumThroCamp()





// FUNCTION EXPRESSION


const functionExpression=function(a1,b1){
    const a=a1+b1;
    const b=a+a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*a*0;
    console.log(b);
    return b;
}


functionExpression(12,232)





const arrowFunc=(a,b)=>{
    const a1231=a+b;
    console.log(a1231);
    
}


arrowFunc(1234,1242314)




















// const a11=231
// const b11=124



// function declarunc(a1,b1){
//    const plus=a1 +""+""+b1;
//    alert(`Function Declaration:${plus}`)
//  }


// declarunc(a11,b11)


// const decfuncTion=function(a1,b1){
//     const plusAdd=a1+b1;
//     alert(plusAdd)
// }

// decfuncTion(a11,b11)


function defaultPar(a,b=0){
    const plus=(2*(a+b))

    console.log(plus);
    
}

defaultPar(a2=213,b1=124)


const restParam=function(...a){
    const restP=a

    for(let i=0; i<a; i++){
        console.log('Hi')
    }
    console.log(restP);
    
 }

restParam(124,12312,1212,3,345433,21212,41)







const array=[21,124,12312,123123,1]


function arrayPar(a,b){
    const i1=b;
    const i2=a;

    console.log(i1,...i2);
    
}

console.log(array,2);





// Arrow Functions-we use that functions when we need  concise or shorter code blocks function and inside of callback function, inside of settime() function.



const arrowFunction=(a,...b)=>{ 
    const add=b;
    console.log(add)
}
 arrowFunction(1,2,3,4,5,6,7,8)












const  nestedFunction=(a,b)=>{
     const VA=1213+a;
     const VA2=1232+b;

    console.log(VA,VA2);

    
     function inner(a,b){
        const plus=a+b;
        console.log(plus);
        return plus
     }
  
    inner(VA,VA2)    
}
 
nestedFunction(1,2)







function scopes(){
    const A=12; 

  const  functionscopes=function(){
      const B=A+123;
      console.log(B);
    }

    functionscopes()
}


scopes()



const a3=1213;
const b3=12222;
const c3=121231231231;

const funcOne=()=>{

    console.log(a3,b3,c3);
}

funcOne()





// const closureFunc=function(a){
//     function innerClosureFunc(b){
//     const plusFunc=a+b;
//     console.log(plusFunc);
//     return plusFunc
//     }
//     innerClosureFunc(22)
//     let a1212=plusFunc+12;
//     console.log(a1212);
    
// }

// closureFunc(1)











// Arrow Function 


const argumentToCallbackFunc=function(a,b){
    const plus=a+b;
    return plus
}

argumentToCallbackFunc(1,24)



function callBackBody(func){
    const divide=func/5
    console.log(divide);
    
    return divide
}

callBackBody(argumentToCallbackFunc())




let pizza=2;

function orders(stay){
     
    if(stay===1){
        return 'Your pizza proccess of preparing to you!!!'
        // alert('Your pizza proccess of preparing to you!!!')
    }else {
        return 'Your pizza preparing to bring up with you!!!'
    
    }
    

}







// const callbackFunc=(forConsumer)=>{
//     if(forConsumer==='Your pizza proccess of preparing to you!!!'){
//         alert('Your pizza proccess of preparing to you:within 45minutes!!!')
//     }
//     if(forConsumer==='Your pizza preparing to bring up with you!!!'){
//         alert('Your pizza preparing to bring up with you:within 10minutes')
//     }
// }


// callbackFunc(orders(pizza))


const a1=123;

function purFunction(a,b){

    const plus=a+b-a1;
    return plus

}

// console.log(purFunction(12,112))
// IIFE


// (function(){
//     // return alert('Hello baby!')
// })()


// (function() {
//     let a1 = 21;
//     let b1 = 1;
//     let add = a1 + b1;
    
//     return alert(`The result of adding a1 and b1 is: ${add}`);
// })();






// function first(a){
//     console.log(a);
    
//     second()
// }

// function second(a){
//     console.log(a);

//     third()
// }

// function third(){
     
// }


// first(second(2))




// function egg(){
//     console.log('Egg')
//     hen()
// }

// function hen(){
//     console.log('Hen');
//     egg()
// }

// egg()







// function call1(){
//     console.log('Call1  run!!!')
//     call2()
// }
// function call2() {
//     console.log('Call2 run!!!');
//     call3()
// }
// function call3(){
//     console.log('Calling to Call1')
    
// }
// call1()





//  function recursionFunc(number,exponent){
//      if(exponent==0){
//         console.log(1);
//         return 1
//      }else{

//         const a=number*recursionFunc(number,exponent-1);
//         console.log(a);
        
//         return a
//      }
//  }

//  recursionFunc(2,2)
 



// Function declaration


function decFuncIon(){
    console.log('This is Function Decalaration!');
}

decFuncIon()
// Function expression

const funcExpression=function(){
    console.log('This is function expression!!!');
}

funcExpression()


// Arrow function

const ArrowFunction=()=>{
console.log('This is Arrow function!!!');
}

ArrowFunction()




// Pure function  


function purefUNCtion(a,b){
    console.log(a,b);
}


purefUNCtion('This is ','Pure function ')

// Impure function 


const bB='Impure function!!!'
function impureFUNcTion(a){
 console.log(a,bB);
   
}


impureFUNcTion('This is')




// IIFE


// (function(){
//     console.log('This is IIFE(Immedietely invoked function expression!!!');    
// })()



// Call Stack overflow

const callStackFunc=()=>{
    console.log('This is first invoked!!!');
    callStackFunc2()
}
function callStackFunc2(){
    console.log('This is second invoked X'); 
    callStackFunc()    
}



 


