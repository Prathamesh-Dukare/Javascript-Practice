
// // closures 
// for (var i = 1; i <= 5; i++) {
//     // let j = i
//     function innerFunc(j) {
//         setTimeout(function () {
//             console.log(j, "from loop");
//         }, i * 1000);
//     }
//     innerFunc(i)
// }
// console.log("Hey");
// ...................................................... 
// closurre advantages 
// 1. constructor function 
// function Sallary(){
//     var currentSallary = 10;
//     this.increment = function (){
//         currentSallary+=10
//         console.log(`New salary is ${currentSallary}`);
//     }
//     this.decrement = function (){
//         currentSallary-=10
//         console.log(`New salary is ${currentSallary}`);
//     }
// }
// var salaryDetails = new Sallary()
// salaryDetails.increment()
// salaryDetails.increment()
// salaryDetails.increment()
// salaryDetails.decrement()

// .............................................................. 
// let and const are more strict than var 
// but const is even more strict than let ----> We need to initialize and declare at the same time 




// .............................................................. 
// Function statement or Function declaration 
function myFunc(){
    console.log("Helo");
}

// Function expresion 
var func = function (param){
    console.log("Helo");
}

// Notes : We can Pass a function as an aargumen by ,
// 1. Direcly declaring a function inside function call 
// 2. Giving function name in function call 

// First class functions 
// ability to use functions as a values is first class functions 
// Functions are first class citizens in javascript

// let a = undefined
// console.log(a);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 

// javascript is a syncronous single threaded langauge 
// Microtask queue have more priority than calllback queque 
// microtask queue contaains ==> promises callback , mutation oobserver 

// Starvation of task inside callback quque => microtask queue dont giving a chance to run a task in callback queue 

///////////////////////////////////////////////////////////////////////////////////// 
// Low level things 
// interpreter => fast 
// compiler => efficiency
// in V8 engine ; 
// interpreter name => ignition
// compiler name => turbo-fan 
// garbage collector name => orinoco 


// modern js engines uses Just IN Time compilation  
// JIT compilation => interpreter + compiler 

// memory heap => where all memory is managed 
// ==> connected to garbage collector uses => mark and sweep algorithm 

// ........................................................... 
// setTimeout(() => has trust issues 
// measning its not compulsory to run a callback after timeout time 

// ................. 
// let startDate = new Date().getTime()
// let endDate = startDate
// while(endDate <= startDate + 10000){
//     console.log("Hello");
//     endDate = new Date().getTime()
// }

// >..........................................................................>
// Higher Order Functions 
// A function which takes an functions as an argument or returns a function 

// implementing map 
// let radious = [3,1,2,4]
// const area = function (val){
//     return Math.PI * val * val
// }

// Array.prototype.calculate = function (){
//     let output = []
//     this.forEach(element => {
//         output.push(area(element))
//     });
//     return output
// }

// console.log(radious.calculate());

// ............................................................................ 
// Higher O functions : map ,filter , reduce  
// Functions which takes other functons as an argument or return some function is HOF
let arr = [12,459,31,41,2,3,475]
// let output = arr.filter((x)=>{
//     return !(x%2)
// })

// reduce 
// const output = arr.reduce(function my(max,curr){
//     if(curr>max){
//         max = curr
//     }
//     return max
// },0)

// console.log(output);


// map-filter-reduce application

const users = [
    {firstName : "Prathamesh",lastName : "Dukare",age : 20},
    {firstName : "Akshay",lastName : "Saini",age : 25},
    {firstName : "Tanay",lastName : "Pratap",age : 30},
    {firstName : "Vaishnavi",lastName : "Trivedi",age : 20}
]

// function getAgeDetails(users){
//     const userAges = users.map((x)=>{
//         return x.age
//     })
//     function checkOccurence(value){
//         return userAges.filter((x)=>x===value).length
//     }
//     let sortedArray = []
//     userAges.forEach(x => {
//         if(!(sortedArray.includes(x))) sortedArray.push(x)
//     });
//     const outputArray = sortedArray.map((x)=>{
//         return {[x]:checkOccurence(x)}
//     })
//     return outputArray 
// }
// console.log(getAgeDetails(users));


// With the help of reduce only
// const output = users.reduce(function (accu,curr) {
//     // console.log(accu[curr.age]);
//     if(accu[curr.age]){
//         accu[curr.age] = ++accu[curr.age]
//     }else{
//         accu[curr.age] = 1
//     } 
//     return accu
// },{})
// console.log(output);

// Problem 2 : return first names of all the peoples whos age is less than 30 
// const output = users.filter((x)=>{
//     if(x.age<30){
//         return true
//     }
// }).map((x)=>{
//     return x.firstName
// })
// console.log(output);

// problem 2 with reduce 
// const output = users.reduce((acc,curr)=>{
//     if(curr.age<30){
//         acc.push(curr.firstName)
//     }
//     return acc
// },[])
// console.log(output,"By reduce");
// ...................................................... 

// classes in JS 

// class polygon {
//     constructor(array){
//         this.array = array;
//     }
//     perimeter(){
//         let peri = 0;
//         this.array.forEach((x)=>{
//             peri = peri + x
//         })
//         return peri
//     }
// }
// let traingle = new polygon([1,2,3])
// console.log(traingle.perimeter())


// class Rectangle {
//     constructor(w, h) {
//         this.w = w;
//         this.h = h;
//     }
// }
// Rectangle.prototype.area = function (){
//     if(this.h == undefined){
//         return this.w * this.w
//     }else if(this.w && this.h){
//         return this.w * this.h
//     }
// }
// class Square extends Rectangle {
//     constructor(s){
//         super(s)
//     }
// }
// // ......... 
 