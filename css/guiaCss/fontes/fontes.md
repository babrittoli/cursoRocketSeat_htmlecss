# trabalhando com fontes

Tipografia transmite mensagem

- negrito
- tamanho
- estilo

## basic font properties 

* font-family
* font-weight
* font-style
* font-size

### Font family 
- Tipo de fonte de um elemento
- Lista de fontes e ordem de prioridade
- Inclui *fallback* font

```css
p {
    font-family: "Times New Roman" , Times, serif; 
}
```

- serif
- sans

#### font-weight
- Peso da fonte 

```css
p {
    font-weight: bold;
}
```

##### Font-style
O estilo da fonte, pode ser italico, obliquo ou normal. 

```css 
span {
    font-style: italic;
}
```

###### Font-size
É o que determina o tamanho da fonte.

```css
p {
    font-size: 18px;
}
```

###### Web Fonts
- fontes do sistema
- fontes da web
- como usar as fontes web: google fontes.

* @Import
* @font-face
* link

# Atribuindo mais estilos ás fontes
https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant

*Font Stretch* 
Alargamento ou encolhimento da fonte
Aceita palavras-chaves como: expanded, condensed, normal
Aceita porcentagens de 50% a 200%
Essa propriedade não vai funcionar em todas as fontes

```css
p {
	font-stretch: expanded;
}
```

*Font VARIANT*
- faz variações na apresentação das fontes

```css
p {
	font-variant: small-caps;
}
```

## Letter-spacing
- Espaços entre caracteres (letras)

```css
p {
    letter-spacing: 4px;
}
```

### word-spacing
- Espaços enter caracteres (palavras)

```css
p {
    word-spacing: 4px;
}
```

#### Line-hieght

* Espaços entre linhas
* Pode ser com unidades ou sem unidades de medida
* comuns: 1,5 ou 2.

```css
p {
	line-height: 1.5;
}
```


##### Text transform
- Transformação de texto

```css
p{
    text-transform: uppercase; /* todas as letras maiúsculas*/
}


```css
p{
    text-transform: capitalize; /* todas as letras iniciais ficam maiúsculas*/
}

```css
p{
    text-transform: lowercase; /* todas as letras iniciais ficam minúsculas*/
}
```

##### Text Decoration
* Aparencia decorativa de um texto;
* Line: underline, overline, line-through;
* podemos aplicar mais de 1 valor
* style: wavy, dotted, double, dashed, solid; - estilo de sublinhado.
* color: `<color>´ values

```css
p {
    text-decoration: underline; /* shorthand*/
}
```

#### Text-align
* Alinhamento de texto

```css
p {
    text-align: center; /* start,end,left, right, justify, center, match-parent*/
}
```

## Text-shadow
- Sombra aplicada a um texto
- permite multiplos valores

```css
p {
    text-shadow: 1px 1px 1px red,
                2px 2px 1px green; /* offset-x, offset-y, blur-radius, color*/
}
```

### Shorthand
* Abreviação da estilização

```css 
p {
    /* style, variant, weight, stretch, size, line-height, family*/
    font: oblique normal bold normal 30px/1.5 Times New Roman, serif;
}
