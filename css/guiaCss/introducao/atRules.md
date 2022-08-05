# At-rules

- está relacionado ao comportamento do css
- Começa com o sinal de @ seguido por um identificador e valor

## Exemplos
-@import /* usado para incluir CSS externo */
-@media /* regras condicionais para dispositivos*/
-@font-face /* fontes externas */
-@key-frames /* animation */

``` css
@import url("https://local.com/style.css");

@media (min-width: 500px) {
    /*Rules here*/
}

@font-face {
    /*Rules here*/
}

@keyframes nameofanimation {
    /*Rules here*/
}
