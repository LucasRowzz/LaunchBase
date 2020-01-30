const alunosDaTurmaA = [
    {nome: 'Fernando', nota : 1.8},

    {nome: 'Diego', nota : 10},

    {nome: 'Fulano', nota : 2},
    {nome: 'Mais um Aluno', nota : 10}
]

const alunosDaTurmaB = [
    {nome: 'Lucas', nota : 10},

    {nome: 'Jorge', nota : 10},

    {nome: 'Mayke', nota : 0},

    {nome: 'Novo Aluno', nota: 5}
]

// Função que calcula a média
function calculaMedia(alunos){
    // Estrutura de repetição
    let soma = 0;
    for (let i = 0; i < alunos.length; i++){
        // Somando a nota dos alunos
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length
    return media

}

// Usando o calculaMedia
// Essas duas variáveis estão recebendo o código dentro da function
const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

// função que envia  mensagem
function enviaMensagem(media,turma){
    // Se a média for maior que 5, parabenizar a turma

    if(media > 5) {
        console.log(`A media da ${turma} foi de ${media} Parabéns`)
    } else {
        console.log(`A média da ${turma} é menor que 5`)
    }
}

// Usando o enviaMensagem
enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')

// O console é um objeto,