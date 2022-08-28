 /* if (condição) - SE
    //apenas será executado o bloco de código 
caso condição seja true.

else - SENÃO
  // apenas será executado o bloco de código caso condição do if seja false.

*/

let temperature - 36.5

if(temperature >=37.5) {
    console.log('febre alta')
} 
else if(temperature< 37.5 && temperature >=37{
    console.log('febre moderada')
} else {
    console.log('Saúdavel')
}

// exemplo 2
let temperature - 36.5
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature

if(highTemperature) {
    console.log('febre alta')
} 
else if(mediumTemperature) {
    console.log('febre moderada')
} else {
    console.log('Saúdavel')
}

// exemplo 3 - if false ( vai anular o if)
let temperature - 36.5
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature

if(0) {
    console.log('febre alta')
} 
else if(mediumTemperature) {
    console.log('febre moderada')
} else {
    console.log('Saúdavel')
}

// exemplo 4 - if true ( vai anular as outras setencias)
let temperature - 36.5
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature

if({}) {
    console.log('febre alta')
} 
else if(mediumTemperature) {
    console.log('febre moderada')
} else {
    console.log('Saúdavel')
}

// Se houver dois valores iguais, ele pegará a primeira setença e anulará a outra