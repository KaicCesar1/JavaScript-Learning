// 1 - MOVENDO-SE PELO DOM
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);


// 2 - SELECIONANDO ELEMENTO POR TAG
const listItens = document.getElementsByTagName("li");
console.log(listItens);


// 3 - SELECIONANDO ELEMENTO POR ID
const title = document.getElementById("title");
console.log(title);


// 4 - SELECIONANDO ELEMENTO POR CLASSE
const product = document.getElementsByClassName("product");
console.log(product);


// 5 - SELECIONANDO OS ELEMENTOS POR CSS
const productsQuery = document.querySelectorAll(".product");
console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);


// 6 - ALTERANDO HTML COM INSERTBEFORE
const p = document.createElement("p");
const header = title.parentElement;
console.log(header)

header.insertBefore(p, title);


// 6 - ALTERANDO HTML COM APPENDCHIELD
const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");
navLinks.appendChild(li);


// 6 - ALTERANDO HTML COM REPLACECHILD
const h2 = document.createElement("h2");
h2.textContent = "Meu novo título h2"

header.replaceChild(h2, title)


// 9 - CRIANDO NÓS DE TEXTO
const myText = document.createTextNode("Agora vamos colocar mais um título");
console.log(myText)
const h3 = document.createElement("h3");
h3.appendChild(myText)

mainContainer.appendChild(h3)


// 10 - TRABALHANDO COM ATRIBUTOS
const firstLink = navLinks.querySelector("a");
console.log(firstLink)

firstLink.setAttribute("href", "https://www.ombrelone.com")
console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "_blank")


// 11 - ALTURA E LARGURA
const footer = document.querySelector("footer");

// Considerando bordas
console.log(footer.offsetWidth)
console.log(footer.offsetHeight)

// Desconsiderando bordas
console.log(footer.clientWidth)
console.log(footer.clientHeight)


// 12 - POSICAO DO ELEMENTO
const product1 = product[1];

console.log(product1.getBoundingClientRect())


// 13 - ESTILOS COM JS (CSS com JS)
mainContainer.style.color = "white"
mainContainer.style.backgroundColor = "#333"
mainContainer.style.paddingBottom = "20px"


// 14 - HTMLCollection
for(const li of listItens) {
    li.style.backgroundColor = "red"
}