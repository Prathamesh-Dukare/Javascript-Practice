let obj1 = {
    main:{
        sub1:{
           a:1
        }
    }
}
let obj2 = {
    ...obj1,
    main:{
        ...obj1.main,
            sub1:{
                ...obj1.sub1,
                a:2
            }
    }
}

let obj3 = {
    a:1,
    b:2,
    a:3
} 
console.log(obj1,obj2,obj3);