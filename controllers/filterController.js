tutorialApp.controller('filterController', function($scope) {
  $scope.filterObject = {
  	jsonTag : false,
  	arrayExample : ['Ari', 'Lerner', 'Likes', 'To', 'Eat', 'Pizza'],
  	jsonExample : {'name': 'Ari', 'City': 'San Francisco'},
  	jsonFunc : function () {
  		$scope.filterObject.jsonTag = true;
  	}
  };
});