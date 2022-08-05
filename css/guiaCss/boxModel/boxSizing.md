# Box Sizing 
É o responsável pelo cálculo do tamanho total da caixa

div1> {
    width: 300px; 
    height: 300px;
    border: 3px solid red;
    margin: 30%;
 }

 /*Quando o padding é adicionado (padding: 0 20px;) faz com que aumente a 
 largura da caixa, deixando de respeitar os 100px de largura:*/

 <div2> {
    width: 300px; 
    height: 300px;
    border: 3px solid red;
    margin: 30%;
    padding: o 20px;
 }

 Por padrão o navegador vai calcular o tamanho da caixa pelo content-box e vai somar com os outros boxes, no exemplo acima no lugar de 100px a caixa vai ficar com uma largura de 140px. Para que isso não aconteça, é possível mudar qual vai ser a referência para o calculo do tamanho da caixa adicionando a propriedade box-sizing: border-box;.

<div3> {
    width: 300px; 
    height: 300px;
    border: 3px solid red;
    margin: 30%;
    padding: o 20px;
    box-sizing: border-box;
 }
   



