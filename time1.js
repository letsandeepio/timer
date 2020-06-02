const getArguments = () => {
  const arg = process.argv.slice(2);
  if (arg.length === 0) {
    console.log('Please provide agrument to set a timer for.');
    process.exit(1);
  } else {
    return arg;
  }
};

const cleanArguments = (arr) => {
  return arr
    .map((arg) => Number(arg))
    .filter((item) => {
      if (item < 0 || isNaN(item)) {
        return false;
      } else {
        return true;
      }
    });
};

const startTimer = (arr) => {
  for (const timer of arr) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log('beep');
    }, timer * 1000);
  }
};

startTimer(cleanArguments(getArguments()));
