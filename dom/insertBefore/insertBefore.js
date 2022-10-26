// Adicionando elementos
const div = document.creatElement('div');
div.innerText = "Olá Devs!"


// insertBefore: para inserir antes de um elemento
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script)

// insertBefore + nextSlibling : para adicionar o elemento depois de algum outro
/* 
    const body = document.querySelector('body')
    const header = body.querySelector('header')
    body.insertBefore(div, header.nextSibling)
*/


