let obj1={
    projectid:1234,
    projectname:"changing data",
    frontorbackendtechnologies:["java","python","sql","js","html/css"],
    develping: function(){
        console.log("we can develp the web page content using reac and type script")
    }
}
console.log(obj1);
let obj2=new Object({
    name:"car",
    type:"fourwheeler",
    amount:14000000,
    facilities:["airbags","automatic sensor","best horse power"],
    advantage:function(){
        console.log("it is top model car with best features in the market")
    }
})
console.log(obj2)
obj2.advantage();

function obj3(company,zips,liters,specifications){
    this.company=company,
    this.zips=zips,
    this.liters=liters,
    this.specifications=specifications
}

let res=new obj3("fastrack",5,[130,123,55,60,200],function(){
    console.log("it has specification that is used to charge our laptop and we can monitoring our bag")
})
console.log(res)
res.specifications()