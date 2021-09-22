var app = angular.module('app', ['ngRoute']);

// app.config(['$routeProvider', function($routeProvider){

// }])

app.config(function($routeProvider){
    $routeProvider
    .when('/sumurl/:a/:b', {
        // template:'<b>This is the first message</b>'
        templateUrl:"sumurl.html",
        controller: 'sumurl'
    })
    .when("/suminput",{
        templateUrl:"suminput.html",
        controller: "suminput"
    })
})
app.controller('sumurl', function($scope, $routeParams){
    $scope.a = $routeParams.a;
    $scope.b = $routeParams.b;
})
app.controller('suminput', function($scope, $location, $interpolate){
    $scope.a = 0
    $scope.b = 0

    $scope.doSum = function(){
        var url = $interpolate('/sumurl/{{a}}/{{b}}')($scope)
        $location.path(url)
    }
})