// Criando e adicionando elementos no html

// creatElement
const div = document.createElement('div');
div.innerText = "Olá Devs!"

// append: add depois do ultimo filho
/* const body = document.querySelector('body')

body.append(div) */

//prepend: add antes de todos os filhos já existentes
const body = document.querySelector('body')

body.prepend(div)