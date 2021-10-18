let computerNumber = 0;
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const computerNumberFunction = () => {
  computerNumber = Math.floor(Math.random() * 1000);
  return computerNumber;
};
rl.on("line", (line) => {
  if (Number(line) === computerNumber) {
    console.log("통과");
    rl.close();
  } else {
    console.log("다시확인");
    console.log(computerNumber);
  }
});
