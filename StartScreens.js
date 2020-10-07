"use strict"
var layStartScreens, pidTxtId, pidId, alertaTxt, resetStart, mudarStart, deleteBackupStart, downloadBackup;

function StartScreens() {
    this.Show = function() {
        layStartScreens.Show();

    }
    layStartScreens = app.CreateLayout("Linear", "FillXY,VCenter");
    layStartScreens.SetSize(1, 1);
    layStartScreens.SetBackColor("#012a36");
    layStartScreens.Hide();
    app.AddLayout(layStartScreens);
    var descStartScreens = StartIdioma.descricao;
    var descricaoStartScreens = app.CreateText(descStartScreens, 0.99, 0.4, "left,html,Multiline,bold");
    descricaoStartScreens.SetTextColor("white");
    layStartScreens.AddChild(descricaoStartScreens);


    mudarStart = app.CreateButton(StartIdioma.escolher, 0.6, 0.1, "Bold,Custom,html");
    mudarStart.SetOnTouch(EscolherStartScreens);

    resetStart = app.CreateButton(StartIdioma.resetar, 0.6, 0.1, "Bold,Custom,html");
    resetStart.SetOnTouch(ResetBackupStart);

    deleteBackupStart = app.CreateButton(StartIdioma.deleteBk, 0.6, 0.1, "Bold,Custom,html");
    deleteBackupStart.SetOnTouch(DeleteBackupStart);

    layStartScreens.AddChild(mudarStart);
    if (app.FolderExists("/sdcard/HeroesEvolvedBugs/.original")) {
        layStartScreens.AddChild(resetStart);
        layStartScreens.AddChild(deleteBackupStart);
    }
}

function DeleteBackupStart() {
    app.DeleteFolder("/sdcard/HeroesEvolvedBugs/.original/.kd3001.bytes");
    app.Alert(StartIdioma.delete);
    layStartScreens.RemoveChild(resetStart);
    layStartScreens.RemoveChild(deleteBackupStart);
}

function ResetBackupStart() {
    app.ShowProgress();
    console.log("Restaurando Backup de Vídeo Original ResetBackupStart(): StartScreenJS");
    app.CopyFile("/sdcard/HeroesEvolvedBugs/.original/.kd3001.bytes", data + "res/data/ui/video/login/kd3001.bytes");
    app.Wait(0.7);
    app.HideProgress();
    layStartScreens.RemoveChild(resetStart);
    layStartScreens.RemoveChild(deleteBackupStart);
    app.Alert(StartIdioma.bkFinish);
}

function EscolherStartScreens() {
    app.ChooseFile("internal", "video/*", AtualizarStartScreens);

}

function AtualizarStartScreens(item) {

    app.ShowProgress();
    if (app.FileExists("/sdcard/HeroesEvolvedBugs/.original/.kd3001.bytes") == false) {
        app.MakeFolder("/sdcard/HeroesEvolvedBugs/.original");
        app.CopyFile(data + "res/data/ui/video/login/kd3001.bytes", "/sdcard/HeroesEvolvedBugs/.original/.kd3001.bytes");
        app.Wait(0.7);
    }

    app.CopyFile(item, data + "res/data/ui/video/login/" + "kd3001.bytes");
    app.Wait(0.1);

    layStartScreens.AddChild(resetStart);
    layStartScreens.AddChild(deleteBackupStart);
    app.HideProgress();
    app.Alert(StartIdioma.finish);
}