import {readFileSync} from "fs";

const file = process.argv[2]
const input = readFileSync(process.cwd() + "/" + file).toString("utf-8").split('\r\n').map(x => x.split(''))

let sum = 0

function isXmas(i: number, j: number, input: string[][]) {
    // check for all 8 direction
    let total = 0

    const numberOfCols = input[i].length
    // left

    if(i === 0 || i === input.length) {
        return 0
    }

    if(j === numberOfCols || j === 0) {
        return 0
    }

    const firstDiagGood = (input[i-1][j-1] === "M" && input[i+1][j+1] === "S") || (input[i-1][j-1] === "S" && input[i+1][j+1] === "M")
    const secondDiagGood = (input[i+1][j-1] === "M" && input[i-1][j+1] === "S") || (input[i+1][j-1] === "S" && input[i-1][j+1] === "M")


    if(firstDiagGood && secondDiagGood) {
        return 1
    }

    return 0
}

for(let i= 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        let letter = input[i][j];
        if(letter === "A") {
            const number = isXmas(i,j, input)
            sum += number
        }
    }
}
console.log(sum)
