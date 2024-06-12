// let take function, function name is include,in that function we can divide and print aray1 
// and array2 has same elements and print it in another array in the program

function include(array1,array2){
   let commonelements=[]
   for(let i=0;i<=array1.length;i++){
    if(array2.includes(array1[i])){
        commonelements.push(array1[i])
    }

   }
   console.log(commonelements)
}
let array1=[1,2,3,4,5,6];
let array2=[3,7,8,2,9,1];
include(array1,array2)