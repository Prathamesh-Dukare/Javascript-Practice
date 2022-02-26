// const userInput = document.getElementById("user-input")
// const checkBtn = document.getElementById("check-btn")
// const outputDiv = document.getElementById("output-div")

// function isPalindome(str){
//     let revStr = str.split("").reverse().join("")
//     return str === revStr
// }
// checkBtn.addEventListener("click",function(){
//     let input = userInput.value
//     let isInputPalindome = isPalindome(input)
//     if(isInputPalindome){
//         outputDiv.innerText = "String is Palindome"
//     }else{
//         outputDiv.innerText = "String is not a Palindome"
//     }
    
// })
// let arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
// let str = "thequickbrownfoxjumpsoverthelazydog"
// let strArray = str.split(" ").join("").toLocaleUpperCase().split("")
// console.log(strArray,strArray.length);
// let flag= true
// for(let i =0;i<arr.length;i++){
//     if(strArray.indexOf(arr[i])===-1){
//         flag =false
//         break
//     }
// }
// console.log(flag)

/**
 *
 * @param {number[]} inputArray Array of numbers
 */
const longestConsecutiveSequence = (inputArray) => {
	let ascArray = [1,2]//inputArray.sort(function(a, b){return a-b})
    let sortedArray = []
    for(let i=0;i<ascArray.length;i++){
        for(let j=1;j<=ascArray.length;j++){
            // if(inputArray[j]=inputArray[i]+1){
            //     sortedArray.push(inputArray[j])
            // }
            console.log("Hello");
    }
    console.log(sortedArray)
    }

	return inputArray
}
console.log(longestConsecutiveSequence([100,4]))