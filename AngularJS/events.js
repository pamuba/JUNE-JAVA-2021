var app = angular
                .module('myModule',[])
                .controller('myController', function($scope){
                    var technologies = [
                        { name:"C#", likes:0, dislikes:0},
                        { name:"Java", likes:0, dislikes:0},
                        { name:"Angular", likes:0, dislikes:0},
                        { name:"React", likes:0, dislikes:0},
                        { name:"Vue", likes:0, dislikes:0},
                        { name:"GrapQL", likes:0, dislikes:0},
                    ];

                    //1.
                    $scope.technologies = technologies;

                    //2.
                    $scope.incrementLikes = function(tech){
                        tech.likes++
                    }

                    //3.
                    $scope.incrementDisLikes = function(tech){
                        tech.dislikes++
                    }
                });