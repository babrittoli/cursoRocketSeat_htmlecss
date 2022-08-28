/*
        Sistema de gastos familiar

    Crie um objeto que possuirá 2 propriedades, mabas do tipo ARRAY. 
* RECEITAS [] incomes
* DESPESAS [] expenses

Agora crie umma função que irá calcular o total de receitas e depesas
e irá mostrar uma mensagem se a familia está com saldo positivo ou
negativo
*/

let flow = {
    incomes: [3000, 7080, 345.43, 87.90, 567],
    expenses: [607, 1908, 456, 89, 980]
}

function sum(array) {
    let total = 0;

    for(let value of array){
        total += value
    }

    return total
}

function calculateFlow() {
    const calculateIncomes = sum(flow.incomes)
    const calculateExpenses = sum(flow.expenses)

        const total = calculateIncomes - calculateExpenses

        const positiveBalance = total >= 0

        let textBalance = "negativo"

        if(positiveBalance) {
            textBalance = "POSITIVO"
        }

        console.log(`Seu saldo é ${textBalance} : R$ ${total.toFixed(2)}`)
        
}

calculateFlow()

