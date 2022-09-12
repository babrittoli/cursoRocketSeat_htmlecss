## Pseudo-elements

Com pseudo-elements nós podemos adicionar elementos HTML pelo próprio css

`::pseudo-element-name`

## exemplos 
* ::before - adiciona um pseudo-elemento antes do elemento selecionado.
* ::after - adiciona um pseudo-elemento depois do elemento selecionado.
* ::first-line - pega a primeira linha de um texto.

MDN - PSEUDO-ELEMENTS

*::before*

HTML
<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>


CSS
li::before {
  content: "> "
}


*::after*
HTML
<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>

CSS
li::after{
  content: ";"
}


Tanto para o ::before quanto para o ::after é preciso adicionar o content, mesmo que ele seja vazio content = "";

*::first-line* 
HTML
<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>

CSS
p::first-line {
	font-weight: bold;
}