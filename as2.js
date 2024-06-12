// RETURNING THE LENGTH OF THE ARRAY ELEMENTS
function array(arr){
    return arr.map(function(i){
        return i.length;
    });
}
let arr=["chandu","rakesh",'harish',"mahesh"];
let length=array(arr);
console.log(length)