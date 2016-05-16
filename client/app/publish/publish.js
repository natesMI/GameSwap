angular.module('game-swap.publish', [])

.controller('PublishController', function($scope, Collections){
	$scope.display = {0: "Working"};

	$scope.postCollection = function(names, emails, gameList){
      Collections.publishCollection({
      	name: names, 
      	email: emails, 
      	games: gameList
      });
	};
});

