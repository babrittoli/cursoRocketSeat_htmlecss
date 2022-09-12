# Justify-Content

- ALinhamento dos elementos dentro do container
- Distribuição dos elementos 

## Valore
- flex-start
- flex-end
- center
- space-around
- space-between
- space-evenly

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

    justify-content: space-evenly;

    border: 1px dashed blue;

    height: 150px;
}

.box div {
    border: 1px solid;
    
}
```