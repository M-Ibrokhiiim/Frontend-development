
function minusOFTwoNumbers(num1,num2){
         return num1-num2
}

function summary(a,b,c){
    return a+b+c
}

function array(...fruits){

   const answer=fruits.map((fruit)=>{

        return fruit

    })
    
   return answer

}

async function fetchData() {
     
    const response= await fetch('https://jsonplaceholder.typicode.com/todos/1');
    
    const data=await response.json()
    console.log(data);
    
    return    data 
  }


function withObject( ){
    
    const object=[
        {el1:'Element'},12
    ]
      
    return object
}

console.log(withObject());


function truthyOrFalsy(number){
    
    if(number>22){
        return true
    }else{
        return false
    }
}
 
// 
function NumberMatchers(n){
    return n
}
 
//  
function arrayFunction(...elements){

    const newArray= elements
    
    return newArray

}

// 

function throwError(id){

    if(id===!number){
        throw new Error('User id must be number')
    }else{
        let id='Valid'
        return id
    }
}


// Async functions

async function fetchData2(){
    const response=await fetch('https://reqres.in/api/users/1')
    const data=await response.json()

    console.log(data.data.email);

    return data
    
}



async  function tett(){
    const response=await fetch('https://reqres.in/api/users/2')
    const data= await response.json()
    console.log(data.data);
    
    return data.data
}
console.log(tett());



fetchData2()

// 

let animals=['Zebra','Giraffe','Squarel','Mouse','Cat']

console.log(animals[animals.length-2]);

module.exports={minusOFTwoNumbers,fetchData2,tett,summary,array,fetchData,withObject,truthyOrFalsy,NumberMatchers,arrayFunction,throwError}

