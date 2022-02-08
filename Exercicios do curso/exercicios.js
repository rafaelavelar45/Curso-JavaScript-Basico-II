// 1. Declare uma variavel de nome weigth

let weigth

// 2. que tipo de dado é a variavel acima?

undefined

/* 3. Declare uma variavel e atribua valores para cada um dos dados:

    * name : string
    * age : Number  (interger)
    * stars : Number (float)
    * isSubscribed : Boolean
*/

let name = "Maike"
let age = 21
let weigth = 87.7
isSubscribed = true

/* 4. A variavel student abaixo é de que tipo de dados ?
  

   4.1 Atribua a ela as memas propriedades e valores do exercicio 3

   4.2 Mostre no console log a seguinte mensagem :

   <name> de idade <age> pesa <weigth> kg.
*/
//A variavel e do tipo Object
students = {
    name: "Mike",
    age: 21,
    weigth: 87.7,
    isSubscribed: true
}

console.log(`${students.name} tem ${students.age} anos e pesa ${students.weigth} kg.`)

/*

5. Declare um variavel do tipo Array, de nome students e atribua a ela nenhuma valor, ou seja, somente o Array vazia

*/
student = []


/* 6. Reatribua valor para a variavel acima, colocando dentro dela o objeto student da questao 4. (Não copiar e colar o objeto, mas 
   usar o objeto para criar o Array)
*/

student = [
    students
]

console.log(students)

/* 7. coloque no console o valor da posiçao zero do Array acima

*/

console.log(student[0])

/* 8. Crie um novo student e coloque na posiçao 1 do Array students

*/


let Jhon = {
    name: "Jhon",
    age: 23,
    weigth: 74.8,
    isSubscribed: true
}


student = [
    students,
    Jhon
]



console.log(student[1])


/*9. Sem rodar o codigo responda qual e a resposta do codigo abaixo
e por que ? Apos sua reposta, rode o codigo e veja se voce acertou

console.log(a)

var a = 1

*/

undefined











