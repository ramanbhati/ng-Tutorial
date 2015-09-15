tutorialApp.controller('registerController', function($scope, $http, $location, getLoginDataService) {
  
  components = document.getElementById('components');
  components.style.display = 'none';

  links = document.getElementById('links');
  links.style.display = 'none';
  
  $scope.registerObject = {
  	registrationFunc : function () {
  		$scope.registerObject.messageUsernameError = "";
  		$scope.registerObject.messageEmailError = "";
	  	var registerData = {
	  		userName : $scope.registerObject.userName,
	  		password : $scope.registerObject.password,
	  		email : $scope.registerObject.email
  		};
   		$scope.registerObject.registerData = registerData;
  		$scope.registerObject.validateRegistrationDetails(registerData);
  	},

  	validateRegistrationDetails : function (validateRegistrationDetails) {
  		var serverData;
  		var getUsers = getLoginDataService.getServerDataWithPromises();
		  	getUsers.then(
		    function(data) {		    	
		    serverData = data;
			$scope.registerObject.compareAndPost(serverData, $scope.registerObject.registerData);
	    });
  	},

  	compareAndPost : function (serverData, registerData) {
  		console.log("in comapre : registerData", registerData);
  		console.log("in comapre : serverData", serverData);
		var unique = true;	
 		for (i = 0; i < serverData.length; i++) { 

 			if (serverData.length == 0) {
 				unique = true;
 			} else if (serverData[i].email === registerData.email) {
 				$scope.registerObject.messageEmailError = "Duplicate email entered: Please enter unique email";
 				unique = false;
 				return;	
 			} else if(serverData[i].userName === registerData.userName) {
 				$scope.registerObject.messageUsernameError = "Duplicate userName entered: Please enter unique userName ";
 				unique = false;
 				return;
 			} else {
 				unique = true;
 			} 
		}

		if (unique) { 
			$http({
		        method: 'GET',
		        url: "http://127.0.0.1:1337/send",
		        params: { 
		        	to : registerData.email,
		        	userName: registerData.userName,
		        	password: registerData.password 
		        }
	      	}).
	      	success(function(data,status,header,config) {
	        	if( data == "sent") {
					$scope.registerObject.sentEmailConfirmation = "Email is been sent at " + registerData.email + " . Please check inbox !";
					$location.path('/login');
				} else {
					console.log("Something went wrong!!");
				}
	      }); 	
		 		// $http.post('http://127.0.0.1:1337/register', registerData);
		}
  	}

  };

});