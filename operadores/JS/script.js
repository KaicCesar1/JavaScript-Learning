// Numbers
// Typeof mostra os tipos de dados
console.log(typeof 2)
console.log(typeof 32.45)
console.log(typeof -124)


// Operações Artimética
console.log(4 + 22)
console.log(2 - 10)
console.log( 8 * 2)
console.log(9 / 10)


// Special Numbers
console.log(typeof Infinity)
console.log(typeof -Infinity)
console.log(12 * "abc")
console.log(typeof NaN)


// Strings
console.log("Um texto")
console.log('Mais um texto')
console.log("12")


// Símbolos especiais em Strings
console.log("Teste de \n quebra de linha")
console.log("Texto em \n duas linhas")
console.log("Texto usando o \t tab")


// Concatenação
console.log("Concatenando " + "os " + "textos")
console.log("Hello " + "World")
console.log(`Testando ` + `com ` + "crase")


// Interpolação (Template Strings)
console.log(`A soma de 2 + 2 é: ${2 + 2}`)
console.log(`Podemos executar qualquer coisa aqui: ${console.log("teste")}`)


// Booleanos
console.log(3 > 5)
console.log(3 < 5)
console.log(typeof false)

console.log(3 == 5)
console.log(3 != 5)
console.log(3 === 3) // Idêntico é uma forma de deixar o código mais sólido para evitar erros ocultos


// Idêntico x Igual
console.log(9 == '9') // true - pois o valor é igual
console.log(9 === '9') // false - pois o valor é igual mas o tipo de dado não
console.log(9 != '9') // false - ele considera o valor 
console.log(9 !== '9') // true - pois o tipo não é igual 


// Operadores lógicos
    // E
console.log(true && true)
console.log(6 > 2 && 2 < 10)
console.log(6 > 2 && "Kaic" === 1)

    // OU
console.log(6 > 2 || "Kaic" === 1)
console.log(6 > 2 || 4 > 12)
console.log(6 < 2 || 4 > 12)

    // Negação
console.log(!true)
console.log(!false)


// Mudança de tipos (Evitar de utilizar)
console.log(5 * null) // 0
console.log("Teste" * "ola") // NaN
console.log("10" + 1) // 101
console.log("10" - 1) // 9

