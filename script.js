// ============================================================
// script data e ora
// ============================================================
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