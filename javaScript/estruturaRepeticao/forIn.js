// estrutura de repetição

//Criar um loop em cima das propriedades de um objeto

let person = {
    name: 'BARBARA',
    age: 25, 
    weigth: 61
}

for(let property in person) {
    console.log(property)
}

//console.log(person["name"])
//console.log(person.name)
//console.log(person[property])