function sum(a,b,...args){
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i]
    }
    console.log("SUM:",sum)
    console.log(args instanceof Array)
}

sum(1,2,3,4,5,6)