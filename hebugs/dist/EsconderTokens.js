"use strict"
var layTokens, TokensScroll, scrollLayout, aplicarTokens, remover;

function EsconderTokens() {
    this.Show = function() {
        layTokens.Show();

    }
    layTokens = app.CreateLayout("Linear", "FillXY,VCenter");
    layTokens.SetSize(1, 1);
    layTokens.SetBackColor("#012a36");
    layTokens.Hide();
    TokensScroll = app.CreateScroller(1, 1);
    scrollLayout = app.CreateLayout("Linear", "FillXY,VCenter");
    app.AddLayout(layTokens);


    var descTokens = InfoTokens.descricao;
    var descricaoTokens = app.CreateText(descTokens, 0.99, 0.2, "html,link,Multiline,bold");
    descricaoTokens.SetTextColor("white");
    scrollLayout.AddChild(descricaoTokens);


    aplicarTokens = app.CreateButton(InfoTokens.aplicar, 0.52, 0.1, "html,custom,FontAwesome");
    scrollLayout.AddChild(aplicarTokens);
    aplicarTokens.SetOnTouch(HideTokens);

    remover = app.CreateButton(InfoTokens.remover, 0.52, 0.1, "html,custom,FontAwesome");
    scrollLayout.AddChild(remover);
    remover.SetOnTouch(ShowTokens);

    if (app.LoadBoolean("tokens") == true) {
        aplicarTokens.SetEnabled(false);
    } else {
        remover.SetEnabled(false);
    }

    TokensScroll.AddChild(scrollLayout);
    layTokens.AddChild(TokensScroll);
}
var file;

var TokensHidder;

function HideTokens() {
    file = app.ReadFile(data + "cachedata/setconfig.ini");
    TokensHidder = file.split("\n");
    TokensHidder.forEach(function(data, ind) {
        if (data.toLowerCase().indexOf("showgamecoin") != -1) {
            TokensHidder[ind] = "ShowGameCoin=1";
        }
    });

    TokensHidder = TokensHidder.toString().replace(/,/g, "\n");
    app.WriteFile(data + "cachedata/setconfig.ini", TokensHidder);
    app.SaveBoolean("tokens", true);
    app.Alert(InfoTokens.aplicado);
    aplicarTokens.SetEnabled(false);
    remover.SetEnabled(true);

}

function ShowTokens() {
    file = app.ReadFile(data + "cachedata/setconfig.ini");
    TokensHidder = file.split("\n");
    TokensHidder.forEach(function(data, ind) {
        if (data.toLowerCase().indexOf("showgamecoin") != -1) {
            TokensHidder[ind] = "ShowGameCoin=0";
        }
    });

    TokensHidder = TokensHidder.toString().replace(/,/g, "\n");
    app.WriteFile(data + "cachedata/setconfig.ini", TokensHidder);
    app.SaveBoolean("tokens", false);
    app.Alert(InfoTokens.removido);
    aplicarTokens.SetEnabled(true);
    remover.SetEnabled(false);
}