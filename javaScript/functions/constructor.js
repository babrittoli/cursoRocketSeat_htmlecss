/* 
    FUNCTION() CONSTRUCTOR

    * EXPRESSÃO NEW
    * CRIAR UM NOVO OBJETO
    * THIS KEYWORD

*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const Barbara = new Person ("BARBARA")
const Jean = new Person ("Jean")

console.log(Barbara.walk())
console.log(Jean.walk())