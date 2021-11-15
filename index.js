
function factorial(n) {
  if (n === 1) return n;
  else return n * factorial(n - 1);
}

function factiter(n) {
  let ans = 1;
  for (let i = n; i > 0; i++) {
    ans = ans * i;
    const x = new Date().getTime();
    console.log(x + ":" + ans);
  }
  return ans;
}

console.log("Factorial 10 recursive is " + factorial(10));
console.log("Factorial 10 iterative is " + factiter(10));
