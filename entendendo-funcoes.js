const alunosDaTurmaA = [
    {nome: 'Fernando', nota : 1.8},

    {nome: 'Diego', nota : 10},

    {nome: 'Fulano', nota : 2}
]

const alunosDaTurmaB = [
    {nome: 'Lucas', nota : 10},

    {nome: 'Jorge', nota : 10},

    {nome: 'Mayke', nota : 0}
]

// Função que calcula a média
function calculaMedia(alunos){
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
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