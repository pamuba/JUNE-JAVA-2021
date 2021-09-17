// //generators
// function* generator(){
//    yield 1;
//    yield 2;
//    yield 3;
//    yield 4;
//    yield 5;
// }

// let gen = generator()

// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)


// console.log(gen.next().value)


function* generator(){
    let index = 0;
    while(true){
        yield index++
    }
}

let gen = generator()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

