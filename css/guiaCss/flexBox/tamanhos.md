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
.page {
    border: 2px solid;
    min-height:100vh;

    display:flex;

}

aside {
    background: green;
    flex: 1;
}

main {
    background: red;
    flex: 2;

    display:flex;
    flex-direction: column;
}
