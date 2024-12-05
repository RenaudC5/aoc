import {readFileSync} from "fs";

const file = process.argv[2]

const regex = /mul\(\d{1,3},\s?\d{1,3}\)/g

const input = readFileSync(process.cwd() + "/" + file).toString("utf-8")

const match = input.match(regex)

console.log(match.reduce((acc, curr) => {
    const [l,r] = curr.replace("mul(", "").replace(")", "").split(',')

    return acc + parseInt(l) * parseInt(r)
}, 0))
