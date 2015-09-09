tutorialApp.controller('introController', function($scope) {
  $scope.introObject = {
    whyAngularDesc: function() {
      if($scope.introObject.whyAngularDescId) {
        $scope.introObject.whyAngularDescId = false;
      } else {
        $scope.introObject.whyAngularDescId = true;
      }
    },

    dataBinding: function () {
      if($scope.introObject.dataBindingId) {
        $scope.introObject.dataBindingId = false;
      } else {
        $scope.introObject.dataBindingId = true;
      }      
    },

    dependencyInjection: function () {
      if($scope.introObject.dependencyInjectionId) {
        $scope.introObject.dependencyInjectionId = false;
      } else {
        $scope.introObject.dependencyInjectionId = true;
      }
    },

    templates: function () {
      if($scope.introObject.templatesId) {
        $scope.introObject.templatesId = false;
      } else {
        $scope.introObject.templatesId = true;
      }
    },

    scopeVar: function () {
      if($scope.introObject.scopeVarId) {
        $scope.introObject.scopeVarId = false;
      } else {
        $scope.introObject.scopeVarId = true;
      }
    },

    bestPractices: function () {
      if($scope.introObject.bestPracticeId) {
        $scope.introObject.bestPracticeId = false;
      } else {
        $scope.introObject.bestPracticeId = true;
      }
    }
  };

});