const input = require("readline")
ask =  input.createInterface({
    input:process.stdin,
    output:process.stdout
})
ask.question("name?",(ans)=>{
    console.log("Hello"+ans);
    ask.close()
})


