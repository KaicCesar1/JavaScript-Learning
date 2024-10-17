// 1 - Arrays

const lista = [1, 2, 3, 4, 5];

console.log(lista)
console.log(typeof lista)


// 2 - Mais sobre arrays 
 
const arr = [ "a", "b", "c", "d"]
console.log(arr[0]);
console.log(arr[10]);
console.log(arr[3]);


// 3 - Propriedades

const numbers = [5, 3, 4];
console.log(numbers.length)

const myName = "Kaic"
console.log(myName.length)

// 4 - Métodos

const othernumbers = [1, 2, 3]
const allNumbers = numbers.concat(othernumbers)

console.log(allNumbers)

const text = "Algum texto"
console.log(text.toUpperCase());

console.log(text.indexOf("e"));
console.log(text.indexOf("z"));

// 5 - Objetos

const person = {
    name: "Kaic",
    age: 22,
    job: "Programador"
}

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.job)


// 6 - Criando e Deletando propriedades

const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000
}

console.log(car)

car.color = "red";

console.log(car);


delete car.km;

console.log(car);


// 7 - Assign

const obj = {
    a: "teste",
    b: true
};

console.log(obj instanceof Object)

const obj2 = {
    c: []
};

console.log(obj2);
Object.assign(obj2, obj);
console.log(obj2);


// 8 - Método Key e Entries

// Mostra somentes as chaves 
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))


// Aqui mostra as chaves e valores
console.log(Object.entries(obj))


// 9 - Mutação

const a = {
    name: "Kaic"
}

const b = a;

console.log(a);
console.log(b);

a.age = 31;

console.log(a);
console.log(b);

delete b.age;   
console.log(a);
console.log(b);


// 10 - Loop e Arrays
const users = ["Kaic", "Mark", "Elon", "Bill", "Matheus"];

for(let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[i]}`);
}


// 11 - Push e Pop

const array = ["a", "b", "c"];


array.push("d");

console.log(array);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

array.push("m", "n", "o");

console.log(array);


// 12 - Shift e Unshift

const letters = ["a", "b", "c"];

const letter = letters.shift()

console.log(letters);
console.log(letter);

letters.unshift("a");
console.log(letters);

// exemplo Pop/Push e Shift e Unshift

const alphabet = ["a", "b", "c", "d"];
alphabet.pop(); // remove o último elemento
alphabet.shift(); // remove o primeiro elemento

console.log(alphabet);

alphabet.unshift("a"); // adciona os elementos no inicio do array
alphabet.push("d"); // adiciona os elementos no fim do array

console.log(alphabet);

// 13 - indexOf e lastIndexOf

const myElements = ["morango", "maça", "pera", "abacate", "pera"];

console.log(myElements.indexOf("maça"));
console.log(myElements.indexOf("pera"));

console.log(myElements.lastIndexOf("morango")); 


// 14 - Slice

const testSlice= ["a", "b", "c", "d", "e"];

const subArray = testSlice.slice(2, 4);
console.log(testSlice);
console.log(subArray);


// 15 - Foreach

const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`O numero é: ${numero}`)
});

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Terceiro post", category: "Python"}
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title} da categoria ${post.category}`);
})


// 16 - Includes

const brands = ["BMW", "Fiat", "Porsche"];
console.log(brands.includes("Fiat"));
console.log(brands.includes("Ferrari"));

function checkBrand(x) {
    if(brands.includes(x)) {
        return `Existe carros da marca ${x}`
    }

    return `Não existe carros da marca ${x}`
}

const response = checkBrand("Mercedes");
console.log(response)


// 17 - Reverse

const reverseTest = [ 1, 2, 3, 4, 5];

reverseTest.reverse()

console.log(reverseTest)


// MARK ---------

// Métodos de String

//  18 - trim
const trimTest = "    testando \n   "

console.log(trimTest);
console.log(trimTest.trim())

console.log(trimTest.length)
console.log(trimTest.trim().length)


// 19 - PadStart

const testPadStart = "1"


const newNumber = testPadStart.padStart(4, "0");

console.log(`testPadStar: ${testPadStart}`);
console.log(`newNumber: ${newNumber}`);

const testPadEnd = testPadStart.padEnd(4, "0");
console.log(testPadEnd)


// 20 - Split

const frase = "O rato roeu a roupa do rei de Roma"

const arrayDaFrase = frase.split(" ");
console.log(arrayDaFrase);


for(i = 0; i < arrayDaFrase.length; i++) {
    if(arrayDaFrase[i] === "rei") {
        console.log(`Encontrei a palavra ${arrayDaFrase[i]}`)
        break
    }
}

// 21 - Join
const fraseDeNovo = arrayDaFrase.join(" ");
console.log(fraseDeNovo)


// 22 - Repeat
const word = "Testando \n";
console.log(word.repeat(3));



// 23 - Rest Operator / Rest Parameters

const somaInfinita = (...args) => {
    let total = 0

    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }

    return total;
}

console.log(somaInfinita(1, 5, 4));
console.log(somaInfinita(10, 50, 41));


// 24 - For...of

const somaInfinita2 = (...args) => {
    let total = 0

    for(num of args){
        total += num;
    }

    return total;
}
console.log(somaInfinita2(1, 6, 12, 7, 4))
console.log(somaInfinita2(12,34,32,12,59,4))


// 25 - Destructuring em objetos
const userDetails = {
    firstName: "Kaic",
    lastname: "Cesar",
    job: "Developer"
}

const {firstName, lastname, job} = userDetails;

console.log(firstName, lastname, job);

// renomear as variáveis

const {firstName: primeiroNome} = userDetails;
console.log(primeiroNome);



// 26 - Destructuring em Arrays
const myList = [ "Avião", "Moto", "Carro"];

const [veiculoA, veiculoB, veiculoC] = myList;
console.log(veiculoA, veiculoB, veiculoC);


// MARK ------

// 27 - JSON

const myJson = '{ "nome" : "Kaic", "age" : 23, "Skills": ["JavaScript", "PHP", "Java"]}'


// 28 - JSON para Objeto / Objeto para JSON

const myObject = JSON.parse(myJson);
console.log(myObject)
 
// Json inválido
const badJson = '{"name": Kaic}'
//const myBadObject = JSON.parse(badJson)

myObject.profission = "Software Engenieer"
console.log(myObject)



const myNewJson = JSON.stringify(myObject);
console.log(myNewJson);

console.log(typeof myObject);
console.log(typeof myNewJson);