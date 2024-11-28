/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

const a = 2;
const b = 6;

const crazySum = function(a, b) {
    if (a === b) {
        return (a + b) * 3;
    } else {
        return a + b;
    }
};

console.log(crazySum(5, 5));
console.log(crazySum(a, b));

//_________________//_________________//_________________//_________________//_________________//_________________//

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

let a1 = 30;
let b1 = 400;
let c1 = 10;

function boundary(boundaryN) {
    if (boundaryN === 400 || (boundaryN >= 20 && boundaryN <= 100)) {
        return true;
    } else {
        return false;
    }
}

console.log(boundary(a1));
console.log(boundary(b1));
console.log(boundary(c1));

//_________________//_________________//_________________//_________________//_________________//_________________//

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

//let stringa = prompt("Inserisci una parola");
let stringa = "ESERCIZIO 3";

function reverseString(parola) {
    return parola.split('').reverse().join('');
}

console.log(reverseString(stringa));

//_________________//_________________//_________________//_________________//_________________//_________________//

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

//let parametro = prompt("Inserisci una parola in minuscolo");
let parametro = "compiti";

function upperFirst(testo) {
    return testo.charAt(0).toUpperCase() + testo.slice(1).toLowerCase();
}

console.log(upperFirst(parametro));

//_________________//_________________//_________________//_________________//_________________//_________________//

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n) {
    let random = [];
    for (let xy = 0; xy <= n; xy++) {
        random.push(Math.floor(Math.random() * 10))
    }
    return random;
}
console.log(giveMeRandom(6));

//_________________//_________________//_________________//_________________//_________________//_________________//

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

let l1 = 27
let l2 = 12

const area = function (base, altezza) {
    return base * altezza
}

console.log("l'area del rettangolo è = " + area(l1, l2))

//_________________//_________________//_________________//_________________//_________________//_________________//

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

let XY = 20

const crazyDiff = function (numeroxy) {
    if (numeroxy > 19)
        return (numeroxy - 19) * 3;
    else
        return (numeroxy - 19);
}

console.log(crazyDiff(XY))

//_________________//_________________//_________________//_________________//_________________//_________________//

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

let parolaxy = "casa";
//let parolaxy2 = "code";

const codify = function(stringa) {
    if (stringa.startsWith('code')) 
        return stringa    
    else {
        return "code" + " " + stringa
    }        
}

console.log(codify(parolaxy))
//console.log(codify(parolaxy2))

//_________________//_________________//_________________//_________________//_________________//_________________//

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

let numeroIntero = 60

const check3and7 = function(NN) {
    if (NN % 3 === 0 || NN % 7 === 0)
        return true
    else {
        return false
    }
}

console.log(check3and7(numeroIntero))

//_________________//_________________//_________________//_________________//_________________//_________________//

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

let theEnd = "Buonasera"

const cutString = function(fine) {
    return fine.slice(1, -1)
}

console.log(cutString(theEnd))

//_________________//_________________//_________________//_________________//_________________//_________________//