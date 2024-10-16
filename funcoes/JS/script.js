// 1 - Criando uma função

function minhaFuncao() {
    console.log("Testando")
}

minhaFuncao()


function funcaoComParametro(txt) {
    console.log(`imprimindo: ${txt}`)
}

funcaoComParametro("Elon")
funcaoComParametro("Mark")


//  2 - return

const a = 10
const b = 3
const c = 5
const d = 20

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a, b)

console.log(resultado);
console.log(soma(c, d));


// 3 - Escopo da função

let y = 10

function testandoEscopo() {
    let y = 20

    console.log(` Y dentro da função: ${y}`)
}

testandoEscopo()
console.log(` Y fora da função: ${y}`)



// 4 - Escopo aninhado

let m = 10

function escopoAninhado() {
    let m = 20

    if(true) {
        let m = 30

        if(true) {
            let m = 40

            console.log(m);
        }
        console.log(m);
    }
    console.log(m);
}

escopoAninhado();
console.log(m);


// 4 - Arrow Functions

const testArrow = () => {
    console.log("Está é uma arrow function")
}

testArrow()

const parOuImpar = (n) => {
    if(n % 2 === 0) {
        console.log("Par");
        return
    }
    
    console.log("Impar");
}

parOuImpar(5)
parOuImpar(2)


//  6 - mais sobre arrow functions

const raizQuadrada = (x) => {
    return x * x;
}

console.log(raizQuadrada(4));
console.log(raizQuadrada(9));


const raizQuadrada2 = (x) => x * x 
console.log(raizQuadrada2(12))

const helloWorld = () => console.log("Hello World");
helloWorld()

// undefined -> pois dentro da função já executou 
console.log(helloWorld());


// 7 - Argumentos Opcionais

const multiplication = function(m, n) {
    if( n === undefined) {
        return m * 2
    } else {
        return m * n 
    }
}

console.log(multiplication(5));
console.log(multiplication(5, 10));


const greeting = (nome) => {
    if(!nome) {
        console.log("Olá!")
        return;
    }

    console.log(`Olá ${nome}`);

}
greeting() 
greeting("Kaic") 


//  8 - Valor default

const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`
}

console.log(customGreeting("Matheus"));
console.log(customGreeting("Kaic", "Boa tarde"));


const repeatText = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i++) {
        console.log(text);
    }
};

repeatText("testando")
repeatText("testando", 5)


// 9 - Closure

function someFunction() {
    let txt = "Alguma coisa"

    function display() {
        console.log(txt);
    }

    display()
}

someFunction();

// 10 - Mais sobre closure

const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    };
};


// 11 - Recursion

const untilTen = (n, m) => {
    if(n < 10) {
        console.log("A função parou de executar")
    } else {
        const x = n - m

        console.log(x)

        untilTen(x, m)
    }
}

untilTen(100, 7)


function fatorial(x) {
    if(x === 0) {
        return 1
    } else {
        return x * fatorial(x - 1)
    }
}

const num = 6
const result = fatorial(num)

console.log(`O fatorial do numero ${num} é ${result}`);