const fs = require('fs')

let input = fs.readFileSync('./input.txt', 'UTF-8')
input = input.split('\n')
input = input.map(num => +num)

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
        for (let k = 0; k < input.length; k++) {
            if (input[i] + input[j] + input[k] == 2020) {
                console.log(input[i] * input[j] * input[k])
            }
        }
    }
}
