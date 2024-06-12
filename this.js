let car={
    brand:'hundai',
    type:'petrol',
    capacity:4,
    getconfig: () => console.log(this.capacity),
}
let car2={
    brand:'wift',
    type:'diesel',
    capacity:6,
    getconfig: () => console.log(this.capacity),
}
if(car.type < car2.type){
    console.log(car);

}
else{
    console.log(car2);
}