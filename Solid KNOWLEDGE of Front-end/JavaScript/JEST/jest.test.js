 
// const { default: test } = require('node:test')
const{ arrayFunction,fetchData2,tett,minusOFTwoNumbers,summary,array,fetchData,withObject,truthyOrFalsy,NumberMatchers,throwError}=require('./main')
 


 describe('Practise functions of testings',()=>{

    test('Minus operation',()=>{
        expect (minusOFTwoNumbers(5,2)).toBe(3)
    })

    test('Summary numbers',()=>{
        expect(summary(2,4,0)).toEqual(6)
    })

    test('Array of fruits',()=>{
        expect(array('Grape','Pomegranate','oak')).toContain('oak')
    })

    test('Checking fetch data function',async ()=>{
        const func= await fetchData()
        expect(func.id).toBe(1)
    })

    test("Just testing",()=>{
        expect(121-11).toBe(110)
    })

   test('Checking object',()=>{
    expect(withObject()).toContain(12) 
  })
 

   test('Checking True value',()=>{
    expect(truthyOrFalsy(111)).toBeTruthy()	
   })
  
   
   test('Find number which is I want',()=>{
    expect(NumberMatchers(12.99999999999999999999)).toBeCloseTo(13)
   })


   test('Finding contained numbers',()=>{
     
    expect(arrayFunction('Gra[e','Grape')).toContain('Grape')

   })


   test('Throwing error',()=>{
    expect(()=>throwError('One').throwError('Input must be number type of value'))
   })

   test('Testing fetchdata',async ()=>{
    const data=await fetchData2()

    expect(data.data.email).toBe('george.bluth@reqres.in')
   }) 

   test('Tett testing',async()=>{
    const data=await tett()

    expect(data.id).toBe(2)

})
 })
 
