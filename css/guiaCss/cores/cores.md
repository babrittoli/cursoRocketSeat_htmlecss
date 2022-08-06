Usamos CSS para alterar cores do nosso documento

## TIPOS 
* background-color (para caixas)
* color (para textos)
* border-color (para caixas)
* outros

## VALORES
Podem ser definidos por:
* Palavra-chave (blue, transparent)
* Hexadecimal (#089)
* Funções: rgb, rgba, hsl, hsla.

```css 
element{
    /*Keyword values*/
    color: currentcolor;

    /* <named-color> values */
    color: red; 
    color: orange;
    color: tan;
    color: rebeccapurple;

    /* <hex-color> values 0-F - Para utilização de cores secundárias*/
    color: #090; /*RED GREEN BLUE*/
    color: #009900;
    color: #090a;
    color: #009900aa;


    /*RED GREEN BLUE*/
    color: rgb(34, 12, 64, 0.6) /* 0 (PRETO) -255 (MAIOR INCIDENCIA DA COR UTILIZADA) */
    color: rgba(34, 12, 64, 0.6)
    color: rgb(34 12 64 / 0.6)
    color: rgba(34, 12, 64/ 0.3)
    color: rgb(34.0 12 64 / 60%)
    color: rgba(34.6 12 64 / 30%)

    /*<hsl()> Values - saturação e angulos*/
    color: hsl(30,100%, 50%, 0.6);
    color: hsla(30,100%, 50%, 0.6);
    color: hsl(30 100% 50% / 0.6);
    color: hsla(30 100% 50% / 0.6);
    color: hsl(30.0 100% 50% / 60%);
    color: hsla(30.2 100% 50% / 60%);

    /* Global values */
    color: inherit (vai herdar as cores do elemento anterior)
    color: initial (vai voltar a cor inicial, resetar)
    color: unset (Não definindo a cor nesse caso vai acabar adotando a cor do contexto atual)
    
}
