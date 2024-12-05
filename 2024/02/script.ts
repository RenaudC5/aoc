import {readFileSync} from "fs";

const file = process.argv[2]
const input = readFileSync(process.cwd() + "/" + file).toString("utf-8").split('\r\n').filter(x => x)


const lines = input
    .map(x => x.split(" ")
        .map(x => parseInt(x)))


function isArrayIncreasing(x: number[]) {
    return x[0] < x[1]
}

function isSafe(x: number[]) {
    const isIncreasing = isArrayIncreasing(x)

    return !x.some((elem, index, array) => {
        if(index === x.length - 1) return false

        let diff = !isIncreasing ? elem - array[index + 1] : array[index + 1] - elem;

        return diff > 3 || diff < 1
    })
}

const isLinesGood = lines.filter(x => isSafe(x)).length

console.log(isLinesGood)
