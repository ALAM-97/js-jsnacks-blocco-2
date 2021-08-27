// Crea un array di numeri interi
// Fai la somma di tutti gli elementi che sono in posizione(indice dell'array) dispari

var numeri = [1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9 ,10];
var dispari = [];
var somma = 0;

for (var i = 0; i < numeri.length; i++) {
    if ((numeri[i] % 2) != 1) {
        dispari.push(numeri[i]);
    }
}

for (i = 0; i < dispari.length; i++) {
    somma += dispari[i];
}

console.log(dispari);
console.log(somma);