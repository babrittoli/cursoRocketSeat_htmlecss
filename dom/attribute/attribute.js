// Manipulando Elementos
// Atributos - adicionar e remover

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')

header.setAttribute('class', 'bg header')