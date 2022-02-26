function foo(value, arr) {
    value = 1
    arr[0] = 44
}
var v = 3
var arr = [1, 2, 3]
foo(v,arr)
console.log(v, arr[0])

// in function parameters value and arr are initialized as let value; and let arr;

// the reason we get arr modified in the function is , the array is a Object which referes to the intial arr memory location. so the original arrray is modified

// in order to not happen this , while Passing arguments to a function 
// ==> foo(v,[...arr])
// Destructure the arr so the original one will not affecteed 