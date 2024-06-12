function max(arr){
    let lar=arr[0];
    for(let i=0;i<=arr.length;i++){
        if(arr[i]>lar){
            lar=arr[i]
        }
    }
    return lar
}
let arr=[20,22,24,25,26,23,29]
let res=max(arr)
console.log(res)