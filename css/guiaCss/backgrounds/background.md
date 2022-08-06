## Background
- Define um fundo para o nosso elemento
- Sua area de atuação é a caixa toda
- É transparente

- usar cores sólidas 
- usar imagens
- controlar 
* a posição das imagens
* se elas repetem ou não
* o tamanho delas na caixa
- usar cor e imagem juntas
- usar cor gradiente

### Background-color
- define a cor do fundo do elemento* 

HTML 
<header>

</header>
<main>
    <h1>Evolua rápido com a tecnologia</h1>
    <p>Junte-se a milhares de devs e acelere
    na direção dos seus objetivos</p>
</main>

CSS
{
    margin: 0;
}

header {
    height: 100px;
    border: 7px dashed red;
    background-color: rgb(55, 100, 50);
}

#### Background-image-repeat 
Para adicionar uma imagem como background podemos usar a propriedade background-image
Por padrão a imagem vai se repetir e podemos modificar essa opção usando a propriedade background-repeat.

*background-image: url ()*


/* Values */
background-repeat: repeat-x; horizontal
background-repeat: repeat-y; vertical
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* Podedmos usar 2 valores: horizontal | vertical */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;

##### Background-position
Com a propriedade background-position podemos mudar a posição da imagem do background.

/* Pricipais valores */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;


###### Background-size
Para mudar o tamanho da imagem do background usamos a propriedade background-size.

/* Values */
background-size: cover;
background-size: contain;

/* Podemos usar 2 valores, o primeiro é para a largura da imagem e o segundo é para a altura */
background-size: 40% auto;
background-size: 2em 25%;
background-size: auto 8px;
background-size: auto auto;

##### Background-origin-clip
* A propriedade background-origin é quem define o ponto de origem de uma imagem específica.

/* Principais valores */
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;

* O background-clip define se a cor ou imagem do background iniciam debaixo de sua área de borda, preenchimento ou conteúdo.

/* Principais valores */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;

#### Background-attachment
* A propriedade background-attachment determina se a posição da imagem vai ser fixa ou se vai rolar junto com o conteúdo.

/* Principais valores */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;


### Shorthand
* background-color: rgb(55, 100, 50);
* background-image: url(https://www.freeimages.com/pt/photo/yellow-frontal-with-ivy-1228121)
* background-repeat: no-repeat;
* background-position: center;
* background-size: contain;
* background-origin: content-box;
* background-clip: content-box;
* background-attachment: fixed;

*reescrito com shorthand*
background: rgb (55, 100, 50) url(https://www.freeimages.com/pt/photo/yellow-frontal-with-ivy-1228121) no-repeat right top / 50px border-box content-box fixed; 

## Gradient 
* linear-gradient() é a função usada para criar gradient *linear* com o CSS.
background: linear-gradient(45deg, red, yellow)

* radial-gradient() é a função usada para criar gradient *circular*.
background: radial-gradient(green, red, yellow)
background: radial-gradient(rgba(255, 255, 255, 0), rgba(255, 0, 0, 0.2))

# Multiplos valores
Podemos aplicar múltiplos backgrounds em um mesmo elemento, podendo ter cor sólida, gradiente ou imagem. Para isso basta separar por vírgula cada background.

