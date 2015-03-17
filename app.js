//This create our Angular module and injects firebase
angular.module('scheduleApp', ['firebase'])

//Next Create our main controller and get access to firebase
.controller('mainController', function($scope. $firebase){
	
	//application code here
	
//Connect to firebase
	
	var ref = new Firebase("amber-heat-8977.firebaseio.com/days");
	var fb = $firebase(ref);
	
	}
	