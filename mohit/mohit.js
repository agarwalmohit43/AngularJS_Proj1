var myApp = angular.module('myApp',['ngMessages','ngResource','ngRoute']);

myApp.controller('thecontroller',["$scope","$log","$filter","$resource","$timeout","$route",function($scope,$log,$filter,$resource,$timeout,$route){

    $log.error("This is an error");
    $log.info("This is an info");
    $log.log("This is an logs");
    $log.warn("This is an warning");
    $log.debug("This is an debug");

    $scope.name = "Mohit";
    $scope.changedName = $filter('uppercase')($scope.name);

    $log.log($scope.name);
    $log.log($scope.changedName);

    console.log($resource);

    $timeout(function () {
        $scope.name = "Agarwal";},5000)

    $scope.handle = '';

    $scope.character = 6;

    $scope.rules=[
        {rulename:"6 Characters Min."},{rulename:"Unique expected"}
    ];

}]);

//myApp.controller("thecontroller",["$scope","$log","$filter","$resource",function(e,n,o,i){n.error("This is an error"),n.info("This is an info"),n.log("This is an logs"),n.warn("This is an warning"),n.debug("This is an debug"),e.name="Mohit",e.changedName=o("uppercase")(e.name),n.log(e.name),n.log(e.changedName),console.log(i)}]);


var searchDir = function(firstname, lastname, mobile, address){ return "Mohit Kumar";}

console.log(angular.injector().annotate(searchDir));


var arrarExample = [1,"2",function checkArray(){console.log("Hello");}];

arrarExample[2]();