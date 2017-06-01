var Bluebird=require('bluebird')

var bluebirdPromise=new Bluebird(
	        function(resolve,reject){ 
                      resolve("Something good happened")
                    //reject("Something bad happened")  
   });

bluebirdPromise
.then(function(data){
	console.log("Response: "+data)
})
.catch(function(err){
	console.error("Error "+err)
})


