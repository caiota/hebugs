"use strict"
var layTextura, baixarOriginalMapa, baixarOriginalBotoes, AlertasTxt, instalarModMapa, instalarModBotoes, imgMapa, imgBotao;

function MudarTextura() {
    this.Show = function() {
        layTextura.Show();
    }
    var scrollerScroll = app.CreateScroller(1, 1);
    var scrollerLay = app.CreateLayout("Linear", "FillXY,VCenter");
    layTextura = app.CreateLayout("Linear", "FillXY,VCenter");
    scrollerLay.SetPadding(0, 0.05, 0, 0);
    layTextura.SetSize(1, 1);
    layTextura.SetBackColor("#012a36");
    layTextura.Hide();
    scrollerScroll.AddChild(scrollerLay);
    layTextura.AddChild(scrollerScroll);
    app.AddLayout(layTextura);
    var descTextura = MudartexturaIdioma.descricao;
    var descricaoTextura = app.CreateText(descTextura, 0.99, 0.2, "html,Multiline,bold");
    descricaoTextura.SetTextColor("white");
    scrollerLay.AddChild(descricaoTextura);

    AlertasTxt = app.CreateText(MudartexturaIdioma.aviso, 0.9, 0.22, "bold,multiline");
    AlertasTxt.SetTextColor("white");
    scrollerLay.AddChild(AlertasTxt);


    baixarOriginalMapa = app.CreateButton(MudartexturaIdioma.baixarMapaOriginal, 0.8, 0.1, "Bold,Custom,html");
    baixarOriginalBotoes = app.CreateButton(MudartexturaIdioma.baixarBotoesOriginal, 0.8, 0.1, "Bold,Custom,html");

    baixarOriginalMapa.SetOnTouch(baixarMapa);
    baixarOriginalBotoes.SetOnTouch(baixarBotoes);

    var txtAfter = app.CreateText(MudartexturaIdioma.after, 1, -1, 'bold,monospace');
    txtAfter.SetTextColor("white");
    txtAfter.SetMargins(0, 0.01, 0, 0.01);
    instalarModMapa = app.CreateButton(MudartexturaIdioma.instalarMapaOriginal, 0.8, 0.1, "Bold,Custom,html");
    instalarModBotoes = app.CreateButton(MudartexturaIdioma.instalarBotoesOriginal, 0.8, 0.1, "Bold,Custom,html");


    imgMapa = app.CreateImage(null, 1, 0.9);
    imgMapa.SetMargins(0, 0, 0, 0.1);
    imgBotao = app.CreateImage(null, 1, 0.9);

    if (app.FileExists("/sdcard/Download/mapflag.bytes.png")) {
        imgMapa.SetImage("/sdcard/Download/mapflag.bytes.png");
        imgMapa.SetOnTouchUp(abrirMapa);
    }
    if (app.FileExists("/sdcard/Download/fight_one.bytes.png")) {
        imgBotao.SetImage("/sdcard/Download/fight_one.bytes.png");
        imgBotao.SetOnTouchUp(abrirBotao);
    }

    scrollerLay.AddChild(baixarOriginalMapa);
    scrollerLay.AddChild(baixarOriginalBotoes);

    scrollerLay.AddChild(txtAfter);

    scrollerLay.AddChild(instalarModMapa);
    instalarModMapa.SetOnTouch(instalarMapa);

    scrollerLay.AddChild(instalarModBotoes);
    instalarModBotoes.SetOnTouch(instalarBotoes);

    scrollerLay.AddChild(imgMapa);
    scrollerLay.AddChild(imgBotao);



}

function instalarMapa() {
    var mapas = app.ListFolder("/sdcard/HeroesEvolvedBugs", "mapflag.bytes.png", 1);
    if (mapas.length == 0) {
        app.Alert(MudartexturaIdioma.semImagens);
    } else {
        var lista = app.CreateListDialog("", mapas);
        lista.SetOnTouch(InstalarArquivoMapa);
        lista.Show();
    }
}

function instalarBotoes() {
    var botoes = app.ListFolder("/sdcard/HeroesEvolvedBugs", "fight_one.bytes.png", 1);
    if (botoes.length == 0) {
        app.Alert(MudartexturaIdioma.semImagens);
    } else {
        var lista = app.CreateListDialog("", botoes);
        lista.SetOnTouch(InstalarArquivoBotao);
        lista.Show();
    }
}

function InstalarArquivoMapa(mapa) {
    app.CopyFile(sd + "/HeroesEvolvedBugs/" + mapa, data + "res/data/ui/imageset_e/battle/pvpzd/fightpvp/mapflag.bytes");
    app.Alert(MudartexturaIdioma.mapaInstalado);
}

function InstalarArquivoBotao(botao) {
    app.CopyFile(sd + "/HeroesEvolvedBugs/" + botao, data + "res/data/ui/imageset_e/battle/pvpzd/fightpvp/fight_one.bytes.png");
    app.Alert(MudartexturaIdioma.botoesInstalado);
}

function abrirMapa() {
    app.OpenFile("/sdcard/Download/mapflag.bytes.png", "image/png");
}


function abrirBotao() {
    app.OpenFile("/sdcard/Download/fight_one.bytes.png", "image/png");
}

function baixarMapa() {
    var dld = app.CreateDownloader();
    dld.SetOnComplete(function() {
        app.Alert(MudartexturaIdioma.downloadPng);
        imgMapa.SetImage("/sdcard/Download/mapflag.bytes.png");
        imgMapa.SetOnTouchUp(abrirMapa);
    });
    dld.Download("https://heroesevolved.tk/mapflag.bytes.png", "/sdcard/Download", "mapflag.bytes.png");
}

function baixarBotoes() {
    var dld = app.CreateDownloader();
    dld.SetOnComplete(function() {
        app.Alert(MudartexturaIdioma.downloadPng);
        imgBotao.SetImage("/sdcard/Download/fight_one.bytes.png");
        imgBotao.SetOnTouchUp(abrirBotao);

    });
    dld.Download("https://heroesevolved.tk/fight_one.bytes.png", "/sdcard/Download", "fight_one.bytes.png");

}