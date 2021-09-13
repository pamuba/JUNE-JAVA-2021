//var let const

//1. Scoping 
//let - block scoped
//var - function scoped

// function run(){
//     foo = 'Foo'
//     var bar = 'Bar'

//     console.log(foo, ' ', bar)
    
//     {
//         var moo = "Moo"
//         let bazz = "Bazz"
//         console.log(moo,' ',bazz)
//     }

//     console.log(moo)
//     // console.log(bazz)
// }

// run();

// console.log(foo)


var funcs = []
for (let i = 0; i < 3; i++) {
    funcs[i] = function(){
        console.log("My Value:"+i)
    } 
}

for (var j = 0; j < 3; j++) {
    funcs[j]();
}


