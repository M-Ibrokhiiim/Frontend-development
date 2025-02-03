const ibrokhim={
    year:2004,
    age:[{
        first:20
    }],
    job:'Full stack software developer',
    func:function insideFunc(){
        console.log('This is inside of ibrokhim object of function ')
    }
}

const dataForLocalStrg={
    name:'Ibrokhim',
    surname:'Muysinov',
    born:2004
}


console.log(localStorage.setItem('storedData',JSON.stringify(dataForLocalStrg)));


console.log(ibrokhim);
console.log(ibrokhim.age.second=22);
console.log(ibrokhim);
ibrokhim.func()

console.log(console.log())


delete ibrokhim.age



// JSON-we use that to transfer  our data through many computers we use JSON. JSON always convert our vary type of varaibles to the string type. Object can receive data as function.B ut, JSON cannot support data as function. We can covert our obtject to JSON through JSON.stringfy() method.

// JSON.stringdy()-Thsi is method for JS object to JSON
const newObject={
    name:'Ibrokhim',
    family:'Muysinov',
    born:2004,
    funcOFIbrokhim:()=>{
        console.log('Ibroklhim Muysinov Loves writing Arrow function,Call back function,Nested function,Call Stack overflow,more recursion function. Because recursion function is not yet 100% learnt by M_Ibrokhim.');
    }
}



// const user=JSON.stringify(newObject);
// console.log(user);

const J2SON= {
    "name":"Ibrokhim",
    "born":"2004",
    "job":"Software engineer"
}



const modifyToJSON=JSON.stringify(J2SON);
 console.log(modifyToJSON);
 

const modifyToObject=JSON.parse(modifyToJSON);

console.log(modifyToObject);


// Local Storage







const getDataFromLocalStorage=JSON.parse(localStorage.getItem('storedData'));

console.log(getDataFromLocalStorage);





// destructuring-is Appealing our object of a value throught variable(const,let,var){}=object(which is we invoked)


const object3={
    name:"Ibrokhimm",
    year:2004,
    age:20
}


const {name}=object3

if(object3.name==='Ibrokhimm'){
    console.log('Gang');
}

// Reference to our OBJECT-Is the easiest way for refer to our object with equaling 2 of on the only one
const object4=object3
console.log(object3===object4);
const object5={
        name:"Ibrokhimm",
        year:2004,
        age:20
}



console.log(object5===object4);

localStorage.clear()

// localStorage-We use that fro allocate our data on local storage of browser.Especially,Browser seperate four user at least 5 mb store.As well as we can steItem(),getItem,RemoveItem from our local storage.



const dtaaForLocalStorage={
    name:'ibrokhim',
    surname:'Muysinov',
    bornIn:2004,
    age:20
};
const dtaaForLocalStorage2={
    name:'ibrokhiim',
    surname:'Muysinov',
    bornIn:2004,
    age:20
};

const dtaaForLocalStorage3={
    name:'ibrokhiiim',
    surname:'Muysinov',
    bornIn:2004,
    age:20
};

localStorage.setItem('data1',JSON.stringify(dtaaForLocalStorage));
localStorage.setItem('data2',JSON.stringify(dtaaForLocalStorage2));
localStorage.setItem('data3',JSON.stringify(dtaaForLocalStorage3));

// removeItem()

localStorage.removeItem('data2')
localStorage.clear()
 




