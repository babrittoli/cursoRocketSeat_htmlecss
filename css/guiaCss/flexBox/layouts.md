# layouts e evolução 

- layout tem a ver com a maneira que os elementos estão distribuidos na tela

## *normal flow / flow Layout*
É a maneira que os elementos `block` e `inline` ficam na página

```html 
<p> Texto block com <strong style="background: green">inline</strong> dentro </p>
```


### *TABLES*
É uma maneira de tabelas onde a tag `table` recebe um display `table` fazendo com que os elementos internos como `td` e `tr`possam ser usados para montar uma tabela

<table>
    <tr>
        <td>Hora</td>
        <td>20:30</td>
    </tr>
    <tr>
        <td>Hora</td>
        <td>21:30</td>
    </tr>
    <tr>
        <td>Hora</td>
        <td>22:00</td>
        <td>outro exemplo</td>
    </tr>
</table>

#### *TABLESS*

Uso das propriedades `float`, `clear` para que os elementos possam mudar de posição na tela

```HTML
<div style="foat: left">
    esquerda
</div>

<div style="foat: right">
    direita
</div>

<div style="clear: both">
    normal
</div>
```

##### *FLEXBOX*
A caixa se torna flex, fazendo com que os elementos internos possam receber melhor;

- alinhamento
- Ordenação
- Tamanhos flexíveis


```HTML
<div class="flexbox">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>
```

```css
.flexbox{
    display: flex;
    flex-direction: column;
}

.item:nth-child(1) {
    order:1;
}