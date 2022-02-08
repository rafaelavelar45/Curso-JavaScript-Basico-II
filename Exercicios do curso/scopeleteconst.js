// a let e const sao locais e so funcionam no scopo onde foram criadas

//console.log('> existe y antes do bloco?', y) nao
let y = 1

{
    let y = 0
    console.log('> existe y dentro e embaixo do y?', y) // sim
}

console.log('> existe y depois do bloco?', y) // nao , somente no escopo local
