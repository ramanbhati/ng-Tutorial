var serverUrl = 'http://127.0.0.1:1337/login';
tutorialApp.factory('getLoginDataService', function($http, $q) {
  return {
    // getServerData: function (successCallBack) {
    //   $http({
    //     method: 'GET',
    //     url: serverUrl
    //   }).
    //   success(function(data,status,header, config) {
    //      successCallBack(data);
    //   }).
    //   error(function(data,status,header, config) {
    //     console.log('Error');
    //   })
    // }

    getServerDataWithPromises: function () {
      var defer = $q.defer();
      $http({
        method: 'GET',
        url: serverUrl
      }).
      success(function(data,status,header,config) {
        defer.resolve(data);
      }).
      error(function(data,status,header,config){
        defer.reject("Failed");
      })
      return defer.promise;
    }
  }
});