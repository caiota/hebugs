"use strict"
var layRed,layRedScroll, layReddot, ResetPid, RedPidTxt, RedPid, alertaTxt,PetraSwitch,redDotSwitch,RewardSwitch,MatchSwitch,ChatSwitch,funcoesDisponiveis;

function RedDot() {
    this.Show = function() {
        layRed.Show();
if (app.LoadText("pid").length<=0) {
    alertaTxt.Show();
        ResetPid.Gone();
        RedPidTxt.Show();
        redDotSwitch.Gone();
        MatchSwitch.Gone();
        RewardSwitch.Gone();
        ChatSwitch.Gone();
        PetraSwitch.Gone();
    } else {
        alertaTxt.Gone();
        ResetPid.Show();
        RedPidTxt.Gone();
    }
    }
    layRedScroll=app.CreateScroller(1,1);
    layReddot = app.CreateLayout("Linear", "FillXY,VCenter");
    layRedScroll.AddChild(layReddot);
    layRed = app.CreateLayout("Linear", "FillXY,VCenter");
    layRed.SetSize(1, 1);
    layRed.SetBackColor("#012a36");
    layRed.Hide();
    layRed.AddChild(layRedScroll);
    app.AddLayout(layRed);
    var descRed = RedDotIdioma.descricao;
    var descricaoRed = app.CreateText(descRed, 0.99, 0.25, "html,Multiline,bold");
    descricaoRed.SetTextColor("white");
    layReddot.AddChild(descricaoRed);


    alertaTxt = app.CreateText(RedDotIdioma.id, 1, 0.12, "bold,multiline");
    RedPidTxt = app.CreateTextEdit(app.LoadText("pid"), 0.99, 0.06, "bold,singleline,left");
    RedPidTxt.SetBackColor("#260766");
    RedPidTxt.SetHint("000000000000000#510000");
    RedPid = app.CreateButton(RedDotIdioma.enable, 0.6, 0.1, "Bold,Custom,html");
    ResetPid = app.CreateButton(RedDotIdioma.reset, 0.6, 0.1, "Bold,Custom,html");
    ResetPid.SetOnTouch(ResetID);
    if (config.REDDOT == false) {
        RedPid.SetHtml(RedDotIdioma.enable);
    } else {
        RedPid.SetHtml(RedDotIdioma.disable);
    }
    RedPid.SetOnTouch(ChangeRedState);
        layReddot.AddChild(alertaTxt);
        layReddot.AddChild(ResetPid);
        layReddot.AddChild(RedPidTxt);
    
    layReddot.AddChild(RedPid);
    var sep = app.CreateImage(null, 1, 0.001, "fix", 2, 2);
    sep.SetMargins(0,0.05,0,0.05);
    sep.SetSize(-1, 5, "px");
    sep.SetColor("#cccccc");
layReddot.AddChild(sep);
funcoesDisponiveis= app.CreateText(RedDotIdioma.disponiveis,1,0.05);
layReddot.AddChild(funcoesDisponiveis);

redDotSwitch=app.CreateToggle(RedDotIdioma.ReddotSwitch,1,0.05,"custom");
redDotSwitch.switchId=1;
redDotSwitch.SetChecked(config.reddotswitch);
redDotSwitch.SetOnTouch(function(){setSwitch(redDotSwitch)});
if(config.reddotswitch==true){
 redDotSwitch.SetStyle('#689e03','#689e03',0,'cyan',0,0,0);
}else{
 redDotSwitch.SetStyle('#9e3203','#9e3203',0,'cyan',0,0,0);
}
MatchSwitch=app.CreateToggle(RedDotIdioma.matchSwitch,1,0.05,'custom');
MatchSwitch.switchId=2;
MatchSwitch.SetChecked(config.matchswitch);
MatchSwitch.SetOnTouch(function(){setSwitch(MatchSwitch)});
if(config.matchswitch==true){
 MatchSwitch.SetStyle('#689e03','#689e03',0,'cyan',0,0,0);
}else{
 MatchSwitch.SetStyle('#9e3203','#9e3203',0,'cyan',0,0,0);
}



ChatSwitch=app.CreateToggle(RedDotIdioma.chatSwitch,1,0.05,"custom");
ChatSwitch.switchId=3;
ChatSwitch.SetChecked(config.deletechat);
ChatSwitch.SetOnTouch(function(){setSwitch(ChatSwitch)});
if(config.deletechat==true){
 ChatSwitch.SetStyle('#689e03','#689e03',0,'cyan',0,0,0);
}else{
 ChatSwitch.SetStyle('#9e3203','#9e3203',0,'cyan',0,0,0);
}




RewardSwitch=app.CreateToggle(RedDotIdioma.Rewardswitch,1,0.05,"custom");
RewardSwitch.switchId=4;
RewardSwitch.SetChecked(config.RewardAlert);
RewardSwitch.SetOnTouch(function(){setSwitch(RewardSwitch)});
if(config.RewardAlert==true){
 RewardSwitch.SetStyle('#689e03','#689e03',0,'cyan',0,0,0);
}else{
 RewardSwitch.SetStyle('#9e3203','#9e3203',0,'cyan',0,0,0);
}




PetraSwitch=app.CreateToggle(RedDotIdioma.Petraswitch,1,0.05,"custom");
PetraSwitch.switchId=5;
PetraSwitch.SetChecked(config.PetraAlert);
PetraSwitch.SetOnTouch(function(){setSwitch(PetraSwitch)});
if(config.PetraAlert==true){
 PetraSwitch.SetStyle('#689e03','#689e03',0,'cyan',0,0,0);
}else{
 PetraSwitch.SetStyle('#9e3203','#9e3203',0,'cyan',0,0,0);
}

layReddot.AddChild(redDotSwitch);
layReddot.AddChild(MatchSwitch);
layReddot.AddChild(ChatSwitch);
layReddot.AddChild(RewardSwitch);
layReddot.AddChild(PetraSwitch);

}
function setSwitch(switcher){
if(switcher.switchId==1){
config.reddotswitch=redDotSwitch.GetChecked();  
if(redDotSwitch.GetChecked()==true){
 redDotSwitch.SetStyle('#689e03','#689e03',0,'cyan',0,0,0);
}else{
 redDotSwitch.SetStyle('#9e3203','#9e3203',0,'cyan',0,0,0);
}
}
if(switcher.switchId==2){
config.matchswitch=MatchSwitch.GetChecked();  
if(MatchSwitch.GetChecked()==true){
 MatchSwitch.SetStyle('#689e03','#689e03',0,'cyan',0,0,0);
}else{
 MatchSwitch.SetStyle('#9e3203','#9e3203',0,'cyan',0,0,0);
}
}
if(switcher.switchId==3){
config.deletechat=ChatSwitch.GetChecked();  
if(ChatSwitch.GetChecked()==true){
 ChatSwitch.SetStyle('#689e03','#689e03',0,'cyan',0,0,0);
}else{
 ChatSwitch.SetStyle('#9e3203','#9e3203',0,'cyan',0,0,0);
}
}
if(switcher.switchId==4){
config.RewardAlert=RewardSwitch.GetChecked();  
if(RewardSwitch.GetChecked()==true){
 RewardSwitch.SetStyle('#689e03','#689e03',0,'cyan',0,0,0);
}else{
 RewardSwitch.SetStyle('#9e3203','#9e3203',0,'cyan',0,0,0);
}
}
if(switcher.switchId==5){
config.PetraAlert=PetraSwitch.GetChecked();  
if(PetraSwitch.GetChecked()==true){
 PetraSwitch.SetStyle('#689e03','#689e03',0,'cyan',0,0,0);
}else{
 PetraSwitch.SetStyle('#9e3203','#9e3203',0,'cyan',0,0,0);
}
}



if(svc!=null){
svc.SendMessage("DoTasks");
}
        app.WriteFile("/sdcard/HeroesEvolvedBugs/.config.txt", JSON.stringify(config));
}


function ResetID() {
    app.SaveText('pid', "");
    RedPid.Gone();
    alertaTxt.Show();
    RedPidTxt.Show();
    RedPid.Show();
    ResetPid.Gone();
    config.REDDOT = false;
    RedPid.SetHtml(RedDotIdioma.enable);
        redDotSwitch.Gone();
        MatchSwitch.Gone();
        RewardSwitch.Gone();
        ChatSwitch.Gone();
        PetraSwitch.Gone();
}

function ChangeRedState() {
    if (RedPidTxt.GetText().length > 0) {
        if (app.LoadText("pid").length==0) {
            app.SaveText('pid', RedPidTxt.GetText());
            
            config.pid=RedPidTxt.GetText();
    app.WriteFile("/sdcard/HeroesEvolvedBugs/.config.txt", JSON.stringify(config));
    ResetPid.Show();
    alertaTxt.Gone();
    RedPidTxt.Gone();
        redDotSwitch.Show();
        MatchSwitch.Show();
        RewardSwitch.Show();
        ChatSwitch.Show();
        PetraSwitch.Show();
        }
        if (config.REDDOT == false) {
            config.REDDOT = true;
            RedPid.SetHtml(RedDotIdioma.disable);
            Service();
        } else {
            config.REDDOT = false;
            RedPid.SetHtml(RedDotIdioma.enable);
            killService();
        }
        console.log("SERVIÇO SWITCH ALTERADO PARA " + config.REDDOT);
        app.WriteFile("/sdcard/HeroesEvolvedBugs/.config.txt", JSON.stringify(config));

    }
}
function killService()
{
  var pid = null;
  var procName = app.GetPackageName() + ":droidscript_service";
  var apps = app.GetRunningServices();
  for(var a in apps)
  {
    if(apps[a].name == procName)
    {
      pid = apps[a].pid;
      app.KillApp(pid);
      console.log("Servico Parado pelo Usuário - "+pid);
      svc.Stop();
      break;
    }
  }
}