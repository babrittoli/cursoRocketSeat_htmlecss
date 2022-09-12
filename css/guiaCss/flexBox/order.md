# order

- Organizar os itens 

HTML
<div class="page">
    <aside>Aside</aside>
    <main>
        Main
        <section>1</section>
        <section>2</section>
        <section>3</section>
    </main>
</div>

```css
.box {
    display:flex;
    border: 1px dashed green;
}

.box div{
    border: 1px solid;
}

.box div:nth-child(1){
    order:0;
 }

.box div:nth-child(2){
    order:0;
 }

.box div:nth-child(3){
    order:20;
 }

.box div:nth-child(4){
    order: -1;
 }

 