// Spiegazione del Gioco dei Dadi con output in console
console.log("Il gioco consiste nel lancio di un dado, sia per il giocatore sia per il computer. Si aggiudicherà la vittoria chi fa il punteggio più alto.");

// Dichiarazione delle variabili per User e CPU
let userNumber;
let cpuNumber;

// Ogni variabile avrà come valore un numero casuale tra 1 e 6, come un dado
userNumber = Math.round(Math.random() * 6);
console.log("Hai lanciato il dado, il tuo numero: " + userNumber)
cpuNumber = Math.round(Math.random() * 6);
console.log("Il tuo avversario ha lanciato il dado, il suo numero: " + cpuNumber)

// Dichiarazione di una variabile message per indicare il risultato del gioco
let message;

// Confronto tra i valori dei lanci dei dadi (user e cpu)
if (userNumber > cpuNumber){
    message = "Complimenti, hai vinto!";
} else if (userNumber == cpuNumber){
    message = "Pareggio";
} else {
    message = "Peccato, hai perso!";
}

// Output in console del risultato richiamando la variabile message
console.log(message);

