let fs = require("fs");

const input = fs.readFileSync(process.cwd() + "/input.txt").toString();
const elfeCarryingArray = input.split(/\n\s*\n/).map((elfeArray) => {
  const soloElfeArray = elfeArray.split("\r\n");
  return soloElfeArray.map((x) => parseInt(x));
});

const maxElfeCarry = elfeCarryingArray.reduce((acc, curr) => {
  const total = curr.reduce((total, value) => total + value, 0);

  return total > acc ? total : acc;
}, 0);

console.log(maxElfeCarry);
