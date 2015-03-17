//This create our Angular module and injects firebase
angular.module('scheduleApp', ['firebase'])

//Next Create our main controller and get access to firebase
.controller('mainController', function($scope. $firebase){
	
	//application code here
	
//Connect to firebase
	
	var ref = new Firebase("amber-heat-8977.firebaseio.com/days");
	var fb = $firebase(ref);
	
  $scope.reset = function() {    

    fb.$set({
      monday: {
        name: 'Monday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      },
      tuesday: {
        name: 'Tuesday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      }
    });    

  };
  
});
	