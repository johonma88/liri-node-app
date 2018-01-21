

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
    console.log("spotify");
}
else if (command === 'movie-this'){
    console.log("movies");
}
else if (command === 'do-what-it-says'){
    console.log("???");
};
