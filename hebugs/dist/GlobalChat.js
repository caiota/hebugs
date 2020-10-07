"use strict"
var layChat, WebChat, MenuChat, reloadChatBt, yndgg;
var did = app.GetDeviceId();
var uid = app.LoadText("pid").replace("#", '%23');
if (uid.length < 31) {
    app.SaveText('pid', '');
     uid = config.pid;
}
if (uid.length < 31) {
    app.SaveText('pid', '');
     uid = "";
}
var serv = app.LoadText("server");

function ChatShow() {
    this.Show = function() {
        uid = app.LoadText("pid").replace("#", '%23');
if (uid.length < 31) {
    app.SaveText('pid', '');
     uid = config.pid;
}
if (uid.length < 31) {
    app.SaveText('pid', '');
     uid = "";
}
        if (uid == "") {
            yndgg = app.CreateYesNoDialog(ChatIdioma.noid);
            yndgg.SetButtonText(ChatIdioma.yes, ChatIdioma.no);
            yndgg.SetOnTouch(SetId);
            yndgg.Show()
        }

        layChat.Show();
        if (WebChat.GetUrl() != "https://heroesevolved.tk/global/chat/index.php?id=" + uid + "&did=" + did + "&s=" + serv) {
            WebChat.LoadUrl("https://heroesevolved.tk/global/chat/index.php?id=" + uid + "&did=" + did + "&s=" + serv);
        }
    }
    layChat = app.CreateLayout("Linear", "FillXY,VTop");
    layChat.SetSize(1, 1);
    layChat.SetBackColor("#012a36");
    layChat.Hide();
    app.AddLayout(layChat);
    MenuChat = app.CreateLayout("Linear", "Horizontal,Center");
    MenuChat.SetSize(1, 0.05);

    reloadChatBt = app.CreateButton(ChatIdioma.reload, 0.42, 0.05, "FontAwesome,html,Monospace,Bold");
    reloadChatBt.SetOnTouch(function() {
        WebChat.ClearHistory();
        err = false;
        WebChat.LoadUrl("https://heroesevolved.tk/global/chat/index.php?id=" + uid + "&did=" + did + "&s=" + serv + "&ts=" + new Date().getTime());
    })
    MenuChat.AddChild(reloadChatBt);
    layChat.AddChild(MenuChat);

    WebChat = app.CreateWebView(1, 0.95, "ScrollFade,IgnoreErrors,NoApp,AllowZoom,NoPause");
    WebChat.SetOnError(RemoveErr);
    WebChat.LoadHtml("<body style='background:black;color:white'>Aguardando :D</body");
    WebChat.SetOnProgress(GetIntegrity);
    layChat.AddChild(WebChat);
    setInterval(getKeyboard, 100);
}

function getKeyboard() {
    if (app.IsKeyboardShown() == true) {
        WebChat.SetSize(1, 0.5);
    } else {
        WebChat.SetSize(1, 0.95);
    }
}
var err = false;
var canLoad = true;

function GetIntegrity(p) {}

function inte() {
    if (canLoad = true && err == false && WebChat.GetUrl().indexOf("https://heroesevolved.tk/global/chat/index.php?id=" + uid + "&did=" + did + "&s=" + serv) == -1) {
        app.ShowPopup("aaa");
        WebChat.LoadUrl("https://heroesevolved.tk/global/chat/index.php?id=" + uid + "&did=" + did + "&s=" + serv + "&ts=" + new Date().getTime());
        setTimeout(function() {
            canLoad = true
        }, 4000);
        canLoad = false;
    }
}

function RemoveErr(e) {
    app.Alert(e);
    err = true;
    WebChat.LoadHtml(app.ReadFile("WebErr.html"));
}


function SetId(d) {
    if (d == "Yes") {
        app.ShowTextDialog(ChatIdioma.insiraID, "", cbkee);
    } else {
        err = false;
        uid = "Anonimo";
        WebChat.LoadUrl("https://heroesevolved.tk/global/chat/index.php?id=" + uid + "&did=" + did + "&s=" + serv + "&ts=" + new Date().getTime());

    }
}

function cbkee(xx) {
    app.SaveText('pid', xx);
    uid = app.LoadText("pid").replace("#", '%23');
    WebChat.LoadUrl("https://heroesevolved.tk/global/chat/index.php?id=" + uid + "&did=" + did + "&s=" + serv);
}