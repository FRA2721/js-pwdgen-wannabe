/* Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito. Infine scrivi sulla pagina nomecognomecolorepreferito21*/

// start
// ..................................................................

// input-data
const userName = prompt("Hello dear! What is your name?");
const userSurname = prompt("Great! And what is your surname?");
const favouriteColor = prompt("Ok dear... Last question! Let me know what is your favourite color, please:");

// operations
const passwordGenerated = userName+userSurname+favouriteColor+"21";

// output-data
document.getElementById("passwordGenerate").innerHTML = `Hi ${userName}, i generated a password for you... <br><br> Password generated: ${passwordGenerated}`;

// ..................................................................
// end
