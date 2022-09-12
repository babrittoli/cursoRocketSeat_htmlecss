# Flex-wrap 

- Podemos usar multi linhas 
- Cada nova linha, um novo flex container

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
    flex-wrap: wrap;

    border: 1px dashed blue;
}

.box div {
    border: 1px solid;

    width: 80px;
}

```

