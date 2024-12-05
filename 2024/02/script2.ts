import {readFileSync} from "fs";

const file = process.argv[2]
const input = readFileSync(process.cwd() + "/" + file).toString("utf-8").split('\r\n').filter(x => x)


const lines = input
    .map(x => x.split(" ")
        .map(x => parseInt(x)))


function isArrayIncreasing(x: number[]) {
    return x[0] < x[1]
}

function isSafe(x: number[], rec: boolean = true) {

    if(!rec) {
        console.log(x)
    }

    const isIncreasing = isArrayIncreasing(x)

    let allItemSafe = !x.some((elem, index, array) => {
        if(index === x.length - 1) return false

        let diff = !isIncreasing ? elem - array[index + 1] : array[index + 1] - elem;

        return diff > 3 || diff < 1;
    });

    if(allItemSafe) {
        return true
    }
    if(!rec) {
        return false
    }

    return x.some((x2, index, arr) => {
        const newArr = [...arr]
        newArr.splice(index, 1)
        let b = isSafe(newArr, false);

        return b
    })
}

const isLinesGood = lines.filter(x => isSafe(x)).length

console.log(isLinesGood)
