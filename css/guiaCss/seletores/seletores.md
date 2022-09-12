*SELETORES*

Conecta um elemento html com o CSS a fim de alterar o elemento

## Tipos

- *Element Selector*
    Todos os elementos do html


HTML

<h1>Título da página</h1>
<p>Conteúdo da minha página</p>
CSS

h1 {
	color: blue;
	font-size: 60px;
}

p {
	color: green;
}



- *ID Selector*
    Um elemento que tenha um atributo "id".
    Cada id deverá ser único

HTML

<h1 id="title">Título da página</h1>
<p id="content">Conteúdo da minha página</p>
CSS

#title {
  color: yellow;
}

#content {
	color: orange;
}

- *Class Selector*
    Os elementos que contenha um atributo 'class'.
    Podemos ter uma ou mais classes.

HTML

<h1 class="red big">Título da página</h1>
<p class="red big">Conteúdo da minha página</p>
CSS

.red {
color: red;
}

.big {
	font-size: 3em;
}

- *Attribute Selector*
    Um elemento que tenha um atributo específico

HTML

<h1 title="Algum titlulo">Título da página</h1>
<p title="Conteúdo da página">Conteúdo da minha página</p>
CSS

[title] {
	color: orange;
}

- *Pseudo-class Selector*
    Elementos em um estado específico

HTML

<h1 class="red big">Título da página</h1>
<p class="red big">Conteúdo da minha página</p>
CSS

p:hover {
	color: red;
}

h1:hover {
	color: red;
}

- *Múltiplos*
    É possível selecionar múltiplos elementos e aplicar alguma regra CSS para todas elas 

Usamos uma separação por vírgulas para isso:

h1, p, .title, .title:hover {
	color: red;
}

