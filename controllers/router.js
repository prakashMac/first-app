angular.module('myApp').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      		$routeProvider
		        .when('/', {
		          templateUrl: 'templates/home.html',
		          controller:'loginCtrl'
		        })
		         .when('/signin-up', {
		          templateUrl: 'templates/signin-up.html',
		          controller:'authCtrl'
		        })
		         .when('/loginsuccess', {
		          templateUrl: 'templates/loginsuccess.html'
		        })
		        .when('/startup-content/:id', {
		          templateUrl: 'templates/startup-content.html',
		          controller:'startup-content-ctrl'
		        })
		         .when('/startups', {
		          templateUrl: 'templates/startups.html',
		          controller:'startup_ctrl'
		        })
		         .when('/write-need', {
		          templateUrl: 'templates/write-need.html',
		          controller:'write-need-ctrl'
		        })
		         .when('/forgotpassword', {
		          templateUrl: 'templates/forgotpassword.html',
		          controller:'authCtrl'
		        })
		         .when('/under-construction', {
		          templateUrl: 'templates/under-construction.html'
						});
						
		    }]);
