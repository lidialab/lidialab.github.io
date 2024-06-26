// ============================================================
// funzioni di apertura
// ============================================================

function apriSottoProgettiCore() {
   void( window.open( 'https://translate.wordpress.org/projects/wp/dev/it/default/') );
   void( window.open( 'https://translate.wordpress.org/projects/wp/dev/admin/it/default/') );
   void( window.open( 'https://translate.wordpress.org/projects/wp/dev/admin/network/it/default/') );
   void( window.open( 'https://translate.wordpress.org/projects/wp/dev/cc/it/default/') );
}

function apriTemiTwenty() {
   void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-themes/twentytwentyfour') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-themes/twentytwentythree') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-themes/twentytwentytwo') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-themes/twentytwentyone') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-themes/twentytwenty') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-themes/twentynineteen') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-themes/twentyseventeen') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-themes/twentysixteen') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-themes/twentyfifteen') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-themes/twentyfourteen') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-themes/twentythirteen') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-themes/twentytwelve') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-themes/twentyeleven') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-themes/twentyten') );
}

function apriPluginPrincipali() {
   void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-plugins/gutenberg') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-plugins/classic-editor') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-plugins/health-check') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-plugins/wordpress-importer') );
   //void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-plugins/preferred-languages') );
   //void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-plugins/buddypress') );
   //void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-plugins/bbpress') );
   //void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-plugins/akismet') );
   //void( window.open( 'https://translate.wordpress.org/locale/it/default/wp-plugins/jetpack') );
}

function apriProgettiMeta() {
   void( window.open( 'https://translate.wordpress.org/locale/it/default/meta/wordpress-org/') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/meta/plugins-v3/') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/meta/themes/') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/meta/rosetta/') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/meta/p2-breathe/') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/meta/o2') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/meta/forums/') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/meta/get-involved/') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/meta/pattern-directory/') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/meta/wordcamp/') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/meta/openverse/') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/meta/browsehappy/') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/meta/learn-wordpress/') );
}


function apriProgettiPrincipali() {
   // WP Core
   void( window.open( 'https://translate.wordpress.org/locale/it/default/wp/dev') );
   apriSottoProgettiCore();

   // Meta
   void( window.open( 'https://translate.wordpress.org/locale/it/default/apps/') );
   apriProgettiMeta();

   // APP
   void( window.open( 'https://translate.wordpress.org/locale/it/default/apps/') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/apps/ios/') );
   void( window.open( 'https://translate.wordpress.org/locale/it/default/apps/android/') );

   // Plugin WP
   apriPluginPrincipali();

   // Temi WP
   apriTemiTwenty();

   // Pattern
   void( window.open( 'https://translate.wordpress.org/locale/it/default/patterns/core/') );
   void( window.open( 'https://translate.wordpress.org/projects/patterns/core/it/default/') );

   // Temi WP vecchi
   //void( window.open( 'https://wordpress.org/themes/classic/') );
   //void( window.open( 'https://wordpress.org/themes/default') );
}


// ============================================================
// variabili e costanti
// ============================================================
const myLocale = "it_IT";
const myLoc = "it";

//nomiSottoProjCore = ["", "cc", "admin","admin/network"]

nomiTemiWPorg = ["twentytwentyfour", "twentytwentythree","twentytwentytwo","twentytwentyone","twentytwenty",
"twentynineteen","twentyseventeen","twentysixteen","twentyfifteen","twentyfourteen","twentythirteen","twentytwelve","twentyeleven","twentyten"];

nomiPluginWPorg = ["gutenberg","classic-editor","health-check","wordpress-importer"]

nomiPluginRilevanti = ["bbpress","buddypress", "preferred-languages"]

nomiMeta = ["wordpress-org","plugins-v3","themes","rosetta","p2-breathe","o2","forums","get-involved","pattern-directory","wordcamp","openverse","browsehappy","learn-wordpress"];

var elenco = "";
var insiemeSpunte = "";

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
// funzione
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
// funzione
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

// ============================================================
// funzione
// ============================================================
function creaFieldset(etichetta, nomi) {

    var  stringa = "";

    stringa = `<legend>${etichetta}</legend>`;
    for ( var ix = 0 ; ix < nomi.length; ix++ ) 
        { 
            stringa = stringa + `<div><label><input type=checkbox name="${nomi[ix]}" value="${nomi[ix]}">${nomi[ix]}</label></div>`;
    }

    return stringa;
}


// ============================================================
// script
// ============================================================

elenco = elencoProgettiCore();
document.getElementById('sez-core').innerHTML = elenco; 

elenco = elencoProgetti("meta", nomiMeta, myLoc);
document.getElementById('sez-meta').innerHTML = elenco; 

elenco = elencoProgetti("wp-themes", nomiTemiWPorg, myLoc);
document.getElementById('sez-temi-WP').innerHTML = elenco; 

elenco = elencoProgetti("wp-plugins", nomiPluginWPorg, myLoc);
document.getElementById('sez-plugin-WP').innerHTML = elenco; 

elenco = elencoProgetti("wp-plugins", nomiPluginRilevanti, myLoc);
document.getElementById('sez-plugin-rilevanti').innerHTML = elenco; 

insiemeSpunte = creaFieldset("Plugin", nomiPluginWPorg);
document.getElementById('fieldset-plugin-wp-org').innerHTML = insiemeSpunte; 

insiemeSpunte = creaFieldset("Meta", nomiMeta);
document.getElementById('fieldset-meta').innerHTML = insiemeSpunte; 

insiemeSpunte = creaFieldset("Temi", nomiTemiWPorg);
document.getElementById('fieldset-temi').innerHTML = insiemeSpunte; 