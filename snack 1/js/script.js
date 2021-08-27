// 1. Il software deve chiedere per 5 volte all’utente di inserire un numero.
// 2. Il programma stampa la somma di tutti i numeri inseriti.
// 3. Esegui questo programma in due versioni, con il for e con il while.

var numbers = []
var somma = 0;


// CICLO FOR

for (i = 0; i < 5; i++) {
    var userNumbers = numbers.push(parseInt(prompt('Inserisci un numero')));
    somma += numbers[i];
}

// CICLO WHILE

i = 0;

// while (i < 5) {
//     var userNumbers = numbers.push(parseInt(prompt('Inserisci un numero')));
//     somma += numbers[i];
//     i++;
// }

console.log(somma);
