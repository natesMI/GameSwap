angular.module('game-swap.collections', [])

.controller('CollectionsController', function($scope, Collections){
    var temp = [{"name":"Dave","email":"dave@yahoo.com","games":"{PS2: Final Fantasy IV, PS3: GTA 4, XBOX: Rome}"},
                      {"name":"Jim","email":"jim@gmail.com","games":"{PS3: GTA 5, PS3: Red Dead Redemption, XBOX: Destiny}"},
                      {"name":"Tim","email":"tim@msn.com","games":"{XBOX: Star Wars, XBOX: Black Ops 3, XBOX: Skyrim}"},
                    {"name":"Jake","email":"jake@gmail.com","games":"{PS3: test, PS3: Skyrim, XBOX: Call of Duty III}"}];	
    
    $scope.display = temp;

	$scope.startup = function(){
    Collections.getCollections().then(function(data){
      //$scope.display = JSON.parse(temp);             
      console.log('This is data inside of collections.js', data);
    });
    
	};
	$scope.startup();
});