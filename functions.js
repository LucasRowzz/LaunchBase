const alunosDaTurmaA = [
    {
        name: 'Lucas',
        grade: 10,
    },
    {
        name: 'Diego',
        grade: 7
    },
    {
        name: 'Fulano',
        grade: 5
    },
    {
        name: 'garrafa',
        grade: 0
    }
]

const alunosDaTurmaB = [
    {
        name: 'Cleiton',
        grade: 5,
    },
    {
        name: 'Robson',
        grade: 10
    },
    {
        name: 'Siclano',
        grade: 5
    },
    {
        name: 'Kprge',
        grade: 7
    }
]

function calculateAverage(alunos){
    let soma = 0

    for(let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].grade
    }

    const media = soma / alunos.length
    // Para jogar para fora a media
    return media
}

const media1 = calculateAverage(alunosDaTurmaA)
const media2 = calculateAverage(alunosDaTurmaB)

function sendFlunkedMessage(media, turma){
    if(media > 5){
        console.log(`A média da ${turma} é : ${media}. Parabéns`)
    } else{
        console.log(`A média da ${turma} é menor que 5`)
    }
}

sendFlunkedMessage(media1, 'TurmaA')
sendFlunkedMessage(media2, 'TurmaB')