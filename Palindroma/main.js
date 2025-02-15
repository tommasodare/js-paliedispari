/* Palidroma
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma */


/* Prova 1#
const userWord = prompt("Inserisci una parola")

console.log(userWord);

const userWordReverse = userWord.reverseString()

console.log(userWordReverse);

if (userWordReverse === userWord) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola non è palindroma");
} */

/* // Chiedere ad un utente di inserire una parola
// Utilizziamo prompt
const userWord = prompt("Inserisci una parola")
console.log(userWord);

// La parola inserita è palindroma solo se letta da sx dx è uguale a letta da dx a sx
// Utilizziamo i metodi .split, .reverse e

// Trasformiamo la stringa in un array
const arrayUserWord = userWord.split("")
console.log(arrayUserWord);

// Invertiamo la stringa creata con .reverse()

const reverseUserWord = arrayUserWord.reverse()
console.log(reverseUserWord);

// Facciamo tornare l'array ad essere una stringa
const newReverseUserWord = reverseUserWord.join("")
console.log(newReverseUserWord);

if (userWord === newReverseUserWord) {
    console.log(`La parola ${userWord} è palindroma`);
} else {
    console.log(`La parola ${userWord} non è palindroma`);
} */

function palindroma() {
    // Chiedere all'utente di inserire una parola
    const userWord = prompt("Inserisci una parola")
    console.log(userWord);
    
    // Trasformare la stringa in un array
    const arrayUserWord = userWord.split("")
    console.log(arrayUserWord);

    // Invertire l'array con .reverse
    const reverseUserWord = arrayUserWord.reverse()
    console.log(reverseUserWord);

    // Facciamo ritornare l'array ad essere stringa
    const newReverseUserWord = reverseUserWord.join("")
    console.log(newReverseUserWord);

    if (userWord === newReverseUserWord) {
        console.log(`La parola ${userWord} è palindroma`);
    } else {
        console.log(`La parola ${userWord} non è palindroma`);
    }
}

palindroma()