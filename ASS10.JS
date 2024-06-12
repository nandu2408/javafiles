function star(rows){
    for(i=0;i<=rows;i++){
        let starrows=""
        for(j=0;j<=i;j++){
            starrows +=" *"
        }
        console.log(starrows)
    }

}
star(6)