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

        if(right.has(r)) {
            right.set(r, right.get(r) + 1)
        } else {
            right.set(r, 1)
        }


        return {left, right}
    }, {left: [], right: new Map()})

const total = input.left.reduce((acc, curr) => {
    if(input.right.has(curr)) {
        return acc + parseInt(curr) * input.right.get(curr)
    }

    return acc
}, 0)

console.log(total)
