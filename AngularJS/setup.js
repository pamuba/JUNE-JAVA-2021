var myApp = angular.module("myModule",[])

var myController = function($scope){
    
    var employee = {
        firstName : 'John',
        lastName : "Smith",
        flag : "images/flag.jpg"
    }

    $scope.employee = employee

    $scope.message = "AngularJS from Controller"
}

var myController1 = function($scope){
    $scope.message = "AngularJS  from Controller1"
}

myApp.controller("myController", myController)

myApp.controller("myController1", myController1)

/////////////////////////////////////////////////////////////////////////

// var myApp = angular.module("myModule",[])

// myApp.controller("myController", function($scope){
//     $scope.message = "AngularJS"
// })


/////////////////////////////////////////////////////////////////

// var myApp = angular
//  .module("myModule",[])
//  .controller("myController", function($scope){
//     $scope.message = "AngularJS"
//  })