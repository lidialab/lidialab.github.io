// ============================================================
// variabili e costanti
// ============================================================

nomiGiorni = ["lunedì","martedì","mercoledì","giovedì","venerdì","sabato","domenica"];

nomiMesi = ["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"];

// ============================================================
// funzione
// ============================================================
function nomeMese(mx) {

  var nomeMese;

  switch(mx) {
    case 0 :        nomeMese = nomiMesi[0];        break;
    case 1 :        nomeMese = nomiMesi[1];        break;
    case 2 :        nomeMese = nomiMesi[2];        break;
    case 3 :        nomeMese = nomiMesi[3];        break;
    case 4 :        nomeMese = nomiMesi[4];        break;
    case 5 :        nomeMese = nomiMesi[5];        break;
    case 6 :        nomeMese = nomiMesi[6];        break;
    case 7 :        nomeMese = nomiMesi[7];        break;
    case 8 :        nomeMese = nomiMesi[8];        break;
    case 9 :        nomeMese = nomiMesi[9];        break;
    case 10 :       nomeMese = nomiMesi[10];       break;
    case 11 :       nomeMese = nomiMesi[11];       break;
  }

  return nomeMese;
}

// ============================================================
// funzione
// ============================================================
function formatoConZeriIniziali(zx) {

    var formatoConZeriIniziali = "";

    if ( zx < 10 ) {
        formatoConZeriIniziali = "0" + zx;
    } else {
        formatoConZeriIniziali = zx;
    }

    return formatoConZeriIniziali;

}