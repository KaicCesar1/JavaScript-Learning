console.log("-------------");

// While

i = 5;

while (i != 0) {
    console.log(i);
    i = i - 1;
}

// Do While
let p = 5;

do {
    console.log(`Valor de o: ${p}`);
    p--
} while (p > 0)


// FOR 

// Variável fora do for
let y;

for(y = 5; y > 0; y--) {
    console.log(y);
}


// Variável dentro do for
for(let x = 0; x < 5; x++) {
    console.log(x)
}


for(let g = 20; g > 10; g--) {
    console.log(g)
    if(g === 12) {
        console.log("chegou no 12")
        break;
    }
}


for(let a = 0; a <= 10 ; a++) {
    if(a % 2 == 0) {
        console.log("Numero par!");
        continue;
    }

    console.log(a);
}   