// CJS export
let data =  function hello(){
    console.log("Helllo!");
}
data()
// module.exports = data

// ........................................ 

// ES export
export function data1(){
    console.log("data...");
}
export function data2(){
    console.log("data2...");
}

// Tricky part 
// module.data = function data(){
//     console.log("Hello!");
// }
