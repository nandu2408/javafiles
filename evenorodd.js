console.log("Given number is even or odd")

function evenorodd(element){

    for(let i=0;i<=element;i++
    )
    {
    //     if(i%2==0){
    //         console.log("even")
    //     }
    //     else{
    //         console.log("oddd")
    //     }

    
    const alertmsg=(i%2===0)?"even":"odd";
    console.log(i,alertmsg)

}
}
evenorodd(17)

