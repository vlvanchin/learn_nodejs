const args = process.argv.slice(2);
//console.log(process.env[args[0]]);

// to process more than one argument
args.forEach( arg => {
  //  console.log(process.env[arg]);
  let envValue = process.env[arg];

  if (envValue === undefined) {
	  console.error(`could not find "${arg}" in env`);
  } else {
	  console.log(envValue);
  }
});
