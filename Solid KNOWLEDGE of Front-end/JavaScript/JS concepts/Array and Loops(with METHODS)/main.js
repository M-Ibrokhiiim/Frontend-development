// Array
const array=[1,'Hello brother!',true]
 
console.log(array);

console.log(array.pop('Hello brother!'));
console.log(array);


// .Push(), .filter(), .shift(), .pop()

let aRrAy=[1,true,'Run',4]

// Removing item with .filter()
let newArray=aRrAy.filter(function removeItems(elemnt){ 
 return   elemnt !=='Run' && elemnt !==1
})
console.log(newArray);





let AArray=['dsfsd',true,false]

let newAAray=AArray.filter(function removeItems(elements){
    const el1= elements !== 'dsfsd'
    return el1
})


console.log(newAAray);


let aer=[1,2,3,4,5,5]


let newAer=aer.filter(function (element){
   return element !==3
})


console.log(newAer);

// Array methods

let fruits=['Apple', 'Granate','Peach']

// .unshift()
fruits.unshift('Pomegranate')
console.log(fruits);

// .slice()
let slice=fruits.slice(1,5)

console.log(slice);

// .splice()
let splice=fruits.splice(2, 4, "pear");

console.log(splice);


// .map()


let mapUsage=fruits.map(function toLowerCase(elements){
    let a=elements.toLowerCase()+'bek'
    return a.toUpperCase()
})

console.log(mapUsage);


// find


let found=fruits.find(function newFunc(par){
    let jj=par ==='Peach';
    return  `There is ${jj}`
})


for(let i=0; i<=fruits.length;i++){
    console.log(fruits[i]);
}




// 

let AiRRAY=[12,324,true,Boolean,'Ronnie-Colemen']


AiRRAY.push('Hello brother')
console.log(AiRRAY);

let pop=AiRRAY.pop()
let unshift=AiRRAY.unshift('Hello bratim!')


let newAirray=AiRRAY.filter(function(element){
    return element !== 12
})

console.log(newAirray);
 
console.log(AiRRAY);

let OtherNew=AiRRAY.splice(1,4)

console.log(OtherNew);






// Array OF methods


let Fruits=['Apple','Grape','Pomigranate','Peach','Pear','Apple',{name:'Ibrokhim'},{name:'Shokhrukx'}];


// 01. ForEach()

let withForEach=Fruits.forEach(fruit=>{
     return fruit +'jon'
})
 console.log(typeof withForEach); 



// 02. map()


 let map=Fruits.map(fruit=>{
      return fruit +'_MAP'
})


console.log(map);





// 03. .filter()
let eelem=[12,232,4243,222]
let filteredFruits=eelem.filter(number=>{
    return   number+100>150
})

console.log(filteredFruits);

// 04. concat()
let food1=['Barbeque','XOT-LET','WOK']
let food2=['Plov','Kazan-Kabab','Achchu-Chuchchu']

let totalFood=food1.concat(food2)


console.log(totalFood);


// 05.find()

let findPear=Fruits.find(fruit=> fruit==='Pear' || fruit==='Apple')

console.log(findPear);

// 06. .findIndex()

let findFruitIndex=Fruits.findIndex(fruit=>{
     return fruit==='Grape'
}) 

console.log(findFruitIndex);

// 07. .indexOf()

let indexOf=Fruits.findIndex(fruit=>{
    return fruit=='Apple'
})
 
console.log(indexOf);

// 08. .lastIndexOf()

let lastIndexOfElement=Fruits.lastIndexOf('Apple');

console.log(lastIndexOfElement);


// 09. .some()

let someMethod=Fruits.some(fruit=>{
    
    return fruit==='Pear'
})

console.log(someMethod);


// 10. .every()

let everyMethod=Fruits.every(fruit=>{
    return fruit ==='Grape'
})

console.log(everyMethod);



// 11. .includes()

const stringVariable='Hello brother I am Mr_Ibrokhim'

 if(stringVariable.includes('Mr_Ibrokhim')){
    console.log('Ibrokhim name is here!!!');
}


const findFruit=Fruits.includes('Shaptoli')

console.log(findFruit);

// 12. .push()

let pushTOFruit=Fruits.push('Shaftoli!')
console.log(pushTOFruit);

// 13. .pop()

let removeFromFruit=Fruits.pop()
console.log(Fruits);

// 14. .unshift()

let addFruitFromFirstIndex=Fruits.unshift('Cherry!')
console.log(Fruits);

// 15. .Shift()

let removeFruitFromStartingOfArrayIndex=Fruits.shift()
console.log(Fruits);

// 16.  .toString()
let changingArrayToString=Fruits.toString()


// 17. .join(seperator)


let joinFruitWithSeperator=Fruits.join('     +_+      ')  //I can Put anythis else to sperate my array element
console.log(joinFruitWithSeperator);


// 18. .fill()

let fillWithBanana=Fruits.fill('Banana')
console.log(fillWithBanana);

let fillWithBanana2=Fruits.fill('Banana1',2,5)
console.log(Fruits);

let filLLLL=Fruits.fill('Chilonnn',0,3)

console.log(filLLLL );


// 19. .copyWithin()

let fructis=['Banana','Grape','KIWI','Lemon','Peach','Pear','Mandarin']
let copyWithinFromFruits=fructis.copyWithin(2,0,2)

console.log(copyWithinFromFruits);

let aree=[12,33,44,55,66,77]
console.log(aree.copyWithin(0,4,7));

// 20. .slice()

let numers=[10,20,30,40,50,60,70,80,90]

let newNumersFromnumersArray=numers.slice(3,6)

console.log(newNumersFromnumersArray);

let withFructis=fructis.slice(0,3)
console.log(withFructis);


// 21. .splice()
let months=['Jan','Feb','July','June','Aug']

// let removedItem=months.splice(0,2,'February','December')
let removedItem=months.splice(2,1);

console.log(removedItem);
console.log(months);


// 22. .sort()

let numberrr=[1,2,12,23,44,23123,55,31231]
let sortedNumberrr=numberrr.sort((a,b)=>{
    return a-b
})

let sortedMonths=months.sort()

console.log(months);
console.log(sortedNumberrr); 

// 23. .reverse()

let nummberres=[1,2,3,4,5,6,7,213,123123,8,9]
nummberres.sort((a, b)=>{
    return a-b
})

let reversOfNummberres=nummberres.reverse()
console.log(reversOfNummberres);

// 24. .from()
 

const numbers22="12342354230534573487509834758919084573678923681"

let numbersFROMnumbers22=Array.from(numbers22, element=>{
    return Number(element)
})

console.log(numbersFROMnumbers22);


// 25. .isArray()

let arraY=[12,23423,234234,2323,434,2423,4]

let isArraayy=Array.isArray(arraY)
console.log(isArraayy); //It returns TRUE-> Because arraY is array

let stringData=undefined

let noArray=Array.isArray(stringData)
console.log(noArray); //It returns FALSE->Because stringData is not array


// 26. .valueOf()

let arrayY=["Hello world",121,11,2323,Boolean]

let VlOf=arrayY.valueOf()

console.log(VlOf);

// 27. .entries()

let nmbers=Fruits

let itarateEachElementWithIndex=nmbers.entries()



let numrs=[12,12,12,12234,3,43,23,12]


let newNumrs=numrs.entries()

let asdasas=[...newNumrs] 

for ( let elements of asdasas){
    console.log(elements, );  
}


// 28. .keys()

let number=Fruits
let chacngingToItarate=number.keys()

for(let element of chacngingToItarate  ){
    console.log(element);
}

// 29. .values()

let takingValues=Fruits.values()

for( let value of takingValues){

    console.log(value,takingValues);
}

// 30. .reduce()

let numberS=[1,2,3,4,5,6,7,8,9]

let sum=numberS.reduce((accumulator,currentvalue)=>{
     
    let a= accumulator+ currentvalue;

    return a
},0)

console.log(sum);
 
   


// 31. .reduceRight()

let numbereS=[1,23,4,435,467,7,4]

let sumFromRight=numbereS.reduceRight(
    (accumulator,currentvalue)=>{
        return accumulator*currentvalue
    }
)
 
console.log(sumFromRight);

// 32. . flat()

let numerese=[12,[213,12312,[12312,231,1,[231,1231,123,[123,[12,23,[12312]]]]]]]

let flatting=numerese.flat(Infinity)

console.log(flatting);

// 33. .flatMap()

let fnumbers=[12,12,12,12,12,342,21,312,312,[22,[2312312,[333,1111]]]]

let sumOfnumbers=fnumbers.flatMap(number=>{
    return number *12312
})
console.log(sumOfnumbers);


