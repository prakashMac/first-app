var app=angular.module("myApp",['ngCookies','ngRoute']);

 

app.controller('authCtrl',function($scope,$location,myFactory,userPersistenceService,$http,$window,$route){
	
	//$interval(function(){myFactory},500);
	$scope.login=function(){
	//var dataobj=[];
	Lusername=$scope.Lusername;
	Lpassword=$scope.Lpassword;
	var flag=0;
	
	//console.log(myFactory.getdata());
	 for(var i=0;i<myFactory[0].length;i++){ 
	 	if(myFactory[0][i].uname==Lusername && myFactory[0][i].password==Lpassword){
	 		//dummyFactory.setMessage(Lusername);
	 		//$location.path('/loginsuccess');
	 		flag=1;
	 	}
	 }
	

	if(flag==1){
		userPersistenceService.setCookieData(Lusername);
		$location.path('/');
		//$scope.isLoggedIn=true;
		//$route.reload();
		//$window.open($window.location.host +"/", "_self");
		/*$http.get('localhost:3000/').then(function(data){
			$scope.message=dummyFactory.message;}
			);*/
		
		
	}
	else{
		alert("Invalid Username or Password");
		$location.path('/signin-up');
	}
	//console.log(Lusername+' '+Lpassword);
	//console.log($location.url());
	
	//alert(myFactory.val);
	
	//alert(myFactory[0].username)
	
	};

	$scope.signup=function(){
		//alert("Please signup");
		username=$scope.username;
		email=$scope.email;
		password=$scope.Rpassword;
		//alert(username+' '+email+" "+password);
		var dobj={uname:username,password:password,email:email};
		// $http.post('/postData',dobj).then(function(response){
		console.log(dobj);
		// });

		//myFactory.push(dobj);
		//alert(myFactory[2].username);
		//$route.reload();
		//alert("You are Successfully Registered. Please Login Now!");
		$window.location.reload()
	}

});
app.controller('loginCtrl',function($scope,$location,userPersistenceService){
	$scope.message=userPersistenceService.getCookieData();
	//alert($scope.message);
	$scope.logout=function(){
		alert('logout');
		//var empty_msg='';
		$location.path('/');
		userPersistenceService.clearCookieData();
		$scope.message=userPersistenceService.getCookieData();
		//alert($scope.message);
		//$scope.isLoggedIn=false;
	}

	//dummyFactory.message='';
});

app.controller('images_ctrl',function($scope,imagesFactory){
	$scope.image=imagesFactory.title;
	//console.log($scope.image);
});

app.controller('startup_ctrl',function($scope,startupsFactory,$location,userPersistenceService,$interval,$http){
	$scope.message=userPersistenceService.getCookieData();
	//getDataOfNeed();
	//alert($scope.message);
	var writeobj=[];
var getDataOfNeed=function(){
	//var deffered=$q.defer();
// 	$http.get('/getWriteNeed').then(function(response){
	//console.log(response.data);
	this.writeobj = startupsFactory;
//     //deffered.resolve(response.data);
//     $scope.startups=response.data;
//     //console.log($scope.startups);
	$scope.startups=this.writeobj;
    $scope.$watch("startups",function(newValue,oldValue){
     	console.log(newValue);
     });
// 	//console.log($scope.startups);
// 	//return deffered.promise;
// });
}
 
        $interval(function(){
        	getDataOfNeed();
        	},1000);
//});

	//$scope.startups=startupsFactory;
	//$scope.startups=writeobj;
	//console.log($scope.startups);
});

app.controller('startup-content-ctrl',function($scope,$routeParams,$location,userPersistenceService,$http){
	var id=$routeParams.id;

	$http.get('/getWriteNeed').then(function(response){
    //console.log(response.data);
    //deffered.resolve(response.data);
    //$scope.startups=response.data;
    $scope.place=response.data[id].place;
	$scope.need=response.data[id].need;
    //console.log($scope.startups);
});
	//$scope.place=startupsFactory[0][id].place;
	//$scope.need=startupsFactory[0][id].need;
});
app.controller('write-need-ctrl',function($scope,$http){
	$scope.submit_need=function(){
		var inputPlace=$scope.inputPlace;
		var inputNeed=$scope.inputNeed;
		var inputPhone= $scope.inputPhone;
		var inputCategory=$scope.inputCategory;
		var inputSubCategory=$scope.inputSubCategory;
		var wdobj={place:inputPlace,need:inputNeed,phone:inputPhone,category:inputCategory,subCategory:inputSubCategory};

		//alert(inputPlace +' '+inputNeed+' '+inputPhone+' '+inputCategory+' '+inputSubCategory);
		// $http.post('/postWriteNeed',wdobj).then(function(response){
		console.log(wdobj);
		// });
	}	
});