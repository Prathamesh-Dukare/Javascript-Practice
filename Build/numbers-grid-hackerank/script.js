const allBtns = document.querySelectorAll(".btn")
const middleBtn = document.querySelector("#btn5")
// console.log(allBtns);
const sequenceArray = ["1","2","3","6","9","8","7","4"]
middleBtn.addEventListener("click",function (){
    allBtns.forEach(elem => {
        let elemIndex= sequenceArray.indexOf(elem.innerHTML)
        // console.log(elemIndex,sequenceArray[elemIndex]);
        // console.log(sequenceArray[sequenceArray.length-elemIndex]);
        if(elemIndex-1<0){
            elemIndex = sequenceArray.length-1
            elem.innerHTML = sequenceArray[elemIndex]
        }else{
            elem.innerHTML = sequenceArray[elemIndex-1]
        }
        
    });
})

