// ternery operators
// true ? console.log("True") : console.log("false")

// switch
// let data = 2;
// switch (data) {
//     case 1:
//         console.log(1)
//         break;
//     case 2:
//         console.log(2)
//         break
//     default:
//         console.log("DEFAULT")
//         break;
// }

// Falsi Values => NAN "" null undefined 0

// .......................................................................
// functions are hoists in globle context and made available
// variables are hoists in globle context and made Undefined

// Return needed for arrow functions

// console.log(name1,"from top")
// var name1 = "due"

// function myfunc(){
//     var name1 = "duke"
//     console.log(name1,"from function")
// }
// myfunc()
// console.log(name1,"from bottom")
// var name1 = "dksmd"
// console.log(name1,"from b-bottom")
// .......................................................................

// console.log(Array.from("Hello"));
// [ 'H', 'e', 'l', 'l', 'o' ]

// every
// var results = [1,2,3,4].every((a)=>a===1)
// console.log(results);
// ===> false

// fill
// var results = [1,2,3,4].fill("Hello",2)
// console.log(results);
// ===> [ 1, 2, 'Hello', 'Hello' ]

// Slice
// var Arr = [1,2,3,4]
// Arr=  Arr.slice(1,2)
// console.log(Arr); ===> [ 2 ]

// splice
// var arr = [1,2,3,4,5]
// arr.splice(2,3,"New")
// console.log(arr); ===> [ 1, 2, 'New' ]

// ..........................................................
// objects Methods
// var user = {
//     fName : "Prathamesh",
//     lastName : "Dukare",
//     courcesEnrolled : [],
//     buyCource : function (courceName){
//         this.courcesEnrolled.push(courceName)
//     }
// }
// user.buyCource("Eloquent Javascritp")
// console.log(user.courcesEnrolled);

// ..........................................................

// I is only valid for the scope

// For aEch
// let Arr = [1,13,4,3]
// Arr.forEach((elem=>{console.log(elem)})
// )

// For-of and For-in
// let Arr = [1,13,4,3]
// for(const n of Arr ){
//     console.log(n)
// }
// let obj = {
//     name1 : "a",
//     name2 : "b"
// }
// for(const n in obj){
//     console.log(n);
// }

// For all regular function calls this points to globle Object

// setTimeout ===> after how much time it should run
// setintervel ===> after how much time it should run again

// window.getComputedStyle(elementRef).color

// ..........................................................
// functional way of creating the Object using "New" keyword
// recommended : user upperCase starting for proto varible name

// var User = function (firstName,courcesEnrolled){
//     this.firstName = firstName;
//     this.courcesEnrolled = courcesEnrolled;
// }
// var Prathamesh = new User("prathamesh",2)
// // console.log(Prathamesh);

// //Proto in JAvascript
// User.prototype.getFirstName = function(){
//     console.log(this.firstName);
// }
// if(Prathamesh.hasOwnProperty("firstName")){///*** */ 
//     Prathamesh.getFirstName()
// }

// .............................................

// Self executing anonymous function
// (function (){
//     console.log("Hello");
// })()\

// .............................................

// Functional Programmming
// 1.Keep functions and data totaly seperate
// 2. dont change the state of again and again {
// ex. assign new variable names if the variables is changing
// }
// 3. treat functions as a first class
// ex. const function name(params) {...}

// ....................................................

// closures in js
// function init() {
//     var x = "Hello"
//     console.log(x);
//     function innerFunction() {
//         console.log("How are you");
//     }
//     return innerFunction
// }
// var ref = init()
// console.log(ref());

// function doAdd(x) {
//     return function (y) {
//         return x+y
//     }
// }
// console.log(doAdd(1)(2)); //curring
// iF any rederenceto a method is alive the execution contextof the method not goes away

// ........................................................................................................

// Bind : borrow a method in JS

// var Duke = {
//     myName : "Duke",
//     myAge : 20,
//     setInfo : function () {
//         console.log(`Name is ${this.myName} & age is ${this.myAge}`);
//     }
// }

// var Pratik = {
//     myName : "Pratik",
//     myAge : 18
// }
// var info = Duke.setInfo.bind(Pratik)
// // bind gives a Reference i need to call after
// // but call directly runs without giving any reference
// info()
// ........................................................................................................

// Var vs Let
// in javascript , functions are the scope till now
// means for Var only function is the scope
// but but but
// for Let , all { } are the scope

// function myfunc(){
//     var myName = "Prathamesh"
// }
// console.log(myName);

// ..........................................

// maps

// ...............................................................
// Destructure in JS
// let Array = ["prathamesh",2,"India"]
// let [userName,courcesEnrolled,location] = Array
// console.log(location);

// in case of objects
// let userObj = {
//     userName : "prathamesh",
//     courcesEnrolled :2,
//     location : "india"
// }

// let {userName , courcesEnrolled , location} = userObj
// console.log(courcesEnrolled);
// // NOte : the names of variables should be same as the object methods

// .....................................................
// Spread Vs Rest operator in JS

// Math.max(1,2,3,34) ==>34
// var myObj = {};
// Object.assign(myObj, { a: 1, b: 2, c: 3 }, { d: 4, e: 6 });
// console.log(myObj);
// // ========> { a: 1, b: 2, c: 3, d: 4, e: 6 }

// function skddmlkk(a, b) {
//     return a + b;
// }

// // ...=> spread operator 
// let arr = [1,3]
// function callME(a,b) {
//     console.log(a+b);
// }
// callME(...arr)

// //  (...arg)  ==>  Rest operator 
// To take n number of aruments 
// function sumUp(a,b,...args) {
//     let sum = 0;
//     let mult = a*b
//     for (const arg of args) {
//         sum+=arg
//     }
//     return [mult,sum]
// }
// console.log(sumUp(1,2,23,7));
// // here ...args is Rest operator 
// ...............................................................

// Fun Stuff 

// Double slots in JS 
// let flag  = null
// if(!!flag){
//     console.log("HEllo");
// }

// Weird Array lenght 
// let foo = [1,2,3]
// foo[100] = 4
// console.log(foo.length);
// console.log(foo);

// Cnditional (Ternary) operators 
// var a;
// var b = (a==3) ? true : false;
// b//holds false
// ..................................................