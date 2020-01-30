// Crie um progrma que armazena um array de usuarios
// (objetos) cada usuario tem um nome, e suas techs,
const usuarios = [
    {nome: 'Lucas', techs: ['HTML', 'CSS']},
    {nome: 'Fernando', techs: ['PHP', '54']},
    {nome: 'Jessica', techs: ['JS', 'BOOT']}
]
// Variável que verifica o tamanho do array
const quantidadeUsuarios = usuarios.length
// Percorra a lista de usuarios com uma estrutura de repeticao
// Percorrendo e Imprimindo em tela as informações dos usuários
for (let i = 0; i < quantidadeUsuarios; i++){
    // Imprimindo em tela as informações dos usuários
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].techs}`)
    
}

