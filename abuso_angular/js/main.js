/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('mainWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/inicio.html", controller: "PageCtrl"})
    // Pages
	.when("/inicio", {templateUrl: "partials/inicio.html", controller: "PageCtrl"})
    .when("/problema", {templateUrl: "partials/problema.html", controller: "PageCtrl"})
    .when("/estadisticas", {templateUrl: "partials/estadisticas.html", controller: "PageCtrl"})
    .when("/impacto", {templateUrl: "partials/impacto.html", controller: "PageCtrl"})
    .when("/prevencion", {templateUrl: "partials/prevencion.html", controller: "PageCtrl"})
    
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);



/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  
  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});

function CustomerController($scope) {
  $scope.verProblema = "problema.html";
}