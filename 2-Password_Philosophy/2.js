const fs = require('fs')

let input = fs.readFileSync('./input.txt', 'UTF-8')
input = input.split('\n')

let total = 0

input.forEach(value => {
    let passwordIndex = value.indexOf(':') + 2
    let minIndex = value.indexOf('-')
    let maxIndex = value.indexOf(' ')
    let password = value.slice(passwordIndex, value.length)
    let min = value.slice(0, minIndex)
    let max = value.slice(minIndex + 1, maxIndex)
    let letter = value.slice(maxIndex + 1, passwordIndex - 2)

    let included = 0
    let indexes = ['lmao']

    for (let i = 0; i < password.length; i++) {
        if (password[i] == letter) {
            included++
        }
        indexes.push(password[i])
    }
    if (indexes[min] == letter || indexes[max] == letter) {
        if (!(indexes[min] == letter && indexes[max] == letter)) {
            total++
        }
    }
})

console.log(total)
