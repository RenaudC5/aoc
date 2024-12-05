import {readFileSync} from "fs";

const file = process.argv[2]
const input = readFileSync(process.cwd() + "/" + file).toString("utf-8").split('\r\n').map(x => x.split(''))

let sum = 0

function isXmas(i: number, j: number, input: string[][]) {
    // check for all 8 direction
    let total = 0

    const numberOfCols = input[i].length
    // left
    if(i >= 3) {
       let good = input[i-1][j] === "M" && input[i-2][j] === "A" && input[i-3][j] === "S"
        total += good ? 1 : 0
    }

    // Top left
    if(i >= 3 && j >=3) {
        let good = input[i-1][j-1] === "M" && input[i-2][j-2] === "A" && input[i-3][j-3] === "S"
        total += good ? 1 : 0
    }

    // Top
    if(j >=3) {
        let good = input[i][j-1] === "M" && input[i][j-2] === "A" && input[i][j-3] === "S"
        total += good ? 1 : 0
    }

    // Top right
    if(i <= input.length - 3 && j >=3) {
        let good = input[i+1][j-1] === "M" && input[i+2][j-2] === "A" && input[i+3][j-3] === "S"
        total += good ? 1 : 0
    }

    // right
    if(i <= input.length - 3) {
        let good = input[i+1][j] === "M" && input[i+2][j] === "A" && input[i+3][j] === "S"
        total += good ? 1 : 0
    }

    // bottom right
    if(i <= input.length - 3 && j <= numberOfCols - 3) {
        let good = input[i+1][j+1] === "M" && input[i+2][j+2] === "A" && input[i+3][j+3] === "S"
        total += good ? 1 : 0
    }

    // bottom
    if(j <= numberOfCols - 3) {
        let good = input[i][j+1] === "M" && input[i][j+2] === "A" && input[i][j+3] === "S"
        total += good ? 1 : 0
    }

    // bottom left
    if(j <= numberOfCols - 3 && i >= 3) {
        let good = input[i-1][j+1] === "M" && input[i-2][j+2] === "A" && input[i-3][j+3] === "S"
        total += good ? 1 : 0
    }

    return total
}

for(let i= 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        let letter = input[i][j];
        console.log(letter)
        if(letter === "X") {
            const number = isXmas(i,j, input)
            sum += number
        }
    }
}
console.log(sum)
