// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.

var arrLungo = [10, 20, 30, 40, 50];
var arrCorto = [10, 20, 30];

var numCasuale = Math.floor(Math.random() * 100 + 10);

while (arrLungo.lenght > arrCorto.lenght) {
    arrCorto.push(numCasuale);
    
}

console.log(arrCorto);
console.log(arrLungo);

