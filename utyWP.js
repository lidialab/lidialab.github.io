// ============================================================
// variabili e costanti
// ============================================================
const myLocale = "it_IT";
const myLoc = "it";

//nomiSottoProjCore = ["", "cc", "admin","admin/network"]

nomiTemiWPorg = ["twentytwentythree","twentytwentytwo","twentytwentyone","twentytwenty",
"twentynineteen","twentyseventeen","twentysixteen","twentyfifteen","twentyfourteen","twentythirteen","twentytwelve","twentyeleven","twentyten"];

nomiPluginWPorg = ["gutenberg","classic-editor","health-check","wordpress-importer"]

nomiPluginRilevanti = ["bbpress","buddypress"]

nomiMeta = ["wordpress-org","plugins-v3","themes","rosetta","p2-breathe","o2","forums","get-involved","pattern-directory","wordcamp","openverse","browsehappy","learn-wordpress"];

// ============================================================
// funzione
// ============================================================

function componiURL(tipoProj, sottoProj, loc, slug) {

    var url = "";

    if (sottoProj == "") {
        switch(tipoProj) {
            case "core" :
                url  = `https://translate.wordpress.org/locale/${loc}/default/wp/dev`;
                break;
            case "meta" :
                url  = `https://translate.wordpress.org/locale/${loc}/default/${tipoProj}/${slug}`;
                break;
            case "wp-themes" :
                url  = `https://translate.wordpress.org/locale/${loc}/default/${tipoProj}/${slug}`;
                break;
            case "wp-plugins" :
                url  = `https://translate.wordpress.org/locale/${loc}/default/${tipoProj}/${slug}`;
                break;
        }
    }

    if (sottoProj == "stable") {
        switch(tipoProj) {
            case "meta" :
                url  = `https://translate.wordpress.org/projects/${tipoProj}/${slug}/${loc}/default/`;
                break;
            case "wp-themes" :
                url  = `https://translate.wordpress.org/projects/${tipoProj}/${slug}/${loc}/default/`;
                break;
            case "wp-plugins" :
                url  = `https://translate.wordpress.org/projects/${tipoProj}/${slug}/stable/${loc}/default/`;
                break;
        }
    }

    if (sottoProj == "readme") {
        switch(tipoProj) {
            case "wp-plugins" :
                url  = `https://translate.wordpress.org/projects/${tipoProj}/${slug}/stable-readme/${loc}/default/`;
                break;
        }
    }

    return url;

}

// ============================================================
// funzione
// ============================================================

function componiTagLink(url, testo) {

    var tagLink = "";

    tagLink = `<a href="${url}">${testo}</a>`;
    
    return tagLink;

}

// ============================================================
// script
//
// esempio: https://translate.wordpress.org/locale/it/default/meta/plugins-v3
// ============================================================
function elencoProgetti(tipoProj, slugProgetti, loc) {

    const apriElenco = "<ul>";
    const chiudiElenco = "</ul>";
    const apriElemento = "<li>";
    const chiudiElemento = "</li>";

    var url = "";
    var tagLink = "";
    var testo = "";
    var stringa = "";

// Pagina con tutti i progetti di quella categoria

    url = componiURL(tipoProj, "", loc, "");

    testo = "Tutti i " + tipoProj;
    tagLink = componiTagLink(url, testo);

    stringa = tagLink + "<br>";

// Aggiungi l'elenco ai singoli progetti di quella categoria

    stringa = stringa + apriElenco;

    var items = 0;
    items = slugProgetti.length;

    for ( var ix = 0 ; ix < items; ix++ ) 
        { 
            stringa = stringa + apriElemento ;

            slug = slugProgetti[ix];
            url = componiURL(tipoProj, "", loc, slug);
            tagLink = componiTagLink(url, slug);
            stringa = stringa + tagLink;
            stringa = stringa + "<br>";

            url = componiURL(tipoProj, "stable", loc, slug);
            testo = "stable: " + slug;
            tagLink = componiTagLink(url, testo);
            stringa = stringa + tagLink;

            if (tipoProj == "wp-plugins") {
                stringa = stringa + "<br>";
                url = componiURL(tipoProj, "readme", loc, slug);
                testo = "stable-readme: " + slug;
                tagLink = componiTagLink(url, testo);
                stringa = stringa + tagLink;
            }

            stringa = stringa + chiudiElemento ;
        }
  
    stringa = stringa + chiudiElenco;

    return stringa;
}

// ============================================================
// script
//
// esempio: https://translate.wordpress.org/locale/it/default/meta/plugins-v3
// ============================================================
function elencoProgettiCore() {

    var  stringa = "";

    stringa = `
        <ul>
            <li><a href="https://translate.wordpress.org/projects/wp/dev/it/default/">Core - dev (corrente)</a></li>
            <li><a href="https://translate.wordpress.org/projects/wp/dev/admin/it/default/">Core - Administration (corrente)</a></li>
            <li><a href="https://translate.wordpress.org/projects/wp/dev/admin/network/it/default/">Core - Network Admin (MU) (corrente)</a></li>
            <li><a href="https://translate.wordpress.org/projects/wp/dev/cc/it/default/">Core - Continents & Cities (corrente)</a></li>
         </ul>
         `;
    return stringa;
}


elenco = elencoProgettiCore();
document.getElementById('sez-core').innerHTML = elenco; 

elenco = elencoProgetti("meta", nomiMeta, myLoc);
document.getElementById('sez-meta').innerHTML = elenco; 

elenco = elencoProgetti("wp-themes", nomiTemiWPorg, myLoc, slug);
document.getElementById('sez-temi-WP').innerHTML = elenco; 

elenco = elencoProgetti("wp-plugins", nomiPluginWPorg, myLoc, slug);
document.getElementById('sez-plugin-WP').innerHTML = elenco; 

elenco = elencoProgetti("wp-plugins", nomiPluginRilevanti, myLoc, slug);
document.getElementById('sez-plugin-rilevanti').innerHTML = elenco; 
