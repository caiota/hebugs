"use strict"
var layUpdate, UpdateScroll, scrollLayout, resfile,startDowngrade,startUpdate,startInternalUpdate;

     config = JSON.parse(app.ReadFile("/sdcard/HeroesEvolvedBugs/.config.txt"));
function ForceUpdate() {
    this.Show = function() {
        layUpdate.Show();
    }

    layUpdate = app.CreateLayout("Linear", "FillXY,VCenter");
    layUpdate.SetSize(1, 1);
    layUpdate.SetBackColor("#012a36");
    layUpdate.Hide();
    UpdateScroll = app.CreateScroller(1, 1);
    scrollLayout = app.CreateLayout("Linear", "FillXY,VCenter");
    scrollLayout.SetPadding(0, 0.1, 0, 0);
    app.AddLayout(layUpdate);



    var descUpdate = UpdateIdioma.descricao;
    var descricaoUpdate = app.CreateText(descUpdate, 0.99, 0.2, "html,link,Multiline,bold");
    descricaoUpdate.SetTextColor("white");
    scrollLayout.AddChild(descricaoUpdate);
    
    
startDowngrade=app.CreateButton(UpdateIdioma.downgrade, 0.52, 0.1, "html,custom");
    startDowngrade.SetTextColor("white");
    startDowngrade.SetOnTouch(ForceUpdateAPI);
    scrollLayout.AddChild(startDowngrade);
    
    var descricaoInternalUpdate = app.CreateText(UpdateIdioma.forceInternal, 0.99, 0.2, "html,link,Multiline,bold");
    descricaoInternalUpdate.SetTextColor("white");
    scrollLayout.AddChild(descricaoInternalUpdate);
    
    
startInternalUpdate=app.CreateButton(UpdateIdioma.StartInternal, 0.52, 0.1, "html,custom");
    startInternalUpdate.SetTextColor("white");
    startInternalUpdate.SetOnTouch(ForceUpdateInternal);
    scrollLayout.AddChild(startInternalUpdate);
    
    
var sep = app.CreateImage(null, 1, 0.001, "fix", 2, 2);
    sep.SetMargins(0,0.05,0,0.05);
    sep.SetSize(-1, 5, "px");
    sep.SetColor("#cccccc");
scrollLayout.AddChild(sep);
var descDownloadHere=app.CreateText(UpdateIdioma.update, 0.99, 0.2, "html,link,Multiline,bold");
    descDownloadHere.SetTextColor("white");
    scrollLayout.AddChild(descDownloadHere);


startUpdate=app.CreateButton(UpdateIdioma.startUpdate, 0.52, 0.1, "html,custom");
    startUpdate.SetTextColor("white");
    startUpdate.SetOnTouch(ForceUpdateLocal);
    scrollLayout.AddChild(startUpdate);

    UpdateScroll.AddChild(scrollLayout);
    layUpdate.AddChild(UpdateScroll);
}

function ForceUpdateInternal(){
 app.DeleteFile(data+'/res/localfilesver.xml');
    app.Alert(UpdateIdioma.finish);
    startInternalUpdate.SetEnabled(false);
}

function ForceUpdateLocal(){
     ForceUpdateAPI(true);
     app.Wait(0.3);
  resfile=app.ReadFile(data+'/res/config.ini');
    resfile=resfile.split('\n');
    resfile.forEach(function(x,ind){
       if(x.indexOf('resver=')!=-1){
        x=x.split('=');  
        resfile=x[1];
        checkUpdate(resfile);
        return;
       }
    });
}
function checkUpdate(resversion){
 var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       VerifyJSON(false, xhttp.responseText);
       startUpdate.SetEnabled(false);
    }
};
console.log("Conectando ao servidor do HE APK_V "+config.he_versao+" RES_V "+resversion);
xhttp.open("GET", 'http://13.228.151.191:9001/api/v1/update/check?app_version='+config.he_versao+'&res_version='+resversion.toString()+'&channel=508&pre_release=false&region_id=10001', true);
xhttp.send();


    
}

function VerifyJSON(err,res){
    resfile=JSON.parse(res);
 StartManualUpdate(resfile.data.update_url,resfile.data.update_size,resfile.data.res_version);
}
function formatBytes(a,b=2){if(0===a)return"0 Bytes";const c=0>b?0:b,d=Math.floor(Math.log(a)/Math.log(1024));return parseFloat((a/Math.pow(1024,d)).toFixed(c))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][d]}
var dlder=null;
function StartManualUpdate(url,size,ver){
    dlder=app.CreateDownloader("NoCancel");
    dlder.SetOnError(function(e){app.Alert(UpdateIdioma.error,e)});
    dlder.SetOnComplete(ExtractUpdate);
    dlder.Download(url,'/sdcard/HeroesEvolvedBugs/','.HE_UPDATE.zip');
   app.Alert(UpdateIdioma.downloading.replace("(v)",ver).replace('(t)',formatBytes(size)),UpdateIdioma.title);
}
function ExtractUpdate(){
    app.ShowProgressBar(UpdateIdioma.unzip,5);
    app.ScanFile('/sdcard/HeroesEvolvedBugs/.HE_UPDATE.zip');
if(app.FileExists('/sdcard/HeroesEvolvedBugs/.HE_UPDATE.zip')==true){
app.UnzipFile('/sdcard/HeroesEvolvedBugs/.HE_UPDATE.zip',"/sdcard/Android/data/com.rsg.heroesevolved/files");
}
app.UpdateProgressBar(100);
app.DeleteFile('/sdcard/HeroesEvolvedBugs/.HE_UPDATE.zip');
app.Alert(UpdateIdioma.sucess);
app.HideProgressBar();
}
var origi=[],minus;
function ForceUpdateAPI(talisma){
    app.ShowProgress();
resfile=app.ReadFile(data+'/res/config.ini');
    resfile=resfile.split('\n');
    resfile.forEach(function(x,ind){
       if(x.indexOf('resver=')!=-1){
        x=x.split('=');
        origi=config.res_versao;
        x[1]=origi;
        x.join('=');
        x=x.toString().replace(',','=');
        resfile[ind]=x;
        resfile=resfile.join('\n');
        app.WriteFile(data+'/res/config.ini',resfile);
       }
    });
    app.HideProgress();
    if(talisma!=true){
    app.Alert(UpdateIdioma.finish);
    startDowngrade.SetEnabled(false);
    }
}
