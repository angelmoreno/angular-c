(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.intructions = "Enter a list comma-separated items you usually eat for lunch";
  $scope.food="";
  $scope.message="";
  $scope.showResults = function (){
    var userString = $scope.food.split(",");

    if (userString == ""){
      return $scope.message = " Please enter data";
    } else if (userString.length <= 3) {
      return $scope.message = "Enjoy";
    } else  {
      return $scope.message = "Too much";
}




  };




}

})();
