const user =
{
    name: 'Lucas',
    transactions: [],
    balance: 0
}
// Função que cria uma função com uma condição
function createTransaction(transaction) {
    // Aqui estamos verificando uma condição que é a seguinte:
    // se a transação for do tipo crédito.
    if (transaction.type == 'credit') {
        // ele pega e soma ao balance
        user.balance += transaction.value
    } else if (transaction.type == 'debit') {
        user.balance -= transaction.value
    }
    // Adiciona ao array
    user.transactions.push(transaction)

}

// Crie uma função para retornar o maior valor .
function getHigherTransactionByType(type){
    //Defini uma variável com valor de 0
    let compare = 0
    // e um id 0
    id = 0
    // Buscando as transações
    for(let i = 0; i < user.transactions.length; i++){
        // Busca as transações cujo, os valores são do tipo (type), e o valor maior que 
        // a variavel compare cujo valor é 0
        if(user.transactions[i].type == type && user.transactions[i].value > compare){
            // daí falo o seguinte, compare receba o valor de user.transactions, na posição i. value
            // e abaixo digo q o id receba (i)
            compare = user.transactions[i].value
            id = i
        }
    }
    
    return console.log(user.transactions[id])
    
}

function getAverageTransactionValue(){
    //criei uma variável sum = 0
    let sum = 0
    // Percorri o array das transações
    for(let i = 0; i < user.transactions.length; i++){
        // fiz a soma das transaçoes
        sum = sum + user.transactions[i].value
        
    }  
    // e fiz a média aki
    const average = sum / user.transactions.length
    return console.log(`A média das Transações do usuario : ${user.name} foi de ${average}`)

    
}

// Adicionando as transações ao array
createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 1000 })
createTransaction({ type: 'debit', value: 150 })
createTransaction({ type: 'debit', value: 30 })

// Retornando a média das transações independente do seu tipo
getAverageTransactionValue(user.transactions)

// Puxando as maiores transações de cada tipo
getHigherTransactionByType('credit')
getHigherTransactionByType('debit')