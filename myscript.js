function genNum() {
    let numeroRand = parseInt(Math.floor(Math.random()*100 + 1));
    return numeroRand;
}

let bottone = document.getElementById('bottone');
let testo = document.getElementById('testo');

function nascondi() {
    element.innerHTML = ''
    bottone.className = 'mostra';
    testo.className = 'mostra';
}



// mostrare i 5 numeri 
const serieNum = [];
const numeri = 5;

while (serieNum.length < numeri) {
    let numero = genNum(); 
    if (!serieNum.includes(numero)){
    serieNum.push(numero);
    }
}
console.log(serieNum);

let element = document.getElementById('prova');


element.innerHTML = 'Memorizza questi numeri: ' + serieNum;

// dopo 30 secondi nasconderli 
const nascondereNumeri = setTimeout(nascondi, 30000);
// tasto per inserire i numeri 

// controllare le due array dei numeri 
const numeriCorretti = [];
const wrongNumbers = [];

bottone.addEventListener('click',function() {
    for (let i = 1; i <= serieNum.length; i++) {
        let numGuess = parseInt(prompt('Inserisci un numero per volta'));
        if (serieNum.includes(numGuess)) {
            numeriCorretti.push(numGuess);
        }    
    }

    document.writeln('Hai indovinato ' + numeriCorretti.length + ' numeri. ');
    document.writeln('I numeri indovinati sono: ' + numeriCorretti);


});





