

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
    // if (process.argv[3]=== null){
    //     process.argv[3]="Avengers";
    // };
  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {
   
    // console.log(response);
    console.log(" Title of the Movie: "+JSON.parse(body).Title+
                "\n Year the movie came out: "+JSON.parse(body).Year+
                "\n IMDB Rating of the movie: "+JSON.parse(body).imdbRating+
                "\n Rotten Tomatoes Rating of the movie: "+JSON.parse(body).Value+
                "\n Country where the movie was produced: "+ JSON.parse(body).Country+
                "\n Language of the movie: "+JSON.parse(body).Language+
                "\n Plot of the Move: "+JSON.parse(body).Plot+
                "\n Actors in the movie: "+JSON.parse(body).Actors);
            
  }
});
}
else if (command === 'do-what-it-says'){
    var fs = require("fs");
    fs.readFile("random.txt", "utf8", function(error, data) {
    
      if (error) {
        return console.log(error);
      }
      var newCommand = data.split(",");
      
      // We will then print the contents of data
      console.log(data);
      console.log(newCommand);

     
});
}

