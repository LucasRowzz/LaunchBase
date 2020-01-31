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
    // Percorri o Array dos alunos
    for (let i = 0; i < alunos.length; i++) {
        // fiz uma soma de soma + nota alunos na posição[i](que nesse caso é 0)
        soma = soma + alunos[i].nota
    }
    // Estamos criando a const media, e falando o seguinte
    // soma / dividido pela quantidade de alunos do array
    const media = soma / alunos.length
    // e retornamos essa média, simples
    return media
}
//Chamando as funções
const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    // Se a média for maior que 5, parabenizar a turma
    if (media > 5) {
        console.log(`A média da ${turma} ${media}. Parabéns`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5`)
    }
}

// Chamando as funções, media1 = se relaciona com (media),
// e 'TurmaA' se relaciona com turma

enviaMensagem(media1, 'TurmaA')
enviaMensagem(media2, 'TurmaB')

/* Marcar aluno como reprovado se anota
   for menor que 5 e , também marcar como 
   reprovado*/

function marcarComoReprovado(aluno) {
        // Aqui estou apenas marcando o aluno como reprovado
        aluno.reprovado = false;
        if(aluno.nota < 5){
            aluno.reprovado = true;
        }
   }

    
// Chamando a função
marcarComoReprovado(alunosDaTurmaA)

function enviarMensagemReprovado(aluno){
    // Se o aluno estiver reprovado, ou seja, for true 
    // (o if so aceita true para executa algo) vai acontecer isso
    if(aluno.reprovado) {
        // Mandaremos essa mensagem a ele
        console.log(`o Aluno ${aluno.nome} está reprovado!`)
    } 
}

function alunoReprovado(alunos){

     for(let aluno of alunos){
         marcarComoReprovado(aluno);
         enviarMensagemReprovado(aluno);
     }
}

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)