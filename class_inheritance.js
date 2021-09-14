class A{
    constructor(x){
        this.a = x
    }
}
class B extends A{
    constructor(x,y){
        super(x)
        this.b = y
    }
}
class C extends B{
    constructor(x,y,z){
        super(x,y)
        this.c = z
    }
    dis(){
        console.log(`A:${this.a} B:${this.b} C:${this.c}`)
    }
}
let c = new C(1,2,3)
c.dis()