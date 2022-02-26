const fs = require('fs')

// const fun = async ()=>{
//     let a = await fs.readFile('read.txt','utf8', (err,data)=>{
//          return data
//     })
//     console.log(a);
// }
// fun()
fs.writeFileSync('read.txt',"New Text")
let b =fs.readFileSync('read.txt')
console.log(b.toString());
console.log("finished");