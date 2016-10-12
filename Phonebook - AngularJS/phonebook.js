 var app = angular.module('myApp', []);
    app.controller('Ctrl', function($scope){
		
	$scope.showForm = function(){
		$scope.addForm = true;
	}
	$scope.hideForm = function(){
		$scope.addForm = false;
	}
	var uid = 0;             
    $scope.contacts = [ ];         
    $scope.saveForm = function() {             
        if($scope.newcontact.id == null) {  
        //if this is new contact  
        $scope.newcontact.id = uid++;  
        $scope.contacts.push($scope.newcontact);  
        } 
		 //For Update the Existing contacts  
        else {  
        for(i in $scope.contacts) {  
            if($scope.contacts[i].id == $scope.newcontact.id) {  
            $scope.contacts[i] = $scope.newcontact;  
            }  
        }                  
        }  
		 $scope.newcontact = {};
    }		
	    	
	 $scope.edit = function(id) {  
    //search contact with given id and update it  
        for(i in $scope.contacts) {  
            if($scope.contacts[i].id == id) {  
                //we use angular.copy() method to create   
                //copy of originial object  
                $scope.newcontact = angular.copy($scope.contacts[i]);  
            }  
        }  
    }  
	
	$scope.delete = function(id) {             
        //search contact with given id and delete it  
        for(i in $scope.contacts) {  
            if($scope.contacts[i].id == id) {  
                $scope.contacts.splice(i,1);  
                $scope.newcontact = {};  
            }  
        }             
    }       
	   
});