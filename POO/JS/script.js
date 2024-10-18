// 1 - Métodos
const animal = {
    nome: "Cachorro",
    latir: function() {
        console.log("au au");
    }
}

animal.latir()  


// 2 - Aprofundando em métodos
const person = {
    nome: "Kaic",
    
    getNome: function() {
        return this.nome;
    },

    setNome: function(novoNome) {
        this.nome = novoNome;
    }
}

console.log(person.nome);
console.log(person.getNome());

person.setNome("Cesar");
console.log(person.getNome());


// 3 - Prototype
const text = "Abcde"
console.log(Object.getPrototypeOf(text))

const num = 12345
console.log(Object.getPrototypeOf(num))

const bool = true
console.log(Object.getPrototypeOf(bool))

const arr = []
console.log(Object.getPrototypeOf(arr))


// 5 - Classes ES6
class cachorroClasse {
    constructor(nome, raca) {
        this.nome = nome
        this.raca = raca
    }
}

const jeff = new cachorroClasse("Jeff", "Labrador")
console.log(jeff);


class aluno {
    constructor(nome, idade, curso) {
        this.nome = nome
        this.idade = idade
        this.curso = curso
    }
}

const primeiroAluno = new aluno("Kaic", 22, "Engenharia de Software")
const segundoAluno = new aluno("Lucas", 25, "Ciencia da computação")
console.log(primeiroAluno);
console.log(segundoAluno);


// 6 - Mais sobre classes

class caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} e é da cor ${ this.cor}`);
    }
}

const scania = new caminhao(6, "Vermelho")
scania.descreverCaminhao()

const volvo = new caminhao(8, "Branco");
volvo.descreverCaminhao();