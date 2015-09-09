tutorialApp.controller('directiveController', function($scope) {
  $scope.directiveObject = {
  	ngApp: function() {
      if($scope.directiveObject.ngAppId) {
        $scope.directiveObject.ngAppId = false;
      } else {
        $scope.directiveObject.ngAppId = true;
      }
    },

    ngInclude: function() {
      if($scope.directiveObject.ngIncludeId) {
        $scope.directiveObject.ngIncludeId = false;
      } else {
        $scope.directiveObject.ngIncludeId = true;
      }
    },

      	ngSwitch: function() {
      if($scope.directiveObject.ngSwitchId) {
        $scope.directiveObject.ngSwitchId = false;
      } else {
        $scope.directiveObject.ngSwitchId = true;
      }
    },

      	ngView: function() {
      if($scope.directiveObject.ngViewId) {
        $scope.directiveObject.ngViewId = false;
      } else {
        $scope.directiveObject.ngViewId = true;
      }
    },

      	ngIf: function() {
      if($scope.directiveObject.ngIfId) {
        $scope.directiveObject.ngIfId = false;
      } else {
        $scope.directiveObject.ngIfId = true;
      }
    },

      	ngRepeat: function() {
      if($scope.directiveObject.ngRepeatId) {
        $scope.directiveObject.ngRepeatId = false;
      } else {
        $scope.directiveObject.ngRepeatId = true;
      }
    },

      	ngHref: function() {
      if($scope.directiveObject.ngHrefId) {
        $scope.directiveObject.ngHrefId = false;
      } else {
        $scope.directiveObject.ngHrefId = true;
      }
    },

      	ngSrc: function() {
      if($scope.directiveObject.ngSrcId) {
        $scope.directiveObject.ngSrcId = false;
      } else {
        $scope.directiveObject.ngSrcId = true;
      }
    },

      	ngSelected: function() {
      if($scope.directiveObject.ngSelectedId) {
        $scope.directiveObject.ngSelectedId = false;
      } else {
        $scope.directiveObject.ngSelectedId = true;
      }
    },

      	ngReadOnly: function() {
      if($scope.directiveObject.ngReadOnlyId) {
        $scope.directiveObject.ngReadOnlyId = false;
      } else {
        $scope.directiveObject.ngReadOnlyId = true;
      }
    },

      	ngDisabled: function() {
      if($scope.directiveObject.ngDisabledId) {
        $scope.directiveObject.ngDisabledId = false;
      } else {
        $scope.directiveObject.ngDisabledId = true;
      }
    }
  
  };
});