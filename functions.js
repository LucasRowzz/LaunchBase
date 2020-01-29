/* Criar um programa que calcula a média
   das turmas de alunos e envia mensagem
   do calculo da média 
*/

const alunosDaTurmaA = [
    {
        nome: 'Lucas',
        nota: 9.8
    },
    {
        nome: 'Jorge',
        nota: 10
    },
    {
        nome: 'Leticia',
        nota: 2
    }
]

const alunosDaTurmaB = [
    {
        nome: 'Amanda',
        nota: 5
    },
    {
        nome: 'Fernando',
        nota: 5
    },
    {
        nome: 'Robson',
        nota: 2
    }
]

// Função que calcula a média

function calculaMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma){
    // Se a média for maior que 5, parabenizar a turma
    if (media > 5) {
        console.log(`A média da turma ${turma} ${media}. Parabéns`)
    } else{
        console.log(`A média da turma ${turma} é menor que 5`)
    }
}
            // Parâmetros da função
enviaMensagem(media1, 'TurmaA')
enviaMensagem(media2, 'TurmaB')