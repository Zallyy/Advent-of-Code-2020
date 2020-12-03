const fs = require('fs')

let input = fs.readFileSync('./input.txt', 'UTF-8')
input = input.split('\n')

//Get how many to % by
let lengthOfLine = input[0].length
input = input.map(line => [...line])

function findTrees(right, down) {
    let x_axis = 0
    let trees = 0
    for (let i = 0; i < input.length - 1; i += down) {
        if (i + down > input.length) return trees
        x_axis = (x_axis + right) % lengthOfLine
        if (input[i + down][x_axis] == '#') {
            trees++
        }
    }
    return trees
}

let a = findTrees(1, 1)
let b = findTrees(3, 1)
let c = findTrees(5, 1)
let d = findTrees(7, 1)
let e = findTrees(1, 2)

console.log(a * b * c * d * e)
