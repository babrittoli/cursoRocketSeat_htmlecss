// THROW e Try Catch

/*
        THROW: LANÇAR, DISPARAR
        CATCH: PEGAR
        TRY: TENTAR

vamos tentar executar um bloco de código, e se der algum erro, 
será disparado e capturado na nossa aplicação.
*/

function sayMyName(name = '') {
    if (name === '') {
        throw  'Nome é obrigatório'
    }
    console.log(name)
}

// try-catch
try {
    sayMyName('Barbara')
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')