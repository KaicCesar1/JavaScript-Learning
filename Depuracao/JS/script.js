// 1 - Strict 
// "use strict";

// Usando o strict, é obrigatorio declarar const ou let na declaração da variável
opa = "teste";
console.log(opa)

let opatwo = "teste 2"
console.log(opatwo);


// 2 - Console.log

let a = 1
let b = 2

if(a == 1) {
    a = b + 2;
}

console.log(a)

for(let i = 0; i < b; i++){
    a = a + 3;
    console.log(a);
}


// 3 - Debugger
let c = 1
let d = 2

if(c === 1) {
    c = d + 2;
}

// debugger;

for(let i = 0; i < d; i++) {
    c = c + 2;
    console.log(c);
}

console.log("Executou o loop")


// 4 - Tratamento de dado por função

function checkNumber(n) {
    const result = Number(n);

    if(Number.isNaN(result)) {
        console.log("Valor incorreto");
        return
    }
    console.log("Valor correto");
}

checkNumber(5)
checkNumber(" ")
checkNumber( )
checkNumber("10")
checkNumber({})


// 5 - Exceptions
let x = 10

if(x != 11) {
    // throw new Error("O valor de x não pode ser diferente de 11")
}


// 6 - Try Catch

try {
    const soma = x + y 
} catch(error) {
    console.log(`Erro no programa ${error}`)
}


// 7 - Finally

try {
    const value = checkNumber(3)

    if(!value) {
        throw new Error("Valores inválidos")
    }
} catch (error) {
    console.log(`Aconteceu algum erro: ${error}`)
} finally {
    console.log("O código foi executado")
}


// 8 - Assertions
function checkArray(arr) {
    if(arr.length === 0) {
        throw new Error ("O array precisa ter elementos")
    } else {
        console.log(`O array tem ${arr.length} elementos`)
    }
}

checkArray([1, 3, 4, 5])