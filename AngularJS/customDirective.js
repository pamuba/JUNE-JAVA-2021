var app = angular.module('app', ['ngRoute']);
app.controller('emp', function($scope){
    $scope.msg = "This is scope message"
})

app.directive('myInfoMsg', function(){
    return {
        // template:'<b>This is a message from the direcive</b>'
        templateUrl:'my-info-msg.html'
    }
})