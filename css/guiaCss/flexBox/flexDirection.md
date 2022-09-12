# Direção dos itens

- Flex é uma dimensão (horizontal ou vertical)
- Podemos mudar a direção com `flex-direction`
- *Os valores (row | row-reverse | column | column-reverse )*

HTML
<div class="container">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

```css
.container { 
    display: flex;
    flex-direction: column-reverse;
    height: 80vh;
}

```
