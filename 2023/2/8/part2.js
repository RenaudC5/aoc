let fs = require("fs");
const input = fs.readFileSync(process.cwd() + "/input.txt").toString();

const rows = input.split("\r\n");

const arrayColumn = (arr, n) => arr.map((x) => x[n]);
const colsFormated = [];
for (let i = 0; i < rows.length; i++) {
  colsFormated.push(arrayColumn(rows, i).map((x) => parseInt(x)));
}

const rowsFormated = rows.map((x) => x.split("").map((x) => parseInt(x)));

const getValues = (value, index, array) => {
  const left = array.slice(index + 1);
  const right = array.slice(0, index).reverse();

  const nbLeft = left.reduce(
    (acc, curr) => {
      if (acc.finish) return acc;
      else if (curr >= value) return { total: acc.total + 1, finish: true };

      return { total: acc.total + 1, finish: false };
    },
    { total: 0, finish: false }
  ).total;

  const nbRight = right.reduce(
    (acc, curr) => {
      if (acc.finish) return acc;
      else if (curr >= value) return { total: acc.total + 1, finish: true };

      return { total: acc.total, finish: false };
    },
    { total: 0, finish: false }
  ).total;

  return [nbRight, nbLeft];
};

const a = rowsFormated.map((row) => row.map(getValues));
const b = colsFormated.map((col) => col.map(getValues));

const total = [];

a.forEach((row, index) => {
  row.forEach(([left, right], i) => {
    total.push({ x: index, y: i, left, right });
  });
});

b.forEach((row, index) => {
  row.forEach(([top, bottom], i) => {
    const item = total.find((x) => x.x === i && x.y === index);
    item.top = top;
    item.bottom = bottom;
  });
});
console.log(total);
console.log(
  total.reduce((acc, curr) => {
    const total = curr.left * curr.right * curr.top * curr.bottom;
    return acc > total ? acc : total;
  }, 0)
);
