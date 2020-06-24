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