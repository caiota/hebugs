"use strict"
var laytema, pidTxtId, pidId, alertaTxt, reset, mudar,mudarOLD;

function MudarTema() {
    this.Show = function() {
        laytema.Show();

    }
    laytema = app.CreateLayout("Linear", "FillXY,VCenter");
    laytema.SetSize(1, 1);
    laytema.SetBackColor("#012a36");
    laytema.Hide();
    app.AddLayout(laytema);
    var desctema = MudartemaIdioma.descricao;
    var descricaotema = app.CreateText(desctema, 0.99, 0.25, "html,link,Multiline,bold");
    descricaotema.SetTextColor("white");
    laytema.AddChild(descricaotema);

    // SE O PID NÃO EXISTIR
    alertaTxt = app.CreateText(MudartemaIdioma.id, 1, 0.3, "bold,multiline");
    pidTxtId = app.CreateTextEdit(app.LoadText("pid"), 0.99, 0.06, "bold,singleline,left");
    pidTxtId.SetBackColor("#260766");
    pidTxtId.SetHint("000000000000000#5100000");
    pidId = app.CreateButton(MudartemaIdioma.salvar, 0.6, 0.1, "Bold,Custom,html");
    pidId.SetOnTouch(SalvarPid);

    //SE O PID EXISTIR
    mudar = app.CreateButton(MudartemaIdioma.mudarTema, 0.6, 0.1, "Bold,Custom,html");
    mudar.SetOnTouch(EscolherTema);
    
    mudarOLD = app.CreateButton(MudartemaIdioma.mudarTemaOld, 0.6, 0.1, "Bold,Custom,html");
    mudarOLD.SetOnTouch(EscolherTemaOLD);
    reset = app.CreateButton(MudartemaIdioma.resetar, 0.6, 0.1, "Bold,Custom,html");
    reset.SetOnTouch(ResetarId);
    if (!app.LoadText("pid")) {
        laytema.AddChild(alertaTxt);
        laytema.AddChild(pidTxtId);
        laytema.AddChild(pidId);
    } else {
        laytema.AddChild(mudar);
        laytema.AddChild(mudarOLD);
        laytema.AddChild(reset);
    }

}

function SalvarPid() {
    if (pidTxtId.GetText() != "") {
        app.SaveText("pid", pidTxtId.GetText());
        laytema.RemoveChild(alertaTxt);
        laytema.RemoveChild(pidTxtId);
        laytema.RemoveChild(pidId);
        laytema.AddChild(mudar);
        laytema.AddChild(mudarOLD);
        laytema.AddChild(reset);
        EscolherTema();
    }
}
var temassd=app.ListFolder(sd,"mp4");
var temasdld=app.ListFolder(sd+"/Download","mp4");
var temashebs=app.ListFolder(sd+"/HeroesEvolvedBugs","mp4");
var tudos=temassd.concat(temasdld);
tudos=tudos.concat(temashebs);
var lista;
function EscolherTemaOLD(){
 if(tudos.length>0){
 lista=app.CreateListDialog(MudartemaIdioma.select,tudos);
 lista.SetOnTouch(AtualizarTemaOLD);
 lista.Show();
 app.Alert(  MudartemaIdioma.oldAlerta); 
 }else{
 app.Alert(  MudartemaIdioma.nada); 
 }
}
function EscolherTema() {
    app.ChooseFile("", "video/*", AtualizarTema,sd);
    return;
}

function AtualizarTema(item) {
console.log("ATUALIZAR TEMA: "+item);
    var itemName = item.substr(item.lastIndexOf('/') + 1);
    app.ShowProgress("...");
    var bs = "[" + app.LoadText("pid") + "]";
    bs += "\n";
    bs += "myselfTheme=1";
    bs += "\n";
    bs += "\n";
    var ms = "[" + app.LoadText("pid") + "]";
    ms += "\n";
    ms += "heroId1=4001";
    ms += "\n";
    ms += "\n";
    app.WriteFile(data + "cachedata/cosmobile_skinlist/baseskin.ini", bs);
    app.WriteFile(data + "cachedata/cosmobile_skinlist/mainskin.ini", ms);

    app.MakeFolder(data + "cachedata/cosmobile_skinlist/video");
    app.MakeFolder(data + "cachedata");
    app.MakeFolder(data + "cachedata/cosmobile_skinlist");
    app.MakeFolder(data + "cachedata/cosmobile_skinlist/video/hero_01");
    app.CopyFile(item, data + "cachedata/cosmobile_skinlist/video/hero_01/hero_01.bytes");
    //app.CopyFile(sd+'/'+item, data + "cachedata/cosmobile_skinlist/video/hero_01/hero_01.bytes");
    app.RenameFile(data + "cachedata/cosmobile_skinlist/video/hero_01/" + itemName, data + "cachedata/cosmobile_skinlist/video/hero_01/hero_01.bytes");
    app.Alert(MudartemaIdioma.pronto);
    app.HideProgress();
}
function AtualizarTemaOLD(item){
  app.ShowProgress(item);
  var itemName=item;
    var bs = "[" + app.LoadText("pid") + "]";
    bs += "\n";
    bs += "myselfTheme=1";
    bs += "\n";
    bs += "\n";
    var ms = "[" + app.LoadText("pid") + "]";
    ms += "\n";
    ms += "heroId1=4001";
    ms += "\n";
    ms += "\n";
    app.WriteFile(data + "cachedata/cosmobile_skinlist/baseskin.ini", bs);
    app.WriteFile(data + "cachedata/cosmobile_skinlist/mainskin.ini", ms);

    app.MakeFolder(data + "cachedata/cosmobile_skinlist/video");
    app.MakeFolder(data + "cachedata");
    app.MakeFolder(data + "cachedata/cosmobile_skinlist");
    app.MakeFolder(data + "cachedata/cosmobile_skinlist/video/hero_01");
    app.CopyFile('/sdcard/'+item, data + "cachedata/cosmobile_skinlist/video/hero_01/hero_01.bytes");
    app.CopyFile('/sdcard/Download/'+item, data + "cachedata/cosmobile_skinlist/video/hero_01/hero_01.bytes");
    app.CopyFile('/sdcard/HeroesEvolvedBugs/'+item, data + "cachedata/cosmobile_skinlist/video/hero_01/hero_01.bytes");
    //app.CopyFile(sd+'/'+item, data + "cachedata/cosmobile_skinlist/video/hero_01/hero_01.bytes");
    app.RenameFile(data + "cachedata/cosmobile_skinlist/video/hero_01/" + itemName, data + "cachedata/cosmobile_skinlist/video/hero_01/hero_01.bytes");
    app.Alert(MudartemaIdioma.pronto);
    app.HideProgress();
}
function ResetarId() {
    app.SaveText("pid", undefined);
    laytema.AddChild(alertaTxt);
    laytema.AddChild(pidTxtId);
    laytema.AddChild(pidId);
    laytema.RemoveChild(mudar);
    laytema.RemoveChild(mudarOLD);
    laytema.RemoveChild(reset);
}