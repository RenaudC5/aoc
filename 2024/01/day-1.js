let fs = require("fs");
const input = fs.readFileSync(process.cwd() + "/input.txt")
    .toString().split("\r\n").map(x => {
        const [left, right] = x.split("   ")
        return [left, right]
    }).reduce(({left, right}, curr) => {

        const [l, r] = curr

        if(!l || !r) {
            return {left, right}
        }

        left.push(l)
        right.push(r)


        return {left, right}
    }, {left: [], right: []})

const rightSorted = input.right.sort()
const leftSorted = input.left.sort()

const total = rightSorted.reduce((acc, curr, index) => {
    return acc + Math.abs(parseInt(curr) - parseInt(leftSorted[index]))
}, 0)

console.log(total)
