/*
SCOPE
Parâmetros, mesmo se tiverem o mesmo nome que alguma
outra variável do seu código, são apenas modificados e
persistem no escopo da função.*/

// function scope
/*let subject

function createThink(subject) {
    return 
}

console.log(createThink(subject)) */ 

/* function scope
let subject = 'create video'

function createThink(subject) {
    return subject
}

console.log(subject)
console.log(createThink(subject)) */



/** 

let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}


console.log(createThink(subject))
console.log(subject)

*/

/*
let subject = 'create video'

function createThink() {
    subject = 'study'
    return subject
}


console.log(createThink(subject))
console.log(subject)
*/

let subject 

function createThink() {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))
console.log(subject)