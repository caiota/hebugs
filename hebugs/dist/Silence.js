"use strict"
var laySilence, SilenceScroll, scrollLayout, userList, textList, count = -1;
var easyIt = { //var easyIt is required, dont rename like var EasyIT or something else
    debug: true, //enable / disable debug
    cachePath: app.GetInternalFolder() + "/Android/.cache/", // cache saving Path
}
var MyWebMedia;

function myCallback(x) {
    
        setTimeout(SetFotos,100);
    }
var nomes = [];
var imgs = [];

function SilenceList() {
    this.Show = function() {
        laySilence.Show();
        count = -1;
    }

    app.Script('EasyIt.js');
    app.Wait(0.3);
    MyWebMedia = new WebMedia(myCallback);
    laySilence = app.CreateLayout("Linear", "FillXY,VCenter");
    laySilence.SetSize(1, 1);
    laySilence.SetBackColor("#012a36");
    laySilence.Hide();
    SilenceScroll = app.CreateScroller(1, 1);
    scrollLayout = app.CreateLayout("Linear", "FillXY,VCenter");
    scrollLayout.SetPadding(0, 0.1, 0, 0);
    app.AddLayout(laySilence);



    var descSilence = SilenceIdioma.descricao;
    var descricaoSilence = app.CreateText(descSilence, 0.99, 0.2, "html,link,Multiline,bold");
    descricaoSilence.SetTextColor("white");
    scrollLayout.AddChild(descricaoSilence);

    //scrollLayout.AddChild(textList);

    if (app.FileExists("/sdcard/Android/data/com.rsg.heroesevolved/files/cachedata/silence.ini")) {

        userList = app.ReadFile("/sdcard/Android/data/com.rsg.heroesevolved/files/cachedata/silence.ini");
        userList = userList.match(/[^\r\n]+/g);
        //USER ID userList[count].split(',')[0].replace("\n","").split("=")[1]+
        do {
            if (userList[count] != undefined && userList[count].split(',')[0].replace("\n", "").split("=")[1] != undefined) {
                var layUser = app.CreateLayout("Linear", "Horizontal,Left");
                layUser.SetSize(1, 0.2);
                var image = app.CreateImage(null, 0.15, 0.1, "async,icon");
                imgs.push(image);
                layUser.AddChild(image);
                var textList = app.CreateTextEdit("", 1, -1, "left,multiline,readonly");
                textList.SetText(count + ": " + userList[count].split(',')[4] + "\nLv." + userList[count].split(',')[1]);
                layUser.AddChild(textList);

                nomes.push(userList[count].split(',')[4]);
                if (MyWebMedia.MediaExists(userList[count].split(',')[4]) != true) {
                    console.log("Imagem de Perfil de " + userList[count].split(',')[4] + " não existe, baixando...");
                    MyWebMedia.LoadMedia(userList[count].split(',')[3], userList[count].split(',')[4]);
                } else {
                    console.log("Imagem de Perfil de " + userList[count].split(',')[4] + " já existe, carregando...");
                    image.SetImage(MyWebMedia.GetMedia(userList[count].split(',')[4]));
                }
                scrollLayout.AddChild(layUser);
            }

            count++;
        } while (count < userList.length + 1);
        
        setTimeout(SetFotos,100);
    } else {
        app.Alert(SilenceIdioma.semLista);
    }



    SilenceScroll.AddChild(scrollLayout);
    laySilence.AddChild(SilenceScroll);
}
function SetFotos() {
    for(var ind in nomes){
     if(imgs[ind]!=undefined){
imgs[ind].SetImage("/sdcard/Android/.cache/" + nomes[ind] + '.png');
    }
    }
   
    if(laySilence.GetVisibility()=="Show"){
        setTimeout(SetFotos,1000);   
    }
}