const input = require('readline-sync')
const monthsArray = [31,28,31,30,31,30,31,31,30,31,30,31]
let state  = Number(input.question("Enter Month"));
console.log(`month has ${monthsArray[state-1]}days`)