let fs = require("fs");

/*
    A = Rock = X = 1
    B = Paper = Y = 2
    C = Scissors = Z = 3
*/

const tablePointsChose = {
  X: 1,
  Y: 2,
  Z: 3,
};

const DRAW = 3;
const WIN = 6;
const LOSE = 0;
const tableWinOrLose = {
  "A X": DRAW,
  "A Y": WIN,
  "A Z": LOSE,
  "B X": LOSE,
  "B Y": DRAW,
  "B Z": WIN,
  "C X": WIN,
  "C Y": LOSE,
  "C Z": DRAW,
};

const input = fs.readFileSync(process.cwd() + "/input.txt").toString();
const array = input.split("\r\n").map((row) => {
  const [a, b] = row.split(" ");
  return {
    you: b,
    oponnent: a,
    points: tableWinOrLose[row] + tablePointsChose[b],
  };
});
console.log({ array });

const total = array.reduce((acc, curr) => acc + curr.points, 0);

console.log({ total });
