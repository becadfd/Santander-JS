// Igualdade: == (ou ===)
// Desigualdade: != (ou !==)
// Maior que: >
// Maior ou igual: >=
// Menor que: <
// Menor ou igual: <=

const numero = 10

console.log(numero == 10)
// compara conteúdo com numero e texto ==
console.log(numero == '10')
// compara tipo e conteúdo ===
console.log(numero === '10')
console.log(numero <= 15)
console.log(numero > 20)

// Conjunções Lógicas

// AND => &&
let idade = 25
let cnh = false
const dirigir = idade >=18 && cnh === true

console.log('Posso dirigir? ', dirigir)

//  OR => ||
idade = 40
const votar = idade <= 18 || idade >=70

console.log('Posso não votar?', votar)

const curso = true

console.log('Estou gostando do curso?', curso)

