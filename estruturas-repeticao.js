const input = require('readline-sync')
const numSorteado = 5 
let numero = Number(input.question('Qual número você escolhe?'))

console.log(numero, typeof numero)

while (numero !== numSorteado) {
    console.log('Você errou o número! Tente novamente: ')
    numero = Number(input.question('Qual número você escolhe?'))
}

console.log('Você acertou o número!')
