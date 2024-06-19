// object is a variable that can store multiple data in key value pair

// syntax for object is object name = open flower bracket add some key value pair separate with comma

// and close flower bracket and end with semi colon;

// example

let car ={
    color : "red",
    brand : "hundai",
    type  : "petrol",
    tyres : 5,
    specification : function(){
        console.log("it is very expensive and high end model car");
    }
};

car.type="diesel"; // here we are modifying the object car type

car.price = "3 lakhs"; // here we are adding the another key value pair to the object

delete car.brand // here we are deleting the car brand
console.log(car);

// another way to creating the object

let person = new Object({
    name: "nandu",
    complexity : "dusky",
    height : 5.3,
    age : "23 years",
    about : function(){
        console.log(`hii guys my name is ${this.name} and my skin complexity is ${this.complexity} , some 
            other properties are there ${this.age}`);

    },
    
    set setHeight(newHEIGHT){
       this.height=newHEIGHT
    }
});

person.setHeight=5.5;
console.log(person);

// objects are creating with another way means constructor way are in the below
function rachana(husband,daughter,son){
    this.husband=husband,
    this.daughter=daughter,
    this.son=son
}
let rachana1=new rachana("gopal","jaswitha","lohith krihna");
console.log(rachana1);
