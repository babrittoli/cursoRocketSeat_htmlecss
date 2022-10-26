// ALterando estilos
// classList
// toggle : se posiciona com um interruptor on/off, o que tem ele tira, o que não tem ele "considera válido"

const element = document.querySelector('body')

element.classList.add('active', 'green')
console.log(element.classList)
//element.classList.remove('active')
element.classList.toggle('active')