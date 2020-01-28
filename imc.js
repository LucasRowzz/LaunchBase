// Programa para calcular IMC
const nome = 'Lucas'
const peso = 150
const altura = 1.88
// Calculo
const imc = peso / (altura * altura)

// Se o IMC maior ou igual a 30: Lucas voce está acima do peso
if (imc >= 30){
    console.log(`${nome} você está acima do peso`)
} else {
    console.log(`${nome} você não está acima do peso`)
}