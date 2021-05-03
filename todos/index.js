const fs = require('fs');

class Todos {
	constructor () {
		this.todos = [];
	}

	list = () => {
		return [...this.todos];
	}

	add (title) {

		let todo = {
			title : title,
			completed: false,
		}

		this.todos.push(todo);
	}

	complete(title) {
		let todoFound = false;

		this.todos.forEach ((todo) => {
			if (todo.title === title) {
				todo.completed = true;
				todoFound = true;
				return;
			}
		});

		if ( !todoFound ) {
			throw new Error(`No Todo was found with the title : "${title}"`);
		}
	}

	saveToFile = (callback) => {
		let fileContents = 'Title,Completed\n';
		this.todos.forEach((todo) => {
			fileContents += `${todo.title},${todo.completed}\n`
		});

		fs.writeFile('todo.csv', fileContents, callback);
	}
}

module.exports = Todos

