let fs = require("fs");

const input = fs.readFileSync(process.cwd() + "/input.txt").toString();
const array = input.split("\r\n");

const piles = [
  ["H", "C", "R"],
  ["B", "J", "H", "L", "S", "F"],
  ["R", "M", "D", "H", "J", "T", "Q"],
  ["S", "G", "R", "H", "Z", "B", "J"],
  ["R", "P", "F", "Z", "T", "D", "C", "B"],
  ["T", "H", "C", "G"],
  ["S", "N", "V", "Z", "B", "P", "W", "L"],
  ["R", "J", "Q", "G", "C"],
  ["L", "D", "T", "R", "H", "P", "S", "F"],
];

for (const move of array) {
  let numbers = move.match(/\d/g).map((x) => parseInt(x));
  if (numbers.length > 3) {
    numbers = [numbers[0] + numbers[1], numbers[2], numbers[3]];
  }

  const [nbCaisse, start, end] = numbers;

  for (let i = 0; i < nbCaisse; i++) {
    const caisse = piles[start - 1].pop();
    if (caisse != undefined) {
      piles[end - 1].push(caisse);
    }
  }
}

console.log(piles.map((x) => x[x.length - 1]).join(""));
