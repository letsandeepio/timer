/* eslint-disable space-before-function-paren */

const handleEndInput = (data) => {
  if (data === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
};

const setTimer = (seconds, stdinObj) => {
  console.log(`Setting timer for ${seconds} seconds`);
  setTimeout(function () {
    console.log('\007');
    console.log('beep');
    stdinObj.resume();
  }, seconds * 1000);
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleEndInput);
  stdin.on('data', function (data) {
    if (data === 'b') {
      console.log('\007');
      console.log('beep');
    }
    let numSeconds = parseInt(data);
    if (numSeconds > 0 && numSeconds <= 9) {
      console.log(data);
      stdin.pause();
      setTimer(numSeconds, stdin);
    }
  });
  return stdin;
};

const main = () => {
  console.log(
    'Welcome to Custom Alarm 0.1.0 by Sandeep Kumar Chopra (sandeepchopra7@gmail.com)\nPress ctrl+c to exit.\nPress Key 1 to 9 to set timer in seconds.'
  );
  setupInput();
};

main();
