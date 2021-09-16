// let add = (x,y)=>{
//     return `SUM:${x+y}`
// }

// console.log(add(11,22))

//1. no this, but can borrow it from outer scope
let group = {
    title: "Our Group",
    students:["John", "Jill", "James"],

    showList(){
        // console.log(this)
        this.students.forEach(

            // function(student){
            //     console.log(this.title+':'+student)
            // }

            (student)=>{
                console.log(this.title+':'+student)
            }
        )
    }
}

group.showList();

//2.cannot use with new 
//3. no arguments
//4. no super