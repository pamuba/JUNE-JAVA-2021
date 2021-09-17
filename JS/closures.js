function outer(a,b){
    var outerA = 99;

    return function inner(){
        var c = 100;

        console.log(outerA)
        console.log(a)
        console.log(b)
        function inr(){
            console.log(outerA)
            console.log(a)
            console.log(b)
            console.log(c)
        }
        inr()
    }
    // inner()
}

let inr = outer(11,22)

setTimeout(
    ()=>{inr()}, 2000
)