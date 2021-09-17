function doubleAfter2Seconds(x){
    return new Promise(resolve => {
        setTimeout(
            ()=>{
                resolve(x*2)
            }, 2000
        )
    })
}

// doubleAfter2Seconds(10).then(
//     (value)=>console.log(value)
// )

// let sum = doubleAfter2Seconds(10).then(res=>res) +  doubleAfter2Seconds(20).then(res=>res) + doubleAfter2Seconds(30).then(res=>res)
// console.log(sum)

// function addPromise(){
//     return new Promise(resolve => {
//         doubleAfter2Seconds(10).then((a)=>{
//             doubleAfter2Seconds(20).then((b)=>{
//                 doubleAfter2Seconds(30).then((c)=>{
//                     resolve(a+b+c)
//                 })
//             })
//         })
//     })
// }

// addPromise().then(r=>console.log(r))

async function addAsync(){
    let a = await doubleAfter2Seconds(10)
    let b = await doubleAfter2Seconds(20)
    let c = await doubleAfter2Seconds(30)

    return a+b+c
}

addAsync().then(r=>console.log(r))