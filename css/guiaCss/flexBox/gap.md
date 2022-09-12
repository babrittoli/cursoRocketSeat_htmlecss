# Gap
- Espaço entre os elementos

## VALORES
- Unidades de medida
fixas: px, pt
flexíveis: %, em, rem

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

    gap: 2rem;
}

.box div {
    border: 1px solid;
}

```