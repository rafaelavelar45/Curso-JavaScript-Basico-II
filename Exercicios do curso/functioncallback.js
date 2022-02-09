// callback function / call back significa chame de volta

function sayMyName(name) {
    console.log('Antes de executar a função callback')
    name()
    //console.log(name)
    console.log('Depois de executar a funçao callback')
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)