# Flex shrink 

- Encolhimento dos elementos dentro do container

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
    border: 1px dashed blue;

    height: 180px;
}

.box div {
    border: 1px solid;
    flex-basis:80px
}

.box div:nth-child(2),
.box div:nth-child(3) {
    flex-shrink: 4;
}
```  