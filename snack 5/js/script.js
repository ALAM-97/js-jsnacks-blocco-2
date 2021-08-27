// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.

var arr1 = [10, 20, 30, 40, 50];
var arr2 = [10, 20, 30];

console.log("Lunghezza Array 1 : " + arr1.length);
console.log("Lunghezza Array 2 : " + arr2.length);


if (arr1.length > arr2.length) {
    while (arr1.length != arr2.length) {
        arr2.push(Math.floor(Math.random() * 100));
    }  
} else if (arr1.length < arr2.length){
    while(arr1.length != arr2.length) {
        arr1.push(Math.floor(Math.random() * 100));
    }
} else {
    console.log("Non c'é differenza tra gli elementi")
}

console.log(arr1);
console.log(arr2);

