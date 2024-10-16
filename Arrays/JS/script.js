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