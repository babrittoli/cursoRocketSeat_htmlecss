## AÇÕES DO USUÁRIO

* *:hover*

HTML
<a href="#">CLIQUE AQUI</a>

CSS
a:hover {
  color: red;
}

Vai mudar a cor do link para vermelho quando o usuário passar o mouse sobre o link


* *:focus*

HTML
<input type="text">

CSS
input:focus {
  border-color: red;
}

É aplicado quando o elemento recebe o foco da ação do usuário que pode ser feita utilizando o teclado ou clicando no elemento com o mouse. É comumente usado em campos de input como uma forma de mostrar qual o input "ativo".

## Atributos para desabilitar o campo input

*:disabled*

HTML

<input type="text" disabled>
CSS

input:disabled {
  background-color: green;
}


:*required*

HTML

<input type="text" required>
CSS

input:required {
  background-color: red;
}

Estudar mais coisas MDN PSEUDO-CLASSES.