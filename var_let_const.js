//var let const

//1. Scoping 
//let - block scoped
//var - function scoped

function run(){
    foo = 'Foo'
    var bar = 'Bar'

    console.log(foo, ' ', bar)
    
    {
        var moo = "Moo"
        let bazz = "Bazz"
        console.log(moo,' ',bazz)
    }

    console.log(moo)
    // console.log(bazz)
}

run();

console.log(foo)




