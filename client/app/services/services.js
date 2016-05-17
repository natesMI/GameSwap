angular.module('game-swap.services', [])

.factory('Collections', function($http){
	function getCollections() {
		return $http.get('api/collections');
	}

	function publishCollection(infoObj) {
      return $http({
      	method: 'POST',
      	url: 'api/publish',
      	data: infoObj
      });
	}

	return {
		getCollections: getCollections,
		publishCollection: publishCollection
	}
});