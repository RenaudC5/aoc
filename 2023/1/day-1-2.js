let fs = require("fs");

const NUMBER_OF_ELFES = 1;

const input = fs.readFileSync(process.cwd() + "/input.txt").toString();
const elfeCarryingArray = input.split(/\n\s*\n/).map((elfeArray) => {
  const soloElfeArray = elfeArray.split("\r\n");
  const carryArray = soloElfeArray.map((x) => parseInt(x));
  const total = carryArray.reduce((acc, curr) => acc + curr, 0);

  return total;
});

const topThreeElfe = elfeCarryingArray.reduce((acc, curr) => {
  if (acc.length < NUMBER_OF_ELFES) {
    acc.push(curr);
  } else {
    const lastElfeTotal = acc[NUMBER_OF_ELFES - 1];
    if (lastElfeTotal < curr) {
      acc[NUMBER_OF_ELFES - 1] = curr;
    }
  }

  return acc.sort().reverse();
}, []);

console.log(topThreeElfe.reduce((acc, curr) => acc + curr, 0));
