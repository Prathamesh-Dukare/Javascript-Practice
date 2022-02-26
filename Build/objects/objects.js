let a = {
    name:"Ram",
    power : 159
}
let b = {
    "name":"Sham",
    "power": 15
}
console.log(whoIsBigger(a,b))
function whoIsBigger(a,b){
    if((a["power"]+(a["name"].length)*35) > (b["power"]+(b["name"].length)*35)){
        return a["name"]
    }else if((a["power"]+(a["name"].length)*35) === (b["power"]+(b["name"].length)*35)){
        return "Both are same"
    }else{
        return b['name']
    }
}