var n, somma = 0;
for (let i=0; i < 10; i++) {
    n = parseInt(prompt('Inserisci un numero'));
    somma += n;        

    if (isNaN(n)) {
        alert('il valore inserito non è numerico');
        console.log('non è un numero');
    }
}

document.getElementById('somma').innerHTML = somma;
console.log('la somma è ', somma);

    



