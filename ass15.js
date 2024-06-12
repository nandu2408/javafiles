function squares(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum +=array[i]*array[i]
    }
    console.log(sum)
}
let array=[2,4,6,8];
squares(array);
