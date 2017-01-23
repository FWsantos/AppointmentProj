angular.module('appointment', ['ngRoute'])

.config(function ($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl: 'app/views/home.html',
		controller: 'homeCtrl'
	})
	.when('/about', {
		templateUrl: 'app/views/about.html',
		// controller: 'aboutCtrl'
	})

	.otherwise('/home')
})