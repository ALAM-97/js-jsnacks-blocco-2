// Inserisci un numero.
// Se è pari stampa il numero.
// Se è dispari stampa il numero successivo.

var userNumber = parseInt(prompt('Inserisci numero'));
    while (isNaN(userNumber)) {
        userNumber = parseInt(prompt('ATTENZIONE! Inserisci un numero'))
    }

if (userNumber % 2 == 0) {
    console.log(userNumber) 
} else {
    console.log(userNumber + 1);
}
