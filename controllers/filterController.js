tutorialApp.controller('filterController', function($scope) {
  $scope.filterObject = {
  	arrayExample : ['Ari', 'Lerner', 'Likes', 'To', 'Eat', 'Pizza'],
  	jsonExample : {'name': 'Ari', 'City': 'San Francisco'},
  	jsonFunc : function () {
  		$scope.filterObject.json = 'json';
  	}
  
  };
});