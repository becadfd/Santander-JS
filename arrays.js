// Como criar um Array
let arr = ['Rebeca', 25, 1.71, true]

console.log(arr)

// Como acessar os elementos do array
console.log('Nome: ', arr[0])
console.log('Idade: ', arr[1])
console.log('Altura: ', arr[2])
console.log('Estudando: ', arr[3])

// Como obter o tamanho do array
console.log('Tamanho do array: ', arr.length)

// Percorrendo arrays
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

for (let elemento of arr) {
    console.log(elemento)
}

console.clear()

for (let indice in arr) {
    console.log(indice, arr[indice])
}