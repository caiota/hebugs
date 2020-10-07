"use strict"
var layScreens, pidTxtId, pidId, alertaTxt, resetScreens, mudarScreens, deleteBackupScreens, downloadBackup;

function MudarScreens() {
    this.Show = function() {
        layScreens.Show();

    }
    layScreens = app.CreateLayout("Linear", "FillXY,VCenter");
    layScreens.SetSize(1, 1);
    layScreens.SetBackColor("#012a36");
    layScreens.Hide();
    app.AddLayout(layScreens);
    var descScreens = ScreensIdioma.descricao;
    var descricaoScreens = app.CreateText(descScreens, 0.99, 0.4, "left,html,Multiline,bold");
    descricaoScreens.SetTextColor("white");
    layScreens.AddChild(descricaoScreens);


    mudarScreens = app.CreateButton(ScreensIdioma.imagem, 0.6, 0.1, "Bold,Custom,html");
    mudarScreens.SetOnTouch(EscolherScreens);

    resetScreens = app.CreateButton(ScreensIdioma.reset, 0.6, 0.1, "Bold,Custom,html");
    resetScreens.SetOnTouch(ResetBackupScreens);

    deleteBackupScreens = app.CreateButton(ScreensIdioma.deleteBk, 0.6, 0.1, "Bold,Custom,html");
    deleteBackupScreens.SetOnTouch(DeleteBackupScreens);

    downloadBackup = app.CreateButton(ScreensIdioma.download, 0.6, 0.1, "Bold,Custom,html");
    downloadBackup.SetOnTouch(DownloadBackupScreens);
    app.ScanFile("/sdcard/HeroesEvolvedBugs/Herois");
    app.ScanFile("/sdcard/");
    layScreens.AddChild(mudarScreens);
    layScreens.AddChild(downloadBackup);
    if (app.FileExists("/sdcard/HeroesEvolvedBugs/.original/.pveloading.bytes") == true) {
        layScreens.AddChild(resetScreens);
        layScreens.AddChild(deleteBackupScreens);
    }
}
var dldManager;

function DownloadBackupScreens() {
    app.ShowProgress();
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.h5loading.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.pveloading.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.loading_threecountry.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.loading_dragonvale.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.autochess_bg.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.defaultlandscape.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.xinnian_bg.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.xiari_bg.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.t_pipei_img_bg.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.rukou_bg.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.loading_royale.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.loading_bg.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.jiesuan_pipei_bg.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.heroselectbg.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.huigui_bg.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.t_chongwubg.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.decorateloding.bytes");

    app.MakeFolder("/sdcard/HeroesEvolvedBugs/.original");
    dldManager = app.CreateDownloader("");
    dldManager.SetOnComplete(Extract);
    dldManager.Download("https://heroesevolved.tk/LoadingBackup.zip", "/sdcard/HeroesEvolvedBugs/.original");
}

function Extract() {
    app.UnzipFile("/sdcard/HeroesEvolvedBugs/.original/LoadingBackup.zip", "/sdcard/HeroesEvolvedBugs/.original");
    app.HideProgress();
    app.Wait(0.5);
    ResetBackupScreens();
}

function DeleteBackupScreens() {
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.h5loading.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.pveloading.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.loading_threecountry.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.loading_dragonvale.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.autochess_bg.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.defaultlandscape.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.xinnian_bg.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.xiari_bg.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.t_pipei_img_bg.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.rukou_bg.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.loading_royale.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.loading_bg.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.jiesuan_pipei_bg.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.heroselectbg.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.huigui_bg.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.t_chongwubg.bytes");
    app.DeleteFile("/sdcard/HeroesEvolvedBugs/.original/.decorateloding.bytes");

    app.Alert(ScreensIdioma.delete);
    layScreens.RemoveChild(resetScreens);
    layScreens.RemoveChild(deleteBackupScreens);
}

function ResetBackupScreens() {
    app.ShowProgress();
    
    app.CopyFile("/sdcard/HeroesEvolvedBugs/.original/.pveloading.bytes", data + "res/data/ui/imageset_e/ignorecompress/pveloading.bytes");
    app.CopyFile("/sdcard/HeroesEvolvedBugs/.original/.h5loading.bytes", p + "h5loading.bytes");
    app.CopyFile("/sdcard/HeroesEvolvedBugs/.original/.loading_threecountry.bytes", p + "loading_threecountry.bytes");
    app.CopyFile("/sdcard/HeroesEvolvedBugs/.original/.loading_dragonvale.bytes", p + "loading_dragonvale.bytes");
    app.CopyFile("/sdcard/HeroesEvolvedBugs/.original/.autochess_bg.bytes", p + "autochess_bg.bytes");
    app.CopyFile("/sdcard/HeroesEvolvedBugs/.original/.defaultlandscape.bytes", p + "defaultlandscape.bytes");
    app.CopyFile("/sdcard/HeroesEvolvedBugs/.original/.xinnian_bg.bytes", p + "xinnian_bg.bytes");
    app.CopyFile("/sdcard/HeroesEvolvedBugs/.original/.xiari_bg.bytes", p + "xiari_bg.bytes");
    app.CopyFile("/sdcard/HeroesEvolvedBugs/.original/.t_pipei_img_bg.bytes", p + "t_pipei_img_bg.bytes");
    app.CopyFile("/sdcard/HeroesEvolvedBugs/.original/.rukou_bg.bytes", p + "rukou_bg.bytes");
    app.CopyFile("/sdcard/HeroesEvolvedBugs/.original/.loading_royale.bytes", p + "loading_royale.bytes");
    app.CopyFile("/sdcard/HeroesEvolvedBugs/.original/.loading_bg.bytes", p + "loading_bg.bytes");
    app.CopyFile("/sdcard/HeroesEvolvedBugs/.original/.jiesuan_pipei_bg.bytes", p + "jiesuan_pipei_bg.bytes");
    app.CopyFile("/sdcard/HeroesEvolvedBugs/.original/.heroselectbg.bytes", p + "heroselectbg.bytes");
    app.CopyFile("/sdcard/HeroesEvolvedBugs/.original/.huigui_bg.bytes", p + "huigui_bg.bytes");
    app.CopyFile("/sdcard/HeroesEvolvedBugs/.original/.t_chongwubg.bytes", p + "t_chongwubg.bytes");
    app.CopyFile("/sdcard/HeroesEvolvedBugs/.original/.decorateloding.bytes", p + "decorateloding.bytes");
    app.Wait(0.7);
    app.HideProgress();
    layScreens.RemoveChild(resetScreens);
    layScreens.RemoveChild(deleteBackupScreens);
    app.Alert(ScreensIdioma.bkFinish);
}

function EscolherScreens() {
    app.ChooseImage("", AtualizarScreens);

}
var p = data + "res/data/ui/imageset/goodimage/bigbackground/";

function AtualizarScreens(item) {
    if (app.FileExists(item) == true) {
        app.ShowProgress();
        if (app.FileExists("/sdcard/HeroesEvolvedBugs/.original/.pveloading.bytes") == false) {
            console.log("Fazendo backup");
            app.MakeFolder("/sdcard/HeroesEvolvedBugs/.original");
            app.CopyFile(data + "res/data/ui/imageset_e/ignorecompress/pveloading.bytes", "/sdcard/HeroesEvolvedBugs/.original/.pveloading.bytes");
             app.CopyFile( p + "h5loading.bytes","/sdcard/HeroesEvolvedBugs/.original/.h5loading.bytes");
            app.CopyFile(p + "loading_threecountry.bytes", "/sdcard/HeroesEvolvedBugs/.original/.loading_threecountry.bytes");
            app.CopyFile(p + "loading_dragonvale.bytes", "/sdcard/HeroesEvolvedBugs/.original/.loading_dragonvale.bytes");
            app.CopyFile(p + "autochess_bg.bytes", "/sdcard/HeroesEvolvedBugs/.original/.autochess_bg.bytes");
            app.CopyFile(p + "defaultlandscape.bytes", "/sdcard/HeroesEvolvedBugs/.original/.defaultlandscape.bytes");
            app.CopyFile(p + "xinnian_bg.bytes", "/sdcard/HeroesEvolvedBugs/.original/.xinnian_bg.bytes");
            app.CopyFile(p + "xiari_bg.bytes", "/sdcard/HeroesEvolvedBugs/.original/.xiari_bg.bytes");
            app.CopyFile(p + "t_pipei_img_bg.bytes", "/sdcard/HeroesEvolvedBugs/.original/.t_pipei_img_bg.bytes");
            app.CopyFile(p + "rukou_bg.bytes", "/sdcard/HeroesEvolvedBugs/.original/.rukou_bg.bytes");
            app.CopyFile(p + "loading_royale.bytes", "/sdcard/HeroesEvolvedBugs/.original/.loading_royale.bytes");
            app.CopyFile(p + "loading_bg.bytes", "/sdcard/HeroesEvolvedBugs/.original/.loading_bg.bytes");
            app.CopyFile(p + "jiesuan_pipei_bg.bytes", "/sdcard/HeroesEvolvedBugs/.original/.jiesuan_pipei_bg.bytes");
            app.CopyFile(p + "heroselectbg.bytes", "/sdcard/HeroesEvolvedBugs/.original/.heroselectbg.bytes");
            app.CopyFile(p + "huigui_bg.bytes", "/sdcard/HeroesEvolvedBugs/.original/.huigui_bg.bytes");
            app.CopyFile(p + "t_chongwubg.bytes", "/sdcard/HeroesEvolvedBugs/.original/.t_chongwubg.bytes");
            app.CopyFile(p + "decorateloding.bytes", "/sdcard/HeroesEvolvedBugs/.original/.decorateloding.bytes");
            app.Wait(0.7);
            layScreens.AddChild(resetScreens);
            layScreens.AddChild(deleteBackupScreens);
        }

        app.CopyFile(item, data + "res/data/ui/imageset_e/ignorecompress/" + "pveloading.bytes");


        app.CopyFile(item, p + "loading_threecountry.bytes");
        
        app.CopyFile(item, p + "h5loading.bytes");


        app.CopyFile(item, p + "loading_dragonvale.bytes");


        app.CopyFile(item, p + "autochess_bg.bytes");


        app.CopyFile(item, p + "defaultlandscape.bytes");


        app.CopyFile(item, p + "xinnian_bg.bytes");



        app.CopyFile(item, p + "xiari_bg.bytes");


        app.CopyFile(item, p + "t_pipei_img_bg.bytes");


        app.CopyFile(item, p + "rukou_bg.bytes");


        app.CopyFile(item, p + "loading_royale.bytes");


        app.CopyFile(item, p + "loading_bg.bytes");


        app.CopyFile(item, p + "jiesuan_pipei_bg.bytes");


        app.CopyFile(item, p + "heroselectbg.bytes");


        app.CopyFile(item, p + "huigui_bg.bytes");


        app.CopyFile(item, p + "t_chongwubg.bytes");


        app.CopyFile(item, p + "decorateloding.bytes");
        app.HideProgress();
        app.Alert(ScreensIdioma.finish);
    } else {
        app.Alert(ScreensIdioma.fail);
    }
}