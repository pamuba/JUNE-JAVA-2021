// class A{
//     constructor(x){
//         this.a = x
//     }
// }
// class B extends A{
//     constructor(x,y){
//         super(x)
//         this.b = y
//     }
// }
// class C extends B{
//     constructor(x,y,z){
//         super(x,y)
//         this.c = z
//     }
//     dis(){
//         console.log(`A:${this.a} B:${this.b} C:${this.c}`)
//     }
// }
// let c = new C(1,2,3)
// c.dis()


class God{
    hi(){
        console.log("He is the GOD")
    }
}

class Animal extends God{
    constructor(name, height){
        super()
        this.name = name
        this.height = height
    }
    hello(){
        console.log(`Hello I am ${this.name} from the animal kingdom`)
    }
}
// let king  = new Animal("Lion King", 4)
// console.log(king)
// king.hello()
// king.hi()

class Lion extends Animal{
    constructor(name, height, color){
        super(name, height)
        this.color = color;
    }
    hello(){
        console.log(`Hello from ${this.name}`)
        super.hello()
    }
}

let lion = new Lion("Lion King", 4, "golden")
lion.hello()