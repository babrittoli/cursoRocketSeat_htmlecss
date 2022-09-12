# Align-items
- Alinhamento dos elementos do eixo Cruzado

## Valores
- Stretch
- Flex-start
- flex-end
- center

HTML
<div class= "box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>

```css
.box {
    display: flex;
    flex-direction: column;

    align-items: center;

    border: 1px dashed blue;
}

.box div {
    border: 1px solid;
}
```