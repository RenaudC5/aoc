import {readFileSync} from "fs";

const file = process.argv[2]

const regex = /(mul\(\d{1,3},\s?\d{1,3}\)|don't\(\)|do\(\))/g

const input = readFileSync(process.cwd() + "/" + file).toString("utf-8")

const match = input.match(regex)

console.log(match)

let currentOp = true

let sum = match.reduce((acc, curr) => {

    if(curr === "do()") {
        currentOp = true
        return acc
    }

    if(curr === "don't()") {
        currentOp = false
        return acc
    }

    if(!currentOp) {
        return acc
    }

    const [l,r] = curr.replace("mul(", "").replace(")", "").split(',')

    return acc + parseInt(l) * parseInt(r)
}, 0);



console.log(sum)
