// Object entries
//////
const data = {
    frontend: 'Israel',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)


// Object values
//////
const data = {
    frontend: 'Israel',
    backend: 'Isabel',
    design: 'Ana'
}

const values = Object.values(data)
console.log(values)
console.log(values.length)


// Paddings
//////
const string = 'hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, ' ------'))
console.log('food'.padEnd(12, '  ------'))


// Trailing comas
//////
const obj = {
    name: 'Israel',
}