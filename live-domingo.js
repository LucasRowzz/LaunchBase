// Funções
//Criar função
function nomeDaFuncao(a, b) {
    // Retornando para fora
    return a + b
}

// Chamar ou usar a função
const valor = nomeDaFuncao(6, 8)
// console.log(nomeDaFuncao(4,5))
const somaMais = nomeDaFuncao(6, 5) + nomeDaFuncao(7, 5)

// console.log(valor)
// console.log(somaMais)
// console.log(typeof nomeDaFuncao(6,5))

// Objetos e arrays

const objeto = {
    chave: "valor",
    chave1: 1,
    chave3: true,
    chave4: {},
    c5: []
}

const vetor = ["a", 1, true, ["1"], {}]



// Estruturas de repetição
// For básico ou simples
const array = [2, 4, 6, { a: "aloooo" }, 7, 8, 5, 4, 4]
let soma = 0
for (let i = 0; i < array.length; i++) {
    soma = soma + array[i]
}

// Outras formas
// Como buscar um valor específico dentro de um array

const arraysSetesEOitos = []
for (let i = 0; i < array.length; i++) {
    if (array[i] == 7 || array[i] == 8) {
        // Acrescentando algo dentro de um array vazio
        arraysSetesEOitos.push(array[i])
    }
}

// console.log(arraysSetesEOitos)

// Mais jeitos de utilizar for acessando um objeto dentro de um array

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "object") {
        // console.log(array[i].a)
    }
}

// Utilizando de outra forma o for
// value of values
const values = [2, 4, 6, { a: "aloooo" }, 7, 8, 5, 4, 4]

for (value of values) {
    // console.log(value)
}

// Mais exemplos de como usar funções
const users = [
    {name: "Carlos", techs: ['HTML', 'CSS']},
    {name: "Fernando", techs: ['Node', 'Js']}
]

function checkUserHasCss(user){

    for(tech of user.techs){
        if(tech == 'CSS'){
            return true
        }
    }
    return false
}

for(user of users){
    console.log(`${user.name} has css? ${checkUserHasCss(user)}`)
}