console.log("print the even or odd of the element in the loop");

function evenorodd(num){
    for(let i=0;i<=num;i++){
       
        // const alertmsg=(i%2==0)?"EVEN":"odd";
        // console.log(i, alertmsg);
       if(i%2==0){
        console.log(i,"even")
       }
       else{
        console.log(i,"odd")
       }
        
    }
}
evenorodd(7);
