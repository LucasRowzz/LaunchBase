// //Desafio 01
// const idade = 17
// // Verificar se a pessoa é maior igual a 18 anos
// //se sim, deixar entrar, se não, bloquear a entrada
// if (idade >= 18) {
//     console.log('Deixar entrar')
// } else {
//     console.log('bloquear entrada')
// }

// // Se a pessoa tiver 17 anos 
// // Avisar para voltar quando fizer 18 anos
// if (idade === 17){
//     console.log('Volte quando fizer 18 anos')
// }

/* =======================
    OPERADORES LÓGICOS

    && "E" As duas condições devem ser verdadeiras 
        para que a condição final seja verdadeira.
    || "OU" Uma das condições deve ser verdadeira
        para que a condição final seja verdadeira.
    !   "NAO" Nega uma condição. 
''
======================== */    

//  console.log(5 == 5 && 6 == 6) //true
//  console.log(5 == 5 && 6 != 6) //false 

//  console.log(5 != 5 || 6 == 6) //true
//  console.log(5 == 5 || 6 != 6) //true
 
//  console.log(!(5 > 6)) //true
//  console.log(!(5 < 6)) //false

// Desafio 01
// Verificar se a pessoa é maior igual a 18 anos
// //se sim, deixar entrar, se não, bloquear a entrada
const idade = 16
// Se a pessoa tiver 17 anos 
// // Avisar para voltar quando fizer 18 anos
if (!(idade >= 18) || idade === 17){
    console.log('Bloquear a entrada')
} else {
    console.log('Deixar entrar')
}

/* ============================
        OPERADORES ARITMÉTICOS 

        * Multiplicação
        / Divisão
        % Resto da divisão
        + Adição
        - Subtração

===============================*/        
console.log( 2 * 2)//4
console.log( 2 / 2)//1
console.log( 2 % 1.5)// 0.5
console.log( 2 + 2) //4
console.log( 2 - 2)//0