console.log("WARNING: Config_Loader Carregado");
var config=undefined;
if (app.FileExists("/sdcard/HeroesEvolvedBugs/.config.txt")!=false) {
     config = JSON.parse(app.ReadFile("/sdcard/HeroesEvolvedBugs/.config.txt"));
} else {
     config = {
        LOADTOUCH: true,
        REDDOT: false,
        PINGER:true,
        IDIOMA: "Portugues - Brasil"
    }
    app.Alert("Choose Language in Settings");
    app.WriteFile("/sdcard/HeroesEvolvedBugs/.config.txt", JSON.stringify(config));
}
if(config!=undefined){
if (config.REDDOT == undefined) {
    config.REDDOT = false;
    app.WriteFile("/sdcard/HeroesEvolvedBugs/.config.txt", JSON.stringify(config));
}
if (config.PINGER == undefined) {
    config.PINGER = true;
    app.WriteFile("/sdcard/HeroesEvolvedBugs/.config.txt", JSON.stringify(config));
}
config.pid=app.LoadText('pid');
    app.WriteFile("/sdcard/HeroesEvolvedBugs/.config.txt", JSON.stringify(config));
}

 listItems = mainIdioma.menu.inicio + "::[fa-home],";
    listItems += mainIdioma.menu.melhorarfps + "::[fa-plug],"
   //listItems += "Configurações do Jogo::[fa-plug],"
    listItems += mainIdioma.menu.forceupdate + "::[fa-plug],"
    listItems += mainIdioma.menu.reddot + "::[fa-plug],"
    listItems += mainIdioma.menu.escondertokens + "::[fa-plug],"
    listItems += mainIdioma.menu.salvarimagens + "::[fa-plug],"
    listItems += mainIdioma.menu.mudartema + "::[fa-plug],"
    listItems += mainIdioma.menu.converterid + "::[fa-plug],"
    listItems += mainIdioma.menu.mudartextura + "::[fa-plug],"
    listItems += mainIdioma.menu.mudarscreens + "::[fa-plug],"
    listItems += mainIdioma.menu.startscreen + "::[fa-plug],"
    listItems += mainIdioma.menu.silence + "::[fa-plug],"
    listItems += mainIdioma.menu.chat + "::[fa-plug],"


    outrosItems = mainIdioma.menu.informacoes + "::[fa-plug],";
    outrosItems += mainIdioma.menu.configuracao + "::[fa-wrench],",
    outrosItems += mainIdioma.menu.heroes + "::[fa-plug],"
    outrosItems += mainIdioma.menu.discord + "::[fa-info],",
    outrosItems += mainIdioma.menu.hebr + "::[fa-facebook],";
    outrosItems += mainIdioma.menu.sugestao + "::[fa-info],";
