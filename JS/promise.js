// a promise is a future result, not immediate
// promise(resolve(value),reject(err))


let promise = new Promise(function(resolve, reject){
    setTimeout(
        ()=>reject("Not Done"),200
    )
})

promise.then(
    result =>console.log(result),
    // err => console.log(err)
).catch(
    err => console.log('Error:'+err)
).finally(
    () => console.log("Always Runs")
)