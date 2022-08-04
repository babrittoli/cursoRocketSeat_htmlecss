# Selectors
- conecta um elemento HTML a um elemento CSS. 

## Tipos

- Global Selector ´*`
- elemente/type selector ´h1,h2,p,div`
- Id Selector ´#box, #container`
- Class selector ´.red, .m-4`
- Atribute selector, Pseudo-class, Pseudo-element, e outros.


html
<div id="container" class="m-40">
	<h1>Título</h1>
	<h2>Subtitulo</h2>
</div>

CSS
/* ID selector - tamanho do fundo da caixa de texto da palavra*/
#container
{
	width: 200px;
}

/* Class selector - margem*/
.m-40 
{
	margin: 40px;
}

/* Element/Type selector + Agrupamento de seletores */
h1, h2 
{
	color: blue;
	font-size: 60px;
	background: gray;
}

