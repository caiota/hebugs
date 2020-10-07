"use strict"
var layFps, aplicar, reverter, Fpsstatus;

function MelhorarFPS() {
    this.Show = function() {
        layFps.Show();
    }
    layFps = app.CreateLayout("Linear", "FillXY,VCenter");
    layFps.SetSize(1, 1);
    layFps.SetBackColor("#012a36");
    layFps.Hide();
    app.AddLayout(layFps);
    var descfps = MelhorarfpsIdioma.descricao;
    var descricaoFps = app.CreateText(descfps, 0.99, 0.2, "html,Multiline,bold");
    descricaoFps.SetTextColor("white");
    layFps.AddChild(descricaoFps);


    aplicar = app.CreateButton(MelhorarfpsIdioma.aplicar, 0.6, 0.1, "Bold,Custom,html");
    aplicar.SetOnTouch(aplicarBoostFps);

    reverter = app.CreateButton(MelhorarfpsIdioma.remover, 0.6, 0.1, "Bold,Custom,html");
    reverter.SetOnTouch(deleteBoost);
    layFps.AddChild(aplicar);
    layFps.AddChild(reverter);

    Fpsstatus = app.CreateText("Status:", 0.9, 0.1, "bold");
    Fpsstatus.SetTextColor("white");
    layFps.AddChild(Fpsstatus);

    if (app.LoadBoolean("fps") == true) {
        aplicar.SetEnabled(false);
        Fpsstatus.SetText(MelhorarfpsIdioma.aplicada);
    } else {
        reverter.SetEnabled(false);
        Fpsstatus.SetText(MelhorarfpsIdioma.naoaplicada);
    }

}

function deleteBoost() {
    file = app.ReadFile(data + "cachedata/setconfig.ini");
    setConfig = file.split("\n");
    setConfig.forEach(function(data, ind) {
        if (data.toLowerCase().indexOf("live") != -1) {
            setConfig[ind] = "Live=0";
        }
        if (data.toLowerCase().indexOf("autoreplaykit=0") != -1) {
            setConfig[ind] = "AutoReplaykit=1";
        }
        if (data.toLowerCase().indexOf("replaykit=0") != -1) {
            setConfig[ind] = "Replaykit=1";
        }
        if (data.toLowerCase().indexOf("soundstyleisread") != -1) {
            setConfig[ind] = "SoundStyleIsRead=1";
        }
        if (data.toLowerCase().indexOf("upknifeaid") != -1) {
            setConfig[ind] = "UpknifeAid=1";
        }
        if (data.toLowerCase().indexOf("cdrunmode") != -1) {
            setConfig[ind] = "CDRunMode=1";
        }
        if (data.toLowerCase().indexOf("chayanhelp") != -1) {
            setConfig[ind] = "ChaYanHelp=1";
        }
        if (data.toLowerCase().indexOf("ishighFfps") != -1) {
            setConfig[ind] = "IsHighFPS=1";
        }
        if (data.toLowerCase().indexOf("islowpowermode") != -1) {
            setConfig[ind] = "IsLowPowerMode=0";
        }
        if (data.toLowerCase().indexOf("particle") != -1) {
            setConfig[ind] = "Particle=1";
        }
        if (data.toLowerCase().indexOf("picture") != -1) {
            setConfig[ind] = "Picture=1";
        }
        if (data.toLowerCase().indexOf("subcribenattle") != -1) {
            setConfig[ind] = "SubcribeBattle=1";
        }
        if (data.toLowerCase().indexOf("subcribeday") != -1) {
            setConfig[ind] = "SubcribeDay=1";
        }
        if (data.toLowerCase().indexOf("subcribelifereturn") != -1) {
            setConfig[ind] = "SubcribeLifeReturn=1";
        }
        if (data.toLowerCase().indexOf("subcribemagicstone") != -1) {
            setConfig[ind] = "SubcribeMagicStone=1";
        }
        if (data.toLowerCase().indexOf("subcribeopen") != -1) {
            setConfig[ind] = "SubcribeOpen=1";
        }


    });

    setConfig = setConfig.toString().replace(/,/g, "\n");
    app.WriteFile(data + "cachedata/setconfig.ini", setConfig);
    app.SaveBoolean("fps", false);
    Fpsstatus.SetText(MelhorarfpsIdioma.naoaplicada);
    aplicar.SetEnabled(true);
    reverter.SetEnabled(false);

}
var file, setConfig;

function aplicarBoostFps() {
    file = app.ReadFile(data + "cachedata/setconfig.ini");
    setConfig = file.split("\n");
    setConfig.forEach(function(data, ind) {
        if (data.toLowerCase().indexOf("live") != -1) {
            setConfig[ind] = "Live=1";
        }
        if (data.toLowerCase().indexOf("autoreplaykit=0") != -1) {
            setConfig[ind] = "AutoReplaykit=0";
        }
        if (data.toLowerCase().indexOf("replaykit=0") != -1) {
            setConfig[ind] = "Replaykit=0";
        }
        if (data.toLowerCase().indexOf("soundstyleisread") != -1) {
            setConfig[ind] = "SoundStyleIsRead=0";
        }
        if (data.toLowerCase().indexOf("upknifeaid") != -1) {
            setConfig[ind] = "UpknifeAid=0";
        }
        if (data.toLowerCase().indexOf("cdrunmode") != -1) {
            setConfig[ind] = "CDRunMode=0";
        }
        if (data.toLowerCase().indexOf("chayanhelp") != -1) {
            setConfig[ind] = "ChaYanHelp=0";
        }
        if (data.toLowerCase().indexOf("ishighFfps") != -1) {
            setConfig[ind] = "IsHighFPS=0";
        }
        if (data.toLowerCase().indexOf("islowpowermode") != -1) {
            setConfig[ind] = "IsLowPowerMode=1";
        }
        if (data.toLowerCase().indexOf("particle") != -1) {
            setConfig[ind] = "Particle=0";
        }
        if (data.toLowerCase().indexOf("picture") != -1) {
            setConfig[ind] = "Picture=0";
        }
        if (data.toLowerCase().indexOf("subcribenattle") != -1) {
            setConfig[ind] = "SubcribeBattle=0";
        }
        if (data.toLowerCase().indexOf("subcribeday") != -1) {
            setConfig[ind] = "SubcribeDay=0";
        }
        if (data.toLowerCase().indexOf("subcribelifereturn") != -1) {
            setConfig[ind] = "SubcribeLifeReturn=0";
        }
        if (data.toLowerCase().indexOf("subcribemagicstone") != -1) {
            setConfig[ind] = "SubcribeMagicStone=0";
        }
        if (data.toLowerCase().indexOf("subcribeopen") != -1) {
            setConfig[ind] = "SubcribeOpen=0";
        }


    });

    setConfig = setConfig.toString().replace(/,/g, "\n");
    app.WriteFile(data + "cachedata/setconfig.ini", setConfig);
    app.SaveBoolean("fps", true);
    Fpsstatus.SetText(MelhorarfpsIdioma.aplicada);
    aplicar.SetEnabled(false);
    reverter.SetEnabled(true);

}