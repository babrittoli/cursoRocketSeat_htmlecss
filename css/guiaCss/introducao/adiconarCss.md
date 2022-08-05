# Como adicionar por CSS. 

## inline
- atributo style
<h1 style="color: blue;">Título
	<strong style="color: red;">alo</strong>
</h1>

# tag HTML que irá conter o CSS
- <style>
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
    <style>
    h1 {
        color:blue;
    }
    strong {
        color: red;
    }
    </style>
<body>

# arquivo css externo, A forma mais comum, é através da tag link, onde vamos linkar um documento CSS externo, um outro arquivo para nosso documento HTML, feito da seguinte forma:
- <link>
<link rel="stylesheet" href="style.css">


# arquivo css externo, @import. Não é recomendado seu uso, pois leva um pouco mais de tempo do que através da tag link, fazendo a página ficar menos responsiva, demorando mais para o carregamento da mesma.
- @import 
@import 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap'

