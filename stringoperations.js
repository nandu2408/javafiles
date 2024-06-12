function isString(object){
    for(let key in object){
        if(typeof(object[key]) === "number"){
            console.log(key, ":",object[key]);
        }
    }
}
const nandu ={
    height:6,
    legs:3,
    eyes:3,
    complexity:"six",
    gender:"male",
    letter:5
}
isString(nandu)