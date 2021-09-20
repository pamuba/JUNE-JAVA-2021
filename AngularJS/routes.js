var app = angular.module('app', ['ngRoute']);

// app.config(['$routeProvider', function($routeProvider){

// }])

app.config(function($routeProvider){
    $routeProvider
    .when('/first-msg', {
        template:'<b>This is the first message</b>'
    })
    .when('/second-msg', {
        template:'<b>This is the second message</b>'
    })
})