const request = require('request');
const fs = require('fs');


request ('https://ghibliapi.herokuapp.com/films',(error, response, body) => {

	if (error) {
		console.error(`could not sent request to api: ${error.message}`);
		return ;
	} 

	if (response.statusCode != 200) {
		console.error(`Expected status code 200 but received ${error.statusCode}`);
		return;
	}

        console.log('Processing our list of movies');
	movies = JSON.parse(body);
	let movieList = '';
	movies.forEach(movie => {
		movieList += `${movie['title']}, ${movie['release_date']}\n`;
	});

	fs.writeFile('callbackMovies.csv', movieList, (error) => {
		if (error) {
			console.error(`could not save the Ghibli moves to a file: ${error}`);
			return;
		}
		console.log('Saved our list of movies to callbackMovies.csv');
	});
});




