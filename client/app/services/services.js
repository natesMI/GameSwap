angular.module('game-swap.services', [])

.factory('Collections', function($http){
	function getCollections() {
		return $http.get('api/collections');
		console.log('firing in services');
	}

	function publishCollection(infoObj) {
	  console.log('server call is firing', infoObj);
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