/*
        SWITCH
    Tem um papel muito similar ao if e ao else if, 
porém a estrutura é bem diferente

os breaks são essenciais
*/
// estrutura
let expression = 'a'

 switch (expression) {
    case 'a':
        console.log('a') // codigo a 
        break
    case 'b':
        console.log('b') // codigo para expression b
        break
    default: 
        console.log('default')
        break
 }

 // exemplo calculadora

 function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+': 
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }

    return result
 }

 console.log(calculate(4, '+', 8))