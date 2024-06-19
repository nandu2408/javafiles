// {
//     // let keyword creates the blocked scope variable, it can be accessed within the block
//     // only , without he block it is not accessible
//     let  name="nandu";
//     console.log(name);
// }
// {
//     var name2="nanda";
//     console.log(name2)
// }

// console.log(name2);
// // here error throwing is variable name is not defined

// // the const keyword creates the constant variables that cannot be changed after declaration

// const fruit ="guava";
// console.log(fruit);
// // fruit="mango";
// // console.log(fruit)

// // template literals it easier to include variables inside the string see the difference

// console.log("hello "+fruit+ " "+name2);// here we are using the string concatination

// console.log(`hello ${fruit} ${name2}`) // here we are using the template literal

//                    // ARROW FUNCTIONS are used to concise the syntax of writing the syntax
// let sumOf = (a,b) => a+b;
// console.log(sumOf(3,3));
// // some more examples

// let square = (x) => x*x;
// console.log(square(3));// single variable arrow function

// let nandu ={
//     name : "nandu",
//     age : 24,
//     caste : "BC-D",
// }
// let z={...nandu};
// console.log(z);
// let n=[1,2,3,4,5,6];
// console.log(...n
// );

// let nandu ={
//     name: "nandu",
//     get getName (){
//       return this.name
//     },
//     set setName (value){
//         this.name =value;
//     }
//     ,
//     set setAge (val){
//         this.age=val;
//     }

// };
// nandu.name="kumar";
// nandu.age=24;
// console.log(nandu.age);
// console.log(nandu.name);

let car ={
    color:"white",
    speed : "100KMPH",
    brand: "toyoto",
    speciality : function (){
        console.log("it is a nice car , it also a wonderful car");
    }

   
};
console.log(car.color)
car.model = 2016;
console.log(car.model);
console.log(car);
delete car.color;
console.log(car);

