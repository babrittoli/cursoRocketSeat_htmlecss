## Border 
 As bordas da caixa

 * Propriedades
 #<border-style>: style - solid, dotted, dashed, double, groove, ridge, inset, outset
 - <border-width>: width - <length> 
 - <border-color>: color - <color>

```css
div {
    /* shorthand */
    border-top: solid 2px; /*top| right| bottom| left*/

    /* style */
    border: solid; 

    /* width <length> | style */
    border: 2px dotted;
    
    /* style | color */
    border: outset #f33;

    /* width | style | color */
    border: medium dashed green
}

## Outline - contorno

- Difere em 4 sentidos
* Não modifica o tamanho da caixa, porque não faz parte do box model
* Poderá ser diferente de retangular 
* Não permite ajustes individuais
* Mais usado pelo user agent para acessibilidade