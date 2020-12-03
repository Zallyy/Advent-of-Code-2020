const fs = require('fs')

let input = fs.readFileSync('./input.txt', 'UTF-8')
input = input.split('\n')

let max = input[1].length
input = input.map(line => [...line])

function findTrees(right, down) {
    let horizontal = 0
    let trees = 0
    for (let i = 0; i < input.length - 1; i += down) {
        if (i + down > input.length) return trees
        horizontal = (horizontal + right) % max
        if (input[i + down][horizontal] == '#') {
            trees++
        }
    }
    console.log(trees)
    return trees
}

let a = findTrees(1, 1)
let b = findTrees(3, 1)
let c = findTrees(5, 1)
let d = findTrees(7, 1)
let e = findTrees(1, 2)

console.log(a * b * c * d * e)
