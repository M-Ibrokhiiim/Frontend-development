// .forEach

let numbers=[12,123,1223,3334,322222];

numbers.forEach(number => {
  
    let plus=number+number
    console.log(plus);
    return plus
    
});

 


// .map

let numbers1=[12,12312,2442343,2,34,34,23]

let newNumbers1=numbers1.map(number=>{
    let a=number+4+number*3;

    return a
    
})

console.log(newNumbers1);



// .filter()

let numbers2=[1,2,3,4,5,6,7,8,9,10]


const newNumbers2=numbers2.filter(number=>{
    let a= number>=5;
    return a
})

console.log(newNumbers2);

let words2=['Hello','Bye-bye','Run', 'Swim','Golf','RunRoadBy']

let newWords2=words2.filter(word=>{
     
    let a= word.length>=5;
     
    return a 
})
 console.log(newWords2);


//  .concat()

let number3=[1,2,4,5,6,78,,9,0,87,654,32,2112]
let words3=['Good','RunWantPlace','BigGoal']

let newConcatTwoArray=number3.concat(words3)

console.log(newConcatTwoArray);




// .find()

let words4=[
    'Hello Baby','What up pendy',
    {
        name:'Ibrokhim',
        age:20
    }
]

let findWords4=words4.find(element=>{
     let a=element.age ===2
     
     return a
})

console.log(findWords4);


// .findIndex()

let words5=['Mr_Ibrokhim','Shokir','Mr_Shakhram']

let newWords5=words5.findIndex(e=>{
    return e==='Mr_Shakhram'
})

console.log(newWords5);


// .indexOf()

let words6=['Hee','Come on','Hee',12]

let newWords6=words6.indexOf('Hee')
console.log(newWords6);

// .lastIndexOf()

let words7=['qw','qwe','wqeq','qwe']
let lastIndexOf=words7.lastIndexOf('qwe')

// .some()

let words8=['Bro','Dear','Bear']

let newWords8=words8.some(element=>{

     return element.length+123124>9
     //element==='Bro'
     //element.length>9
})

console.log(newWords8);


// .every()

let fruits9=['Banana','Grape','Pear']

let neFruit9=fruits9.every(element=>{
     return element.length>1    
})

console.log(neFruit9);


// .includes()

let words11=['Hello ','Bye']

let newWords11=words11.includes('Hello ')

console.log(newWords11);

// .toString()

let words16=['Buddy','Muddy','Huddy']

let toStringWords16=words16.toString()

console.log(toStringWords16);

// .join()

let words17=['Buddy','Muddy','Hoodie-Moodie']

let newWordsWithSeperationsThroughOperatorOrAnything=words17.join("     -'_'-     ")

console.log(newWordsWithSeperationsThroughOperatorOrAnything);


// .fill()

let words18=['Banana','Wafers','Gilos','Cherry','Querry','Gilos','Cherry',]

let newWord18FillidWidthNeELement=words18.fill('Crafers',2)
console.log(newWord18FillidWidthNeELement);


// .copyWithin()

let words19=['Cherru','Merru','Glerru','Perru']

let newCopiedElement=words19.copyWithin(2,3,9)
console.log(newCopiedElement);

// .slice()

let words20=['asdas','asdas','cvsvds']

let newWords20=words20.slice(1,2)
console.log(newWords20);


// .splice()

let words21=['NSUDNCVS','sadqwdqw','dfwedq']

let newWords21=words21.splice(0,2,'Apple')
console.log(newWords21);

console.log(words21);


// .sort()
     //Alphabetical sorts
let words22=['a','vasda','awqqw','qwwdasd','bbasda']

let sortedWords22=words22.sort()
console.log(sortedWords22);
     
     //Numerical sorts

let numbers22=[124,23545,34,672,34577,8996,22,4,6,784,676,4423,5,52,45,325,342,543,5,56,56,7,768,76,8,98,6965,7,73]     
let sortedNumbers=numbers22.sort((a,b)=>{
    return a-b
})
console.log(sortedNumbers);

// .reverse()

let numsAndWords23=[12,124,213,'CA','CEQWQ','CVDSW']

let newNumSbyReverse=numsAndWords23.reverse()

console.log(newNumSbyReverse);

// .from()

let words24='HelloBuddyHowAre you!'

let newArrayByFrom=Array.from(words24,(element)=>{
    return element.toUpperCase()
})

console.log(newArrayByFrom);

let numbers24='122141241241249';

let arrayFromNumbers=Array.from(numbers24,element=>{
    return Number (element)
})

console.log(arrayFromNumbers);


// .isArray()

let array25=['Hello world','Good bye world']
let array252='New-York'

let isArray25=Array.isArray(array252)

console.log(isArray25);

// .entries()

let words27=['Grape','Mountain','OWL','Eagle'];

let itarateElementsWithTheirIndexAndValue=words27.entries()


let emptyELment=[]
for(let element of itarateElementsWithTheirIndexAndValue){
     

    let a= emptyELment.push(element)
}

console.log(emptyELment);

// .keys

let words28=['Grape','Mountain','OWL','Eagle'];

let keysWithALLWords=words28.keys()

let asdas=[]
for( let elementsOfKeys of keysWithALLWords){
     asdas.push(elementsOfKeys)
    
}

console.log(asdas);

// .values()
 
let fruits12=['Shinni','Grape','Hululi']

let returnIngOnlyValues=fruits12.values()
 for(let elements of returnIngOnlyValues){
    console.log(elements);
 }


//  .reduce()

let numbers30=[12,124,34,2,121,4442]

let newNumbers30=numbers30.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue
},1000000)

console.log(newNumbers30);

// .reduceRight()

let numbhasbdha=[12,213,34,1,2,1,23,43425,23,523]

let newdcwedw=numbhasbdha.reduceRight((accumulator,currentValue)=>{
     return accumulator+currentValue
})

console.log(newdcwedw);


// .flat()

let flatNumbersWithArray=[124,12,123,[232,123,[12123,12312312312]]]

let flattenedNumbers=flatNumbersWithArray.flat(2)

console.log(flattenedNumbers);

// .flatMap()

let flateableNumebrs=[12,34,123,54,768,6734,212[12312,231231,[123123123123,1231231,31231231,[22]]]]

let flattenedAndMappedNUmbersArrays=flateableNumebrs.flatMap((elemt)=>{
    return elemt+10000000
})

console.log(flattenedAndMappedNUmbersArrays);
