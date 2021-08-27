// 1. Il software deve chiedere per 5 volte all’utente di inserire un numero.
// 2. Il programma stampa la somma di tutti i numeri inseriti.
// 3. Esegui questo programma in due versioni, con il for e con il while.

var somma = 0;

// ------- CICLO FOR -------

// for (i = 0; i < 5; i++) {
//     var userNumbers = parseInt(prompt('Inserisci un numero'));
    
//     while (isNaN(userNumbers)) {
//         userNumbers = parseInt(prompt('ATTENZIONE! Inserisci un numero'));
//     }

//     somma += userNumbers;
// }

//  ------- CICLO WHILE -------

i = 0;

while (i < 5) {
    var userNumbers = parseInt(prompt('Inserisci un numero'));

    while (isNaN(userNumbers)) {
        userNumbers = parseInt(prompt('ATTENZIONE! Inserisci un numero'));
    }

    somma += userNumbers;
    i++;
}

console.log(somma);
