//  class Employee {
//     constructor(name,age,yearJoined){
//         this.employeeName = name
//         this.employeeAge = age
//         this.employeeYearjoined = yearJoined
//     }
//     employeeExp(){
//         return 2021 - this.employeeYearjoined
//     }
//     static staticMethod(){
//         return "This is a static method"
//     }
// }
// // const prathamesh = new Employee("prtham",20,2019)
// // console.log(prathamesh.employeeExp());
// // console.log(Employee.staticMethod()); 

// class Developer extends Employee{
//     constructor(name,age,yearJoined,language){
//         super(name,age,yearJoined)
//         this.proLanguage = language
//     }
//     getLangaugeExp(){
//         return `${this.proLanguage} & Exp of ${2021 - this.employeeYearjoined}`
//     }

// }
// const pavan = new Developer("Pawan",21,2020,"JS")
// console.log(pavan.employeeExp());


// .....................................................................................................
// Traversy media OOPS 
// .....................................................................................................
// classes creation methods in ES6 are callled syntactic suger 
// Everything in js is obj 
let newstr = new String("Hello")
// console.log(typeof newstr);
// Gotcha : here newstr is premitive not an object 

// 1.Object literel 
let myBooks = {
    book1 : "Atomic Habits",
    book2 : "Rudest book",
    getAllBooks : function() {
        return `Total books are ${this.book1} , ${this.book2}`
    }
}
// console.log(myBooks.getAllBooks());
// Object.values and Object.keys gives an array of perticular 
// We can also do create objects with the help of constructor function 

function Book(title,author,year){
    this.Title = title
    this.Author = author
    this.Year = year
}
let book1 = new Book("Book1","me",2010)

Book.prototype.getBookAge = function(){
    return this.Year
}
// console.log(Book);
// console.log(book1.getBookAge());

// Inheritance 

function Magazine(title,author,year,publisher){
    Book.call(this,title,author,year)
    this.Publisher = publisher
}
Magazine.prototype = Object.create(Book.prototype)
// Magazine.prototype.constructor = Magazine;
let maxim = new Magazine("Maxim","Mr.Due",2020,"maz publishers")
// console.log(maxim.getBookAge());
// console.log(maxim);

// ...................................................... 

// Obj.create()
const library = {
    getBookAge : function (){
        return this.Year
    }
}
let book3 = Object.create(library)
book3.name = "myname"
console.log(book3);
// 

// ...................................
// Practice

// class Size {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
// }
// class Image{
//     constructor(url,size){
//         this.url = url
//         this.size = size
//     }
//     getUrl(){
//         return this.url
//     }

//     setUrl(newUrl){
//         this.url = newUrl
//     }
//     setSize(width,height){
//         this.width = width;
//         this.height = height
//     }
//     getSize(){
//         return new Size(this.width,this.height);
//     }
//     cloneImage(){
//         return new Image(this.url,this.size)
//     }
    
// }
// const sizeObj = new Size(200,200)
// const image = new Image("hackerrank.com/image2",sizeObj)

// // console.log(image);/// 
// console.log(image.cloneImage());
// image.setUrl("hackerrank.com/image3");/////
// image.setSize(1000,2000)
// console.log(image.getSize());