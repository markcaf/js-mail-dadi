// Inizializzazione array contenente le email approvate
const mailApproved = ["topolino@gmail.com", "paperino@gmail.com", "pippo@gmail.com", "pluto@gmail.com"];
console.log(mailApproved);

// Inizializzazione variabile della mail digitata dall'utente tramite prompt
const userMail = prompt("Inserisci la tua mail");
console.log("Indirizzo email inserito: " + userMail);

// Inizializzazione della variabile di verifica email e messaggio di output
let mailVerified = false;
let message;

// Ciclo for per verificare se la mail inserita corrisponde a quelle approvate
for (let i = 0; i < mailApproved.length ; i++){

    // Dichiarazione della variabile "verified" per rendere possibile la verifica con l'email utente
    const verified = mailApproved[i];

    // Condizione di verifica per identità
    if ( userMail === verified ){
        mailVerified = true;
    }
}
