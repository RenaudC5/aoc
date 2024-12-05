let fs = require("fs");

/*
    A = Rock = X = 1
    B = Paper = Y = 2
    C = Scissors = Z = 3
*/

const drawPointsTable = {
  A: 1,
  B: 2,
  C: 3,
};

const losePointTable = {
  A: 3,
  B: 1,
  C: 2,
};

const winPointTable = {
  A: 2,
  B: 3,
  C: 1,
};

const getPoints = (opponentMove, yourInstruction) => {
  switch (yourInstruction) {
    case "X":
      //lose
      return losePointTable[opponentMove];
    case "Y":
      //draw
      return drawPointsTable[opponentMove] + 3;
    case "Z":
      //win
      return winPointTable[opponentMove] + 6;
  }
};

const input = fs.readFileSync(process.cwd() + "/input.txt").toString();
const array = input.split("\r\n").map((row) => {
  const [a, b] = row.split(" ");
  return {
    you: b,
    oponnent: a,
    points: getPoints(a, b),
  };
});
console.log({ array });

const total = array.reduce((acc, curr) => acc + curr.points, 0);

console.log({ total });
