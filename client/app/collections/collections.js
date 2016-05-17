angular.module('game-swap.collections', [])

.controller('CollectionsController', function($scope, Collections){

	$scope.startup = function(){
    Collections.getCollections().then(function(data){
      $scope.display = data.data;             
    });
    
	};
	$scope.startup();
});