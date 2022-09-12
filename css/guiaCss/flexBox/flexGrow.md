# Flex-grow: 
    O crescimento do item do container em relação aos espaços vazios

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

.box div:nth-child(2),
.box div:nth-child(3) {
    flex-grow: 1;
}
```