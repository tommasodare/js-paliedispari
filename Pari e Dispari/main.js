/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto. */

const userNumber = Number(prompt("Scegli un numero da 1 a 5"))

const pcNumber = Math.floor(Math.random()*6)

console.log(userNumber, pcNumber);

const sum = userNumber + pcNumber

console.log(sum);

if (sum % 2 === 0) {
    console.log("Il giocatore vince");
} else {
    console.log("Il pc vince");
}


// Funzione per generare un numero random tra 1 e 5
function generaNumeroRandom() {
    return Math.floor(Math.random() * 5) + 1;
}

// Funzione per determinare se un numero è pari o dispari
function èPari(num) {
    return num % 2 === 0;
}

// Funzione principale per il gioco
function pariDispari() {
    // Chiedere all'utente di scegliere pari o dispari
    let scelta = prompt("Scegli 'pari' o 'dispari':").toLowerCase();
    if (scelta !== 'pari' && scelta !== 'dispari') {
        console.log("Scelta non valida. Riprova.");
        return;
    }

    // Chiedere all'utente di inserire un numero da 1 a 5
    let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));
    if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5) {
        console.log("Numero non valido. Riprova.");
        return;
    }

    // Generare un numero random per il computer
    let numeroComputer = generaNumeroRandom();
    console.log("Numero del computer: " + numeroComputer);

    // Sommare i due numeri
    let somma = numeroUtente + numeroComputer;
    console.log("Somma: " + somma);

    // Determinare se la somma è pari o dispari
    let sommaÈPari = èPari(somma);
    let risultato = sommaÈPari ? 'pari' : 'dispari';

    // Dichiara chi ha vinto
    if (risultato === scelta) {
        console.log("Hai vinto! La somma è " + risultato + ".");
    } else {
        console.log("Hai perso! La somma è " + risultato + ".");
    }
}

// Avviare il gioco
pariDispari();