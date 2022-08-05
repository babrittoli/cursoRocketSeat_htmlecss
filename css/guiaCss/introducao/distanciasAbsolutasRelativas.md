# Distâncias absolutas <length>

São fixas e não alteram seu valor

Unidade   nome                equivalência
*cm*        Centímetros         1cm: 96px/2.54
*in*        Inches(polegadas)   1in: 2.54cm = 96px
*px*        Pixels              1px: 1/96th of 1in

* O mais recomendado e utilizado é o *px*
* não usar *cm*

## Distâncias relativas
São relativas aa alagum outro valor, pode ser o elemento pai, ou root, ou o tamanho da tela.

* Beneficio: Maior adaptação aos diferentes tipos de tela

Unidade          Relativo à:
*em*             Tamanho da font do pai
*rem*            Tamanho da Font do elemento raiz {root/html}
*vw*             1% da viewport width
*vh*             1% da viewport height
