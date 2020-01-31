/*
Crie um programa que calcula a soma de receitas e despesas
de usuários e no fim retorna o saldo (receitas - despesas).
*/

const usuarios = [
    {
        nome: 'Salvio',
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
      },
      {
        nome: 'Marcio',
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
      },
      {
        nome: 'Lucia',
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
      }
]

function calculaSaldo(usuarios){
    // Defini a variável somaReceitas com 0
    let somaReceitas = 0
    // Percorri o array das receitas, dentro do objeto usuarios
    for(let i = 0; i < usuarios.receitas.length; i++){
        // Peguei a variável somaRceitas e fiz uma operação aritmética
        // somaReceitas + usuarios.(as receitas que peguei na variavel i, acima)
        somaReceitas = somaReceitas + usuarios.receitas[i]
    }
    // Defini a variável somaDespesas com 0
    let somaDespesas = 0
    // Percorri o array das despesas, dentro do objeto usuarios
    for(let i = 0; i <usuarios.despesas.length; i++){
        //Peguei a variável somaDespeszas e fiz uma operação aritmética
        //somaDespesas + usuarios.(as despesas que peguei na variavel i, acima)
        somaDespesas = somaDespesas + usuarios.despesas[i]
    }
    // Retornei as variáveis ja fazendo a operação de saldo, que é a de 
    // Subtração

    return somaReceitas - somaDespesas
}
// Criei uma função para imprimir o valor do saldo final
function imprimeSaldo(){
    // Percorri o array usuarios
    for(let i = 0; i < usuarios.length; i++){
        // criei uma variável saldo, que recebe a function calculaSaldo(usuarios[i])
        let saldo = calculaSaldo(usuarios[i])
        if( saldo < 0 ){
            console.log(`${usuarios[i].nome} possui saldo NEGATIVO de: ${saldo}`)
        } else {
            console.log(`${usuarios[i].nome} possui saldo POSITIVO de: ${saldo}`)
        }
    }
}

imprimeSaldo()
