// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.

var arrLungo = [10, 20, 30, 40, 50];
var arrCorto = [10, 20, 30];

var numCasuale = Math.floor(Math.random() * 100);


// do {
//     var numCasuale = Math.floor(Math.random() * 100);
//     arrCorto.push(numCasuale);
//     (JSON.stringify(arrLungo) === JSON.stringify(arrCorto));

// } while (JSON.stringify(arrLungo) != JSON.stringify(arrCorto));

// for (i = 0; 0 < 5; i++) {

//     while (JSON.stringify(arrLungo) != JSON.stringify(arrCorto)) {
//         arrCorto.push(numCasuale);
//     }
// }
    console.log(arrCorto);