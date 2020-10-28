//Raccolta input
var inputNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

var inputEvenOrOdd = (prompt('Scegli se, secondo te, il risultato sarà pari o dispari')).toLowerCase();

var somma = inputNumber;

// Funzione per calcolare numero random

function computerRandomNumber() {
  var computerRandomNumber = Math.floor(Math.random() * 5 + 1);

  return computerRandomNumber;

}

somma += computerRandomNumber();

//Funzione per stabilire se la somma dei due numeri è pari

function isEven() {
  return somma % 2 == 0;  
}

//Condizioni per stabilire la vittoria

if (isEven(somma)){
  if (inputEvenOrOdd == 'pari') {
    alert('Hai Vinto! il numero ' + somma + ' è pari!')
  } else {
    alert('Hai Perso! il numero ' + somma + ' è pari!')
  }
} else {
  if (inputEvenOrOdd == 'pari') {
    alert('Hai Perso! il numero ' + somma + ' è dispari!')
  } else {
    alert('Hai Vinto! il numero ' + somma + ' è dispari!')
  }
}
