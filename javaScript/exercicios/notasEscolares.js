/* TRANSFORMAR NOTAS ESCOLARES

CRIE UM ALGORITMO QUE TRANSFORME AS NOTAS DO SISTEMA
NUMÉRICO PARA SISTEMA DE NOTAS EM CARACTERES A B C

* DE 90 PARA CIMA - A
* ENTRE 80-89 - B
* ENTRE 70 - 79 - C
* ENTRE 60-69 - D
* MENOR QUE 60 F

*/


function getScore(score) {
let scoreA = score >= 90 && score <=100
let scoreB = score >=80 && score <=89
let scoreC = score >=70 && score <=79
let scoreD = score >=60 && score <=69
let scoreF = score <60 

let scoreFinal; 

if (scoreA) {
    scoreFinal = "A"
}
    else if (scoreB) {
    scoreFinal = "B"
}
    else if (scoreC) {
    scoreFinal = "C"
}
    else if (scoreD) {
    scoreFinal = "D"
}
else if (scoreF) {
    scoreFinal = "F"
}


return scoreFinal

}

console.log(getScore(45))