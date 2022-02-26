const performance = require('perf_hooks').performance
let t1 = performance.now();
let num1 = 211;
let num2 = 221;
let num3 = 1112;
let bigger = 0;

if (num1 > num2) {
    bigger = num1
}else{bigger = num2}
if(num3>bigger){
    bigger = num3;
}
console.log(bigger,"is Biggger")
let t2 = performance.now();
console.log(t2 - t1)