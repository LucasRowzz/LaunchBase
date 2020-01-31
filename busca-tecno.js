// Criando os Objetos
const usuarios = [
    {nome: 'Lucas', techs: ['HTML', 'CSS']},
    {nome: 'Fernando', techs: ['CSS', '54']},
    {nome: 'Jessica', techs: ['JS', 'BOOT']}
]

/* Crie uma função que recebe os dados de um objeto de usuário e retorna SE
   o usuário trabalha com CSS ou não. Essa função deve retorna um boolean 
   true/false*/
// Percorrendo os usuários

function checaCss(usuario) {
    // Percorrendo os usuarios
    for(let i = 0; i < usuario.length; i++){
        // Percorrendo as techs
        for(let j = 0; j < usuario[i].techs.length; j++){
            // Criando a condição
            if(usuario[i].techs[j] === "CSS"){
                console.log(`O usuário ${usuario[i].nome} Trabalha com CSS`)
            }
        }

    }
}
 
// Chamando a função
checaCss(usuarios)