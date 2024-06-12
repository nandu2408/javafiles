function firstUpper(array){
    return array.map(str=>str[0].toUpperCase()+str.slice(1));
}
let array=["nandu","sai",'jan','may','june','july'];
let upperfirst=firstUpper(array);
console.log(upperfirst)