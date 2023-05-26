// O problema
const input = require('readline-sync')
// const nota1 = Number(input.question('Informe a nota 1:'))
// const nota2 = Number(input.question('Informe a nota 2:'))
// const nota3 = Number(input.question('Informe a nota 3:'))

// let media = (nota1 + nota2 + nota3) / 3

// Acumulador
let acumulador = 0
acumulador += 10
acumulador -= 2

// acumula 1 a mais
acumulador++

console.log(acumulador)

console.clear()

// Estrutura for
for (let i = 0; i <= 4; i++) {
    console.log('repetição', i)
}

for (let i = 10; i <= 12; i++) {
    console.log('repetição', i)
}

for (let i = 12; i > 8; i--) {
    console.log('repetição', i)
}

console.clear()

// Resolvendo o problema inicial
let nota
let soma = 0

for (let i = 1; i <= 3; i++) {
    nota = Number(input.question(`Infome a nota ${i} do aluno: `))

    soma = soma + nota
}

console.log(`A média do aluno é ${soma / 3}`)

