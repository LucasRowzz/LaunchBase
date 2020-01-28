// Calcular aposentadoria

// O tempo de contribuição mínimo para homens é de 35 anos
// e, para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo de 
// contribuição do homem precisa ser de no mínimo 95 anos,
// enquanto a mulher precisa ter no mínimo 85 anos na soma;

const nome = 'Silvana'
const sexo = 'M'
const idade = 55
const contribuicao = 30 

// SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
const somaContri = idade + contribuicao

if ((sexo === 'F' && contribuicao >= 30) || sexo === 'M' && contribuicao >=35){
    if((somaContri >= 85) || somaContri >= 95){
        console.log(`${nome} Voce pode se aposentar!`)
    } else {
        // condição 1 passou, porém a condição 2, não.
        console.log(`${nome}, Você ainda nao pode se aposentar`)
    } 
} else {
    // condição 1 não passou 
    console.log(`${nome}, Você ainda nao pode se aposentar`)
}
