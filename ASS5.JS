// adding of the array elements
function sumof(array){
    let sum=0;
    for(let i=0;i<=array.length;i++){
        sum +=i;
    }
    return sum;
}
let array=[1,2,3,4,5,6,7,8,9,10];
let addd=sumof(array);
console.log(addd);