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