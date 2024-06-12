function strope(str1,str2){
    // first operation type of 
    if(typeof(str1)===typeof(str2)){
        console.log("given two elements are strings");
    }

    // we are doing string concatination
    let res=str1+" " +str2;
    console.log(res);
    
    // now we are finding the index of the string
    let res1= str1.indexOf("k");
    console.log(res1)
    // now we are convertig the samll letters into snall letters
    let res2=str1.toUpperCase()
    console.log(res2)

    let res3=str2.toLowerCase();
    console.log(res3);
}
let name="nanda kumar";
let character = "MONSTER";
strope(name,character);