var app = angular.module('app', []);

app.controller('msg', function($scope){
    
});

app.directive('message', function($interpolate){
    return {
        compile: function(tElement, tAttributes){
            console.log(tAttributes.text + " -In Compile Phase")
            tElement.css("border", "1px solid #C0C0C0")

            return {
                pre:function(scope, iElement, iAttributes){
                    console.log(iAttributes.text + " -In Pre Phase")
                },
                post:function(scope, iElement, iAttributes){
                    console.log(iAttributes.text + " -In Post Phase")
                    if(iAttributes.text === "3")
                     iElement.css("border", "1px solid red")
                    iElement.on("click", scope.btnClick)
                }
            }
        },
        controller: function($scope, $element, $attrs){
            var v = $interpolate($attrs.text)($scope)
            console.log(v + " -In Controller Phase")

            $scope.btnClick = function(){
                alert(v)
            }
        },
        
    }
})
