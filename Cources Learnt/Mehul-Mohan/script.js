// const ul = document.querySelector('ul')
// console.log(ul)

// Destructuring The Array ES6
// arr1=[1,2,3]
// arr2=[4,5,6]
// arr3=[...arr1,arr2]
// console.log(arr3)
// Same for Object

// Arrrow Functions
`JS HOISTS Function declared by Function keyword at the top
hence , we can call the function the line before it declared 
But , this does not happens with arrow function , hence get an error : Cannot access before declaration`
// let myFunction = ()=>{
//     console.log("Arrow function called!")
//  }
//  myFunction()
// ...
let myFunction = (arg) => arg ** 2
    `it returns arg**2 
Arrow function implicitely returns if the arrow functions body is not defined!
let myFunction = arg => arg**2
We can skip the brackets only if have one Parameter like above`


    // Template Literels
    `This is 
a multi line 
string
...`
    // let myInfo = My name is ${var1} & my age is ${var2}
    `here , ${var1} replaces '+var1+'   `


//  Promise & Fetch
const PromiseObj = fetch('/style.css')
console.log(PromiseObj)
PromiseObj.then(Response => {
    // console.log(Response)
    PromiseObj2 = Response.json()
    // console.log(PromiseObj2)
    PromiseObj2.then(data => {
        // console.log(data , "jj")
    })
})