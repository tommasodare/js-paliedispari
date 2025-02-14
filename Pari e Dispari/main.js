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
