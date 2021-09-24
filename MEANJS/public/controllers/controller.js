function AppCtrl($scope){
    console.log("Hello from the controller")

    person1 = {
        name:"John",
        email:"john@gmail.com",
        number:"(111) 111-1111"
    },
    person2 = {
        name:"JIll",
        email:"jill@gmail.com",
        number:"(222) 222-2222"
    },
    person3 = {
        name:"Jim",
        email:"jim@gmail.com",
        number:"(333) 333-333"
    },
    person4 = {
        name:"Jake",
        email:"jake@gmail.com",
        number:"(444) 444-4444"
    }

    var contactlist = [person1, person2, person3, person4]
    $scope.contactlist = contactlist
}