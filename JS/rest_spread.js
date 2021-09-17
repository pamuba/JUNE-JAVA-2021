// function sum(a,b,...args){
//     let sum = 0;
//     for (let i = 0; i < args.length; i++) {
//         sum += args[i]
//     }
//     console.log("SUM:",sum)
//     console.log(args instanceof Array)
// }

// sum(1,2,3,4,5,6)

//arguments

// function sum(){
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     console.log("SUM:",sum)
//     console.log(arguments instanceof Array)
// }

// sum(1,2,3,4,5,6)

/////////////////////////////SPREAD OPERATOR///////////////////////
// Math.max(24,3,9)

// let arr = [24,3,9]
// let arr1 = [11,22,33]

// console.log(Math.max(...arr, ...arr1))

let a = 45;
let b = 99;

[a,b] = [b,a]
console.log(`a:${a} b:${b}`)

