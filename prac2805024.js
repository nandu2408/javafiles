// it is general way of intializing the array
let array =["nandu","apple","likes","mago"];
console.log(array)
let k=typeof(array);
console.log(k);

// now we are creating the array with by instance

let array2 = new Array();
array2[0]=1;
array2[1]=10;
array2[2]=100;
array2[3]=100;

console.log(array2);
console.log(typeof(array2))

/// now we are creating array using the constructor

let array3 = new Array(55,66,77,88,99,100,"nandu");
console.log(array3)
console.log(typeof(array3))

let array4=['nandu',23,"react trainee","33k"];
// here we are finding the length of the array
let a=array4.length;
console.log(a);

// here we are finding the indexof the array elements

let b=array4.indexOf('33k');
console.log(b);

// here we are adding the elements with concatination function

let c= array4.concat(array3);
console.log(c);

// now we are reverse the array elemets

let d=array4.reverse();
console.log(d);

// now we are adding the elemets at the end of the array

let e=array4.push("fcuk");
console.log(array4);

// now we are removing the element at the end of the array

let f= array4.pop();
console.log(array4);

// now we are removing the elements from the starting position shift function

let g=array4.shift();
console.log(array4);
// now we are adding the elements from the starting position with unshift function
let h=array4.unshift("kiran");
console.log(array4);

// now we are removing and adding the elements at specified position from the array using splice function

let i=array4.splice(1,2,"anand");
console.log(array4);

// now we are removing the elemets from the array at specified loation in the array

let j=console.log(array3.slice(1,3));
console.log(j);

//implementing the foreach technique for this

array.forEach(function (array){
    console.log(array);
})

// impementing for loop in arrays

let array5=[1,3,4,5,"nadu","kishna",100];
for(let i=0;i<array5.length;i++){
    console.log(array5[i]);


}

// findig the biggest number in the array

function max(array6){
    let largest=array6[0];
    for(i=0;i<=array6.length;i++){
        if(array6[i]>largest){
            largest=array6[i];
        }
    }
    return largest
}
let a2=[1,,3,4,4,5,44,66,77,88,99,1010];
let res=max(a2);
console.log(res);

// printing the star with the for loop

function starrows(rows){
    for(let i=0;i<=rows;i++){
        let printstar=" ";
        for(let j=0;j<=i;j++){
            printstar +=" $"
        }
        console.log(printstar);
    }
}
starrows(3);
console.log("----------------------")
// reverse printing of the star
function reversestar(rows){
    for(let i=-1;i<=rows;i++){
        let printstar=" ";
        for(j=1;j<=rows-i;j++){
            printstar += ' &'
        }
        console.log(printstar)
    }
}
reversestar(3);

// swaping of two variales

let first = "first word";
let second="second  word";
console.log('before swapping',first,second);
let temp=first;
first=second;
second=temp;
console.log("after swapping",first,second);
// using for loop find the maximum number inthe gven three numbers
let number_one=555;
let number_two=1010;
let number_three=545;
if(number_one>number_two && number_one>number_three){
    console.log(`the biggest number in ${number_one},${number_two}and ${number_three} is ${number_three}`);
}
else if(number_two>number_one && number_two>number_three){
    console.log(`the biggest number in ${number_one},${number_two} and ${number_three} is ${number_two}`);
}
else{
    console.log(`the biggest number in ${number_one},${number_two},${number_three} is ${number_three}`);
}

// creating object with general form

let obj={
    name:"nanda kumar",
    age:23,
    branch:"ELECTRONICS AND COMMUNICATION ENGINEERING",
    grades:[9.2,7.5,6.2,6.8,7.2,7.4],
    overallgrade:7.3,
    passed:function(){
        console.log("you are passed with an overall cgpa of 7.3 you got first class in your bachelor's");
    }
}
console.log(obj);
obj.passed();

// creating a object by instance

let obj1= new Object({
    model:2016,
    engine:'Bsv6',
    color:"black",
    specifications:['led lights','self-starting','longlife battery'],
    overall:function(){
        console.log("it is a  new good bike for the farmers and old people it has self starting and light weight")
    }

});
obj1.model=2017;
delete obj1.specifications;
console.log(obj1);
obj1.overall();
// creating object with constructor model

function obj3(standard,section,rank,percentage,overallmarks,acknowledge)
{
this.standard=standard,
this.section=section,
this.rank=rank,
this.percentage=percentage,
this.overallmarks-overallmarks,this.acknowledge=acknowledge;
}
let res2=new obj3("VI","A",5,86.6,[86,88,86,89,89,87],function(){
    console.log("he was promoted to next class");
})
console.log(res2.rank);
res2.acknowledge();