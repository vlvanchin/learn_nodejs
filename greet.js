// init greet function
function greet(name) {
  if (name == undefined)
    console.log (` Hello, world!`);
  else 
    console.log (` Hello, ${name}!`);
}

// invoke greet
greet();
greet("van");
