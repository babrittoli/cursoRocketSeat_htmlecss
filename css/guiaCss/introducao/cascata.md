# A cascata (cascading)

A escolha do browser de qual regra se aplica, caso haja muitas regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo
É levado em consideração 3 fatores
- origem do estilo
- especificidade
- importância 

* Origem do estilo (nível de força)
inline (atributo style) > tag style > tag link

* Especificidade
É um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados

Os mais fracos são universal selector, combinators e negation pseudo-class, com o valor de 0.
css
*{
    color:green;
} 

Em seguida, com valor de 1, são os element type selector e pseudo-elements.
css
h1 {
    color: blue;
}

Também temos os classes e attribute selectors, com valor de 10, ou seja, são mais fortes que os anteriores.
css
.title {
    color: red;
}

O segundo mais forte, ID selector, com um valor de 100, vence todos os selectors anteriores.
html
<h1 class="title" id="my-title">Título</h1>

css
#my-title {
    color: gray;
    }

Por fim, temos o inline, com o valor 1000.
html
<h1 style="color: orange;">Título</h1>

# regra !important
- cuidado, evite seu uso
- não é considerado uma boa prática
- quebra o fluxo natural da cascata
- é utilizada para tirar a relevancia dos outros niveis de força



