// globle variables
const input = require("readline-sync");
let questionsArray = [];
let resultsArray = [];

// looooops
for (let i = 1; i <= 5; i++) {
    let currentStudent = input.question(`Enter Student ${i} Marks (Format : unitTest prezFinal Final) : `);
    questionsArray.push(currentStudent)
}
for (let i = 0; i < 5; i++) {
    let currentMarks = questionsArray[i].split(" ");
    let currentFinalMarks = calculateSum(currentMarks);
    resultsArray.push(currentFinalMarks)
}
checkAllToppers(resultsArray)

// helper function
function calculateSum(currentMarks) {
    let currentSum = 0;
    for (let i = 0; i < currentMarks.length; i++) {
        currentSum += Number(currentMarks[i]);
    }
    return currentSum
}
function checkAllToppers(resultsArray) {
    console.log("Topper Students are :")
    for (let i = 0; i < resultsArray.length; i++) {
        if (resultsArray[i] === resultsArray[resultsArray.indexOf(Math.max(...resultsArray))]) {
            console.log(`Student${i+1}`)
        }
    }
}

