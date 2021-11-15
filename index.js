var fs = require("fs");
var util = require("util");
var log_file = fs.createWriteStream(__dirname + "/debug.log", { flags: "w" });
var log_stdout = process.stdout;
const log = function (d) {
  log_file.write(util.format(d) + "\n");
  log_stdout.write(util.format(d) + "\n");
};

function factorial(n) {
  if (n === 1) return n;
  else return n * factorial(n - 1);
}

function factiter(n) {
  let ans = 1;
  for (let i = n; i > 0; i++) {
    ans = ans * i;
    const x = new Date().getTime();
    log(x + ":" + ans);
  }
  return ans;
}

console.log("Factorial 4 recursive is " + factorial(4));
console.log("Factorial 4 iterative is " + factiter(4));
