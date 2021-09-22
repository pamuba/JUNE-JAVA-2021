var app = angular.module('app', ['ngRoute']);

// app.config(['$routeProvider', function($routeProvider){

// }])

app.config(function($routeProvider){
    $routeProvider
    .when('/first-msg', {
        // template:'<b>This is the first message</b>'
        templateUrl:"msg.html",
        controller: 'message1'
    })
    .when('/second-msg', {
        template:'<b>This is the second message</b>'
    })
    .when('/', {
        template:"<b>Welcome to the site</b>"
    })
    .otherwise({
        redirectTo:function(){
            alert("No Content")
            return "/second-msg"
        }
        // redirectTo:"/second-msg"
        // template:"<b>No Content here. Plz click on the links</b>"
    })
})

app.controller('message1', function($scope){
    $scope.a = 11;
    $scope.b = 22;
})