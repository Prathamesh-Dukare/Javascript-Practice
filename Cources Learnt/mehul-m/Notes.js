let bigIntNumber = 123165654654654444446546n
// ==> Null and arrays are objects for JS 

// ++var & var++ Are different

// NaN ==> Not A Number 

// return == return undefined

// Falsi Values in JS ==> 0 , undefined , null , false "" NAN

// when we pass objects in to a function its the original obj is being shared with function 
// & when we pass primitive the copy of it is being passed!

// js variables just stores a reference to the html element 

// Nodelist is different from object 

// Getelementbyid is efficient than queryselector 
// It creates a hashmap 
// but its make difference if you write millions of lines of code 
// For normal use both are same 

// We can use queryselector methods on Nodes (ex. ul)
// let ul = document.queryselector("ul")
// let li = ul.queryselector("li")
// but... 
// let li = ul.getelementbyid("id") -- XXX dONT WORK

// Destructuring 
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = [...arr1,...arr2]
// console.log(arr3)

// JS Hoists the functions at the top 
// but its not the case with Arrow function 

// let myFunction = (arg) => arg ** 2
let dxsc =  `it returns arg**2 
Arrow function implicitely returns if the arrow functions body is not defined!
let myFunction = arg => arg**2
We can skip the brackets only if have one Parameter like above`

// Map 
// let arr = [1,2,3,4,5,6]
// let mappedArr = arr.map(par => par**2)
// console.log(mappedArr)

// Filter 
// let filteredArr = arr.filter((el) =>el>3)
// console.log(filteredArr)

// Find 
// let arr = [{username : "a",password : "1"},{username : "b",password : "2"}]
// const FindedItem = arr.find(user => user.username == "b" )
// console.log(FindedItem)

// ForEach 
// array.forEach(element => {
//     console.log(element**2)
// });

// Fetch-Promise 
// let promiseObject = fetch("/.to-do.js")
// promiseObject.then(Response => {console.log(Response)
//     const promiseObject2 = Response.json()
//     promiseObject2.then(data => {console.log(data)})
// }
// )
