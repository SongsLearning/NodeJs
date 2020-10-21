const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


  rl.on('line', (input) => {
      if(input == 'exit'){
          rl.close();
      }

    console.log(`Received: ${input}`);
      rl.prompt();
});

  rl.on('close', () => {
    process.exit();
  });