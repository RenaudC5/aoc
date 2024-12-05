import {readFileSync} from "fs";

const file = process.argv[2]
const pages = readFileSync(process.cwd() + "/" + file).toString("utf-8").split('\r\n')

const lastPagesIndex = pages.findIndex(x => x === "")
const printOrder = pages.splice(lastPagesIndex).filter(x => x)

const mappedPages = pages.reduce((acc, curr) => {
    const [l,r] = curr.split("|")

    if(acc.has(l)) {
        acc.set(l, [...acc.get(l), r])
    } else {
        acc.set(l, [r])
    }

    return acc

}, new Map<string, string[]>())

function isPrintValid(x: string, mappedPages: Map<string, string[]>) {
    const orderList = x.split(",")

    for(let i = 0; i < orderList.length; i++) {
        const item = orderList[i]
        const remainingList = [...orderList].slice(i + 1, orderList.length)

        const isValid = !remainingList.some(x => {
            let strings = mappedPages.get(x);

            if(!strings) {
                return false
            }

            return strings.includes(item)
        })

        if(!isValid) return false
    }

    return true
}

console.log(mappedPages)

const badPages = printOrder.filter(x => !isPrintValid(x, mappedPages))
const sortedBadPages = badPages.map(x => {
    let strings = x.split(',');
    return [...strings.sort((a, b) => {
        const first = mappedPages.get(a)
        const second = mappedPages.get(b)

        if(!first) {
            return 1
        }

        if(!second) {
            return -1
        }

        if(first.includes(b)) {
            return -1
        }

        return 1
    })]
})

const sum = sortedBadPages.reduce((acc, list) => {
    const current = list[((list.length - 1) / 2)]

    return acc + parseInt(current)
}, 0)

console.log(sum)
