// Estruturas de Repetição

/* Criar um programa que calcula a média
   das turmas de alunos e envia mensagem
   do calculo da média 
*/

const alunosDaTurmaA = [
    {
        nome: 'Lucas',
        nota: 1.8,

    },
    {
        nome: 'Jorge',
        nota: 10
    },
    {
        nome: 'Leticia',
        nota: 2
    },
    {
        nome: 'Mais um Aluno',
        nota: 10

    }
]

const alunosDaTurmaB = [
    {
        nome: 'Amanda',
        nota: 10
    },
    {
        nome: 'Fernando',
        nota: 10
    },
    {
        nome: 'Robson',
        nota: 0
    },
    {
        nome: 'Novo Aluno',
        nota: 5

    }
]


function calculaMedia(alunos) {
    // Estruturas de Repetição

    /* let, ao contrário de const, pode ser alterado o valor.
       então criamos essa variável: let i = 0; e depois dizemos
       o seguinte, se i, for menor que a quantidade de alunos 
       (i < alunos.length) ele vai incrementar mais um (i++) que
       significa a mesma coisa de i = i + 1  */
    // Fora do escopo do for, o let soma, ele está no escopo da function
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    // Se a média for maior que 5, parabenizar a turma
    if (media > 5) {
        console.log(`A média da turma ${turma} ${media}. Parabéns`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5`)
    }
}
// Parâmetros da função
enviaMensagem(media1, 'TurmaA')
enviaMensagem(media2, 'TurmaB')


/* Marcar aluno como reprovado se anota
   for menor que 5 e , também marcar como 
   reprovado*/

// Nessa função apenas marcamos o aluno que está reprovado, 
// aplicando uma condição p/ a mesma
function marcarComoReprovado(aluno) {
    aluno.reprovado = false;
    if(aluno.nota < 5){
        aluno.reprovado = true;
    }
    
}


// Aki mandamos através de uma função a mensagem
function enviarMensagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`o ALuno ${aluno.nome} está reprovado`)
    }
}

function alunoReprovado(alunos) {
    // Outra forma de fazer a repetição
    for (let aluno of alunos) {
        marcarComoReprovado(aluno)
        enviarMensagemReprovado(aluno)
    }
    }

    alunoReprovado(alunosDaTurmaA)
    alunoReprovado(alunosDaTurmaB)
    
    
