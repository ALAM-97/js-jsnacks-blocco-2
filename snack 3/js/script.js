// Generatore di “nomi" e "cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

var nomi = ["Giorgio" , "Massimo", "Pietro", "Alessandro", "Pippo", "Angelo"];
var cognomi = ["Rossi", "Verdi", "Bianchi", "Arancioni", "Viola", "Neri"];

for (i = 0; i < 3; i++) {
    var nomeCasuale = Math.floor(Math.random(nomi) * 6);
    var cognomeCasuale = Math.floor(Math.random(cognomi) * 6);
    var nomiFinali = nomi[nomeCasuale] + " " + cognomi[cognomeCasuale];

    console.log(nomiFinali);
}