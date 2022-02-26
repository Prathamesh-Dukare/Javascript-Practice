const inputText = document.querySelector("#text-input");
const showButton = document.querySelector("#show-btn");
const makeItBigButton = document.querySelector("#large-font-btn");
const makeItSmallButton = document.querySelector("#small-font-btn");
const outputDiv = document.querySelector('#text-div');

showButton.addEventListener("click",function textHandler(){
    outputDiv.innerText = inputText.value;
})
let currentfontSize = 16;
makeItBigButton.addEventListener("click",function makeItBigButtonHandler(){
    currentfontSize += 2;
    outputDiv.style.fontSize = `${currentfontSize}px`;
})
makeItSmallButton.addEventListener("click",function makeItSmallButtonHandler(){
    currentfontSize -= 2;
    outputDiv.style.fontSize = `${currentfontSize}px`;
})