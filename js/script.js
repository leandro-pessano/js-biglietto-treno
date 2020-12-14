// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65

var km, eta, prezzo;

km = parseInt(prompt('Inserire numero chilometri'));
eta = parseInt(prompt('Inserire età'));
prezzo = km * 0.21;
if (eta < 18) {
  prezzo = (km * 0.21) / 100 * 80;
} else if (eta >= 65 ) {
    prezzo = (km * 0.21) / 100 * 60;
}
console.log(prezzo);
