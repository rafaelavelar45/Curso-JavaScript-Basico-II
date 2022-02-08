//var e global e, tambem local 
// var e global e podera funcionar fora de um escopo bloco

// conceito de var é hoisting --> elevaçao

console.log('> existe x antes do bloco?', x)

{
    var x = 0
}

//console.log('> existe x depois do bloco', x)