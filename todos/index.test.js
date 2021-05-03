const Todos = require('./index');
const assert = require('assert').strict;
const fs = require('fs');

describe ('integration test', function () {
	it ('should be able to add and complete todos', function (){
		let todos = new Todos();
		assert.strictEqual(todos.list().length, 0);

		todos.add("run code");
		assert.strictEqual(todos.list().length, 1);
		assert.deepStrictEqual(todos.list(), [{title: "run code", completed: false}]);

		todos.add("test everything");
		assert.strictEqual(todos.list().length, 2);
		assert.deepStrictEqual(todos.list(), [
			{ title: "run code", completed: false },
			{ title: "test everything", completed: false }
		]);

		todos.complete("run code");
		assert.deepStrictEqual(todos.list(), 
			[
				{ title: "run code", completed: true },
				{ title: "test everything", completed: false }
			]
		);

	});

});


describe("complete()", function () {
	it ('should fail if there are no TODOS', function() {
		let todos = new Todos();
		const expectedError = new Error("No Todo was found with the title : \"doesn't exists\"");

		assert.throws(() => {
			todos.complete("doesn't exists");
		}, expectedError);
	});
});

describe ("saveToFile()", function () {
	it ("should save a single Todo", function (done) {
		let todos = new Todos();
		todos.add("save a csv");
		todos.saveToFile((err) => {
			assert.strictEqual(fs.existsSync('todo.csv'), true);
			let expectedFileContents = "Title,Completed\nsave a csv,false\n";
			let content = fs.readFileSync("todo.csv").toString();
			assert.strictEqual(content, expectedFileContents);
			done(err);
		});
	});
});
