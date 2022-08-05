# Shorhand 
- Por ele podemos fazer a junção de propriedades
- Diversas propriedades de forma Resumida
- Muito mais legível 

```css
/* Background properties */
{
background-color: #000;
background-image: url(image/bg.gif);
background-repeat: no-repeat;
background-position: left top;
}

/* Backgroun shorthand */
Background: #000 url(images/bg.gif) no-repeat left top; 

/* Font properties */
font-style: italic;
font-weight: bold; 
font-size: .8em; 
line-height: 1.2;
font-family: Arial, sans-serif

font: italic bold .8em/1.2 Arial, sans-serif;

Detalhes: 
* Não irá considerar propriedades anteriores, ou seja, caso faça um shorthand, apenas ele será considerado, quaisquer propriedades anteriores serão substituídas pelas do shorthand.
* Valores não especificados irão assumiro valor padrão 
* Geralmente a ordem descrita não importa, mas, se houver muitas propriedades com valores semelhantes, poderemos encontrar problemas. 

 Propriedades que aceitam o shorthand:
 * Animation, background, border, border-bottom, border-color, border-left, border-radius, border-right, border-style, border-top, border-width, colum-rule, columns, flex, flex-flow, font, grid, grid-area ..... 