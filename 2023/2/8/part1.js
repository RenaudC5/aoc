let fs = require("fs");
const input = fs.readFileSync(process.cwd() + "/input.txt").toString();

const rows = input.split("\r\n");

const arrayColumn = (arr, n) => arr.map((x) => x[n]);
const colsFormated = [];
for (let i = 0; i < rows.length; i++) {
  colsFormated.push(arrayColumn(rows, i).map((x) => parseInt(x)));
}

const checkValues = (value, index, array) => {
  // check from left to right

  const biggerTreeOnRight = array.slice(0, index).some((x) => x >= value);
  const biggerTreeOnLeft = array.slice(index + 1).some((x) => x >= value);

  return !biggerTreeOnRight || !biggerTreeOnLeft;
};

const rowsFormated = rows.map((x) => x.split("").map((x) => parseInt(x)));

const a = colsFormated.map((col) => {
  return col.map(checkValues);
});

const b = rowsFormated.map((row) => {
  return row.map(checkValues);
});

const total = [];
a.forEach((row, index) => {
  row.forEach((r, i) => {
    if (r) total.push({ x: index, y: i });
  });
});

b.forEach((row, index) => {
  row.forEach((r, i) => {
    if (r) total.push({ x: i, y: index });
  });
});

console.log(
  total.reduce((acc, curr) => {
    const existing = acc.find((x) => x.x === curr.x && x.y === curr.y);
    if (!existing) acc.push(curr);

    return acc;
  }, []).length
);
