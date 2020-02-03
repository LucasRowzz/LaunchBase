// Criando os Objetos
const usuarios = [
    {nome: 'Lucas', techs: ['HTML', 'CSS']},
    {nome: 'Fernando', techs: ['CSS', '54']},
    {nome: 'Jorge', techs: ['CSS']},
    {nome: 'Jessica', techs: ['JS', 'BOOT']}
]

/* Crie uma função que recebe os dados de um objeto de usuário e retorna SE
   o usuário trabalha com CSS ou não. Essa função deve retorna um boolean 
   true/false*/
// Percorrendo os usuários

function checkCss(usuario){

    for(let i = 0; i < usuario.length; i++){
        for(let j = 0; j < usuario[i].techs.length; j++){
            if(usuario[i].techs[j] == 'CSS'){
                console.log(`O Usuario ${usuario[i].nome} trabalha com CSS `)
            } else {
                console.log(`nao trabalha`)
            }
                
            }
                
            }
        }
    

checkCss(usuarios)