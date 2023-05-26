//  - 1. Coerção Explícita (Manual)
const numero = 10
console.log(numero, typeof numero)

const numbToString = String(numero)
console.log(numbToString, typeof numbToString)

console.log(Number('2561'))
console.log(parseFloat('6125.61'))
console.log(parseInt(6125.61))

console.clear()

//  - 2.Coerção Implícita (Automática)
// Somente em somas ele interpreta como texto
console.log(10 + '1')
console.log(10 - '1')
console.log(10 * '3')
// NaN = not a number
console.log(10 - 'Rebeca')


// Qual será a saída desse código?
let n = 1 + '1'

n = n - 1

console.log(n)

// Qual será a saída desse código?
console.log(2 + 3 + 4 + '5')

// Qual será a saída desse código?
console.log('5' + 2 + 3 + 4)

// Qual será a saída desse código?
console.log('10' - '4' - '3' - 2 + '5')
