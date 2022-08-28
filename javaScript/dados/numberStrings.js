// manipulando Strings e Números

/*Para contar a quantidade de caracteres em uma string
é possível usar o método length(), também é possível 
contar a quantidade de algarismos em um número transformando
o número em string e usando o mesmo método.*/


// Transformar Strings em número e Número em String
/*
            let string = "234"
            console.log(Number(string))

            let number = 432
            console.log(String(number))
*/


/* CONTAR QUANTOS CARACTERES TEM UMA PALAVRA E QUANTOS DIGITOS
TEM UM NÚMERO.
Para contar a quantidade de caracteres em uma string é possível 
usar o método length(), também é possível contar a quantidade 
de algarismos em um número transformando o número em string 
e usando o mesmo método.
*/

/*
            let word = "PARALELEPIPEDO"
            console.log(word.length)

            let number = 1234
            console.log(string(number).length)
*/

/* TRANSFORMAR UM NÚMERO QUEBRADO COM 2 CASSA DECIMAIS E TROCAR 
PONTO POR VÍRGULA. 
Para determinar uma quantia de casas decimais de um número pode-se 
usar o método toFixed() colocando como argumento quantas casas 
decimais o número terá. Para mudar a formatação do número de 
separado por ponto para separado por vírgula é possível usar 
o método replace(".", ","). O resultado final será do tipo string, 
e a conversão para o tipo número não será possível por que a vírgula
não é considerada parte de um número.*/

/*
            let number = 345.33897321
            console.log(number.toFixed(2).replace(".", ","))
*/

/*TRANSFORMANDO LETRAS MAIÚSCULAS E MINÚSCULAS
Para transformar uma string em letras maiúsculas pode-se usar o 
método toUpperCase(), e ao contrário, também é possível usar o 
toLowerCase() para transformar uma string em todas letras minúsculas.
*/

/*
            let word = "Sou estudante de programação"
            console.log(word.toLowerCase().toUpperCase())
*/


/* SEPARE UM TEXTO QUE CONTÉM ESPAÇOS, EM UM NOVO ARRAY ONDE CADA
TEXTO É UMA POSIÇÃO DE ARRAY. DEPOIS DISSO, TRANSFORME O ARRAY EM
UM TEXTO E ONDE ERAM ESPAÇOS, COLOQUE _
Para separar um texto por espaços, pode-se usar o método split(" "), 
que transforma o texto em um array de strings baseado no argumento, 
que no caso são os espaços. Para juntar esse array é possível usar 
o método join('"), que juntaria essas palavras sem nenhum separador,
porém colocando um argumento, no caso um underscore ( join("_") ) 
as palavras são juntadas com o argumento de separador.
*/

/*
            let phrase = "Eu sou estudante de programação"
            let myArray = phrase.split(" ")
            let phraseWithUndderscore = myArray.join("_")
            console.log(phraseWithUndderscore)
*/

/* VERIFICAR SE O TEXTO CONTÉM ALGUMA PALAVRA
Para verificar se um texto possui uma palavra específica, podemos usar 
o método includes(), passando como argumento a palavra a ser verificada, 
que retorna um valor true se encontrar a palavra, e falso se não, 
lembrando sempre que o método é case sensitive (diferencia maiúscula
de minúscula).
*/

let phrase = "Eu sou estudante de programação"
console.log(phrase.includes("programação"))

/* ARRAY MÉTODO CONSTRUTOR 
Para criar um array com um método construtor, usa-se new Array(args), 
passando como argumento o tamanho deste vetor ou os valores, por 
exemplo: const array = new Array("a", "b", "c").
*/

let myArray = new Array('a','b','c')
console.log(myArray)

/* CONTAR ELEMENTOS DO ARRAY
Para contar a quantidade de elementos em um array pode-se usar
o método length.
*/

console.log([
    "a", 
    {type:"array"}
    function() {return "alo"},
] [2]())

//exemplo2
console.log(["a", "b", "c"].length)

/* TRANSFORMAR UMA CADEIA DE CARACTERES (PALAVRAS) EM ELEMENTOS DE UM
ARRAY
Para transformar uma string em um array, pode-se usar o objeto Array 
com o método from(), passando como argumento a string a ser transformada 
em array. Por exemplo console.log(Array.from("developer").*/

let word = "programação"
cconsole.log(Array.from(word))

/* MANIPULANDO ARRAYS
Existem várias maneiras de manipular arrays, como: o método push(), 
que adiciona um elemento no final do array, o método unshift(), que 
adiciona um elemento no começo do array, o método pop(), que retira 
um elemento do final do array, o método shift(), que retira um elemento 
do começo do array, o método slice(), que recebe como argumentos a posição 
de início e a posição do fim da parte que você quer selecionar, e retorna 
os valores destas posições, o método splice(), que recebe como argumentos a 
posição de início e a quantidade de elementos que você quer remover e o método 
indexOff(), que encontra o index do valor que recebe como argumento em um array.
*/

let techs = ["html", "css", "js"]

//adicionar um item no fim
techs.push("nodejs")

// adicionar no começo 
techs.unshift("sql")

//remover no fim
techs.shift()

//pegar somente alguns elementos do array
console.log(techs.slice(1,3))

// remover 1 ou mais itens em qulquer posição do array 
techs.splice(1,2)

//encontrar a posição de um elemento no array
let index = techs.indexOf('html')
techs.splice(index, 1)

conseole.log(techs)
