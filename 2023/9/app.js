let fs = require("fs");
const input = fs.readFileSync(process.cwd() + "/input.txt").toString();
const data = input.split("\r\n");

const operations = data.reduce(
  (acc, curr) => {
    if (curr === "") {
      acc.push([]);
    } else {
      acc[acc.length - 1].push(JSON.parse(curr));
    }

    return acc;
  },
  [[]]
);

const compareOperand = (operand1, operand2) => {
  for (let i = 0; i < operand1.length; i++) {
    if (typeof operand1[i] === "object" && typeof operand2[i] === "object") {
      const value = compareOperand(operand1[i], operand2[i]);
      if (typeof value === "boolean") return value;
    } else if (typeof operand1 === "object") {
      const value = compareOperand(operand1, [operand2]);
      if (typeof value === "boolean") return value;
    } else if (typeof operand2 === "object") {
      const value = compareOperand([operand1], operand2);
      if (typeof value === "boolean") return value;
    } else {
      if (operand1[i] !== operand2[i]) {
        return operand1 < operand2[i];
      }
    }
  }

  return true;
};

const final = operations.map(([operand1, operand2]) => {
  return compareOperand(operand1, operand2);
});

console.log(final);
