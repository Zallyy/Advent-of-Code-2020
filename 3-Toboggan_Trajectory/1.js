const fs = require('fs')

let input = fs.readFileSync('./input.txt', 'UTF-8')
input = input.split('\n')

//Get What we will % by
let lengthOfLine = input[0].length

let trees = 0
let x_axis = 0
input = input.map(line => [...line])

for (let i = 0; i < input.length - 1; i++) {
    x_axis = (x_axis + 3) % lengthOfLine
    if (input[i + 1][x_axis] == '#') {
        trees++
    }
}

console.log(trees)
