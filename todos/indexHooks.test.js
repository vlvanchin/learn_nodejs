const Todos = require('./indexPromise');
const assert = require('assert').strict;
const fs = require('fs');

describe ("saveToFile()", function () {
	beforeEach(function() {
		this.todos = new Todos();
		this.todos.add("save a csv");
	});

	afterEach (() => {
		if (fs.existsSync("todo.csv")) {
			fs.unlinkSync("todo.csv");
		}
	});

	it ("should save a single Todo without error", async function () {
		await this.todos.saveToFile();

		assert.strictEqual(fs.existsSync('todo.csv'), true);
		let expectedFileContents = "Title,Completed\nsave a csv,false\n";
		let content = fs.readFileSync("todo.csv").toString();
		assert.strictEqual(content, expectedFileContents);
	});

	it ("should save a single Todo that's completed", async function () {
		this.todos.complete("save a csv");
		await this.todos.saveToFile();

		assert.strictEqual(fs.existsSync('todo.csv'), true);
		let expectedFileContents = "Title,Completed\nsave a csv,true\n";
		let content = fs.readFileSync("todo.csv").toString();
		assert.strictEqual(content, expectedFileContents);
	});
});
