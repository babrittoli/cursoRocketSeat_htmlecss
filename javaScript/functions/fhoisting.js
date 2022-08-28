// Function hoisting

/*O JavaScript possui function hoisting, permitindo
que uma função seja declarada depois de ser utilizada,
pois faz algo similar a elevar no código declarações
de funções. Porém isso não acontece dentro de variáveis. */

//correto

                sayMyName()

                function sayMyName() {
                    console.log ('BARBARA')
                }



//incorreto (var, const, let)
/*
                sayMyName()

                var sayMyName = function() {
                    console.log ('BARBARA')
                }
*/
