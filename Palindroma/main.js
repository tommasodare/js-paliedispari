/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

const userWord = prompt("Inserisci una parola")

console.log(userWord);

const userWordReverse = userWord.reverseString()

console.log(userWordReverse);

if (userWordReverse === userWord) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola non è palindroma");
}
