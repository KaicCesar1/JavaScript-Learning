// 1 - Adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function() {
    console.log("Clicou no botão")
})


// 2 - Removendo Eventos
const secondBtn = document.querySelector("#btn");
function imprimirMensagem() {
    console.log("Teste aaaaa");
}

secondBtn.addEventListener("click", imprimirMensagem)

const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)
})


// 3 - Argumento do Evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event)
    console.log(event.offsetX)
    console.log(event.pointerType)
    console.log(event.target)
})


// 4 - Propagação
const containerBtn = document.querySelector("#btn-container")
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1")
})

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Evento 2")
})


// Removendo eventos padrão

const a = document.querySelector("a")

a.addEventListener("click", () => {
    preventDefault();

    console.log("Não alterou a página")
});


// 6 - Eventos Keyup e Keydown
document.addEventListener("keyup", (event) => {
    console.log(`soltou a tecla ${event.key}`)
})

document.addEventListener("keydown", (event) => {
    console.log(`soltou a tecla ${event.key}`)
})



// 7 - Eventos de mopuse
const mouse = document.querySelector("#mouse");

MouseEvent.addEventListener("mousedown", () => {
    console.log("Pressionou o botão")
})