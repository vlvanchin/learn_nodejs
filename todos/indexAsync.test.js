const Todos = require('./indexPromise');
const assert = require('assert').strict;
const fs = require('fs');

describe ("saveToFile()", function () {
	it ("should save a single Todo", async function () {
		let todos = new Todos();
		todos.add("save a csv");
		await todos.saveToFile();

		assert.strictEqual(fs.existsSync('todo.csv'), true);
		let expectedFileContents = "Title,Completed\nsave a csv,false\n";
		let content = fs.readFileSync("todo.csv").toString();
		assert.strictEqual(content, expectedFileContents);
	});

	it ("should save a single Todo that's completed", async function () {
		let todos = new Todos();
		todos.add("save a csv");
		todos.complete("save a csv");
		await todos.saveToFile();

		assert.strictEqual(fs.existsSync('todo.csv'), true);
		let expectedFileContents = "Title,Completed\nsave a csv,true\n";
		let content = fs.readFileSync("todo.csv").toString();
		assert.strictEqual(content, expectedFileContents);
	});
});
