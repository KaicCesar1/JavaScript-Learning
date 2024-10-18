const promessa = Promise.resolve(5 + 5)

console.log("Algum código")

promessa.then(value => {
    console.log(`A soma é ${value}`)
    return value;
})
.then((value) => value - 1)
.then((value) => console.log(`Agora é ${value}`))

console.log("Algum código 2")


// Falha na promise

Promise.resolve( 4* "asd") 
.then((n) => {
    if(Number.isNaN(n)) {
        throw new Error("Valores inválidos");
    }
})
.catch((err) => console.log(`Um erro ocorreu: ${err}`))


// Rejeitando promise

function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if(n > 10) {
            resolve(`O número é maior que 10`)
        } else {
            reject(new Error("Número muito baixo"))
        }
    });
}

const a = checkNumber(20)
const b = checkNumber(9)

console.log(a, b)

a.then((v) => console.log(`O resultado é ${v}`).catch((err) => console.log(`um erro ocorreu: ${err}`)
))


// Resolvendo várias promises

const p1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(10)
    }, 1000)
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
    if(30>10) {
        resolve(30)
    } else {
        reject("Erro!")
    }
});


Promise.all([p1, p2, p3]).then((values) => console.log(values))