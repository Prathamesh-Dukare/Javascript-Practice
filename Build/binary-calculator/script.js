const resultsDiv = document.querySelector("#res")
const btn0 = document.querySelector("#btn0")
const btn1 = document.querySelector("#btn1")
const btnClr = document.querySelector("#btnClr")
const btnEql = document.querySelector("#btnEql")
const btnSum = document.querySelector("#btnSum")
const btnSub = document.querySelector("#btnSub")
const btnMul = document.querySelector("#btnMul")
const btnDiv = document.querySelector("#btnDiv")

const buttonsArray = document.querySelectorAll(".btn")
let resString = "";

function updateRes(){
    resultsDiv.innerText = resString
}
function process(opr,string){
    let operands = string.split(`${opr}`);
    let results = `${parseInt(operands[0],2)} ${opr} ${parseInt(operands[1],2)}`
    results = eval(results).toString(2)
    resString = results;
    updateRes()
}

function calculate(str){
    if(str.includes("+")){
        process("+",str)
    }else if(str.includes("-")){
        process("-",str)
    }else if(str.includes("*")){
        process("*",str)
    }else if(str.includes("/")){
        process("/",str)
    }
}

buttonsArray.forEach(e => {
    e.addEventListener("click",function (){
        if(e.innerHTML ==0){
            resString +="0"
            updateRes()
        }else if(e.innerHTML==1){
            resString+="1"
            updateRes()
        }else if(e.innerHTML =="C"){
            resString = "";
            updateRes()
        }else if(e.innerHTML == "="){
            calculate(resString)
        }else if(e.innerHTML=="+"){
            if(resString.length !=0){
            resString+="+"
            updateRes()
            }
        }else if(e.innerHTML=="-"){
            if(resString.length !=0){
                resString+="-"
                updateRes()
            }
        }else if(e.innerHTML=="*"){
            if(resString.length !=0){
            resString+="*"
            updateRes()
            }
        }else if(e.innerHTML=="/"){
            if(resString.length !=0){
            resString+="/"
            updateRes()
            }
        }
    })
});