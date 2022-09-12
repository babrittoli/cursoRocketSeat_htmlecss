# Terminologia

- *Flex container*
    -flex item

<div class="container">
    <div item="item"></div>
    <div item="item"></div>
    <div item="item"></div>
</div>

-Nesting (elementos estarem dentro de outro elemento)

- Axis (eixo)
    - main (principal: x)
        - start, end
    - Cross (cruzado: y)
        - start, end

```css
.container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 10vh;
}
```


- *Flex sizing*
    - flexível
    - altera width/height dos itens para preenchimento dos espaços do flex container. 

```css
.container{
    display: flex;
    border: 1px solid red;
    height: 80vh;
}

.item {
    background-color: gray;
    border: 1px solid; 
    flex: 1;
}