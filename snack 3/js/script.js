// Generatore di “nomi" e "cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

var nomi = ["Giorgio" , "Massimo", "Pietro", "Alessandro", "Pippo", "Angelo"];
var cognomi = ["Rossi", "Verdi", "Bianchi", "Arancioni", "Viola", "Neri"];
var invitati = [];

for (i = 0; i < 3; i++) {
    var indiceNome = Math.floor(Math.random(nomi) * 6);
        if (indiceNome == indiceNome) {
            indiceNome = Math.floor(Math.random(nomi) * 6);
        }
    var indiceCognome = Math.floor(Math.random(cognomi) * 6);
    var nomiFinali = nomi[indiceNome] + " " + cognomi[indiceCognome];
    invitati.push(nomiFinali);
}

console.log(invitati)