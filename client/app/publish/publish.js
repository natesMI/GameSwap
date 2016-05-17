angular.module('game-swap.publish', [])

.controller('PublishController', function($scope, Collections){
	$scope.display = {0: "Working"};

	$scope.postCollection = function(names, emails, ps4, ps3, xboxone, xbox360){
	  console.log('Inside of angular module', names, emails, ps4, xboxone);
      Collections.publishCollection({
      	name: names, 
      	email: emails, 
      	PS4_games: ps4,
      	PS3_games: ps3,
      	Xbox_One_games: xboxone,
      	Xbox_360_games: xbox360
      });
	};
});

