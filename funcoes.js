function saudacao() {
    console.log('Olá, seja bem-vinde ao nosso site!')
}

saudacao()

console.clear()

// Como enviar parametros para as funções
function saudacao(nome, curso='JavaScript') {
    console.log(`Olá, ${nome}! Seja bem-vinde ao curso de ${curso}!`)
}

saudacao('Rebeca')

console.clear

// Retorno da função
function soma(num1, num2) {
    return num1, num2
}
const resultado = soma(10, 30)

console.log(resultado / 2)

console.clear()

function maior50(numero) {
    if (numero > 50) {
        return true
    }

    return false
}

maior50(45)