angular.module('game-swap', [
	  'game-swap.services',
      'game-swap.collections',
      'game-swap.publish',
      'ngRoute'
	])

.config(function($routeProvider) {
  $routeProvider
    .when('/collections', {
      templateUrl: 'app/collections/collections.html',
      controller: 'CollectionsController'
    })

    .when('/publish', {
      templateUrl: 'app/publish/publish.html',
      controller: 'PublishController'
    })
    
    .otherwise({redirectTo: '/'})
    
});