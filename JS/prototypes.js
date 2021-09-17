// function Student(){
//     this.name = "John",
//     this.gender = "Male"
// }

// //fns:prototype ... objects:__proto__

// Student.prototype.age = 22;

// let stdObj = new Student()
// // stdObj.age = 15;
// console.log(stdObj.age)

// let stdObj1 = new Student()
// console.log(stdObj1.age)

//es5 : prototypal inheritance

let dragon = {
    name : "Tanya",
    fire : true,

    fight(){
        return 9
    },
    sing(){
        if(this.fire)
            return `I am ${this.name}, the breather of fire`
    }
}
let lizard = {
    name:'Kiki',
    // fire : true,
    fight(){
        return 1
    }
}

// we can borrow the sing method for lizard using bind
// const singLizard = dragon.sing.bind(lizard)
// console.log(singLizard());

//inherits all the props and methods from dragon
lizard.__proto__ = dragon

console.log(lizard.sing())
console.log(lizard.fire)
console.log(lizard.fight())
