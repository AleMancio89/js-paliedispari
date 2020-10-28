var input = prompt('Inserisci una parola per verificare che sia un palindromo');

//Definisco la funzione per stabilire palindromo true o false

function isPalindrome(word) {
  var stringLowCase = word.toLowerCase(); // Riduco tutte le lettere in minuscolo per la comparazione

  for (var i = 0; i < stringLowCase.length; i++){

    if (stringLowCase[i] != stringLowCase[stringLowCase.length - 1 - i]) {
    return false;
    }

  }

  return true;

}

//Gestisco l'output tramite un alert in base al true/false

if ( isPalindrome(input) == true){
  alert('La parola inserita è palindroma');
} else {
  alert('La parola inserita NON è palindroma');
}
