function len(array){
    longestelement=array[0]
   for(let i=0;i<array.length;i++){
    
    if(array[i].length>longestelement.length){
        longestelement=array[i];
    }


   }
   console.log(longestelement)
}
let array=['nandu','sai','nandakumar']
len(array);