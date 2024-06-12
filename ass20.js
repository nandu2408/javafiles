// in the function we calling a function sorted here , in that 
// function we concat array1 and array2 and these concat values store in array3 
// again we have to  sort  array3
function sorted(array1,array2){
    let array3=array1.concat(array2);
    console.log(array3.sort())
   
 }
 // here we are taking two arrays and sorted each array separatedly
let array=[511,168,103,119];
let array0=[111,100,121,134];
let array1=array.sort();
let array2=array0.sort();
 sorted(array1,array2);
