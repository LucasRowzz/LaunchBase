// Criando vetores, serve para colocar diversos objetos ou valores agrupados
// Coleção de objetos. Arrays ou vetores
const alunos = [
    {
        nome:"Lucas",
        nota: 9.8
    },
    {
        nome: "Diego",
        nota: 10
    },
    {
        nome: "Fulano",
        nota: 2
    }
]
/* Para acessar utilizaremos através da posição
   Lembrando que sempre começam na posição [0]
*/
// Para acessar esses valores como arrays
const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
console.log(media)

// Outras formas de utilizar

const nomesDeAlunos = ["Lucas", "Mayk", "Mario"]
console.log(alunos[1])