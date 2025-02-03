export default oddCheckerFunction

function oddCheckerFunction(a,b){
    if(a%2===0 && b%2!==0){
        console.log(`${a} is even number,${b} is odd number`);
    }else if(a%2!==0 && b%2===0){
     console.log(`${b} is even number,${a} is odd number`);
    }else if(a%2!==0 && b%2!==0){
        console.log(`${a} and ${b} are not even numbers, both of them odd numbers`);
    }else if(a%2===0 && b%2===0){
        console.log(`${a} and ${b} numbers are even numbers!!!`);
        
    }
 }

 