// Inserisci un numero.
// Se è pari stampa il numero.
// Se è dispari stampa il numero successivo.

var userNumbers = parseInt(prompt('Inserisci numero'));
    while (isNaN(userNumbers)) {
        userNumbers = parseInt(prompt('ATTENZIONE! Inserisci un numero'))
    }

if (userNumbers % 2 == 0) {
    console.log(userNumbers) 
} else if (userNumbers % 2 == 1) {
    console.log(userNumbers + 1);
}
