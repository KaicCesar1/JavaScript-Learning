async function somarComDelay(a, b) {
    return a + b;
}   

somarComDelay(2, 4).then((value) => {
    console.log(`O valor da soma é: ${ value}`)
})

console.log("Teste async")


// Função Await

function resolveComDelay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolveu a promise");
        }, 2000);
    });
}

async function chamadaAsync() {
    console.log("Chamando a Promise, e esperando o resultado")

    const result = await resolveComDelay()
    console.log(`O resultado chegou ${result}`)
}   

chamadaAsync()
