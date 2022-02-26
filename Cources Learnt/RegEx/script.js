// regular Expression CWH
let regEx = /hello/g;       //This is a REGEX
// g  - Globle Flag - Search for all occurencess
// i - Case Insensitive Flag - Dont consider case sensitivity while searching

`Functions Used in RegEx`
// 1.exec()
let str = "iam hello Pawan hello"
// let results = regEx.exec(str)
// console.log(results)
// let results2 = regEx.exec(str)
// console.log(results2)    

// 2.test() - returns true or false
// let testResult = regEx.test(str)
// console.log(testResult)

// 3.match() - it will returns a Array of result or null 
// let matchResult = regEx.match(str)---This is X Wrong
let matchResult = str.match(regEx) //---This is Correct
// console.log(matchResult)

// 4.search() - returns idex of first match else -1
let searchResult = str.search(regEx)
// console.log(searchResult)

// 5.replace() - returns a new string with all replacements - g flag needed for all replacements
let replaceResults = str.replace(regEx,'Namaste!')
console.log(replaceResults)

