// reversing the array string elements
function reverseArray(array){
   return array.map(str=>str.split("").reverse().join(""));
}
let array=['chandu',"nandu",'harish','rakesh'];
let rev=reverseArray(array);
console.log(rev);