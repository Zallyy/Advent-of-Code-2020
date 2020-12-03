const fs = require('fs')

let input = fs.readFileSync('./input.txt', 'UTF-8')
input = input.split('\n')

let max = input[1].length
let trees = 0
let horizontal = 0
input = input.map(line => [...line])

for (let i = 0; i < input.length - 1; i++) {
    horizontal = (horizontal + 3) % max
    console.log(horizontal)
    if (input[i + 1][horizontal] == '#') {
        trees++
    }
}

console.log(trees)
