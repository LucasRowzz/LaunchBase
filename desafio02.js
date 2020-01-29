/*Crie um programa que armazena dados da empresa Rocketseat 
dentro de um objeto chamado empresa.
*/

const empresa = {
    nome : "Rocketseat",
    cor : "Roxo",
    foco : "programação",
    // Criando objetos intercalados
    end : {
        rua : "Rua Guilherme Gembebala",
        num : "Número 260"
    } 
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.end.rua}, ${empresa.end.num}`)
// Crie um programa que armazene os dados de um programador.
const programador = {
    nome : "lucas",
    idade : 20,
    // Criando array
    tecno : [
        // Criando objetos dentro do array
        {
            nome : 'JavaScript', especialidade : 'Com especialidade Desktop/Mobile/Web'
        },
        {
            nome: 'Html5', especialidade : ' Com especialidade Web'
        },
        {
            nome : 'Css3' , especialidade : 'Com especialidade Web'
        }
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ` + programador.tecno[1].nome + " " + programador.tecno[1].especialidade)
