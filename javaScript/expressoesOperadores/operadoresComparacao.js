//operadores de comparação

//irá comparar valores e retornar um boolean como resposta à comparação

let one = 1
let two = 2

// == igual a 
console.log(two == 1) //false
console.log(one == "1") //true

// != diferente de 
console.log(one != two) //true
console.log(one != 1) //false
console.log(one != "1") //false

// === etritamente igual a 
console.log(one === "1") //false
console.log(one === 1) // true

//!== estritamente diferente de
console.log(two !== "2") //true
console.log(two !== 2) //false

// > Maior que
console.log(one > two) //false

// >= maior igual a 
console.log(one >= 1) // true
console.log(two >= 1) // true

// < menor que 
console.log(one < two) // true

// <= Mneor igual a 
console.log(one <= two) // true
console.log(one <= 1) // true
console.log(one <= 0) // false
