function newFunction(name, age, country) {
    var name = name || 'oscar'
    var age = age || 32
    var country = country || 'MX'
    console.log(name, age, country)
}


// es6
function newFunction2 (name = 'oscar', age = 32, country = 'MX') {
    console.log(name, age, country)
}

newFunction2()
newFunction2('Ricardo', '23', 'CO')


//
let hello = 'Hello'
let world = 'World'
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)
let epicPhrase2 = `{hello} {world}`
console.log(epicPhrase)


//
let lorem = "Lorem Ipsum is simply dummy text of the \n"
+ "printing and typesetting industry."

let lorem2 = `Lorem Ipsum is simply dummy text of the
printing and typesetting industry.`

console.log(lorem)
console.log(lorem2)


//
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age)

let {age, country} = person
console.log(age, country)


//
let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yesica', 'Camila']

let education = ['David', ...team1, ...team2]

console.log(education)


//
{
    var globalVar = 'Global Var'
}

{
    let globalLet = 'Global Let'
    console.log(globalLet)
}

console.log(globalVar)
// console.log(globalLet) // error


//
var a = 'b'
a = 'a'

const a = 'b'
a = 'a'


// ARROW FUNCTIONS, PROMESAS Y PARÁMETROS DE OBJETOS
/////////////////////////////////////////


// Parámetros de objetos
//////
let name = 'Israel'
let age = 35

// ES5
obj = { name: name, age: age}

// ES6
obj2 = { name, age }
console.log(obj2)


// Arrow Functions
//////
const names = [
    {name: 'Israel', age: 35},
    {name: 'Francisco', age: 40}
]

let listOfNames = names.map(function (item) {
    console.log(item.name)
})

let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age, country) => {
    //...
}

const listOfNames4 = name => {
    //...
}

const square = num => num * num


// Promesas
///////
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve ('Hey')
        } else {
            reject ('Ups!!')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))


// CLASES, MODULOS Y GENERADORES
/////////////////////////////////////////


// Clases
//////
class calculator {
    constructor() {
        this.valueA = 0
        this.valueB = 0
    }
    sum(valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

const calc = new calculator()
console.log(calc.sum(2, 2))


// Modulos
//////
const hello = require('./module')

console.log(hello())


// Generadores
//////
function* helloWorld() {
    if (true) {
        yield 'Hello, '
    }
    if (true) {
        yield 'World'
    }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)