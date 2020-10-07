"use strict"
var layID, pidTxt, pid, alertaTxt, textoCopiavel;

function ConverterID() {
    this.Show = function() {
        layID.Show();

    }
    layID = app.CreateLayout("Linear", "FillXY,VCenter");
    layID.SetSize(1, 1);
    layID.SetBackColor("#012a36");
    layID.Hide();
    app.AddLayout(layID);
    var descID = ConverterIdioma.descricao;
    var descricaoID = app.CreateText(descID, 0.99, 0.25, "html,Multiline,bold");
    descricaoID.SetTextColor("white");
    layID.AddChild(descricaoID);

    textoCopiavel = app.CreateTextEdit("#", 0.99, 0.4, "ReadOnly,html,multiline,left");

    alertaTxt = app.CreateText(ConverterIdioma.id, 1, 0.3, "bold,multiline");
    pidTxt = app.CreateTextEdit(app.LoadText("pid"), 0.99, 0.06, "bold,singleline,left");
    pidTxt.SetBackColor("#260766");
    pidTxt.SetHint("000000000000000#510000");
    pid = app.CreateButton(ConverterIdioma.start, 0.6, 0.1, "Bold,Custom,html");
    pid.SetOnTouch(Converter);

    layID.AddChild(alertaTxt);
    layID.AddChild(pidTxt);
    layID.AddChild(pid);


}
var parametros, id;
function Converter() {
    id = pidTxt.GetText().replace("#", "%23");

    app.HttpRequest("GET", "https://mstore.r2games.com/?ac=getRole&gameid=371&os=android&server=121&roleid=" + id, "#", null, Resultado);
}
var result = {},
    criadaBtn, loginBtn;
var res;

function Resultado(err, res) {
    if (err == false) {
        res = JSON.parse(res);
        if (res.msg == "fail") {
            app.Alert(ConverterIdioma.errorId);
        } else {
            loginBtn = new Date(res.data[0].lastlogintime * 1000);
            criadaBtn = new Date(res.data[0].createtime * 1000);
            var ano = loginBtn.getFullYear();
            var mes = months[loginBtn.getMonth()];
            var dia = loginBtn.getDate();
            var hours = loginBtn.getHours();
            var minutes = "0" + loginBtn.getMinutes();
            var seconds = "0" + loginBtn.getSeconds();

            var anoCriada = criadaBtn.getFullYear();
            var mesCriada = months[criadaBtn.getMonth()];
            var diaCriada = criadaBtn.getDate();
            var hoursCriada = criadaBtn.getHours();
            var minutesCriada = "0" + criadaBtn.getMinutes();
            var secondsCriada = "0" + criadaBtn.getSeconds();

            var tempoCriada = diaCriada + "/" + mesCriada + "/" + anoCriada + "  " + hoursCriada + ':' + minutesCriada.substr(-2) + ':' + secondsCriada.substr(-2);
            var tempoLogin = dia + "/" + mes + "/" + ano + "  " + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
            result.criada = ConverterIdioma.criada + tempoCriada;
            result.login = ConverterIdioma.login + tempoLogin;
            result.nick = "NickName " + res.data[0].role;
            result.level = ConverterIdioma.nivel + res.data[0].level;
            textoCopiavel.SetHtml(result.criada + "<br><br>" + result.login + "<br><br>" + result.nick + "<br><br>" + result.level);
            layID.AddChild(textoCopiavel);
            layID.RemoveChild(alertaTxt);
            layID.RemoveChild(pidTxt);
            layID.RemoveChild(pid)
        }
    } else {
        app.Alert(ConverterIdioma.error);
    }
}
