console.log("largest array element print");
function findLargestElement(arraytosearch){
    if(arraytosearch.length<=0) return "given array is empty array";
    let largestArrayElement =arraytosearch[0];
    for(i=1;i<arraytosearch.length;i++){
        if(arraytosearch[i]>largestArrayElement){
            largestArrayElement=arraytosearch[i];
        }
    }
    return largestArrayElement;
}
const array=[55,66,77,889,11,22,10,123456];
const lets=findLargestElement(array);
console.log(lets);