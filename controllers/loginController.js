tutorialApp.controller('loginController', function($scope, $location, getLoginDataService) {  
 var components = document.getElementById('components');
  components.style.display = 'none';

  var links = document.getElementById('links');
  links.style.display = 'none';
  
  $scope.loginObject = {  	

  	loginUserFunc : function () {
  		$scope.loginObject.loginErrorMessage = "";  		
    	var registeredUsers = {
    		email : $scope.loginObject.email,
    		password : $scope.loginObject.password
    	};

    	$scope.loginObject.matchLoginData(registeredUsers);
    },

    matchLoginData : function (registeredUsers) {
		var getUsers = getLoginDataService.getServerDataWithPromises();
	  	getUsers.then(
	    function(data) {
	    	var serverData = data,
	    		correctDetails;
			
			for (i = 0; i < serverData.length; i++) { 
				if (serverData[i].email === registeredUsers.email
					&& serverData[i].password === registeredUsers.password) {
	 				correctDetails = true;
	 				break;
	 			} else {
	 				correctDetails = false;
	 			}
			}

			if (correctDetails) {
				components.style.display = 'block';
				links.style.display = 'block';
				$location.path('/intro');
				console.log('Logged In');
			} else {
				$location.replace(); 
				components.style.display = 'none';
				links.style.display = 'none';
				$scope.loginObject.loginErrorMessage = "email address or password do not match! Please try again";
			}

	    });
	},

	logout : function () {
		$location.path('/login').replace(); 
	}
  }

  	var rememberLogin = $scope.loginObject.rememberLogin;
	if (rememberLogin) {
		localStorage.setItem("email", $scope.loginObject.email);
		localStorage.setItem("password", $scope.loginObject.password);

		var emailLocalStorage = document.getElementById("emailId");
		emailLocalStorage.value = localStorage.email;

		var passwordLocalStorage = document.getElementById("password");
		passwordLocalStorage.value = localStorage.password;
	}

});