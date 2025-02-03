import { fruits as fruitGroup } from './Products/fruits.js';
import  {fruits,neFruit} from './Products/products.js'
import numberCheker from './Names/index.js'
console.log(fruits);
console.log(fruitGroup);
console.log(neFruit);

numberCheker(3,2)



function restParamFunction(...nums){
    let numbersAre=nums.map((number)=>{
       return number+12
    })

  let findNUmber=numbersAre.findIndex((number)=>{
    return number==24
  })

  if (findNUmber!==-1) {
     console.log('There is no number!');
  }else{
    console.log('Here is number!!!');
    
  }
}
console.log(restParamFunction(12,12,1231,123124,124,14,134,12,312,3));
