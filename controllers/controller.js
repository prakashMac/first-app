var app=angular.module("myApp",['ngCookies','ngRoute']);

app.controller('authCtrl',function($scope,$location,myFactory,userPersistenceService,$http,$window,$route){
	
	$scope.login=function(){
		//var dataobj=[];
		Lusername=$scope.Lusername;
		Lpassword=$scope.Lpassword;
		var flag=0;
		
		//console.log(myFactory.getdata());
		for(var i=0;i<myFactory[0].length;i++){ 
			if(myFactory[0][i].username==Lusername && myFactory[0][i].password==Lpassword){
				flag=1;
			}
		}
		if(flag==1){
			userPersistenceService.setCookieData(Lusername);
			$location.path('/');	
		}
		else{
			alert("Invalid Username or Password");
			$location.path('/signin-up');
		}
	};

	$scope.signup=function(){
		//alert("Please signup");
		username=$scope.username;
		email=$scope.email;
		password=$scope.Rpassword;
		//alert(username+' '+email+" "+password);
		var dobj={username:username,password:password,email:email};
		$http.post('/postData',dobj).then(function(response){
			//console.log(response);
		});
		$window.location.reload()
	}
});

app.controller('loginCtrl',function($scope,$location,userPersistenceService){
	$scope.message=userPersistenceService.getCookieData();
	//alert($scope.message);
	$scope.logout=function(){
		alert('logout');
		$location.path('/');
		userPersistenceService.clearCookieData();
		$scope.message=userPersistenceService.getCookieData();
	}
});

app.controller('images_ctrl',function($scope,imagesFactory){
	$scope.image=imagesFactory.title;
	//console.log($scope.image);
});

app.controller('startup_ctrl',function($scope,$location,userPersistenceService,$interval,$http){
	$scope.message=userPersistenceService.getCookieData();
	//alert($scope.message);
	var writeobj=[];
	var getDataOfNeed=function(){
		$http.get('/getWriteNeed').then(function(response){
			$scope.startups=response.data;
		});
	}
	getDataOfNeed();
	
        // $interval(function(){
        // 	getDataOfNeed();
        // 	},1000);
});

app.controller('startup-content-ctrl',function($scope,$routeParams,$location,userPersistenceService,$http){
	var id=$routeParams.id;
	$http.get('/getWriteNeed').then(function(response){
		$scope.place=response.data[id].place;
		$scope.need=response.data[id].need;
	});
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
		$http.post('/postWriteNeed',wdobj).then(function(response){
			//console.log(response);
		});
	}	
});