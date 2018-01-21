

var command = process.argv[2];

if (command === 'my-tweets'){
   
    var Twit = require('twitter'); // this is how we import the twit package
    var config = require('./keys.js') //this is we import the config 
    //file which is a js file which contains the keys ans tokens
    var Twitter = new Twit(config); //this is the object of twit which 
    
    var params = {
    q: 'user_timeline',
    screen_name: 'johonma88',
    count: 20
    } // this is the param variable which will have key and value 
   
    Twitter.get('search/tweets', params,searchedData); 
    function searchedData(err, data, response) {
    console.log(data);
    }
}
else if (command === 'spotify-this-song'){
    var Spotify = require('node-spotify-api');
    
   var spotify = new Spotify({
     id: 'b06564ce29134615878ce01935708487',
     secret: '17f59d0695044c9597e43c72fd67a074'
   });
    
   spotify
   .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
   .then(function(data) {
     console.log(data); 
   })
   .catch(function(err) {
     console.error('Error occurred: ' + err); 
   });
 
}
else if (command === 'movie-this'){
   // Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");

// Then run a request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t="+ process.argv[3]+"&y=&plot=short&apikey=trilogy", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    console.log(response);
  }
});
}
else if (command === 'do-what-it-says'){
    console.log("???");
};
