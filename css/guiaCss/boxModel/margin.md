## Margin
Espaços entre os elementos

Propriedades:
# margin-top
# margin-left
# margin-right
# margin-bottom

Valores aceitaveis:
<length> | <percentage> | auto

Geralmente usamos uma forma abreviada (shorthand) - faremos agrupamentos - para escrever o margin. Esse formato segue o sentido horário iniciando pelo *top*, seguindo para *right*, *bottom* e *left*.


```css
div{
    /* Shorthand */
    margin: 12px 16px 10px 4px
    margin: 12px 16px 0
    margin: 8px 16px
    margin: 8px

}

* Cuidado com margin collapsing (top se junta ao bottom)