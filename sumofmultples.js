console.log("multiples of 3 and 5 result as sum of multiples of both");
function sumofmultiples(val){
    let multies=0;
    for(let i=0;i<=val;i++){
        if(i%3===0 || i%5===0){
            multies += i;

        }
    }
    console.log(` sumof multipules of the 3 and 10 ${10} is`,multies);
}
sumofmultiples(10);