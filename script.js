// funzione
function nomeMese(mx) {

    var nomeMese;

    switch(mx) {
      case 0 :
        nomeMese = "gennaio";
        break;
      case 1 :
        nomeMese = "febbraio";
        break;
      case 2 :
        nomeMese = "marzo";
        break;
      case 3 :
        nomeMese = "aprile";
        break;
      case 4 :
        nomeMese = "maggio";
        break;
      case 5 :
        nomeMese = "giugno";
        break;
      case 6 :
        nomeMese = "luglio";
        break;
      case 7 :
        nomeMese = "agosto";
        break;
      case 8 :
        nomeMese = "settembre";
        break;
      case 9 :
        nomeMese = "ottobre";
        break;
      case 10 :
        nomeMese = "novembre";
        break;
      case 11 :
        nomeMese = "dicembre";
        break;
    }

  return nomeMese;
}

// funzione
function formatoConZeriIniziali(zx) {

    var formatoConZeriIniziali = "";

    if ( zx < 10 ) {
        formatoConZeriIniziali = "0" + zx;
    } else {
        formatoConZeriIniziali = zx;
    }

    return formatoConZeriIniziali;

}

// script
var getTime = function(){

    var date = new Date();

    const [mm, gg, anno] = [
      date.getMonth(),
      date.getDate(),
      date.getFullYear(),
    ];

    const [hh, ms] = [
      date.getHours(),
      date.getMinutes(),
    ];

    var stringa = "";
    var nomeDelMese = "";

    nomeDelMese = nomeMese(mm);
    stringa = gg + " " + nomeDelMese + " " + anno;
    document.getElementById('testo-giorno').innerText = stringa; 
    
    stringa = formatoConZeriIniziali(hh) + ":" + formatoConZeriIniziali(ms);
    document.getElementById('testo-ora').innerText = stringa;

    var t = setTimeout(this.getTime, 1000);
}

getTime();