function even(array){
  
   return array.filter(num=>num%2==0)
}

let array=[1,2,3,4,5,6,7,8,9,10];
let evenonly=even(array);
console.log(evenonly)