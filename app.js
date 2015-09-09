var tutorialApp = angular.module('tutorialApp', ['ngRoute']);

tutorialApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
          when('/intro', {
            templateUrl: 'templates/intro.html', 
            controller: 'introController'
          }).
          when('/module', {
            templateUrl: 'templates/module.html', 
            controller: 'moduleController'
          }).
          when('/controller', {
            templateUrl: 'templates/controller.html', 
            controller: 'ctrlController'
          }).
          when('/filter', {
            templateUrl: 'templates/filter.html', 
            controller: 'filterController'
          }).
          when('/directive', {
            templateUrl: 'templates/directive.html', 
            controller: 'directiveController'
          }).
          when('/routing', {
            templateUrl: 'templates/routing.html', 
            controller: 'routingController'
          }).
          when('/services', {
            templateUrl: 'templates/services.html', 
            controller: 'servicesController'
          }).
          when('/xhr', {
            templateUrl: 'templates/xhr.html', 
            controller: 'xhrController'
          }).
          when('/aboutMe', {
            templateUrl: 'templates/aboutMe.html', 
            controller: 'aboutMeController'
          })
}]);

// var serverUrl = 'http://127.0.0.1:1337/';
// testApp.factory('Raman', function($http, $q) {
//   return {
//     // getServerData: function (successCallBack) {
//     //   $http({
//     //     method: 'GET',
//     //     url: serverUrl
//     //   }).
//     //   success(function(data,status,header, config) {
//     //      successCallBack(data);
//     //   }).
//     //   error(function(data,status,header, config) {
//     //     console.log('Error');
//     //   })
//     // }

//     getServerDataWithPromises: function () {
//       var defer = $q.defer();
//       $http({
//         method: 'GET',
//         url: serverUrl
//       }).
//       success(function(data,status,header,config) {
//         defer.resolve(data);
//       }).
//       error(function(data,status,header,config){
//         defer.reject("Failed");
//       })

//       return defer.promise;
//     }



//   }
// });

// testApp.config(['$routeProvider', function ($routeProvider) {
//   $routeProvider.
//           when('/login', {
//             templateUrl: 'templates/login.html', 
//             controller: 'loginController'
//           }).
//           when('/home', {
//             templateUrl: 'templates/home.html', 
//             controller: 'homeController'
//           })

// }]);

// testApp.controller('homeController', function ($scope) {
//   $scope.home = {
//     msg: 'I am home'
//   }
//   console.log('I am home');
// });

// testApp.controller('loginController', function ($scope) {
//   $scope.login = {
//     msg: 'I am in login'
//   }
//   console.log('I am login');
// });

// testApp.controller('myHttpController', function ($scope, Raman, $log) {
//   var dataWithQService = Raman.getServerDataWithPromises();
//   dataWithQService.then(
//     function(data) {
//       $scope.serverData = data;
//     })
//   // Raman.getServerData(function(data) {
//   //   $scope.serverData = data;
//   // });
// });


// testApp.controller('testController', function ($scope, Raman) {
   
//    $scope.partial = "templates/registration.html";
// });