"use strict"
var layAbout, aboutScroll, scrollLayout;

function About() {
    this.Show = function() {
        layAbout.Show();

    }
    layAbout = app.CreateLayout("Linear", "FillXY,VCenter");
    layAbout.SetSize(1, 1);
    layAbout.SetBackColor("#012a36");
    layAbout.Hide();
    aboutScroll = app.CreateScroller(1, 1);
    scrollLayout = app.CreateLayout("Linear", "FillXY,VCenter");
    app.AddLayout(layAbout);
    var descAbout = InfoIdioma.descricao;

    var descricaoAbout = app.CreateText(descAbout, 0.99, 0.6, "html,link,Multiline,bold");
    descricaoAbout.SetTextColor("white");
    descricaoAbout.SetTextSize(20);
    descricaoAbout.SetMargins(0, 0, 0, 0.05);
    scrollLayout.AddChild(descricaoAbout);


    var whatsapp = app.CreateButton("[fa-whatsapp] Whatsapp", 0.52, 0.1, "custom,FontAwesome");
    whatsapp.SetStyle("#05ab4a", "#05ab4a", 2);
    whatsapp.SetHtml("<b>[fa-whatsapp] Whatsapp");
    whatsapp.SetTextSize(20);
    whatsapp.SetOnTouch(function() {
        app.OpenUrl("https://api.whatsapp.com/send?phone=5511995944768&text=Ol%C3%A1%2C%20Caiota")
    });
    scrollLayout.AddChild(whatsapp);

    var facebook = app.CreateButton("[fa-facebook] Facebook", 0.52, 0.1, "custom,FontAwesome");
    facebook.SetStyle("#0563ab", "#0563ab", 2);
    facebook.SetHtml("<b>[fa-facebook] Facebook");
    facebook.SetOnTouch(function() {
        app.OpenUrl("https://www.facebook.com/CaiotaGames")
    });
    facebook.SetTextSize(20);
    scrollLayout.AddChild(facebook);

    var twitter = app.CreateButton("[fa-twitter] Twitter", 0.52, 0.1, "custom,FontAwesome");
    twitter.SetStyle("#099eb5", "#099eb5", 2);
    twitter.SetHtml("<b>[fa-twitter] Twitter");
    twitter.SetOnTouch(function() {
        app.OpenUrl("https://twitter.com/CaiotaGames")
    });
    twitter.SetTextSize(20);
    scrollLayout.AddChild(twitter);

    var doe = app.CreateButton("[fa-heart] Doe no Picpay", 0.6, 0.1, "custom,FontAwesome");
    doe.SetStyle("#a80523", "#a80523", 2);
    doe.SetHtml(InfoIdioma.picpay);
    doe.SetOnTouch(function() {
        app.OpenUrl("https://picpay.me/caiota.br")
    });
    doe.SetTextSize(20);
    scrollLayout.AddChild(doe);


    aboutScroll.AddChild(scrollLayout);
    layAbout.AddChild(aboutScroll);
}