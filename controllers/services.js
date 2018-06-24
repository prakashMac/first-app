//var isLoggedIn=false;
app.factory('myFactory', function ($http) {
	
    var obj = [
    			{username:'nani',password:'capgemini'},
    			{username:'bhanu',password:'microsoft'}
    		  ];
    // var obj=[];
    //      $http.get('/getData').then(function(response){
	// //console.log(response);
	// obj.push(response.data);
	//console.log(obj);
// });

return obj;
    //obj.message = '';
    /*obj.setMessage = function (newMessage) {
        obj.message = newMessage;
    };*/
    
    //alert(obj[0].username);
    
});


app.factory('startupsFactory', function ($http) {
    var obj = [
    			{place:'Hyderabad',need:'With supporting text below as a natural lead-in to additional content.'},
    			{place:'Visakhapatnam',need:'With supporting text below as a natural lead-in to additional content.'}
    		  ];

//                var writeobj=[];
//          $http.get('/getWriteNeed').then(function(response){
//     //console.log(response);
//     writeobj.push(response.data);
//     //console.log(writeobj);
// });
    //obj.message = '';
    /*obj.setMessage = function (newMessage) {
        obj.message = newMessage;
    };*/
    
    //alert(obj[0].username);
    return obj;
});

app.factory('imagesFactory', function () {
    var obj = {title:'https://orig00.deviantart.net/b9dc/f/2012/263/e/e/leyendz_tm__avatar_logo_by_neonkiler99-d5fc6c9.jpg'};
    return obj;
});



/*       User Persistence Service        */

app.factory("userPersistenceService", [
	"$cookies", function($cookies) {
		var userName = "";

		return {
			setCookieData: function(username) {
				userName = username;
				$cookies.put("userName", username);
			},
			getCookieData: function() {
				userName = $cookies.get("userName");
				return userName;
			},
			clearCookieData: function() {
				userName = "";
				$cookies.remove("userName");
			}
		}
	}
]);

/*       User Persistence Service End     */