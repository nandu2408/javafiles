function char(array){
    let ch="s"
    return array.filter(str=>str.includes(ch))
}
let array=['nandu','sai','charan'];
let a=char(array);
console.log(a);