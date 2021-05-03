const axios = require('axios');
const fs = require('fs').promises;

axios.get('https://ghibliapi.herokuapp.com/films').
	then((response) => {
		console.log('successfully retrieved our list of movies');
		let movieList = '';
		response.data.forEach(movie => {
			movieList += `${movie['title']}, ${movie['release_date']}\n`;
		});

		return fs.writeFile('promiseMovies.csv', movieList);
	}).
	then(() => {
		console.log('saved our list of movies to promiseMovies.csv');
	}).
	catch ((error) => {
		console.error(`could not save the ghibli movies to a file: ${error}`);
	});


