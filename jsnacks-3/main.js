var n, somma = 0, media;

for (var i = 0; i < 10; i++) {
  n = parseInt(prompt('Inserisci un numero'));
  somma += n;
}

document.getElementById('somma').innerHTML = somma;

media = somma / 10;
document.getElementById('media').innerHTML = media;
