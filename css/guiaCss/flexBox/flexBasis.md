# Largura e altura dos itens

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

    border: 1px dashed blue;
}

.box div {
    border: 1px solid;
}

.box div:nth-child(1) {
    flex-basis: 25px;
}

```