// Outras formas de fazer o evento por js

// por atalho, de forma simplificada, como um atalho - essa forma é desconsiderada se houver outra função igual depois dela

/* 
    const h1 = document.querySelector('h1');
    
    h1.onclick = print

    function print() {
        console.log('print')
    }

*/

// por empilhamento de funções


    const h1 = document.querySelector('h1');

    h1.addEventListener('click', print)

    function print() {
        console.log('print')
    }

    h1.addEventListener('click', function() {
        console.log('outro momento')
    })

