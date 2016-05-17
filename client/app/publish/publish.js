angular.module('game-swap.publish', [])

.controller('PublishController', function($scope, Collections){
      $scope.message = "Please fill out the form...";

	$scope.postCollection = function(names, emails, ps4, ps3, xboxone, xbox360){
            if(names === undefined){
                  return;
            }
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

